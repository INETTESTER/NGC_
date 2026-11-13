import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api20() {
  const url = `${domain}/api/backend/api/detail_group_seller_shop`;

  const payload = JSON.stringify({
    group_id: 47,
    province: '',
    category_id: ''
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