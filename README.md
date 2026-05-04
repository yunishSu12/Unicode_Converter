# UniPreeti - Unicode to Preeti Converter

A fast, accurate, and privacy-focused web tool for converting between Unicode Nepali and Preeti font encoding.

## 🚀 Features

- **Real-time Conversion**: Instant bidirectional conversion as you type
- **100% Private**: All conversion happens in your browser - no data sent to servers
- **File Support**: Upload and download .txt files
- **Mobile Responsive**: Works seamlessly on all devices
- **Accurate**: Handles complex Nepali typography including conjuncts, matras, and special characters
- **Free Forever**: No registration, no ads, no tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository** (or navigate to the project folder):
```bash
cd unipreeti
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
unipreeti/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with converter
│   ├── how-to-use/        # How to use guide
│   ├── faq/               # FAQ page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── converter.tsx      # Main converter component
│   └── ui/                # UI components
├── lib/                   # Core logic
│   ├── converter.ts       # Conversion algorithms
│   ├── mapping.ts         # Unicode ↔ Preeti mappings
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎯 Usage

### Converting Unicode to Preeti:
1. Type or paste Unicode Nepali text in the left textarea
2. Converted Preeti text appears automatically on the right
3. Click "Copy" or "Download" to save the result

### Converting Preeti to Unicode:
1. Type or paste Preeti text in the right textarea
2. Converted Unicode text appears automatically on the left
3. Use "Copy" or "Download" buttons to save

### File Upload:
- Click "Upload" button above either textarea
- Select a .txt file
- Conversion happens automatically

## 🔧 Customization

### Adding More Character Mappings:
Edit `lib/mapping.ts` to add or modify Unicode ↔ Preeti character mappings.

### Styling:
- Modify `tailwind.config.ts` for theme customization
- Edit `app/globals.css` for global styles
- Update color scheme in CSS variables

## 🚢 Deployment

### Vercel (Recommended):
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms:
- **Netlify**: Connect GitHub repo and deploy
- **Custom Server**: Build and run with `npm run build && npm start`

## 📝 License

Open source - feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Enhanced character mapping accuracy
- Support for .docx files
- Batch file conversion
- Browser extension
- PWA offline support
- Support for other Nepali fonts (Kantipur, etc.)

## 🙏 Acknowledgments

Built with ❤️ for the Nepali community to preserve and modernize Nepali digital content.

## 📧 Support

For questions or issues, please check the FAQ page or How to Use guide on the website.

---

**Note**: This is a client-side application. All text conversion happens in your browser for maximum privacy and security.
"# Unicode_Converter" 
