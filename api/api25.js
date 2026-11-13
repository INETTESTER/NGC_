
import http from 'k6/http';
import { domain, token } from './env.js';

export function api25() {
  const url = `${domain}/api/backend_2/coupon/list`;

  const payload = JSON.stringify({
    role_user: 'ext_buyer',
    company_id: -1,
    customer_id: -1,
    type: 'all_shop',
    shop_id: -1,
    orderBy: 'uncollected_first',
    is_collected: 'all',
    limit: 4,
    page: 1,
  });

  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.6',
    'Content-Type': 'application/json',
    Referer: `${domain}/DetailServiceCoupon`,
    Origin: domain,
    Cookie: '',
  };

  const response = http.post(url, payload, {
    headers: headers,
  });

  //console.log(response.body);

  return response;
}
