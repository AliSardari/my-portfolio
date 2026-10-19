"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Copy, PaperPlaneTilt, Warning } from "@phosphor-icons/react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/use-lang";
import type { CSSProperties } from "react";

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const { lang, t } = useLang();

  // جهت ورودی‌ها با زبان هماهنگ می‌شود:
  // فارسی → راست‌چین (rtl)، انگلیسی → چپ‌چین (ltr)
  const textDir = lang === "fa" ? "rtl" : "ltr";

  // الگوی پیشنهادی: اعتبارسنجی بومی مرورگر برای کاربر بدون جاوااسکریپت فعال بماند
  useEffect(() => {
    if (formRef.current) formRef.current.noValidate = true;
  }, []);

  function validate(v = values): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = t.contact.errName;
    if (!v.email.trim()) e.email = t.contact.errEmailReq;
    else if (!EMAIL_RE.test(v.email.trim())) e.email = t.contact.errEmailInvalid;
    if (!v.message.trim()) e.message = t.contact.errMsgReq;
    else if (v.message.trim().length < 10) e.message = t.contact.errMsgShort;
    return e;
  }

  function setField(field: keyof typeof values, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field] || errors[field]) {
      setErrors(validate(next));
    }
  }

  function onBlur(field: keyof typeof values) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    // فقط همان فیلد اعتبارسنجی می‌شود تا خطای فیلدهای دست‌نخورده
    // (مثل ایمیل خالی) هنگام خروج از فیلد نام نمایش داده نشود.
    const all = validate();
    setErrors((prev) => ({ ...prev, [field]: all[field] }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length > 0) {
      const first = (["name", "email", "message"] as const).find(
        (k) => errs[k]
      );
      if (first) document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    setStatusMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { message?: string };

      if (res.ok) {
        setStatus("sent");
        setStatusMessage(data.message ?? t.contact.sentOk);
        setValues({ name: "", email: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
        setStatusMessage(data.message ?? t.contact.errApi);
      }
    } catch {
      setStatus("error");
      setStatusMessage(t.contact.errNet);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // اگر کلیپ‌بورد در دسترس نبود، کاربر می‌تواند دستی انتخاب کند
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="glass panel reveal p-6"
      style={{ "--d": "80ms" } as CSSProperties}
      aria-describedby="cf-hint"
    >
      <h3 className="text-[16px] font-bold">{t.contact.formTitle}</h3>
      <p id="cf-hint" className="mt-1.5 text-[12.5px] leading-6 text-mut">
        {t.contact.formHint}
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor="cf-name">{t.contact.labelName}</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            dir={textDir}
            autoComplete="name"
            placeholder={t.contact.phName}
            required
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => onBlur("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            data-invalid={errors.name ? "true" : undefined}
          />
          {errors.name ? (
            <p className="err-msg" id="cf-name-err" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="cf-email">{t.contact.labelEmail}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            placeholder="name@example.com"
            required
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => onBlur("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            data-invalid={errors.email ? "true" : undefined}
          />
          {errors.email ? (
            <p className="err-msg" id="cf-email-err" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="field mt-4">
        <label htmlFor="cf-message">{t.contact.labelMessage}</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          dir={textDir}
          placeholder={t.contact.phMessage}
          required
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => onBlur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          data-invalid={errors.message ? "true" : undefined}
        />
        {errors.message ? (
          <p className="err-msg" id="cf-message-err" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
        >
          <PaperPlaneTilt size={17} weight="fill" aria-hidden="true" />
          {status === "sending" ? t.contact.sending : t.contact.send}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={copyEmail}>
          <Copy size={15} aria-hidden="true" />
          {copied ? t.contact.copied : t.contact.copyEmail}
        </button>
      </div>

      <div role="status" aria-live="polite" className="mt-4">
        {status === "sent" ? (
          <div className="status status-ok">
            <CheckCircle
              weight="fill"
              size={17}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>{statusMessage}</span>
          </div>
        ) : null}
        {status === "error" ? (
          <div className="status status-err">
            <Warning
              weight="fill"
              size={17}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>{statusMessage}</span>
          </div>
        ) : null}
      </div>
    </form>
  );
}
