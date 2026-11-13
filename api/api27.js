
import http from 'k6/http';
import { domain } from './env.js';

export function api27() {
  const url = `${domain}/api/backend_2/payment/responsefromtdcp`;

  const payload = JSON.stringify({
    detail: {
      response_code: '0',
      response_message: 'Success',
      merchant_id: 'M24100300004',
      order_id: 'NEXGEN-2026090126463',
      payment_reference_id: 'P09256347348700',
      receive_amount: 1,
      payment_type: 'QR Code Payment',
      payment_acquirer_bank: 'CIMB',
      transaction_date: '20260925',
      transaction_time: '003704',
      order_description: '',
    },
    payer: {
      account_no: '9899743046',
      account_name: 'MR.Sanpakorn Pattamarak',
      bank_no: '006',
      card_no: '',
      channel_code: '',
      issuer_country: '',
      installment_period: 0,
    },
    event: 'payment_status_change',
    merchant_id: 'M24100300004',
    timestamp: '2026-09-25T00:37:04+07:00',
    retry_flag: 'N',
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = http.post(url, payload, {
    headers: headers,
  });

  //console.log(response.body);

  return response;
}
