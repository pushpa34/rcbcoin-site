// pages/index.js

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RCB Coin - Royal Challengers Battalion</title>
        <meta name="description" content="Buy RCB Coin (Royal Challengers Battalion) using UPI - 1.8 Crore total supply." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-500">RCB Coin</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">Royal Challengers Battalion</p>
          <p className="mb-8">Join the fan-powered revolution. Invest in the future of cricket fandom.</p>

          <div className="bg-gray-900 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-semibold mb-4">🔗 Coin Details</h2>
            <ul className="text-left space-y-2">
              <li>✅ <strong>Token Full Name:</strong> Royal Challengers Battalion (RCB Coin)</li>
              <li>✅ <strong>Total Supply:</strong> 1.8 Crore (1,80,00,000)</li>
              <li>✅ <strong>Contract Address:</strong> (paste your contract here)</li>
              <li>✅ <strong>Owner Wallet Address:</strong> 0x2E82279E5b7172460797c01836ce053581c080fb</li>
              <li>✅ <strong>Contact Email:</strong> pushpav1076@gmail.com</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-semibold mb-4">💸 Buy with UPI</h2>
            <p>Send any amount to this UPI ID:</p>
            <div className="text-xl font-mono my-4 bg-black p-3 rounded-lg border border-red-600 inline-block">pushpav1076@okicici</div>
            <p className="mb-4">After sending, enter your wallet address below to receive tokens.</p>

            <form method="POST" action="/api/buy" className="space-y-4">
              <input
                type="text"
                name="wallet"
                placeholder="Your BSC Wallet Address"
                required
                className="w-full px-4 py-2 rounded-lg text-black"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold">
                Submit
              </button>
            </form>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-semibold mb-4">📤 Sell Your RCB Coins</h2>
            <p>Want to sell your RCB Coins? Enter how many you want to sell and your wallet:</p>
            <form method="POST" action="/api/sell" className="space-y-4">
              <input
                type="text"
                name="wallet"
                placeholder="Your BSC Wallet Address"
                required
                className="w-full px-4 py-2 rounded-lg text-black"
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount to Sell"
                required
                className="w-full px-4 py-2 rounded-lg text-black"
              />
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg font-semibold">
                Request Sell
              </button>
            </form>
          </div>

          <p className="text-sm text-gray-500">Made with ❤️ by Tejas</p>
        </div>
      </main>
    </>
  );
}
