# 📊 Google Search Console Setup Guide

This guide walks through submitting your Fire Driven Media site to Google Search Console and getting indexed in Google search results.

---

## What is Google Search Console?

Google Search Console (GSC) is a free tool that:
- Tells Google about your site and all its pages (via sitemap)
- Shows you what keywords you're ranking for
- Alerts you to errors Google finds
- Tracks your search performance (impressions, clicks, CTR)
- Helps you get indexed faster

**Critical for SEO:** Without submitting to GSC, Google might take months to find and index your site naturally.

---

## Prerequisites

- [x] Site is live at `https://firedrivenmedia.com`
- [x] DNS is configured with SSL certificate
- [x] Sitemap.xml created (`/public/sitemap.xml`)
- [x] Robots.txt created (`/public/robots.txt`)
- [ ] Google account (use your existing Gmail)

---

## Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Start Now" or "Add Property"

---

## Step 2: Add Your Property

### Choose Property Type

You'll see two options:
1. **Domain** - Verifies all subdomains and protocols (recommended)
2. **URL Prefix** - Verifies specific URL only

**For Fire Driven Media, choose "Domain":**
- Enter: `firedrivenmedia.com`
- Click "Continue"

---

## Step 3: Verify Ownership

Google needs to verify you own the domain. You have several options:

### Option 1: DNS Verification (Recommended)

Google will give you a TXT record to add to your DNS.

**Steps:**
1. Copy the TXT record Google provides (looks like: `google-site-verification=ABC123XYZ...`)
2. Go to your domain registrar (where you bought `firedrivenmedia.com`)
3. Add a new DNS record:
   - **Type:** TXT
   - **Name:** @ (or leave blank)
   - **Value:** Paste the verification code
   - **TTL:** 3600 (or default)
4. Save the DNS record
5. Wait 5-10 minutes for DNS to propagate
6. Go back to Google Search Console and click "Verify"

### Option 2: HTML File Upload (Alternative)

1. Google provides an HTML file to download
2. Upload it to your site's root directory (`/public/`)
3. Verify it's accessible at: `https://firedrivenmedia.com/google[code].html`
4. Click "Verify" in Google Search Console

### Option 3: HTML Tag (Alternative)

1. Google provides a meta tag like: `<meta name="google-site-verification" content="ABC123..." />`
2. Add it to your site's `<head>` section (in `src/app/layout.tsx`)
3. Deploy the change
4. Click "Verify"

**Recommendation:** Use DNS verification (Option 1) - it's cleaner and doesn't require code changes.

---

## Step 4: Submit Your Sitemap

Once verified:

1. In Google Search Console, select your property (`firedrivenmedia.com`)
2. In the left sidebar, click "Sitemaps"
3. Under "Add a new sitemap," enter: `sitemap.xml`
4. Click "Submit"

**Result:** Google will show "Success" and start crawling your pages.

**What happens next:**
- Google crawls your sitemap (within 24 hours)
- Google indexes your pages (1-7 days for most pages)
- You'll start appearing in search results (weeks to months, depending on competition)

---

## Step 5: Monitor Your Index Status

### Check Coverage
1. In GSC, go to "Coverage" (or "Pages")
2. You should see:
   - **Valid pages:** 14 pages indexed (homepage, blog, calculators, strategies, about, disclaimer)
   - **Excluded pages:** 0 (ideally)
   - **Errors:** 0 (ideally)

**If you see errors:**
- Click on the error type to see details
- Fix the issue on your site
- Click "Validate Fix" in GSC
- Wait for Google to re-crawl (can take days)

### Request Indexing for Important Pages

For your most important pages, manually request indexing:

1. In GSC, go to "URL Inspection" (top bar)
2. Enter URL: `https://firedrivenmedia.com/calculators/fire`
3. Click "Request Indexing"
4. Repeat for:
   - Homepage: `https://firedrivenmedia.com/`
   - Blog posts: `/blog/4-percent-rule`, `/blog/coast-fire-guide`, etc.
   - Calculators: `/calculators/fire`, `/calculators/coast-fire`

**Limit:** You can request ~10 URLs/day. Prioritize your best content.

---

## Step 6: What to Expect

### Week 1
- **Indexed pages:** 0-5 pages
- **Impressions:** 0-10 (mostly branded searches if any)
- **Clicks:** 0-1

### Month 1
- **Indexed pages:** 10-14 pages (most/all of your content)
- **Impressions:** 10-100 (long-tail keywords, calculator searches)
- **Clicks:** 0-5 (very low traffic, normal for new sites)

### Month 3
- **Indexed pages:** All pages + any new content
- **Impressions:** 100-1,000 (ranking for some long-tail keywords)
- **Clicks:** 10-50 (calculators start getting traffic)

