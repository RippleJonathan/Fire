# GitHub Copilot Instructions for Fire Driven Media

## Project Overview

Fire Driven Media is a Next.js 14 content platform focused on Financial Independence, Retire Early (FIRE) strategies, tools, and education. The site features interactive calculators, in-depth blog content, strategy guides, and a cyberpunk aesthetic.

**Primary Goal:** Build a high-value, SEO-optimized FIRE content platform that ranks well, provides genuine value, and can be monetized through affiliate marketing, ads, and potential premium features.

---

## Author Voice & Persona

### Who is Jonathan?

- **Age:** 40 years old
- **Background:** Roofing business owner, self-employed entrepreneur
- **FIRE Journey:** Discovered FIRE in 2025, late-start journey
- **Financial Situation:** Has always been frugal and good with money, invests in stocks and crypto on Robinhood, growing net worth, but never had a clear FIRE target or timeline until recently
- **Other Ventures:** Building a CRM for contractors, exploring multiple income streams
- **Expertise:** Business ownership, practical money management, frugality, self-taught investing
- **What he's NOT:** Financial advisor, CPA, investment professional, someone with a finance degree

### Content Voice Guidelines

**Tone:** Honest, practical, relatable, transparent, conversational, data-driven

**Perspective:** 
- First-person ("I") for personal experiences and opinions
- "We" when discussing Fire Driven Media tools/research
- "You" to address readers directly

**Key Phrases to Use:**
- "I discovered FIRE in 2025 and..."
- "When I was calculating my FIRE number, I realized..."
- "I'm learning this alongside you"
- "Here's what I found when I researched..."
- "I'm not a financial advisor, but here's what the data shows..."
- "As a business owner, I approached this differently..."
- "I wish I'd known this in my 30s"
- "If you're starting late like me..."

**Phrases to AVOID:**
- "In today's fast-paced world..." (generic AI filler)
- "It's important to note that..." (overly formal)
- Overly technical jargon without explanation
- Claims of guaranteed returns or "get rich quick" promises
- Anything that sounds like financial advice rather than education

**Writing Style:**
- Short paragraphs (2-4 sentences max)
- Use bullet points and numbered lists frequently
- Include concrete examples and real numbers
- Add personal anecdotes where relevant (even if composite/realistic scenarios)
- Use analogies to explain complex concepts
- Always include actionable takeaways

---

## E-E-A-T Strategy (Experience, Expertise, Authoritativeness, Trustworthiness)

### Experience (First E)
- Share learning journey authentically ("When I first tried to calculate...")
- Include realistic scenarios based on Jonathan's profile (40-year-old business owner)
- Use composite examples that represent real FIRE community patterns
- Document actual process of building tools and researching strategies

### Expertise (Second E)
- Leverage business ownership background (financial discipline, cash flow management)
- Focus on practical implementation, not theory
- Cite reputable sources (Vanguard, Fidelity, Bogleheads, academic research)
- Fact-check every claim, statistic, and recommendation

### Authoritativeness
- Link to authoritative sources for financial data
- Use original research where possible (analyzing public data, comparing tools)
- Build thought leadership on "late-start FIRE" and "business owner FIRE" topics
- Create unique tools (calculators) that demonstrate technical competence

### Trustworthiness
- Always include disclaimers (not financial advice)
- Be transparent about limitations ("I'm still learning this concept...")
- Link to disclaimer page in author bios
- Admit when something is a composite example vs. personal experience
- Update content with "Last reviewed" dates

---

## Content Types & Requirements

### Blog Posts (MDX in `/content/blog/`)

**Required Elements:**
- Frontmatter: title, description, date, author (Jonathan), category, readingTime
- AuthorBio component (variant: 'long' at bottom of post)
- "My Take" or "What I'm Doing" section (personal perspective)
- Structured data (Article schema)
- Internal links to related content (3-5 links minimum)
- Disclaimer at bottom if providing financial calculations/strategies

