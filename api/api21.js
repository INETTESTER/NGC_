import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api21() {
  const url = `${domain}/api/backend_2/search/product/filter`;

  const payload = JSON.stringify({
    orderBy: '',
    category: -1,
    status_product: -1,
    filter_group_seller_shop: 47,
    content_id: 170,
    limit: 6,
    page: 1,
    role_user: 'ext_buyer',
    company_id: '',
    seller_shop_id: -1
  });

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Origin': domain,
    'Priority': 'u=1, i',
    'Referer': `${domain}/GroupShoppage/ไทยช่วยไทย-47`,
    'X-XSRF-TOKEN': __ENV.XSRF_TOKEN || '',
    'Cookie': `${cookie}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}