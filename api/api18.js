import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api18() {
  const url = `${domain}/api/live/get_all_room_v2`;

  const payload = JSON.stringify({
    limit: 20,
    page: 1
  });

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Origin': domain,
    'Priority': 'u=1, i',
    'Referer': `${domain}/`,
    'X-XSRF-TOKEN': __ENV.XSRF_TOKEN || '',
    'Cookie': `${cookie}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}