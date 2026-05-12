import Converter from '@/components/converter';
import Link from 'next/link';
import { FileText, Shield, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">UniPreeti</div>
          <div className="flex gap-6 text-sm">
            <Link href="/how-to-use" className="hover:text-primary transition-colors">
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

      {/* Main Converter Section */}
      <section className="py-12">
        <Converter />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Why UniPreeti?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            UniPreeti is a powerful, fast, and completely private tool designed to bridge the gap between legacy Preeti font documents and modern Unicode Nepali text. Whether you&apos;re a government office digitizing old records, a designer working with legacy files, a student converting research materials, or a lawyer handling historical documents, UniPreeti makes the conversion process instant and accurate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Real-time conversion as you type. No waiting, no delays. Process thousands of characters instantly in your browser.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">100% Private</h3>
            <p className="text-sm text-muted-foreground">
              All conversion happens in your browser. Your text never leaves your device. Perfect for sensitive legal, government, or personal documents.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">File Support</h3>
            <p className="text-sm text-muted-foreground">
              Upload .txt files directly or paste text. Download converted results instantly. Batch process multiple documents with ease.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">For Everyone</h3>
            <p className="text-sm text-muted-foreground">
              Built for government offices, designers, students, bloggers, lawyers, and anyone dealing with Nepali text. Simple enough for beginners, powerful enough for professionals.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="prose prose-gray dark:prose-invert max-w-4xl mx-auto mt-16 space-y-6">
          <h3 className="text-2xl font-semibold">
            The Challenge: Legacy Preeti Documents
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            For decades, Nepali computer users relied on the Preeti font for typing Nepali text. Government offices, educational institutions, legal firms, and businesses created millions of documents using this legacy encoding system. However, Preeti is not Unicode-compliant, which means these documents cannot be properly displayed on modern websites, mobile devices, or cloud platforms without the specific Preeti font installed.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Unicode Nepali, on the other hand, is the international standard for Nepali text. It works seamlessly across all devices, platforms, and applications without requiring special fonts. Search engines can index it, screen readers can read it, and it ensures long-term accessibility and preservation of Nepali digital content.
          </p>

          <h3 className="text-2xl font-semibold mt-8">
            The Solution: UniPreeti Converter
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            UniPreeti solves this problem by providing accurate, bidirectional conversion between Unicode Nepali and Preeti encoding. Our advanced rule-based engine handles complex Nepali typography including conjunct characters (क्ष, त्र, ज्ञ), vowel signs (matras), half-forms, and special positioning rules that make Nepali script unique.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Unlike server-based converters that require uploading your documents to external servers, UniPreeti runs entirely in your web browser using JavaScript. This means your sensitive documents—whether they're legal contracts, government records, or personal letters—never leave your computer. You get the speed and convenience of a web app with the privacy of desktop software.
          </p>

          <h3 className="text-2xl font-semibold mt-8">
            Who Benefits from UniPreeti?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Government Offices:</strong> Digitize and modernize legacy Preeti documents for web portals and digital archives</li>
            <li><strong>Designers & Publishers:</strong> Convert old Preeti layouts to Unicode for modern publishing workflows</li>
            <li><strong>Students & Researchers:</strong> Access and convert historical Nepali documents for academic work</li>
            <li><strong>Legal Professionals:</strong> Preserve and convert legal documents while maintaining confidentiality</li>
            <li><strong>Bloggers & Content Creators:</strong> Repurpose old Preeti content for modern websites and social media</li>
            <li><strong>Libraries & Archives:</strong> Preserve cultural heritage by converting Preeti documents to future-proof Unicode</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Start converting your Nepali text today—fast, accurate, and completely free. No registration required, no data collection, no hidden costs. Just pure, reliable conversion whenever you need it.
          </p>
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
