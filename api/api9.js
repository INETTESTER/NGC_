
import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api9() {
  const url = `${domain}/api/backend/api/create_order_b2b`;

  const payload = JSON.stringify({
    utm_source_keyword: null,
    checkout_detail: [
      {
        seller_shop_id: 5,
        address: [
          {
            id: 2,
            email: null,
            first_name: "รังสิมันตุ์",
            last_name: "คงจันทร์",
            detail: "บ้านเลขที่ 57/218 ห้องเลขที่ 57 ชั้นที่ 2 อาคาร 57 หมู่บ้าน การเคหะคลองแห บ้านเอื้ออาทร หมู่ที่ - ตรอก/ซอย - แยก - ถนน คลองแห ",
            house_no: "57/218",
            room_no: "57",
            floor: "2",
            building_name: "57",
            moo_ban: "การเคหะคลองแห บ้านเอื้ออาทร",
            moo_no: "-",
            soi: "-",
            yaek: "-",
            street: "คลองแห",
            sub_district: "คลองแห",
            district: "หาดใหญ่",
            province: "สงขลา",
            zip_code: "90110",
            note_address: "การเคหะคลองแห ตึก 57",
            phone: "0825803570",
            phone_ext: "",
            status: "N",
            lat: null,
            long: null
          }
        ],
        product_free: [],
        coupon: [
          {
            id: 70,
            seller_shop_id: 5,
            coupon_image: null,
            coupon_name: "ซื้อ 1000 ลด 100",
            coupon_code: "DIS100",
            coupon_description: "<h3>ซื้อสินค้าในร้านครบ 1000 บาท ลดทันที &nbsp;100 &nbsp;บาท ใช้ได้ตั้งแต่วันนี้ ถึง &nbsp;31 &nbsp;สิงหาคม นี้เท่านั้น</h3>",
            collect_startdate: "2024-06-03 12:00:00",
            collect_enddate: null,
            use_startdate: "2024-08-31 00:00:00",
            use_enddate: null,
            coupon_type: "discount",
            quota: 1000,
            use_count: 3,
            user_cap: 1,
            spend_minimum: 1000,
            discount_amount: 100,
            raw_list: "[\"special_1\"]",
            discount_type: "baht",
            discount_maximum: null,
            status: "active",
            deleted_at: null,
            hide: 0,
            generate_id: null,
            search: 1,
            created_by: 6,
            updated_by: 2,
            created_at: "2024-06-03 23:02:42",
            updated_at: "2026-11-05 02:36:14",
            allow_all_shops: 0,
            budget_limit: null,
            budget_used: "0.00",
            is_new_user_only: null,
            new_user_limit_unit: "day",
            new_user_limit_value: null,
            new_user_start_date: null,
            new_user_end_date: null,
            coupon_name_eng: null,
            coupon_description_eng: null,
            coupon_name_other: null,
            coupon_description_other: null,
            new_user_group_key: null,
            product_list: null,
            campaign_tag: null,
            allow_country_list: "[\"special_1\"]",
            platform_scope: null,
            target_mission: null,
            limit_time: null,
            coupon_id: 70,
            mission_started_at: null,
            mission_expired_at: null,
            coupon_for_all_product: true,
            list_seller_shop: [5],
            product_coupon: [],
            product_coupon_category: [],
            product_coupon_category_shop: [],
            raw_list_for_check_type: [],
            raw_list_category_platform: [],
            raw_list_category_shop: [],
            product_prepare: [
              {
                product_id: 1138817,
                product_attribute_detail: {
                  product_attribute_id: "-1",
                  attribute_priority_1: "",
                  attribute_priority_2: "",
                  attribute_priority_1_en: "",
                  attribute_priority_2_en: "",
                  key_1_value: "",
                  key_2_value: "",
                  key_1_value_en: "",
                  key_2_value_en: ""
                },
                revenue_vat: 1000
              }
            ],
            have_product_for_coupon: true,
            total_price_for_coupon: 0,
            total_price_for_coupon_v2: 0,
            real_discount_maximum: 0,
            price_for_cal_v2: 1000,
            net_discount_v2: 100,
            available_budget: "0.000000"
          }
        ],
        etax: "Personal",
        invoice_id: 187,
        point: 0,
        point_used: 0,
        required_invoice: "yes",
        role_user: "ext_buyer",
        shipping_data: {
          tpl_name: "จัดส่งโดยร้านค้า",
          courier_code: "จัดส่งโดยร้านค้า",
          businessType: "จัดส่งโดยร้านค้า",
          estimatePrice: 20,
          netEstimatePrice: 20,
          total_price: 20,
          price: 20,
          fuel_surcharge_fee: 0,
          upCountry: false,
          weight: 2000,
          weight_unit: "g",
          estimate_shipping_date: 3,
          remote_area: 0,
          service_provider: "OUT_SOURCE",
          seller_shop_id: 5,
          media_path: "",
          all_can_size_product: {
            width: 40,
            length: 80,
            height: 20,
            weight: 2
          },
          estimate_shipping_date_text: "จัดส่งภายใน 3 วัน",
          cod: 0,
          insurance: 0
        },
        time_pickup: "NaN:NaN:00",
        total_point_receive: 0,
        type_shipping: "online",
        remark_to_shop: ""
      }
    ],
    coupon_platform: [],
    inet_relation_ship: [],
    payment_method: "QRCode"
  });

  const params = {
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.6',
      'Authorization': token,
      'Content-Type': 'application/json',
      'Origin': domain,
      'Referer': `${domain}/checkoutExt`,
      'Cookie': cookie
    }
  };

  const response = http.post(url, payload, params);

  //console.log(response.body);
  return response;
}
