// src/app/api/users/creditPoints/route.js
import { NextResponse } from 'next/server';
import { clerkClient } from "@clerk/nextjs";

export async function POST(request) {
  const user = await request.json();
  
  try {
    await clerkClient.users.updateUser(user.id, {
      publicMetadata: { creditPoints: 100 },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error setting credit points:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
