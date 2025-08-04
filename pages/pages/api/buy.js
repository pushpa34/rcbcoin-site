import { NextResponse } from 'next/server';
import { ethers } from 'ethers';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const tokenAddress = process.env.TOKEN_ADDRESS;
const tokenABI = [
  "function transfer(address to, uint amount) public returns (bool)"
];
const contract = new ethers.Contract(tokenAddress, tokenABI, wallet);

// RAZORPAY UPI CONFIGURATION (Optional fallback)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST(req) {
  try {
    const { userAddress, amountInINR } = await req.json();

    // Example fixed price: 1 RCB = ₹1
    const tokensToSend = ethers.utils.parseUnits(amountInINR.toString(), 18);

    const tx = await contract.transfer(userAddress, tokensToSend);
    await tx.wait();

    return NextResponse.json({ success: true, hash: tx.hash });
  } catch (error) {
    console.error('Transaction Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
