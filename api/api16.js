import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api16() {
  const url = `${domain}/api/backend_2/live/generate_live_shop`;

  const payload = JSON.stringify({
    link: '5'
  });

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Origin': 'https://devinet-eprocurement.one.th',
    'Priority': 'u=1, i',
    'Referer': 'https://devinet-eprocurement.one.th/live?name=Host52',
    'Cookie': `${cookie}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}