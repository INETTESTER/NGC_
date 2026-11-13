import http from 'k6/http';
import { domain, token, cookie } from './env.js';

export function api14() {
  const url = `${domain}/api/live/add_comment`;

  const payload = JSON.stringify({
    roomName: 'Host5',
    comment: 'สวัสดีครับ',
    userId: 360,
    role: 'Viewer',
    userName: 'minichiwa',
    userImg: 'https://devinet-eprocurement.one.th/static/img/user_profile/360202506091600560.webp',
    replyToCommentId: ''
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Cookie': `${cookie}`,
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}