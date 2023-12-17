import React from "react";
import QRCode from "qrcode.react";

function QrCode(props) {
  const { text, qrCodeRef } = props;
  return (
    <div className="relative scale-75 -mt-12 lg:mt-0 lg:scale-100">
      <div
        ref={qrCodeRef}
        className="absolute pt-6 top-0 z-10 flex justify-center items-center h-full w-full"
      >
        {text && <QRCode value={text} size={280} />}
      </div>
      <div
        className={`h-[380px] w-[380px] mt-6 bg-white p-4 rounded-lg bg-opacity-50 ${
          text && "blur-sm"
        }`}
      >
        <img src="/images/qr-img.png" />
      </div>
    </div>
  );
}

export default QrCode;
