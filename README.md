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

### Current System
- **H1:** 64px / 600 weight / -2% letter spacing
- **H2:** 48px / 600 weight / -2% letter spacing
- **H3:** 38px / 600 weight / -2% letter spacing
- **H4:** 30px / 600 weight / -2% letter spacing
- **H5:** 24px / 500 weight / -1.5% letter spacing
- **H6:** 20px / 500 weight / -1% letter spacing
- **Body:** 16px / 400 weight / 0% letter spacing
- **Small:** 14px / 400 weight / 1% letter spacing
- **Caption:** 12px / 400 weight / 2% letter spacing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Internal use only - Keepit Design Team

---

Built with ❤️ for perfect typography
