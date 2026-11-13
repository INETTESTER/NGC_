import http from 'k6/http';
import { domain, token } from './env.js';

export function api12() {
  const url = `${domain}/api/live/get_pin_product`;

  const payload = JSON.stringify({
    shopId: 5
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}