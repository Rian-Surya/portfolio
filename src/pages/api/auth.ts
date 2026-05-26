// Decap CMS GitHub OAuth handler
// Simpan di src/pages/api/auth.ts

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    const clientId = import.meta.env.GITHUB_CLIENT_ID;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
    return new Response(null, { status: 302, headers: { Location: githubAuthUrl } });
  }

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

  const token = tokenData.access_token;
  const message = JSON.stringify({ token, provider: 'github' });

  const html = `<!DOCTYPE html>
<html>
<head><title>Authenticating...</title></head>
<body>
<script>
  (function() {
    function send() {
      if (window.opener) {
        window.opener.postMessage(
          'authorization:github:success:' + '${message}',
          window.location.origin
        );
        setTimeout(function() { window.close(); }, 500);
      } else {
        setTimeout(send, 100);
      }
    }
    send();
  })();
</script>
<p>Authenticating... please wait.</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
