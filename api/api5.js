
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api5() {
  const url = `${domain}/api/backend/api/add_to_cart_b2b`;

  const payload = JSON.stringify({
    ref_code: '',
    an_id: '',
    seller_shop_id: 5,
    role_user: 'ext_buyer',
    product_id: 1138817,
    pay_type: '',
    order_type: 'newser',
    attribute_option_1: '',
    attribute_option_2: '',
    quantity: '1',
    company_id: null,
    company_position: -1,
    com_perm_id: -1,
    deal_id: ''
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
