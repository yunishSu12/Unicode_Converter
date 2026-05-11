import Link from 'next/link';
import { ArrowLeft, Upload, Download, Copy, RefreshCw, FileText, Keyboard } from 'lucide-react';

export default function HowToUse() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            UniPreeti
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/how-to-use" className="text-primary font-medium">
              How to Use
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Converter
        </Link>

        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-bold">How to Use UniPreeti</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to convert between Unicode Nepali and Preeti font in just a few simple steps.
          </p>
        </div>

        {/* Quick Start */}
        <div className="p-6 rounded-lg border bg-card shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</span>
              <div>
                <h3 className="font-semibold mb-1">Choose Conversion Direction</h3>
                <p className="text-sm text-muted-foreground">Select whether you want to convert from Unicode to Preeti or Preeti to Unicode using the tabs.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</span>
              <div>
                <h3 className="font-semibold mb-1">Enter Your Text</h3>
                <p className="text-sm text-muted-foreground">Type or paste your Nepali text in the left textarea. The conversion happens automatically in real-time.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">3</span>
              <div>
                <h3 className="font-semibold mb-1">Get Your Result</h3>
                <p className="text-sm text-muted-foreground">The converted text appears instantly in the right textarea. Copy it or download it as a file.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Features Guide */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Features Guide</h2>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {/* Type or Paste */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Keyboard className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Type or Paste Text</h3>
                  <p className="text-muted-foreground">
                    Simply type your Nepali text directly into the input area, or paste text from any source. The converter supports all Nepali Unicode characters and Preeti font characters.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Tip: Use Ctrl+V (Windows) or Cmd+V (Mac) to paste text quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Upload Files */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Upload Text Files</h3>
                  <p className="text-muted-foreground">
                    Click the "Upload" button to select a .txt file from your computer. The file content will be loaded into the converter automatically. Perfect for batch processing multiple documents.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Supported format: Plain text files (.txt) only.
                  </p>
                </div>
              </div>
            </div>

            {/* Copy to Clipboard */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Copy className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Copy to Clipboard</h3>
                  <p className="text-muted-foreground">
                    Click the "Copy" button below the output area to copy the converted text to your clipboard. You can then paste it anywhere you need—Word documents, emails, websites, or social media.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Shortcut: Click the copy icon for instant clipboard access.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Files */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Download as File</h3>
                  <p className="text-muted-foreground">
                    Click the "Download .txt" button to save the converted text as a plain text file on your computer. The file will be named with a timestamp for easy organization.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Files are saved in UTF-8 encoding for maximum compatibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Swap Direction */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Swap Conversion Direction</h3>
                  <p className="text-muted-foreground">
                    Click the swap button (⇄) in the middle to instantly switch between Unicode to Preeti and Preeti to Unicode conversion. Your text will be automatically converted in the new direction.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Quick way to verify your conversion by converting back and forth.
                  </p>
                </div>
              </div>
            </div>

            {/* Clear Text */}
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Clear Text</h3>
                  <p className="text-muted-foreground">
                    Click the "Clear" button to remove all text from both input and output areas. This gives you a fresh start for your next conversion task.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Useful when working with multiple documents in sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>For best results when converting Preeti to Unicode, ensure your source text is properly formatted in Preeti font.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>The converter handles complex Nepali conjuncts (क्ष, त्र, ज्ञ) and special characters automatically.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>All conversion happens in your browser—no internet connection required after the page loads.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Your text is never uploaded to any server, ensuring complete privacy for sensitive documents.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Bookmark this page for quick access whenever you need to convert Nepali text.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start Converting Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2026 UniPreeti. Built with ❤️ for the Nepali community.</p>
          <p className="mt-2">
            Open source • Privacy-first • Always free
          </p>
        </div>
      </footer>
    </main>
  );
}
