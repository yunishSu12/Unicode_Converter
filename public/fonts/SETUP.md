# Preeti Font Setup

To display Preeti text properly in the web application, you need to add the Preeti font file.

## Quick Setup

1. **Download Preeti Font**
   - Visit: https://www.fontspace.com/preeti-font-f3384
   - Or: https://www.wfonts.com/font/preeti
   - Download the `Preeti.ttf` file

2. **Add to Project**
   - Place the downloaded `Preeti.ttf` file in this folder: `unipreeti/public/fonts/`
   - The file should be at: `unipreeti/public/fonts/Preeti.ttf`

3. **Restart Development Server**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again
   - Refresh your browser

4. **Verify**
   - Type Unicode Nepali text in the converter
   - The output should now show proper Nepali characters instead of ASCII codes

## Already Configured

The CSS is already set up in `app/globals.css`:

```css
@font-face {
  font-family: 'Preeti';
  src: url('/fonts/Preeti.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

You just need to add the font file!
