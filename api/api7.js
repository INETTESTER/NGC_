
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api7() {
  const url = `${domain}/api/backend/api/get_cart_b2b_v2`;

  const payload = JSON.stringify({
    form: 'web',
    seller_shop_id: 5,
    role_user: 'ext_buyer',
    coupon: [],
    point: [],
    pay_type: 'general',
    product_to_calculate: [
      {
        product_id: 1138817,
        product_attribute_id: '-1',
        attribute_priority_1: '',
        attribute_priority_2: '',
        quantity: 4,
        revenue_default: 250,
        revenue_vat: 1000,
        vat_revenue: 65.42,
        an_id: '',
        seller_shop_id: 5,
        have_attribute: 'no',
        product_shipping_service_type: 'bulk',
        price: 1000,
        item_code_pr_buyer: null
      }
    ],
    type_shipping: '',
    address: [
      {
        id: 2,
        email: null,
        first_name: 'รังสิมันตุ์',
        last_name: 'คงจันทร์',
        detail: 'บ้านเลขที่ 57/218 ห้องเลขที่ 57 ชั้นที่ 2 อาคาร 57 หมู่บ้าน การเคหะคลองแห บ้านเอื้ออาทร หมู่ที่ - ตรอก/ซอย - แยก - ถนน คลองแห ',
        house_no: '57/218',
        room_no: '57',
        floor: '2',
        building_name: '57',
        moo_ban: 'การเคหะคลองแห บ้านเอื้ออาทร',
        moo_no: '-',
        soi: '-',
        yaek: '-',
        street: 'คลองแห',
        sub_district: 'คลองแห',
        district: 'หาดใหญ่',
        province: 'สงขลา',
        zip_code: '90110',
        note_address: 'การเคหะคลองแห ตึก 57',
        phone: '0825803570',
        phone_ext: '',
        status: 'N',
        lat: null,
        long: null
      }
    ],
    company_id: -1,
    company_position: -1,
    com_perm_id: -1,
    shipping_data: [],
    usePointOrNot: 'no',
    edit_Quotation: 'no',
    address_en: [],
    type: '',
    array_type_shipping: [
      {
        seller_shop_id: 5,
        type_shipping: 'online'
      }
    ],
    is_first: true
  });

  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.6',
    'Authorization': token,
    'content-type': 'application/json',
    'origin': domain,
    'referer': `${domain}/checkoutExt`,
    'Cookie': cookie
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
