import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message } = body;

    const { error } = await resend.emails.send({
      from: "AI Nova <onboarding@resend.dev>",
      to: "ak.code.ai@gmail.com",
      subject: "🚀 New Project Request - AI Nova",
      html: `
        <h2>New Contact Form</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}