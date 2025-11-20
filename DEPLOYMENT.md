# 🚀 Deployment Guide: Fire Driven Media on Vercel

This guide walks you through deploying your Fire Driven Media site to Vercel and connecting your custom domain `firedrivenmedia.com`.

---

## Prerequisites

- [x] GitHub account (you have: RippleJonathan/Fire)
- [x] Domain registered: `firedrivenmedia.com`
- [ ] Vercel account (free tier is perfect for this)

---

## Step 1: Push Your Code to GitHub

Your code is already in your GitHub repository (`RippleJonathan/Fire`), so this step is done!

**Verify your latest changes are pushed:**

```powershell
git status
git add .
git commit -m "Update branding to Fire Driven Media, add logo and author photo, configure for Vercel"
git push origin main
```

---

## Step 2: Create Vercel Account and Import Project

### 2.1 Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Repository
1. Once logged in, click "Add New..." → "Project"
2. Vercel will show your GitHub repositories
3. Find "Fire" repository and click "Import"
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js ✅ (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `next build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
5. Click "Deploy"

**Vercel will now build and deploy your site** (takes 2-3 minutes).

---

## Step 3: Get Your Vercel Deployment URL

Once deployment finishes, you'll get a URL like:
```
https://fire-ripplejonathan.vercel.app
```

**Test your site:**
- Visit the URL
- Check that the homepage loads
- Verify the logo and author photo appear
- Test navigation links (About, Blog, Calculators, Strategies)
- Check the disclaimer page

---

## Step 4: Connect Your Custom Domain

### 4.1 Add Domain in Vercel
1. In your Vercel project dashboard, click "Settings"
2. Click "Domains" in the left sidebar
3. Click "Add Domain"
4. Enter: `firedrivenmedia.com`
5. Click "Add"

### 4.2 Configure DNS Records

Vercel will show you the DNS records you need to add. You'll need to add these in your domain registrar's DNS settings.

**Option A: If you want to use `firedrivenmedia.com` (root domain):**

Add these DNS records at your domain registrar:

| Type  | Name | Value                      | TTL  |
|-------|------|----------------------------|------|
| A     | @    | 76.76.21.21                | 3600 |
| CNAME | www  | cname.vercel-dns.com       | 3600 |

**Option B: If you want to use `www.firedrivenmedia.com`:**

Add this DNS record:

| Type  | Name | Value                      | TTL  |
|-------|------|----------------------------|------|
| CNAME | www  | cname.vercel-dns.com       | 3600 |

**Recommendation:** Use both (root + www) so people can access your site either way.

### 4.3 Where to Add DNS Records

This depends on where you registered your domain. Common registrars:

**GoDaddy:**
1. Log in to GoDaddy
2. Go to "My Products" → "Domains"
3. Click on `firedrivenmedia.com`
4. Click "DNS" or "Manage DNS"
5. Add the records shown above

**Namecheap:**
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to `firedrivenmedia.com`
4. Click "Advanced DNS"
5. Add the records shown above

**Cloudflare:**
1. Log in to Cloudflare
2. Select `firedrivenmedia.com`
3. Go to "DNS"
4. Add the records shown above
5. **Important:** Set proxy status to "DNS only" (gray cloud, not orange)

### 4.4 Verify Domain

After adding DNS records:
1. Go back to Vercel → Settings → Domains
2. Vercel will automatically verify your domain (can take up to 48 hours, usually much faster)
3. Once verified, you'll see a green checkmark next to your domain

**Note:** DNS changes can take 1-48 hours to propagate globally, but often work within 10-30 minutes.

---

## Step 5: Set Primary Domain

Once your custom domain is verified:

1. In Vercel → Settings → Domains
2. Find `firedrivenmedia.com` in the list
3. Click the three dots (•••) next to it
4. Select "Set as Primary Domain"

This ensures all traffic redirects to your custom domain (not the `.vercel.app` URL).

---

## Step 6: Configure SSL/HTTPS

**Good news:** Vercel automatically provisions SSL certificates for all domains (free, via Let's Encrypt).

- Your site will be served over HTTPS automatically
- SSL certificates renew automatically
- No configuration needed!

---

## Step 7: Update Site Configuration

Once your domain is live, update your site config to use the production domain:

**File: `src/lib/seo.ts`**

Verify the URL is set to:
```typescript
url: 'https://firedrivenmedia.com',
ogImage: 'https://firedrivenmedia.com/og-image.jpg',
```

✅ Already done in your current code!

---

## Step 8: Test Your Live Site

Once DNS propagates and Vercel verifies your domain:

1. Visit `https://firedrivenmedia.com`
2. **Test all pages:**
   - Homepage: Check calculator, author bio, navigation
   - About page: Check your story and photo
   - Blog posts: Check that all 4 posts load
   - Strategies: Check both strategy guides
   - Calculators: Test FIRE and Coast FIRE calculators
   - Disclaimer: Verify legal page loads
3. **Test SEO:**
   - View page source (right-click → "View Page Source")
   - Search for "application/ld+json" - should see structured data
   - Check that meta tags include your domain
4. **Test performance:**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Run [GTmetrix](https://gtmetrix.com/)
   - Should score 90+ on performance

---

## Troubleshooting

### Domain not working after 24 hours?

**Check DNS propagation:**
```powershell
nslookup firedrivenmedia.com
```

Should return Vercel's IP: `76.76.21.21`

Or use online tool: [whatsmydns.net](https://www.whatsmydns.net/)

### SSL certificate not provisioning?

1. Ensure DNS records are correct
2. Remove and re-add the domain in Vercel
3. Wait 10-15 minutes and try again

### Images not loading?

1. Verify images are in `/public` folder
2. Check `next.config.js` includes `firedrivenmedia.com` in image domains
3. Redeploy: `git push origin main` (Vercel auto-deploys)

---

## Continuous Deployment

**Great news:** Every time you push to your `main` branch on GitHub, Vercel automatically:
1. Detects the push
2. Builds your site
3. Deploys the new version
4. Updates `firedrivenmedia.com`

**Workflow:**
```powershell
# Make changes locally
git add .
git commit -m "Add new blog post"
git push origin main

# Vercel auto-deploys in 2-3 minutes
# Check deployment status at vercel.com/dashboard
```

---

## Optional: Environment Variables

If you need to add analytics, API keys, etc.:

1. Go to Vercel → Settings → Environment Variables
2. Add variables (e.g., `NEXT_PUBLIC_GA_ID` for Google Analytics)
3. Redeploy for changes to take effect

---

## Performance Optimizations (Already Configured!)

Your `next.config.js` includes:

- ✅ `reactStrictMode: true` - Better debugging
- ✅ `compress: true` - Gzip compression
- ✅ `poweredByHeader: false` - Security (hides Next.js version)
- ✅ Image optimization with AVIF/WebP formats

---

## Next Steps After Deployment

1. **Submit sitemap to Google:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://firedrivenmedia.com`
   - Submit sitemap: `https://firedrivenmedia.com/sitemap.xml`

2. **Set up analytics:**
   - Add Google Analytics 4 (free)
   - Or use Vercel Analytics (built-in, also free)

3. **Monitor performance:**
   - Use Vercel's built-in analytics
   - Check Core Web Vitals in Google Search Console

4. **Keep building:**
   - Add more blog posts (use CONTENT_VOICE.md guide)
   - Create additional calculators
   - Build out more strategy guides

---

## Deployment Checklist

- [ ] Code pushed to GitHub (`RippleJonathan/Fire`)
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Initial deployment successful (`.vercel.app` URL works)
- [ ] Custom domain added in Vercel
- [ ] DNS records configured at domain registrar
- [ ] Domain verified in Vercel (green checkmark)
- [ ] Primary domain set to `firedrivenmedia.com`
- [ ] SSL certificate provisioned (HTTPS working)
- [ ] All pages tested on live site
- [ ] Sitemap submitted to Google Search Console
- [ ] Analytics configured (optional)

---

## Support

**Vercel Documentation:**
- [Deploy Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

**Need help?**
- Vercel Discord: [discord.gg/vercel](https://discord.gg/vercel)
- Next.js Discord: [nextjs.org/discord](https://nextjs.org/discord)

---

**Your site is ready to launch! 🚀**

Once DNS propagates, `https://firedrivenmedia.com` will be live and serving your FIRE content to the world.
