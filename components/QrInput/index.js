import React from "react";

function QrInput(props) {
  const { text, setText } = props;
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter text for QR Code"
      className="p-2 border border-gray-300 rounded mb-4 w-full max-w-2xl my-4 lg:my-8"
    />
  );
}

export default QrInput;
