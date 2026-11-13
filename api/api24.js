
import http from 'k6/http';
import { domain, token } from './env.js';

export function api24() {
  const url = `${domain}/api/backend_2/platform/coupon/readyV2_web`;

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: -1,
    customer_id: -1,
    total_price_general: 0,
    net_price: 3924.3,
    price_inc_vat: 4199,
    product: [
      {
        product_id: 1707847,
        product_attribute_id: '-1',
        attribute_priority_1: '',
        attribute_priority_2: '',
        quantity: '1',
        revenue_default: 3924.3,
        revenue_vat: 4199,
        vat_revenue: 274.7,
        an_id: '',
        seller_shop_id: 5,
        have_attribute: 'no',
        product_shipping_service_type: 'frozen',
      },
    ],
  });

  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.6',
    'Content-Type': 'application/json',
    Authorization: `${token}`,
    Origin: domain,
    Referer: `${domain}/shoppingcart`,
    Cookie: 'laravel_session=DNLpKeO90S0q2ybZGoplsvhzywIXGF8suk8mlKBq; cf_clearance=CrdghBognThslI433ieXoC1vvYpDkPopZ9fLIveCXick_uwxiJd9bB58l7Iq01NsoQgHW0WuBWh8W1083_6HpPf-T2ZHS3o2B1qJXvtJUD995iKj1x3p6KT63_FiyIJdGfnr_yaO-vjUPXvWETXjnFQSQtIQwut-pYae4eagD7Z-5Lxn7_8VB7YPI9-ARuAK2MU8yZAunH6_qp78Xm7L6DS-2hk1GDGB3pbgxBrdkE9p-GaEZ9qjMyG9ze0R8G33yUWSYgrCnwpQ-2C7zN06hC6Hm6m53KQZW2EN8zsQop5zJyx7ng; laravel_session=bPDQl49rLlkMHxWRhtHsaM7DQbY4TlIbu0y6VdeB',
  };

  const response = http.post(url, payload, {
    headers: headers,
  });

  //console.log(response.body);

  return response;
}
