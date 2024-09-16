import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 justify-start gap-0 pb-6">
      <div className="text-black text-9xl row-span-2 self-end">FAQ</div>
      <div className="text-black text-4xl self-start">ใครมีคำถาม</div>
      <div className="text-black text-6xl self-start">มาค่า</div>
    </div>
  );
};

export default Header;
