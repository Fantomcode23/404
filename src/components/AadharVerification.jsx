import React, { useState } from "react";
import axios from 'axios';

function generateSixDigitCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function AadharVerification() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [phoneVisible, setPhoneVisible] = useState(false); // Track if phone number input should be visible

  const sendCode = async () => {
    const code = generateSixDigitCode();
    setSentCode(code);

    try {
      await axios.post('http://localhost:5001/send-code', { phoneNumber, code });
      setVerificationStatus("Code sent to " + phoneNumber);
    } catch (error) {
      console.error("Error sending code:", error);
      setVerificationStatus("Failed to send code");
    }
  };

  const verifyCode = () => {
    if (verificationCode === sentCode) {
      setVerificationStatus("Verification successful");
      // Open a new tab with HTML content
      const htmlContent = `
      <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
        }
    </style>
</head>

<body>
    <!-- Header navigation-->
    <section class="text-black-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
                <div class="h-1 bg-gray-500 rounded overflow-hidden">
                    <div class="w-50 h-full bg-indigo-900"></div>
                </div>
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-8xl text-6xl font-medium title-font mb-4 text-black-700">WELCOME BACK!</h1>
                    <p class="sm:text-3xl text-1xl font-medium title-font mb-4 text-orange-900">One portal for all secure transactions</p>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-full h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full rounded-full"
                                src="https://as2.ftcdn.net/v2/jpg/05/13/85/99/1000_F_513859951_SLeBtUCREYfhMkN4OocxBK9GHeR5JUCa.jpg">
                        </div>
                        <h2 class="text-2xl font-medium title-font text-red-900 mt-5">  BALANCE AND TRANSACTIONS</h2>
                        <p class="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">View your balance and recent transactions here</p>
                        <!-- Anchor tag for linking to balance_transactions.html -->
                        <a href="dwsample1-html.html">
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Check</button>
                        </a>
                    </div>
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-full h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full rounded-full"
                                src="https://www.5paisa.com/mutual-funds/wp-content/uploads/blog-oct-12-1.jpg?x64567">
                        </div>
                        <h2 class="text-2xl font-medium title-font text-red-900 mt-5">BUY DIGITAL CURRENCY</h2>
                        <p class="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">Purchase your preferred digital currency with ease</p>
                        <!-- Anchor tag for linking to buy_digital_currency.html -->
                        <a href="dwsample1-html.html">
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Buy</button>
                        </a>
                    </div>
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div class="rounded-full h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full rounded-full"
                                src="https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange-stock-vector-illustration_115579-1492.jpg">
                        </div>
                        <h2 class="text-2xl font-medium title-font text-red-900 mt-5">TRANSFER MONEY</h2>
                        <p class="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">Easily send money to your loved ones</p>
                        <!-- Anchor tag for linking to transfer_money.html -->
                        <a href="dwsample1-html.html">
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Transfer</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>

</html>
      `;
      const newTab = window.open();
      newTab.document.write(htmlContent);
    } else {
      setVerificationStatus("Invalid verification code");
    }
  };
  
  

  const handleAadharChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 12);
    setAadharNumber(input);
    if (input !== '') {
      setPhoneVisible(true); // Show phone number input when Aadhaar number is entered
    } else {
      setPhoneVisible(false); // Hide phone number input when Aadhaar number is empty
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'skyblue', /* Add gradient background */
      padding: '20px', 
      borderRadius: '10px', 
      color: 'black', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <h2 style={{ fontFamily: 'Times New Roman, Times, serif' }}>AADHAAR API</h2>
      </div>
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <label style={{ marginRight: '10px' }}>Enter Aadhaar Number:</label>
        <input
          type="text"
          value={aadharNumber}
          onChange={handleAadharChange}
          pattern="[0-9]*" // Accept only integers
          style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
        />
      </div>
      {phoneVisible && (
        <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
          <label style={{ marginRight: '10px' }}>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
          />
        </div>
      )}
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <button onClick={sendCode} style={{ borderRadius: '20px', padding: '10px' }}>Send Code</button>
      </div>
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        {verificationStatus && <p>{verificationStatus}</p>}
        {verificationStatus && (
          <div style={{ marginTop: '15px' }}>
            <label style={{ marginRight: '10px' }}>Enter verification code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
            />
            <button onClick={verifyCode} style={{ borderRadius: '20px', padding: '10px', marginLeft: '10px' }}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AadharVerification;
