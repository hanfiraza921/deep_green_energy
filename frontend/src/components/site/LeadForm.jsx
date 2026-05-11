import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { CheckCircle2, Phone, User, IndianRupee, Loader2, Shield, Mail } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const LeadForm = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", monthly_bill: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid name and 10-digit phone number");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name: form.name.trim(),
        phone: form.phone,
        monthly_bill: String(form.monthly_bill || "0"),
        source: "lead_form",
      });
      setSuccess(true);
      setForm({ name: "", phone: "", monthly_bill: "" });
      toast.success(t("form.success"));
    } catch (err) {
      const msg =
        err?.response?.data?.detail || t("form.error");
      toast.error(typeof msg === "string" ? msg : t("form.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="lead-form-section"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-emerald-50/40 to-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-0 opacity-50" aria-hidden>
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              {t("form.eyebrow")}
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
              {t("form.title")}
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {t("form.subtitle")}
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Government certified consultant",
                "Free site survey + design",
                "End-to-end paperwork support",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-xs text-slate-600 shadow-sm">
              <Shield className="h-3.5 w-3.5 text-emerald-700" />
              <span>Your details are secure & never shared with third parties.</span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-md">
              <a
                href="tel:+919135963415"
                data-testid="contact-phone-direct"
                className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 hover:border-emerald-500 hover:shadow-md transition-all"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Call us
                  </span>
                  <span className="text-sm font-bold text-blue-950">
                    +91 91359 63415
                  </span>
                </div>
              </a>
              <a
                href="mailto:deepgreenenergyindiapvtltd@gmail.com"
                data-testid="contact-email-direct"
                className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-4 py-3 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Email
                  </span>
                  <span className="text-xs font-bold text-blue-950 truncate">
                    deepgreenenergyindiapvtltd@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-12 bottom-12 rounded-3xl bg-gradient-to-br from-emerald-200 to-blue-200 -z-10 blur-md" />
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-950/10 border border-slate-100 p-7 sm:p-10">
                {success ? (
                  <div
                    data-testid="lead-form-success"
                    className="text-center py-10"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-blue-950">
                      {t("form.success")}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Our team will reach out within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSuccess(false)}
                      data-testid="lead-form-reset"
                      variant="outline"
                      className="mt-6 rounded-full"
                    >
                      Submit another response
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="lead-form" className="space-y-5">
                    <div>
                      <Label
                        htmlFor="lead-name"
                        className="text-xs font-bold uppercase tracking-widest text-slate-700"
                      >
                        {t("form.name")}
                      </Label>
                      <div className="relative mt-2">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="lead-name"
                          data-testid="lead-input-name"
                          required
                          minLength={2}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={t("form.placeholderName")}
                          className="h-12 pl-10 rounded-xl border-slate-200 focus-visible:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="lead-phone"
                        className="text-xs font-bold uppercase tracking-widest text-slate-700"
                      >
                        {t("form.phone")}
                      </Label>
                      <div className="relative mt-2">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="lead-phone"
                          data-testid="lead-input-phone"
                          required
                          inputMode="numeric"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                            })
                          }
                          placeholder={t("form.placeholderPhone")}
                          className="h-12 pl-10 rounded-xl border-slate-200 focus-visible:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="lead-bill"
                        className="text-xs font-bold uppercase tracking-widest text-slate-700"
                      >
                        {t("form.bill")}
                      </Label>
                      <div className="relative mt-2">
                        <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="lead-bill"
                          data-testid="lead-input-bill"
                          inputMode="numeric"
                          value={form.monthly_bill}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              monthly_bill: e.target.value.replace(/\D/g, "").slice(0, 6),
                            })
                          }
                          placeholder={t("form.placeholderBill")}
                          className="h-12 pl-10 rounded-xl border-slate-200 focus-visible:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      data-testid="lead-submit-btn"
                      disabled={loading}
                      className="w-full h-14 mt-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-sm shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t("form.submitting")}
                        </>
                      ) : (
                        t("form.submit")
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
