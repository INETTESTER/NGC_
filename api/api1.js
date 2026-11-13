
import http from 'k6/http';
import { domain, token, cookie, xsrf_token } from './env.js';

export function api1() {
  const url = `${domain}/api/backend_2/product_card/landingpage`;

  const payload = JSON.stringify({
    company_id: -1,
    status_product: 'discount',
    role_user: 'ext_buyer'
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'th',
    'Authorization': token,
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': domain,
    'pragma': 'no-cache',
    'referer': `${domain}/`,
    'x-xsrf-token': xsrf_token,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
