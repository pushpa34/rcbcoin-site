import { sendToken } from "../../../utils/sendToken";
import { NextResponse } from "next/server";
import { ethers } from "ethers";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

// RAZORPAY UPI CONFIGURATION (Optional fallback)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST(req) {
  try {
    const { userAddress, amountInINR } = await req.json();

    // 🔥 Actual transaction: Send tokens to user
    const tx = await sendToken(userAddress, amountInINR);

    return NextResponse.json({ success: true, hash: tx.hash });
  } catch (error) {
    console.error("Transaction Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
