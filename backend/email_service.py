"""Email notification service for new leads via Resend."""
import os
import asyncio
import logging
import resend
from typing import Optional

logger = logging.getLogger(__name__)

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "").strip()
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev").strip()
NOTIFY_EMAIL = os.environ.get("NOTIFY_EMAIL", "").strip()

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY


def _build_html(lead: dict) -> str:
    rows = []
    for label, key in [
        ("Name", "name"),
        ("Phone", "phone"),
        ("Monthly Bill (₹)", "monthly_bill"),
        ("Rooftop Type", "rooftop_type"),
        ("System Size / Space", "system_size"),
        ("District", "district"),
        ("Source", "source"),
        ("Created At", "created_at"),
    ]:
        val = lead.get(key) or "—"
        rows.append(
            f'<tr><td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;'
            f'color:#475569;font-size:13px;font-weight:600;width:160px;">{label}</td>'
            f'<td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;'
            f'color:#0f172a;font-size:14px;">{val}</td></tr>'
        )
    rows_html = "".join(rows)
    phone = lead.get("phone", "")
    return f"""<!doctype html>
<html><body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;
                    box-shadow:0 4px 16px rgba(15,23,42,0.06);">
        <tr><td style="background:#0f172a;padding:24px 28px;">
          <div style="color:#34d399;font-size:11px;font-weight:700;
                      letter-spacing:2px;text-transform:uppercase;">New Lead Captured</div>
          <div style="color:#ffffff;font-size:22px;font-weight:800;margin-top:6px;">
            Deep Green Energy India
          </div>
          <div style="color:#94a3b8;font-size:13px;margin-top:4px;">
            PM Surya Ghar: Muft Bijli Yojana
          </div>
        </td></tr>
        <tr><td style="padding:28px;">
          <p style="margin:0 0 18px;color:#334155;font-size:14px;line-height:1.6;">
            A new lead has just submitted their details on your website. Reach out within 24 hours
            for the highest conversion rate.
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                 style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
            {rows_html}
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
            <tr>
              <td style="padding-right:8px;">
                <a href="tel:{phone}" style="background:#059669;color:#ffffff;
                   text-decoration:none;padding:12px 22px;border-radius:999px;
                   font-weight:700;font-size:13px;display:inline-block;">
                  Call Lead Now
                </a>
              </td>
              <td>
                <a href="https://wa.me/91{phone}" style="background:#25D366;color:#ffffff;
                   text-decoration:none;padding:12px 22px;border-radius:999px;
                   font-weight:700;font-size:13px;display:inline-block;">
                  WhatsApp
                </a>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:18px 28px;border-top:1px solid #e2e8f0;">
          <div style="color:#64748b;font-size:11px;line-height:1.6;">
            Sent automatically by deepgreenenergy.in lead system.<br/>
            © Deep Green Energy India Pvt Ltd
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>"""


def _send_sync(to_email: str, lead: dict) -> Optional[str]:
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not set — skipping email notification.")
        return None
    if not to_email:
        logger.warning("NOTIFY_EMAIL not set — skipping email notification.")
        return None
    subject = (
        f"🌞 New Solar Lead: {lead.get('name', 'Unknown')} "
        f"({lead.get('phone', 'no phone')})"
    )
    params = {
        "from": f"Deep Green Energy <{SENDER_EMAIL}>",
        "to": [to_email],
        "subject": subject,
        "html": _build_html(lead),
    }
    try:
        resp = resend.Emails.send(params)
        email_id = resp.get("id") if isinstance(resp, dict) else None
        logger.info(f"Lead notification email sent: id={email_id} to={to_email}")
        return email_id
    except Exception as e:
        logger.error(f"Failed to send lead notification: {e}")
        return None


async def send_lead_notification(lead: dict) -> Optional[str]:
    """Async, non-blocking wrapper. Returns email_id or None."""
    return await asyncio.to_thread(_send_sync, NOTIFY_EMAIL, lead)
