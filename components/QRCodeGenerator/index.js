import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import MainTitle from "../MainTitle";
import QrInput from "../QrInput";
import QrCode from "../QrCode";
import QrButton from "../QrButton";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    if (!qrCodeRef.current) return;

    html2canvas(qrCodeRef.current)
      .then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = "qrcode.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error generating QR code image:", error);
      });
  };

  return (
    <div className="flex flex-col items-center py-8 max-w-6xl mx-auto px-4">
      <MainTitle />
      <QrInput text={text} setText={setText} />
      <QrCode text={text} qrCodeRef={qrCodeRef} />
      <QrButton text={text} downloadQRCode={downloadQRCode} />
    </div>
  );
};

export default QRCodeGenerator;
