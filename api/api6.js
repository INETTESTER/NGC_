
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api6() {
  const url = `${domain}/api/backend/api/detail_cart_b2b_v2`;

  const payload = JSON.stringify({
    product_to_update: [],
    role_user: 'ext_buyer',
    seller_shop_id: 5,
    product_to_calculate: [
      {
        product_id: 1138817,
        product_attribute_id: '-1',
        attribute_priority_1: '',
        attribute_priority_2: '',
        quantity: 4,
        revenue_default: 250,
        revenue_vat: 1000,
        vat_revenue: 0,
        an_id: '',
        seller_shop_id: 5,
        have_attribute: 'no',
        product_shipping_service_type: 'bulk'
      }
    ],
    pay_type: 'general',
    company_id: -1,
    company_position: -1,
    com_perm_id: -1,
    point: [],
    coupon: [],
    seller_shop_not_use_auto_coupon: '',
    form: 'web'
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.6',
    'Authorization': token,
    'content-type': 'application/json',
    'origin': domain,
    'referer': `${domain}/shoppingcart`,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
