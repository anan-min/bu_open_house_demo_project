import React from "react";
import Layout from "@/components/Layout";

const Page = () => {
  return (
    <Layout>
      <div className="relative grid md:grid-cols-2 gap-4  justify-center  text-lg bg-gray-900 min-h-screen p-12 pt-10 leading-loose sarabun-font">
        <div className="md:min-h-screen md: items-center md:justify-center md:p-20">
          <h1 className="text-6xl text-wrap pt-2">พร้อมมาค่ะ</h1>
          <h1 className="text-6xl text-wrap pt-2">BU ให้มาทางนี้</h1>
          <p className="font-bold text-xl pt-6">การเดินทาง</p>
          <p>
            <span className="font-bold text-xl">รถเมล์ :</span>
            สาย 39 ปอ.510 / ปอ.520
          </p>
          <p>
            <span className="font-bold text-xl">
              รถตู้ สาย ต.85-93 (ฝั่งเกาะพญาไท) :
            </span>
            <ul className="list-disc pl-6">
              <li>
                อนุสาวรีย์ชัยสมรภูมิ-มธ. (ศูนย์รังสิต) - ใกล้ BTS
                อนุสาวรีย์ชัยสมรภูมิ
              </li>
              <li>สาย ต.118-1 หมอชิต-มธ. (ศูนย์รังสิต)</li>
              <li>สาย 1008 (อยู่ตรงข้างฟิวเจอร์พาร์ค รังสิต)</li>
              <li>ช่วงรังสิต-มธ. (ศูนย์รังสิต)</li>
            </ul>
          </p>

          <p>
            <span className="font-bold text-xl">รถไฟฟ้าสายสีเขียว (BTS) :</span>
            <ul className="list-disc pl-6">
              <li>ลงสถานีหมอชิต (ทางออก 3,4) ต่อรถตู้สาย ต. 118-1</li>
              <li>
                ลงสถานีอนุสาวรีย์ชัยสมรภูมิ (ทางออก 3,4) ต่อรถตู้สาย ต.85-93
                (ฝั่งเกาะพญาไท)
              </li>
              <li>ลงสถานีแยกคปอ. (ทางออก 1,3) ต่อรถเมล์ สาย 39,520</li>
            </ul>
          </p>

          <p>
            <span className="font-bold text-xl">
              รถไฟฟ้าสายสีน้ำเงิน (MRT) :
            </span>
            <ul className="list-disc pl-6">
              <li>
                ลงสถานีจตุจักร (ทางออก 3,4) ต่อรถตู้สาย ต.118-1 หมอชิต-มธ.
                (ศูนย์รังสิต)
              </li>
            </ul>
          </p>

          <p>
            <span className="font-bold text-xl">รถไฟฟ้าสายสีแดง (SRT) :</span>
            <ul className="list-disc pl-6">
              <li>ลงสถานี รังสิต ทางออกที่ 3 ต่อรถสองแถวสาย รังสิต-จารุศร</li>
            </ul>
          </p>
        </div>
        <map className="md:min-h-screen"></map>
      </div>
    </Layout>
  );
};

export default Page;
