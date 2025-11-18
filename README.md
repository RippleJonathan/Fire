# Velocity FI - Financial Independence Blog

A modern, high-performance financial independence blog built with Next.js, featuring interactive calculators and a cyberpunk aesthetic.

## 🚀 Features

### Core Philosophy
- **Speed**: Sub-100ms page loads with Next.js 16
- **Aesthetic**: Cyberpunk dark theme with neon cyan/magenta/green accents
- **Utility**: Interactive calculators embedded directly in articles

### Content Clusters (Hub & Spoke Model)

#### 🟢 Wealth Algorithms
*Target: Tech workers & Young Professionals*
- Hub: [The Mathematical Path to Financial Independence](/wealth-algorithms)
- Spoke: [The 4% Rule is Deprecated](/wealth-algorithms/four-percent-rule)

#### 🔵 High-Yield Banking
*Target: Cash-heavy savers*
- Hub: [Optimizing Liquid Assets: The Best HYSAs](/high-yield-banking)

#### 🟣 Tax Optimization
*Target: High earners*
- Hub: [The Mega-Backdoor Roth](/tax-optimization)

### Interactive Tools
- **Compound Interest Calculator** - Visualize growth with real-time charts
- **Time to FI Calculator** - Calculate your path to financial independence
- **Tax Drag Calculator** - Compare tax-advantaged vs taxable accounts
- **Product Cards** - Native affiliate integration
- **Ad Slots** - Programmatic ad injection with layout shift prevention

### Programmatic SEO
- Dynamic comparison pages: `/compare/[ticker]-vs-[ticker]`
- Support for popular tickers: VTSAX, VTI, VOO, SPY, SCHD
- SEO-optimized with featured snippet targeting

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Content**: MDX for content-as-code
- **Charts**: Recharts
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Fire/
├── app/                          # Next.js app directory
│   ├── wealth-algorithms/        # Cluster A: FIRE content
│   ├── high-yield-banking/       # Cluster B: Banking content
│   ├── tax-optimization/         # Cluster C: Tax strategies
│   ├── tools/                    # All calculators page
│   ├── compare/[comparison]/     # Programmatic SEO pages
│   ├── layout.tsx                # Root layout with nav/footer
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles & theme
├── components/                   # React components
│   ├── CompoundInterestSlider.tsx
│   ├── TimeToFICalculator.tsx
│   ├── TaxDragCalculator.tsx
│   ├── ProductCard.tsx
│   ├── AdSlot.tsx
│   └── Navigation.tsx
├── mdx-components.tsx            # MDX component mapping
├── next.config.ts                # Next.js configuration
└── package.json
```

## 🎨 Theme & Design

### Color Palette
- **Background**: `#0a0a0f` (deep dark)
- **Foreground**: `#e0e0e0` (light gray)
- **Neon Cyan**: `#00ffff` (primary accent)
- **Neon Magenta**: `#ff00ff` (secondary accent)
- **Neon Yellow**: `#ffff00` (highlights)
- **Terminal Green**: `#39ff14` (success states)

### Typography
- Monospace font family for terminal aesthetic
- Neon text shadow effects on headings
- Responsive font sizes

## 📝 Content Strategy

### Hub & Spoke Model
Each content cluster has:
- **1 Hub (Pillar Page)**: Comprehensive overview
- **3-5 Spokes**: Deep-dive articles linked from hub
- Internal linking to guide reader journey

### Target Keywords
- Primary: "FIRE", "financial independence", "early retirement"
- Secondary: "4% rule", "tax optimization", "high-yield savings"
- Long-tail: "mega backdoor roth", "tax loss harvesting", "HYSA comparison"

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎯 Roadmap

### Phase 5: Additional Tools
- [ ] Asset Allocation Optimizer
- [ ] Withdrawal Strategy Simulator
- [ ] Roth Conversion Ladder Planner
- [ ] Coast FIRE Calculator

### Phase 6: Content Expansion
- [ ] Complete all spoke articles (15 total)
- [ ] Add case studies
- [ ] Create glossary/wiki

### Phase 7: API Integration
- [ ] Real-time stock data for comparison pages
- [ ] Interest rate tracking for HYSAs
- [ ] Tax bracket updates

---

**Built for speed. Optimized for wealth.**

*Not financial advice. Do your own research.*
