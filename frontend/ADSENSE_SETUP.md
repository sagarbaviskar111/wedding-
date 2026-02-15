# Google AdSense Integration Guide

## 🎯 Overview
This website is fully prepared for Google AdSense monetization with strategic ad placements optimized for user experience and revenue.

---

## 📍 Ad Placements

### 1. **Header Ad** (After Hero Section)
- **Location**: Below the main hero/CTA section
- **Format**: Horizontal banner (728x90 or responsive)
- **Component**: `<HeaderAd />`
- **Best For**: High visibility, above the fold

### 2. **In-Feed Ads** (Between Content Sections)
- **Location**: 
  - Between Features and Templates sections
  - After Templates section
- **Format**: Responsive/Fluid
- **Component**: `<InFeedAd />`
- **Best For**: Native advertising, blends with content

### 3. **Sidebar Ad** (For Blog/Help Pages)
- **Location**: Right sidebar on desktop
- **Format**: Vertical (300x600 or 160x600)
- **Component**: `<SidebarAd />`
- **Best For**: Blog posts, long-form content

### 4. **Footer Ad** (Before Footer)
- **Location**: Above footer section
- **Format**: Horizontal banner or responsive
- **Component**: `<FooterAd />`
- **Best For**: Additional revenue without disrupting UX

---

## ⚙️ Setup Instructions

### Step 1: Get Your AdSense Account
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up or log in
3. Add your website
4. Wait for approval (usually 1-2 weeks)

### Step 2: Get Your Publisher ID
1. Once approved, go to AdSense dashboard
2. Navigate to **Account** → **Settings**
3. Copy your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### Step 3: Update Code

#### A. Update Layout (Already Done ✅)
File: `src/app/layout.tsx`
```typescript
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```
**Replace** `ca-pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID

#### B. Update GoogleAd Component
File: `src/components/GoogleAd.tsx` (Line 25)
```typescript
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense ID
```

#### C. Create Ad Units in AdSense
1. Go to **Ads** → **By ad unit**
2. Create 4 ad units:
   - **Header Ad** → Get slot ID
   - **In-Feed Ad** → Get slot ID
   - **Sidebar Ad** → Get slot ID
   - **Footer Ad** → Get slot ID

#### D. Update Slot IDs
File: `src/components/GoogleAd.tsx`
```typescript
export function HeaderAd() {
  return (
    <GoogleAd
      adSlot="1234567890" // Replace with actual Header Ad slot ID
      adFormat="horizontal"
    />
  );
}

export function InFeedAd() {
  return (
    <GoogleAd
      adSlot="0987654321" // Replace with actual In-Feed Ad slot ID
      adFormat="fluid"
    />
  );
}

// ... update others similarly
```

---

## 📱 Mobile Optimization

All ads are **fully responsive** and optimized for mobile:
- ✅ Auto-sizing based on screen width
- ✅ Touch-friendly spacing
- ✅ Non-intrusive placement
- ✅ Fast loading with lazy loading

---

## 💰 Revenue Optimization Tips

### 1. **Strategic Placement**
- ✅ Header Ad: High visibility
- ✅ In-Feed Ads: Natural integration
- ✅ Don't overload: 3-4 ads per page max

### 2. **Ad Formats**
- **Responsive Display Ads**: Best for all devices
- **In-Feed Ads**: Blend with content
- **Matched Content**: Increase engagement

### 3. **Content Quality**
- Write valuable blog posts
- Update content regularly
- Focus on wedding-related keywords

### 4. **Traffic Sources**
- SEO optimization (already done ✅)
- Social media marketing
- Pinterest (great for weddings!)
- Wedding forums and communities

---

## 🚫 AdSense Policies (Important!)

### ✅ DO:
- Provide valuable content
- Ensure fast page load times
- Make ads clearly distinguishable
- Follow Google's webmaster guidelines

### ❌ DON'T:
- Click your own ads
- Ask others to click ads
- Place ads on error pages
- Use misleading ad labels
- Have more than 3 ad units per page

---

## 📊 Expected Revenue

### Factors:
1. **Traffic**: More visitors = more revenue
2. **Niche**: Wedding niche has good CPC (₹5-₹20 per click)
3. **Geography**: Indian traffic (₹2-₹10 CPC)
4. **Ad Placement**: Strategic placement increases CTR

### Estimates (Monthly):
| Traffic | Estimated Revenue |
|---------|------------------|
| 1,000 visitors | ₹500 - ₹2,000 |
| 10,000 visitors | ₹5,000 - ₹20,000 |
| 50,000 visitors | ₹25,000 - ₹1,00,000 |
| 100,000 visitors | ₹50,000 - ₹2,00,000 |

*Note: Actual revenue varies based on CTR, CPC, and other factors*

---

## 🎯 Alternative Ad Networks (If AdSense Rejects)

1. **Media.net** (Yahoo/Bing ads)
2. **PropellerAds** (Good for Indian traffic)
3. **Adsterra**
4. **Infolinks** (In-text ads)
5. **Ezoic** (AI-optimized ads)

---

## 📈 Tracking Performance

### Google AdSense Dashboard
- **Earnings**: Daily/Monthly revenue
- **CTR**: Click-through rate
- **CPC**: Cost per click
- **RPM**: Revenue per 1000 impressions

### Google Analytics
- Track which pages generate most ad revenue
- Analyze user behavior
- Optimize content strategy

---

## 🔧 Troubleshooting

### Ads Not Showing?
1. **Check Publisher ID**: Ensure it's correct
2. **Wait 24-48 hours**: Ads take time to appear
3. **Check Ad Blockers**: Disable for testing
4. **Verify Domain**: Ensure domain is approved

### Low Revenue?
1. **Increase Traffic**: Focus on SEO
2. **Improve Content**: Write valuable articles
3. **Optimize Placement**: Test different positions
4. **Target High-CPC Keywords**: Wedding planning, luxury weddings

---

## 📝 Checklist

Before going live:
- [ ] AdSense account approved
- [ ] Publisher ID added to layout.tsx
- [ ] Publisher ID added to GoogleAd.tsx
- [ ] All 4 ad units created in AdSense
- [ ] All slot IDs updated in code
- [ ] Tested on mobile and desktop
- [ ] Verified ads are showing
- [ ] Checked page load speed
- [ ] Read AdSense policies

---

## 🎉 You're Ready!

Your website is now **fully prepared for Google AdSense**. Just:
1. Get approved
2. Update IDs
3. Start earning!

**Good luck with monetization!** 💰✨

---

**Last Updated**: February 2026  
**Version**: 1.0
