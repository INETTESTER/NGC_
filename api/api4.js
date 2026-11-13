
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api4() {
  const url = `${domain}/api/backend/api/product/get_product_detail`;

  const payload = JSON.stringify({
    product_id: 1138817,
    role_user: 'ext_buyer',
    company_id: '',
    quantity: 0
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.6',
    'Authorization': token,
    'content-type': 'application/json',
    'origin': domain,
    'referer': `${domain}/DetailProduct/${encodeURIComponent('เทสสินค้าไม่มี vat-1138817')}`,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
