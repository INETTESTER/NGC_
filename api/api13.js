import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api13() {
  const url = `${domain}/api/live/get_product_cart_live_v2`;

  const payload = JSON.stringify({
    shopId: 5,
    limit: 10,
    page: 1,
    search: ''
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