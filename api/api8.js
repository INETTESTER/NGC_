
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api8() {
  const url = `${domain}/api/backend/api/ckeck_stock_before_create_order`;

  const payload = JSON.stringify({
    role_user: 'ext_buyer'
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.6',
    'Authorization': token,
    'content-type': 'application/json',
    'origin': domain,
    'referer': `${domain}/checkoutExt`,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
