import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api10() {
  const url = `${domain}/api/live/get_heart_count`;

  const payload = JSON.stringify({
    shopId: 5
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Cookie': `${cookie}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}