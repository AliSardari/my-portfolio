import { NextResponse } from "next/server";
import { Resend } from "resend";

// یک کلید موقت یا متغیر محیطی برای Resend
const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789");

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // اعتبارسنجی ساده داده‌های ورودی
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "لطفاً تمام فیلدها را پر کنید." },
                { status: 400 },
            );
        }

        // ارسال ایمیل واقعی به جیمیل شما
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "your.actual.email@gmail.com", // <--- جیمیل خودتان را اینجا وارد کنید
            subject: `پیام جدید از طرف ${name} در سایت پورتفولیو`,
            html: `
        <div dir="rtl" style="font-family: Tahoma, sans-serif; padding: 20px; line-height: 1.6;">
          <h2 style="color: #06b6d4;">پیام جدید از فرم تماس سایت</h2>
          <p><strong>نام فرستنده:</strong> ${name}</p>
          <p><strong>ایمیل فرستنده:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>متن پیام:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
        });

        return NextResponse.json(
            { message: "پیام شما با موفقیت ارسال شد و به دست من رسید!" },
            { status: 200 },
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "خطایی در ارسال ایمیل رخ داد. لطفاً دوباره تلاش کنید." },
            { status: 500 },
        );
    }
}