### Month 6+
- **Impressions:** 1,000-10,000+ (ranking for more competitive keywords)
- **Clicks:** 100-500+ (real traffic, AdSense-viable)

**Reality check:** Most new sites see little to no traffic for the first 3-6 months. This is normal. Keep publishing quality content and building backlinks.

---

## Step 7: Track Your Progress

### Key Metrics to Monitor

**In Google Search Console:**

1. **Total Clicks** (Performance → Total Clicks)
   - Goal: Steady growth month-over-month
   - Realistic: 0-5 clicks/month in first 3 months

2. **Average Position** (Performance → Average Position)
   - Goal: Under 20 for target keywords
   - Realistic: 40-100+ in first 6 months for competitive keywords

3. **Top Queries** (Performance → Queries)
   - What keywords are driving traffic
   - Optimize content for these keywords

4. **Top Pages** (Performance → Pages)
   - Which pages get the most traffic
   - Double down on what's working

### Set Up Email Alerts

1. In GSC, go to "Settings" (gear icon)
2. Enable email notifications for:
   - Coverage issues
   - Manual actions
   - Security issues

**This alerts you to problems immediately** (e.g., Google penalizing your site).

---

## Step 8: Link Google Search Console to Google Analytics

**If you have Google Analytics 4 set up** (you do, with tracking ID `G-430JQNC6G0`):

1. In Google Analytics, go to "Admin"
2. Under "Property," click "Product Links"
3. Click "Link Search Console"
4. Select your GSC property (`firedrivenmedia.com`)
5. Click "Link"

**Benefits:**
- See GSC data in GA4 (queries, landing pages, CTR)
- Cross-reference traffic sources
- Better attribution tracking

---

## Troubleshooting

### "Site not indexed after 2 weeks"
- Check GSC "Coverage" for errors
- Verify sitemap was submitted successfully
- Manually request indexing for key pages
- Check robots.txt isn't blocking Google (should show `Allow: /`)

### "Pages indexed but no impressions"
- Normal for new sites (can take 1-3 months)
- Keep publishing content
- Build backlinks (Reddit, forums, guest posts)
- Focus on long-tail keywords with lower competition

### "Manual action" or penalty
- Check GSC "Manual Actions" section
- Follow Google's instructions to fix
- Submit reconsideration request
- **Prevention:** Never buy backlinks, avoid keyword stuffing, don't plagiarize

---

## Next Steps After GSC Setup

1. **Build backlinks:**
   - Comment on Reddit r/Fire, r/PersonalFinance (helpful, with link)
   - Answer questions on Bogleheads forums
   - Guest post on other FIRE blogs
   - Get listed in FIRE resource directories

2. **Keep publishing:**
   - 1-2 blog posts per week (max)
   - Focus on unique angles ("late start FIRE," "business owner FIRE")
   - Update old posts (keeps them fresh in Google's eyes)

3. **Monitor competitors:**
   - Search your target keywords
   - See what ranks in top 10
   - Make your content better/longer/more unique

4. **Build email list:**
   - Add email capture to site
   - Offer free FIRE calculator PDF or checklist
   - Email new blog posts to subscribers
   - Builds audience even before SEO traffic arrives

---

## Timeline Summary

| Timeline | Action | Expected Result |
|----------|--------|-----------------|
| Day 1 | Submit to GSC | Sitemap accepted |
| Week 1 | Google crawls sitemap | 5-10 pages indexed |
| Week 2-4 | Most pages indexed | 10-14 pages indexed |
| Month 1-3 | Start ranking for long-tail | 10-100 impressions/month |
| Month 3-6 | Rank for mid-competition | 100-1,000 impressions/month |
| Month 6-12 | Rank for competitive terms | 1,000-10,000+ impressions/month |

**Key insight:** SEO is a long game. Focus on quality content and E-E-A-T signals (which you're doing). Results compound over time.

---

## Your Sitemap Contents

Your sitemap includes:
- Homepage: `/`
- About: `/about`
- Disclaimer: `/disclaimer`
- Blog index: `/blog`
- 4 blog posts: `/blog/4-percent-rule`, `/blog/coast-fire-guide`, `/blog/tax-optimization-fire`, `/blog/index-funds-vs-stocks`
- Calculator index: `/calculators`
- 2 calculators: `/calculators/fire`, `/calculators/coast-fire`
- Strategy index: `/strategies`
- 2 strategies: `/strategies/traditional-fire`, `/strategies/coast-fire`

**Total: 14 URLs**

As you add more content, you'll need to update the sitemap. You can do this manually or set up dynamic sitemap generation later.

---

**You're ready to submit! 🚀**

This is the most important step for getting your content in front of people. Even though it takes months to see results, submitting to GSC today starts the clock.
