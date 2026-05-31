// Vercel Serverless Function: /api/stats?addr=bc1q...
// Acts as a CORS-free proxy to public-pool.io

export default async function handler(req, res) {
  // CORS headers (allow browser fetches from anywhere)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { addr } = req.query;

  if (!addr || typeof addr !== 'string') {
    return res.status(400).json({ error: 'Missing addr parameter' });
  }

  // Basic BTC address validation
  if (!/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{20,}$/.test(addr)) {
    return res.status(400).json({ error: 'Invalid BTC address' });
  }

  // Try multiple Public-Pool endpoints in order
  const endpoints = [
    `https://public-pool.io:40557/api/client/${addr}`,
    `https://web.public-pool.io/api/client/${addr}`
  ];

  let lastError = null;

  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });

      clearTimeout(timeout);

      if (!response.ok) {
        lastError = `HTTP ${response.status} from ${url}`;
        continue;
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (err) {
      lastError = err.message;
      continue;
    }
  }

  return res.status(502).json({
    error: 'All upstream endpoints failed',
    detail: lastError
  });
}
