
import http from 'k6/http';
import { domain, token, cookie, xsrf_token } from './env.js';

export function api3() {
  const url = `${domain}/api/backend_2/search/product/v2/search_bar`;

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: '-1',
    seller_shop_id: '-1',
    keyword: 'ทดสอบการสร้างสินค้า Attribute',
    order_by_price: '',
    category: '',
    status_product: '',
    limit: 48,
    page: 2
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'th',
    'Authorization': token,
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': domain,
    'pragma': 'no-cache',
    'referer': `${domain}/search/${encodeURIComponent('ทดสอบการสร้างสินค้า Attribute')}`,
    'x-xsrf-token': xsrf_token,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
