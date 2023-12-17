import React, { Fragment } from "react";

function QrButton(props) {
  const { text, downloadQRCode } = props;
  return (
    <Fragment>
      {text && (
        <button
          onClick={downloadQRCode}
          className="lg:mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Download QR Code
        </button>
      )}
    </Fragment>
  );
}

export default QrButton;
