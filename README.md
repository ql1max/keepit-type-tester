# Keepit Type Tester

An interactive typography testing tool for fine-tuning Plus Jakarta Sans letter spacing across your design system.

## Features

- **Live Letter Spacing Adjustment** - Real-time sliders for all heading and body text sizes
- **Side-by-Side Comparison** - Compare current system vs. adjusted values
- **Custom Text Preview** - Test with your own brand name and content
- **Dark Mode Support** - Toggle between light and dark themes
- **Preset Options** - Try recommended values, optical scaling, or reset to current system
- **CSS Export** - Copy finalized letter-spacing values directly to your clipboard
- **Challenging Letter Pairs** - Test edge cases with difficult letter combinations

## Project Structure

```
keepit-type-tester/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and typography rules
├── js/
│   └── app.js          # Interactive functionality
└── README.md           # This file
```

## Local Development

Simply open `index.html` in your browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (with npx)
npx http-server
```

Then navigate to `http://localhost:8000`

## Hosting on GitHub Pages

### 1. Create a New Private Repository

```bash
cd keepit-type-tester
git init
git add .
git commit -m "Initial commit: Keepit Type Tester"
```

### 2. Create Private Repo on GitHub

1. Go to [GitHub](https://github.com/new)
2. Name your repository (e.g., `keepit-type-tester`)
3. Choose **Private** repository
4. Don't initialize with README (you already have one)
5. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/keepit-type-tester.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/keepit-type-tester/`

**Note:** Even though your repo is private, GitHub Pages will make the site publicly accessible. If you need true privacy, consider these alternatives:

### Alternative Hosting Options for Private Access

1. **Vercel** (with authentication)
   - Import your private GitHub repo
   - Add password protection via Vercel settings

2. **Netlify** (with authentication)
   - Connect your private GitHub repo
   - Enable password protection or SSO

3. **Internal Server**
   - Host on your company's internal network
   - Only accessible via VPN

## Usage

1. **Adjust Sliders** - Fine-tune letter spacing for each typography level
2. **Type Custom Text** - Enter your brand name or content to see real-time updates
3. **Compare Panels** - View current system vs. adjusted values side-by-side
4. **Test Dark Mode** - Toggle dark mode to ensure spacing works in both themes
5. **Try Presets** - Use "Recommended Values" or "Optical Scaling" as starting points
6. **Export CSS** - Copy your finalized values to implement in your design system

## Typography Scale

### Current System (with 62.5% base)

**Note:** Uses `html { font-size: 62.5%; }` so **1rem = 10px** for easier calculations.

- **H1:** 6.4rem (64px) / 600 weight / -0.020em letter spacing
- **H2:** 4.8rem (48px) / 600 weight / -0.020em letter spacing
- **H3:** 3.8rem (38px) / 600 weight / -0.020em letter spacing
- **H4:** 3.0rem (30px) / 600 weight / -0.020em letter spacing
- **H5:** 2.4rem (24px) / 500 weight / -0.015em letter spacing
- **H6:** 2.0rem (20px) / 500 weight / -0.010em letter spacing
- **Body:** 1.6rem (16px) / 400 weight / 0.000em letter spacing
- **Small:** 1.4rem (14px) / 400 weight / 0.010em letter spacing
- **Caption:** 1.2rem (12px) / 400 weight / 0.020em letter spacing

### Production Settings

Matches Keepit.com production:
- Font smoothing: `-webkit-font-smoothing: antialiased`
- Background: `#fdfbfb` (warm off-white)
- Text color: `#454545` (medium gray)
- Selection color: `#CCF6E5` (mint green)

### Letter Spacing Best Practices

**For Plus Jakarta Sans:**
- **Large headings (H1-H3):** Slightly negative spacing (-1% to -1.5%) works well with antialiasing
- **Medium headings (H4-H6):** Minimal negative to neutral spacing (-0.5% to 0%)
- **Body text:** Slight positive spacing (0.5-1%) improves readability for long-form content
- **Small text:** Positive spacing (1-1.5%) essential for legibility
- **Caption text:** Higher positive spacing (1.5-2%) compensates for small size

**Why increase spacing for smaller sizes?**
- Screen rendering benefits from more breathing room at small sizes
- Antialiasing makes letters appear slightly bolder, requiring more space
- Improves distinction between similar letterforms
- Reduces eye strain for longer reading sessions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Internal use only - Keepit Design Team

---

Built with ❤️ for perfect typography
