// Decap CMS GitHub OAuth handler
// Simpan di src/pages/api/auth.ts

export const prerender = false;

export async function GET({ request, redirect }: { request: Request, redirect: Function }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    // Step 1: Redirect ke GitHub OAuth
    const clientId = import.meta.env.GITHUB_CLIENT_ID;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
    return redirect(githubAuthUrl);
  }

  // Step 2: Exchange code for token
  const clientId = import.meta.env.GITHUB_CLIENT_ID;
  const clientSecret = import.meta.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const tokenData = await tokenRes.json() as { access_token?: string; error?: string };

  if (tokenData.error || !tokenData.access_token) {
    return new Response('OAuth error: ' + (tokenData.error || 'no token'), { status: 400 });
  }

  // Return token to Decap CMS
  const script = `
    <script>
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: 'github' })}',
        '*'
      );
      window.close();
    </script>
  `;

  return new Response(script, {
    headers: { 'Content-Type': 'text/html' },
  });
}
