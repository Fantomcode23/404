import React from 'react';

function Homepage() {
  return (
    <section className="text-black-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-500 rounded overflow-hidden">
            <div className="w-50 h-full bg-indigo-900"></div>
          </div>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-8xl text-6xl font-medium title-font mb-4 text-black-700">WELCOME BACK!</h1>
            <p className="sm:text-3xl text-1xl font-medium title-font mb-4 text-orange-900">One portal for all secure transactions</p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-full h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full rounded-full"
                  src="https://as2.ftcdn.net/v2/jpg/05/13/85/99/1000_F_513859951_SLeBtUCREYfhMkN4OocxBK9GHeR5JUCa.jpg" />
              </div>
              <h2 className="text-2xl font-medium title-font text-red-900 mt-5">BALANCE AND TRANSACTIONS</h2>
              <p className="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">View your balance and recent transactions here</p>
              <a href="dwsample1-html.html">
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Check</button>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-full h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full rounded-full"
                  src="https://www.5paisa.com/mutual-funds/wp-content/uploads/blog-oct-12-1.jpg?x64567" />
              </div>
              <h2 className="text-2xl font-medium title-font text-red-900 mt-5">BUY DIGITAL CURRENCY</h2>
              <p className="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">Purchase your preferred digital currency with ease</p>
              <a href="dwsample1-html.html">
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Buy</button>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-full h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full rounded-full"
                  src="https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange-stock-vector-illustration_115579-1492.jpg" />
              </div>
              <h2 className="text-2xl font-medium title-font text-red-900 mt-5">TRANSFER MONEY</h2>
              <p className="sm:text-1xl text-1xl font-medium title-font mt-2 text-orange-200">Easily send money to your loved ones</p>
              <a href="dwsample1-html.html">
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-300 rounded-full">Transfer</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
