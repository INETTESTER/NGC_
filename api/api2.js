
import http from 'k6/http';
import { domain, token, cookie, xsrf_token } from './env.js';

export function api2() {
  const url = `${domain}/api/backend_2/search/product/filter`;

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: '-1',
    category: -1,
    seller_shop_id: -1,
    orderBy: -1,
    status_product: 'recommend',
    limit: 30,
    page: 1
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
