# Deep Green Energy India — Landing Page PRD

## Original Problem Statement
Build a high-converting, professional landing page for Deep Green Energy India Pvt Ltd, focused on the PM Surya Ghar: Muft Bijli Yojana (Free Electricity Scheme).

Visual: Clean white + eco green + corporate blue. Modern bold sans-serif. Trustworthy, gov-aligned, technologically advanced.

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + react-fast-marquee
- Backend: FastAPI + MongoDB (motor)
- i18n: Custom Context (EN/HI)

## User Personas
- Bihar homeowners with monthly electricity bills > ₹1,500
- Apartment / commercial owners exploring subsidy schemes

## Core Requirements (Static)
- Sticky header with logo, language switcher, Apply Now CTA
- Hero with dual CTA (Check Eligibility, Get Free Quote)
- Subsidy benefit grid (1KW/₹30K, 2KW/₹60K, 3KW+/₹78K)
- Key features grid (zero bill, 30y warranty, financing, support)
- Partners marquee (solar OEMs + banks)
- Bihar service banner
- Lead generation form (Name, Phone, Bill)
- Multi-step eligibility modal

## Implemented (Dec 2025)
- ✅ All sections built per design guidelines
- ✅ Backend: POST/GET /api/leads, GET /api/leads/stats
- ✅ EN/HI language switcher with full translations
- ✅ Multi-step eligibility modal (4 steps)
- ✅ All interactive elements have data-testid
- ✅ 100% backend + frontend tests passed

## Backlog
- P1: Translate hero floating badges (₹78,000 Max Subsidy, 30-Yr Warranty) for HI
- P1: Admin dashboard to view leads
- P2: Email/WhatsApp notification on new lead (Resend/Twilio)
- P2: District selector with on-ground team contacts
- P2: ROI calculator (system size vs savings)
- P2: Customer testimonials section with photos
