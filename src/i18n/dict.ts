// ------------------------------------------------------------------
// فرهنگ لغت رابط کاربری (فارسی/انگلیسی)
// هر رانده متنِ هاردکد شده‌ی کامپوننت‌ها اینجا تعریف شده تا
// کل سایت بدون تغییر ساختار، دو‌زبانه بماند.
// ------------------------------------------------------------------

import type { SectionId } from "@/lib/deck-nav";

export type Lang = "fa" | "en";

export interface Dict {
  nav: Record<SectionId, string>;
  hero: {
    badge: string;
    title: string;
    subPre: string;
    subAccent: string;
    intro: string;
    panelText: string;
    examplesLabel: string;
    examples: string[];
    finalPre: string;
    finalLink: string;
    finalPost: string;
    ctaResume: string;
    ctaAbout: string;
    cardSubs: Record<SectionId, string>;
    ariaHome: string;
  };
  about: {
    title: string;
    sub: string;
    p1: string;
    p2: string;
    profileName: string;
    profileRole: string;
    certTitle: string;
    certSub: string;
    certBtn: string;
    aria: string;
  };
  skills: {
    title: string;
    mastery: string;
    aria: string;
  };
  projects: {
    title: string;
    sub: string;
    view: string;
    aria: string;
    imgAlt: string;
  };
  contact: {
    title: string;
    sub: string;
    aria: string;
    formTitle: string;
    formHint: string;
    labelName: string;
    labelEmail: string;
    labelMessage: string;
    phName: string;
    phMessage: string;
    errName: string;
    errEmailReq: string;
    errEmailInvalid: string;
    errMsgReq: string;
    errMsgShort: string;
    sending: string;
    send: string;
    copyEmail: string;
    copied: string;
    sentOk: string;
    errNet: string;
    errApi: string;
    linksTitle: string;
    replyNote: string;
    linkEmail: string;
    linkLinkedin: string;
    linkGithub: string;
    linkWebsite: string;
    footer: string;
    footerBrand: string;
  };
  certs: {
    backHome: string;
    title: string;
    sub: string;
    empty: string;
    emptySub: string;
    lbClose: string;
    lbNext: string;
    lbPrev: string;
    lbDownload: string;
    lbCount: string; // "{a} از {b}" / "{a} of {b}"
    lbTitle: string; // پیشوند «پیش‌نمایش مدرک: »
    cardAria: string; // پیشوند «مشاهده مدرک »
    altPrefix: string; // «گواهینامه »
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  misc: {
    skip: string;
    theme: string;
    topUp: string;
    contactCta: string;
    langTarget: string; // برچسب دکمه‌ی تغییر زبان (زبان مقصد)
    langAria: string; // توضیح دکمه‌ی تغییر زبان برای اسکرین‌ریدر
    menuOpen: string;
    menuClose: string;
    navAria: string;
    navMobileAria: string;
    goTo: string;
  };
}

export const dict: Record<Lang, Dict> = {
  fa: {
    nav: {
      home: "خانه",
      about: "درباره من",
      projects: "نمونه‌کارها",
      contact: "تماس با من",
    },
    hero: {
      badge: "توسعه‌دهنده فول‌استک",
      title: "سلام، من علی هستم",
      subPre: "توسعه‌دهنده وب و",
      subAccent: "برنامه‌نویس Full-Stack",
      intro:
        "توسعه‌دهنده‌ای که پشت صحنه‌ی کسب‌وکارها را با سیستم‌های اتوماسیون و داشبوردهای هوشمند مدیریت می‌کند.",
      panelText:
        "با ترکیب PHP/Laravel برای بخش‌های پایدار و پایتون برای پردازش‌های هوشمند، سیستم‌هایی می‌سازم که کارهای تکراری را حذف و تصمیم‌گیری را برای مدیران آسان می‌کنند.",
      examplesLabel: "نمونه‌هایی از کارهایی که انجام داده‌ام:",
      examples: [
        "طراحی داشبوردهای مدیریتی با React، Next.js و Tailwind",
        "ساخت بات‌های هوشمند برای خودکارسازی تعاملات مشتریان",
        "پیاده‌سازی سیستم‌های اتوماسیون سفارشی برای کاهش زمان پردازش",
      ],
      finalPre:
        "اگر به دنبال سیستمی هستید که وقت شما را آزاد کند و اطلاعات را در قالبی زیبا و کاربردی نشان دهد،",
      finalLink: "تماس با من",
      finalPost: ".",
      ctaResume: "دانلود رزومه",
      ctaAbout: "درباره من",
      cardSubs: {
        home: "شروع و معرفی",
        about: "مسیر و مهارت‌ها",
        projects: "پروژه‌ها و دستاوردها",
        contact: "شروع همکاری",
      },
      ariaHome: "خانه",
    },
    about: {
      title: "درباره من",
      sub: "از مهندسی برق تا توسعه‌ی نرم‌افزار؛ مسیری که با اشتیاق ادامه پیدا کرد.",
      p1: "مسیر حرفه‌ای من با یک تغییر مسیرِ از سرِ اشتیاق آغاز شد؛ فارغ‌التحصیل مهندسی برق (قدرت) هستم، اما کشش درونی‌ام به دنیای کدنویسی مرا از سال ۱۳۹۵ به این عرصه کشاند. سال‌های ابتدایی را با یادگیری عمیق، تجربه‌های خودآموز (مثل ساخت اولین پلتفرم آموزشی با PHP/Laravel) و چالش‌های فنی گذراندم تا اینکه وارد بازار کار شدم.",
      p2: "امروز به‌عنوان یک توسعه‌دهنده وب فول‌استک، عاشق چالش‌های پیچیده و حل مسئله هستم. برای من دنیای فناوری یک بازی بی‌پایان یادگیری است؛ ترکیب تسلط بر فرانت‌اند (React و Next.js) با قدرت بک‌اند (Laravel و Python) به من این امکان را می‌دهد تا ایده‌های خام را از صفر تا صد به راهکارهای نرم‌افزاری مقیاس‌پذیر و مدرن تبدیل کنم.",
      profileName: "علی",
      profileRole: "توسعه‌دهنده وب و برنامه‌نویس فول‌استک",
      certTitle: "مدارک و گواهینامه‌های من",
      certSub: "مسیر یادگیری مستمر؛ فهرست کامل مدارک و دوره‌ها را ببینید.",
      certBtn: "مشاهده گواهینامه‌ها",
      aria: "درباره من",
    },
    skills: {
      title: "مهارت‌ها",
      mastery: "سطح تسلط",
      aria: "سطح تسلط",
    },
    projects: {
      title: "نمونه‌کارها",
      sub: "گزینه‌ای از پروژه‌ها و سیستم‌هایی که ساخته‌ام؛ از داشبوردهای مدیریتی تا سامانه‌های اتوماسیون.",
      view: "مشاهده پروژه",
      aria: "نمونه‌کارها",
      imgAlt: "تصویر پروژه",
    },
    contact: {
      title: "تماس با من",
      sub: "پروژه‌ای در ذهن دارید یا سؤالی دارید؟ فرم را پر کنید یا از راه‌های زیر مستقیم پیام بدهید.",
      aria: "تماس با من",
      formTitle: "ارسال پیام",
      formHint: "فرم را پر کنید؛ پیام شما مستقیماً برای من ارسال می‌شود.",
      labelName: "نام",
      labelEmail: "ایمیل",
      labelMessage: "پیام",
      phName: "نام و نام خانوادگی",
      phMessage: "کمی از پروژه یا سؤال خود بنویسید...",
      errName: "لطفاً نام خود را وارد کنید (حداقل ۲ حرف).",
      errEmailReq: "وارد کردن ایمیل الزامی است.",
      errEmailInvalid: "ایمیل معتبر وارد کنید؛ مثال: name@example.com",
      errMsgReq: "متن پیام را بنویسید.",
      errMsgShort: "پیام کمی کوتاه است؛ حداقل ۱۰ حرف بنویسید.",
      sending: "در حال ارسال...",
      send: "ارسال پیام",
      copyEmail: "کپی ایمیل",
      copied: "کپی شد",
      sentOk: "پیام شما با موفقیت ارسال شد و به دست من رسید!",
      errNet: "خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.",
      errApi: "خطایی در ارسال ایمیل رخ داد. لطفاً دوباره تلاش کنید.",
      linksTitle: "راه‌های ارتباطی",
      replyNote:
        "معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم. اگر فرم مشکلی داشت، مستقیم ایمیل بزنید.",
      linkEmail: "ایمیل",
      linkLinkedin: "لینکدین",
      linkGithub: "گیت‌هاب",
      linkWebsite: "وب‌سایت",
      footer: "© ۲۰۲۶ علی · ساخته‌شده با Next.js و Tailwind CSS",
      footerBrand: "Ali.Dev",
    },
    certs: {
      backHome: "بازگشت به صفحه اصلی",
      title: "مدارک و گواهینامه‌ها",
      sub: "مسیر یادگیری من در یک نگاه؛ بیش از ۲۵ دوره و گواهینامه‌ی رسمی در حوزه‌های برنامه‌نویسی، وب، هوش مصنوعی و مهندسی.",
      empty: "هنوز مدرکی ثبت نشده است",
      emptySub:
        "به‌زودی مدارک و گواهینامه‌ها در این بخش نمایش داده می‌شوند؛ فهرست در فایل داده‌ی پروژه قابل ویرایش است.",
      lbClose: "بستن",
      lbNext: "مدرک بعدی",
      lbPrev: "مدرک قبلی",
      lbDownload: "دانلود مدرک",
      lbCount: "{a} از {b}",
      lbTitle: "پیش‌نمایش مدرک:",
      cardAria: "مشاهده مدرک",
      altPrefix: "گواهینامه",
    },
    notFound: {
      title: "۴۰۴: صفحه پیدا نشد",
      text: "آدرس اشتباه است یا این صفحه جابه‌جا شده. با دکمه‌ی زیر به صفحه اصلی برگردید.",
      back: "بازگشت به صفحه اصلی",
    },
    misc: {
      skip: "پرش به محتوا",
      theme: "تغییر تم روشن/تاریک",
      topUp: "رفتن به بالای صفحه",
      contactCta: "تماس با من",
      langTarget: "EN",
      langAria: "تغییر زبان به انگلیسی",
      menuOpen: "باز کردن منو",
      menuClose: "بستن منو",
      navAria: "ناوبری اصلی",
      navMobileAria: "ناوبری موبایل",
      goTo: "رفتن به",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Full-Stack Developer",
      title: "Hi, I'm Ali",
      subPre: "Web developer &",
      subAccent: "Full-Stack Programmer",
      intro:
        "A developer who keeps the backstage of businesses running with automation systems and smart dashboards.",
      panelText:
        "By combining PHP/Laravel for stable layers and Python for smart processing, I build systems that eliminate repetitive work and make decision-making easier for managers.",
      examplesLabel: "A few things I've built:",
      examples: [
        "Admin dashboards built with React, Next.js & Tailwind",
        "Smart bots that automate customer interactions",
        "Custom automation systems that cut processing time",
      ],
      finalPre:
        "If you're after a system that frees up your time and presents your data in a beautiful, practical form,",
      finalLink: "get in touch",
      finalPost: ".",
      ctaResume: "Download Resume",
      ctaAbout: "About Me",
      cardSubs: {
        home: "Start & intro",
        about: "Path & skills",
        projects: "Projects & wins",
        contact: "Start a collaboration",
      },
      ariaHome: "Home",
    },
    about: {
      title: "About Me",
      sub: "From electrical engineering to software development; a path I still follow with passion.",
      p1: "My professional path began with a passion-driven detour. I'm a power-engineering graduate, but my inner pull toward code led me into this field in 2016. I spent my early years in deep learning, self-taught projects (like building my first e-learning platform with PHP/Laravel) and technical challenges until I joined the industry.",
      p2: "Today, as a full-stack web developer, I love complex challenges and problem-solving. For me, technology is an endless game of learning; pairing front-end mastery (React & Next.js) with back-end power (Laravel & Python) lets me turn raw ideas into scalable, modern software solutions from zero to one hundred.",
      profileName: "Ali",
      profileRole: "Web developer & full-stack programmer",
      certTitle: "My Certificates",
      certSub: "A continuous learning path; browse the full list of certificates and courses.",
      certBtn: "View Certificates",
      aria: "About Me",
    },
    skills: {
      title: "Skills",
      mastery: "Proficiency",
      aria: "Proficiency",
    },
    projects: {
      title: "Portfolio",
      sub: "A selection of the projects and systems I've built; from admin dashboards to automation platforms.",
      view: "View Project",
      aria: "Portfolio",
      imgAlt: "Screenshot of",
    },
    contact: {
      title: "Contact Me",
      sub: "Have a project in mind or a question? Fill out the form or reach out directly below.",
      aria: "Contact Me",
      formTitle: "Send a Message",
      formHint: "Fill in the form; your message goes straight to me.",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      phName: "First and last name",
      phMessage: "Tell me a little about your project or question...",
      errName: "Please enter your name (at least 2 characters).",
      errEmailReq: "Email is required.",
      errEmailInvalid: "Enter a valid email; e.g. name@example.com",
      errMsgReq: "Please write your message.",
      errMsgShort: "Message is too short; write at least 10 characters.",
      sending: "Sending...",
      send: "Send Message",
      copyEmail: "Copy Email",
      copied: "Copied",
      sentOk: "Your message was sent successfully and reached me!",
      errNet: "Connection error. Please try again.",
      errApi: "Something went wrong sending the email. Please try again.",
      linksTitle: "Ways to Reach Me",
      replyNote:
        "I usually reply within 24 hours. If the form has issues, email me directly.",
      linkEmail: "Email",
      linkLinkedin: "LinkedIn",
      linkGithub: "GitHub",
      linkWebsite: "Website",
      footer: "© 2026 Ali · Built with Next.js & Tailwind CSS",
      footerBrand: "Ali.Dev",
    },
    certs: {
      backHome: "Back to home",
      title: "Certificates & Credentials",
      sub: "My learning path at a glance; 25+ official courses and certificates in programming, web, AI and engineering.",
      empty: "No certificates registered yet",
      emptySub:
        "Certificates will appear here soon; the list is editable in the project's data file.",
      lbClose: "Close",
      lbNext: "Next certificate",
      lbPrev: "Previous certificate",
      lbDownload: "Download Certificate",
      lbCount: "{a} of {b}",
      lbTitle: "Certificate preview:",
      cardAria: "View certificate",
      altPrefix: "Certificate",
    },
    notFound: {
      title: "404: Page not found",
      text: "The address is wrong or this page moved. Use the button below to go back home.",
      back: "Back to home",
    },
    misc: {
      skip: "Skip to content",
      theme: "Toggle light/dark theme",
      topUp: "Back to top",
      contactCta: "Contact",
      langTarget: "فا",
      langAria: "Switch language to Persian",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navAria: "Main navigation",
      navMobileAria: "Mobile navigation",
      goTo: "Go to",
    },
  },
};

// شمارنده‌ی «n از m» در لایت‌باکس مدارک
export function countText(tpl: string, a: number, b: number) {
  return tpl.replace("{a}", String(a)).replace("{b}", String(b));
}
