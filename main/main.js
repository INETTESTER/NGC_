//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { api1 } from '../api/api1.js'; import { api2 } from '../api/api2.js'; import { api3 } from '../api/api3.js'; import { api4 } from '../api/api4.js'; import { api5 } from '../api/api5.js'; import { api6 } from '../api/api6.js'; import { api7 } from '../api/api7.js'; import { api8 } from '../api/api8.js'; import { api9 } from '../api/api9.js'; import { api10 } from '../api/api10.js'; import { api11 } from '../api/api11.js'; import { api12 } from '../api/api12.js'; import { api13 } from '../api/api13.js'; import { api14 } from '../api/api14.js'; import { api15 } from '../api/api15.js'; import { api16 } from '../api/api16.js'; import { api17 } from '../api/api17.js'; import { api18 } from '../api/api18.js'; import { api19 } from '../api/api19.js'; import { api20 } from '../api/api20.js'; import { api21 } from '../api/api21.js'; import { api22 } from '../api/api22.js'; import { api23 } from '../api/api23.js'; import { api24 } from '../api/api24.js'; import { api25 } from '../api/api25.js'; import { api26 } from '../api/api26.js'; import { api27 } from '../api/api27.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = api1()  //API หน้าแรก Flash Sale    //หน้า Home
  //response = api2()  //API สินค้าสำหรับคุณ         //หน้า Home

  //response = api3()  //API เส้น Search

  //response = api4()  //API รายละเอียดสินค้า         //หน้า สินค้า
  //response = api2()  //API สินค้าสำหรับคุณ          //หน้า สินค้า

  //response = api5()  //API เพิ่มสินค้า
  //response = api6()  //API รายละเอียดสินค้าในตะดร้า
  //response = api7()  //API Checkout ตะกร้า
  //response = api8()  //API Checkstock
  //response = api9()  //API  Create Order

  // response = api10()  //API Live Stream get จำนวนหัวใจ              //หน้าระหว่าง Live
  // response = api12()  //API Live Stream get สินค้าที่ถูกปักหมุดอยู่       //หน้าระหว่าง Live
  // response = api13()  //API Live Stream get สินค้าที่เข้าร่วมใน Live      //หน้าระหว่าง Live
  // response = api15()  //API Live Stream get comment                //หน้าระหว่าง Live
  // response = api17()  //API Live Stream get ผู้ชม                   //หน้าระหว่าง Live
  // response = api18()  //API Live Stream get Live ที่เปิดอยู่           //หน้าระหว่าง Live

  //response = api11()  //API Live Stream ส่งหัวใจ
  //response = api14()  //API Live Stream ส่ง comment
  //response = api16()  //API Live Stream get share link ของ Live

  //response = api19()  //API หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม(สำหรับกลุ่มพิเศษ)               //หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม(สำหรับกลุ่มพิเศษ)                  
  //response = api21()  //API หน้ากลุ่มไทยช่วยไทย  ตัวอย่างสินค้าตามหมวดของกลุ่ม (Limit 6)  //หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม(สำหรับกลุ่มพิเศษ)
  
  //response = api20()  //API หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม                                  //หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม
  //response = api21()  //API หน้ากลุ่มไทยช่วยไทย  ตัวอย่างสินค้าตามหมวดของกลุ่ม (Limit 6)      //หน้ากลุ่มไทยช่วยไทย ข้อมูลกลุ่ม                                              
 
  //response = api22()  //API หน้ากลุ่มไทยช่วยไทย  ดูสินค้าทั้งหมดตามหมวดของกลุ่ม (Limit 48)
  //response = api23()  //API คูปองหน้าตะกร้า (ร้านค้า)
  //response = api24()  //API คูปองหน้าตะกร้า (ระบบ)

  //response = api25()  //API คูปองหน้าเก็บคูปอง (ร้านค้า)   //หน้าเก็บคูปอง
  //response = api26()  //API คูปองหน้าเก็บคูปอง (ระบบ)    //หน้าเก็บคูปอง

  //response = api27()  //API Callback จาก TDCP



  response_check(response);
  error_check(response);
  sleep(1)
}