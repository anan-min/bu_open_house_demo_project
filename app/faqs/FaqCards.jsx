import React from "react";
import FlipCard from "@/components/FlipCard";

const FaqCards = () => {
  const cardSize = "w-[420px] h-[100px]";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
        <FlipCard
          card_style={cardSize}
          front_style="text-white bg-[#00b161]"
          front="งาน BU Open House 2024 จัดขึ้นเมื่อไหร่ และจัดที่ไหน?"
          back="มารวมตัวพร้อมกันได้ในวันที่ 29-31 สิงหาคม 2567 ณมหาวิทยาลัยกรุงเทพ Main campus (รังสิต)"
        ></FlipCard>
        <FlipCard
          card_style={cardSize}
          front_style="text-white bg-[#0026ff]"
          front="เข้าร่วมงานต้องลงทะเบียนไหม?"
          back="สามารถลงทะเบียนเพื่อร่วมงาน BU OPEN HOUSE ล่วงหน้าได้ที่ https://openhouse.bu.ac.th/register"
        ></FlipCard>
        <FlipCard
          card_style={cardSize}
          front_style="text-white bg-[#f53db8]"
          front="เลือกลงทะเบียนเข้าร่วมกิจกรรมได้กี่คณะ?"
          back="ลงทะเบียนครั้งเดียวสําหรับเข้าร่วมงาน BU OPEN HOUSE แล้วสามารถดูตาราง กิจกรรมของคณะในคลัสเตอร์ต่าง ๆ ได้ที่หน้าเว็บไซต์"
        ></FlipCard>
        <FlipCard
          card_style={cardSize}
          front_style="text-white bg-[#f60006]"
          front="การแต่งกาย ใส่ชุดอะไรไปดี?"
          back="มหาวิทยาลัยกรุงเทพเราเปิดรับความหลากหลาย ทุกคนสามารถแต่งกายได้ทั้งเครื่องแบบสถาบัน หรือชุดฟรีสไตล์ของตัวเอง "
        ></FlipCard>
        <FlipCard
          card_style={cardSize}
          front_style="text-white bg-[#f78e13]"
          front="ทุกคณะมีเปิดบ้านทุกวันไหม? และทั้ง 3 วันมีกิจกรรมเหมือนกันไหม?"
          back="ทุกคณะจะมีกิจกรรมเปิดบ้านให้เข้าร่วมทั้ง 3 วัน สามารถเช็กตารางกิจกรรมได้ที่หน้าแรกตามแต่ละคลัสเตอร์ซึ่งบางคณะจะมีกิจกรรมไฮไลต์แต่ละวันไม่เหมือนกันอย่าลืมวางแผน"
        ></FlipCard>
        <FlipCard
          front_style="text-white bg-[#a3a3a3]"
          card_style={cardSize}
          front="กิจกรรมคณะต่าง ๆ เริ่มตั้งแต่กี่โมงและสิ้นสุดเมื่อไหร่?"
          back="สําหรับกิจกรรมทุกคณะ จะเริ่มตั้งแต่เวลา 9.00-16.30 น. และมีต่อกับกิจกรรมสุดพิเศษช่วงเย็นสําหรับคอนเสิร์ตและโชว์วงดนตรีที่เวทีกลางบริเวณโถงอาคาร C6 17.00น"
        ></FlipCard>
      </div>
    </>
  );
};

export default FaqCards;
