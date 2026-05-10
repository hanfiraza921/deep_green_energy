import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const EligibilityModal = ({ open, onOpenChange }) => {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    rooftop_type: "",
    space: "",
    monthly_bill: "",
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const total = 4;

  const reset = () => {
    setStep(0);
    setAnswers({ rooftop_type: "", space: "", monthly_bill: "", name: "", phone: "" });
    setDone(false);
  };

  const handleClose = (v) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 300);
  };

  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!answers.name.trim() || answers.phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter valid name and phone");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name: answers.name.trim(),
        phone: answers.phone,
        monthly_bill: String(answers.monthly_bill || "0"),
        rooftop_type: answers.rooftop_type,
        system_size: answers.space,
        source: "eligibility_modal",
      });
      setDone(true);
    } catch (err) {
      toast.error(err?.response?.data?.detail || t("form.error"));
    } finally {
      setLoading(false);
    }
  };

  const q1Opts = t("eligibility.q1Opts");
  const q2Opts = t("eligibility.q2Opts");
  const q3Opts = t("eligibility.q3Opts");

  const canNext =
    (step === 0 && !!answers.rooftop_type) ||
    (step === 1 && !!answers.space) ||
    (step === 2 && !!answers.monthly_bill);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-testid="eligibility-modal"
        className="sm:max-w-xl rounded-3xl border-slate-200 p-0 overflow-hidden gap-0"
      >
        <DialogTitle className="sr-only">{t("eligibility.title")}</DialogTitle>
        <DialogDescription className="sr-only">
          Multi-step eligibility check for PM Surya Ghar subsidy.
        </DialogDescription>

        {done ? (
          <div className="p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-9 w-9 text-emerald-600" />
            </div>
            <h3 className="font-heading text-2xl font-black text-blue-950">
              {t("eligibility.eligible")}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {t("eligibility.eligibleDesc")}
            </p>
            <Button
              data-testid="eligibility-close"
              onClick={() => handleClose(false)}
              className="mt-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8"
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="px-7 pt-7 pb-3 bg-gradient-to-br from-emerald-50 to-blue-50 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                {t("eligibility.step")} {step + 1} {t("eligibility.of")} {total}
              </div>
              <h3 className="mt-2 font-heading text-2xl font-black text-blue-950">
                {t("eligibility.title")}
              </h3>
              <Progress
                value={((step + 1) / total) * 100}
                className="mt-4 h-1.5 bg-white"
              />
            </div>

            <div className="p-7">
              {step === 0 && (
                <Step
                  question={t("eligibility.q1")}
                  options={q1Opts}
                  value={answers.rooftop_type}
                  onChange={(v) => setAnswers({ ...answers, rooftop_type: v })}
                  testid="eligibility-q1"
                />
              )}
              {step === 1 && (
                <Step
                  question={t("eligibility.q2")}
                  options={q2Opts}
                  value={answers.space}
                  onChange={(v) => setAnswers({ ...answers, space: v })}
                  testid="eligibility-q2"
                />
              )}
              {step === 2 && (
                <Step
                  question={t("eligibility.q3")}
                  options={q3Opts}
                  value={answers.monthly_bill}
                  onChange={(v) => setAnswers({ ...answers, monthly_bill: v })}
                  testid="eligibility-q3"
                />
              )}
              {step === 3 && (
                <div data-testid="eligibility-q4" className="space-y-5">
                  <h4 className="font-heading text-lg font-bold text-blue-950">
                    {t("eligibility.q4")}
                  </h4>
                  <div>
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                      {t("form.name")}
                    </Label>
                    <Input
                      data-testid="eligibility-input-name"
                      value={answers.name}
                      onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                      placeholder={t("form.placeholderName")}
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-bold uppercase tracking-widest text-slate-700">
                      {t("form.phone")}
                    </Label>
                    <Input
                      data-testid="eligibility-input-phone"
                      inputMode="numeric"
                      value={answers.phone}
                      onChange={(e) =>
                        setAnswers({
                          ...answers,
                          phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                        })
                      }
                      placeholder={t("form.placeholderPhone")}
                      className="mt-2 h-12 rounded-xl"
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                <Button
                  variant="ghost"
                  onClick={back}
                  disabled={step === 0}
                  data-testid="eligibility-back"
                  className="rounded-full text-slate-600"
                >
                  <ArrowLeft className="mr-1.5 h-4 w-4" />
                  {t("eligibility.back")}
                </Button>
                {step < total - 1 ? (
                  <Button
                    onClick={next}
                    disabled={!canNext}
                    data-testid="eligibility-next"
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7"
                  >
                    {t("eligibility.next")}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={submit}
                    disabled={loading}
                    data-testid="eligibility-submit"
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                        {t("form.submitting")}
                      </>
                    ) : (
                      t("eligibility.submit")
                    )}
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Step = ({ question, options, value, onChange, testid }) => {
  return (
    <div data-testid={testid}>
      <h4 className="font-heading text-lg font-bold text-blue-950">{question}</h4>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              data-testid={`${testid}-opt-${opt.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => onChange(opt)}
              className={`text-left rounded-xl border-2 px-4 py-3.5 text-sm font-semibold transition-all ${
                active
                  ? "border-emerald-600 bg-emerald-50 text-blue-950 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-slate-50"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EligibilityModal;