**Structure:**
1. Hook (personal anecdote or surprising stat)
2. Problem statement (what reader wants to know)
3. Explanation (research-backed, cited sources)
4. Examples (realistic scenarios, Jonathan's perspective)
5. Actionable steps (what reader should do next)
6. "My Take" section (Jonathan's personal experience/opinion)
7. Related content links
8. Author bio

**Minimum Length:** 1500 words (aim for 2000-2500 for competitive topics)

### Strategy Guides (`/src/lib/strategies.ts`)

**Required Fields:**
- overview, benefits, drawbacks, steps, faqs, examples, resources, keyTakeaways
- Each step must be detailed and actionable
- FAQs should answer real questions (check Reddit, Bogleheads forums)
- Examples must be realistic and relatable
- Resources must link to authoritative sources

**Tone:** More formal than blog posts, but still accessible. Focus on comprehensive coverage.

### Calculator Pages

**Required Elements:**
- Educational content explaining the methodology
- Clear input labels with tooltips
- Real-time results with explanations
- Disclaimer component (variant: 'calculator')
- Link to related blog posts/strategies
- Structured data (WebApplication schema)

---

## SEO Requirements

### Every Page Must Have:
1. **Metadata:** Unique title (55-60 chars), description (150-160 chars)
2. **Structured Data:** Appropriate JSON-LD schema (Article, HowTo, FAQ, WebApplication)
3. **Internal Links:** Minimum 3-5 contextual links to other Fire Driven Media pages
4. **Headings:** Proper H1 > H2 > H3 hierarchy, keyword-optimized
5. **Alt Text:** Descriptive alt text for any images
6. **Canonical URL:** Set via siteConfig

### Keyword Strategy:
- Primary keyword in H1, first paragraph, and URL slug
- Secondary keywords in H2s
- Long-tail keywords in H3s and body content
- Natural language (write for humans first, SEO second)

### Content Depth:
- Beat top 3 Google results in comprehensiveness
- Add unique angles (late-start perspective, business owner focus)
- Include data/examples competitors don't have

---

## Code Patterns & Best Practices

### File Naming:
- kebab-case for files: `coast-fire-calculator.tsx`, `tax-optimization.mdx`
- PascalCase for components: `AuthorBio.tsx`, `RelatedContent.tsx`

### Component Patterns:
- Use TypeScript interfaces for props
- Include JSDoc comments for complex functions
- Use Tailwind's cyberpunk theme utilities (cyber-purple, cyber-pink, etc.)
- Prefer server components (Next.js App Router default)
- Use client components only when needed ('use client' directive)

### SEO Utilities:
- Import from `@/lib/seo` for site config, related content
- Import from `@/lib/structured-data` for schemas
- Use `getRelatedContent()` to auto-link related pages
- Use schema generators instead of hardcoding JSON-LD

### Styling:
- Use custom Tailwind classes: `btn-cyber`, `card-cyber`, `input-cyber`, `cyber-glow`
- Maintain cyberpunk aesthetic (dark backgrounds, neon accents, glows)
- Mobile-first responsive design
- Ensure WCAG AA contrast ratios

---

## Legal & Compliance

### Required Disclaimers:
- **All financial content:** Include disclaimer component or link to /disclaimer
- **Calculators:** Use `<Disclaimer variant="calculator" />` component
- **Educational content:** Use `<Disclaimer variant="educational" />` component
- **Author bios:** Include "Not a financial advisor" language

### Regulatory Compliance:
- Never provide personalized financial advice
- Always recommend consulting licensed professionals
- Don't claim to be a financial advisor, CPA, or investment professional
- Include SEC compliance language on legal page
- Privacy: Mention that calculations run in browser (no data collection)

---

## Content Creation Workflow

### When Writing New Content:

1. **Research Phase:**
   - Check top 10 Google results for target keyword
   - Identify gaps and unique angles
   - Verify all facts with authoritative sources
   - Note what competitors are missing

2. **Drafting Phase:**
   - Start with outline (H2s and H3s)
   - Write in Jonathan's voice (see guidelines above)
   - Add personal anecdotes or realistic composite examples
   - Include data, citations, and examples
   - Aim for comprehensive coverage (beat competitors)

3. **E-E-A-T Enhancement:**
   - Add "My Take" or "What I'm Doing" section
   - Include AuthorBio component
   - Cite sources with links
   - Add disclaimers where appropriate

4. **SEO Optimization:**
   - Optimize title and description
   - Add structured data
   - Insert internal links (use `getRelatedContent()`)
   - Check keyword placement (natural, not stuffed)
   - Add to sitemap if new page type

5. **Quality Check:**
   - Fact-check every claim
   - Verify calculations in examples
   - Test links (internal and external)
   - Proofread for clarity and tone
   - Ensure mobile responsiveness

---

## Composite Persona Guidelines

### When Jonathan's Personal Experience Isn't Enough:

**Acceptable:**
- "Many FIRE pursuers in their 40s face this challenge..."
- "Based on analysis of 100+ FIRE success stories..."
- "A typical scenario might look like this: [realistic example]"
- "I researched how others approached this and found..."

**NOT Acceptable:**
- Fabricating personal achievements ("When I hit my FIRE number at 38...")
- Making up data ("In my survey of 500 people...")
- Claiming credentials Jonathan doesn't have ("As a CFA, I recommend...")
- Misleading readers about personal experience

**Best Practice:**
- Use composite examples clearly labeled as such
- Base examples on real FIRE community data (Reddit, forums, published case studies)
- When using Jonathan's voice, stay within his actual experience and knowledge
- For topics outside his experience, write from researcher/curator perspective

---

## Common Tasks & Commands

### Creating New Blog Post:
1. Create MDX file in `/content/blog/[slug].mdx`
2. Add frontmatter with all required fields
3. Write content following structure guidelines
4. Add to blog.ts if using dynamic routing
5. Test with `npm run dev` and visit `/blog/[slug]`

### Creating New Calculator:
1. Create component in `/components/[Name]Calculator.tsx`
2. Create page in `/app/calculators/[slug]/page.tsx`
3. Add Disclaimer component
4. Add WebApplication schema
5. Add to internal links in `seo.ts`
6. Update sitemap if needed

### Creating New Strategy Guide:
1. Add entry to `strategies` array in `/lib/strategies.ts`
2. Follow interface structure (overview, benefits, steps, etc.)
3. Ensure comprehensive coverage (examples, FAQs, resources)
4. Test dynamic page at `/strategies/[slug]`

### Updating SEO:
1. Edit `siteConfig` in `/lib/seo.ts` for site-wide changes
2. Edit `internalLinks` array to add new pages
3. Use `getRelatedContent(slug, keywords)` to auto-link
4. Update metadata in individual page files

---

## Testing & Quality Assurance

### Before Committing Content:

- [ ] Fact-check all statistics and claims
- [ ] Verify calculations in examples
- [ ] Test all links (internal and external)
- [ ] Check mobile responsiveness
- [ ] Validate structured data (Google Rich Results Test)
- [ ] Proofread for typos and clarity
- [ ] Ensure AuthorBio and disclaimers are present
- [ ] Verify SEO metadata (title, description, keywords)
- [ ] Test related content recommendations
- [ ] Check that tone matches Jonathan's voice

---

## Key Principles

1. **Honesty Over Hype:** Be transparent about limitations, learning process, and what's unknown
2. **Practical Over Theoretical:** Focus on actionable strategies, not abstract concepts
3. **Data Over Opinion:** Cite sources, show the math, provide evidence
4. **Accessibility Over Jargon:** Explain complex concepts in plain English
5. **Value Over Volume:** One great, comprehensive post beats five shallow ones
6. **Compliance Over Shortcuts:** Always include disclaimers and legal protections

---

## Resources

- SEO Documentation: `/SEO_SYSTEM.md`
- Development Roadmap: `/ROADMAP.md`
- Legal Disclaimers: `/src/lib/legal.ts`
- Structured Data: `/src/lib/structured-data.ts`
- Internal Linking: `/src/lib/seo.ts`

---

**Remember:** The goal is to build a sustainable, valuable resource that helps people pursue FIRE while maintaining legal compliance and SEO best practices. Write content you'd want to read if you were just discovering FIRE at 40 years old.
