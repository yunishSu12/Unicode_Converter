import Link from 'next/link';
import { ArrowLeft, Heart, Globe, Code } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Converter
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 prose prose-gray dark:prose-invert">
        <h1>About UniPreeti</h1>
        
        <p className="lead">
          UniPreeti was born from a simple observation: thousands of valuable Nepali documents remain trapped in legacy Preeti encoding, inaccessible to modern digital platforms and future generations.
        </p>

        <h2>The Problem We're Solving</h2>
        
        <p>
          For over two decades, Nepali computer users relied on font-based encoding systems like Preeti to type in Nepali. Government offices drafted policies, schools created educational materials, lawyers prepared legal documents, and writers published books—all using Preeti font. These documents represent an enormous repository of Nepali knowledge, culture, and administrative history.
        </p>

        <p>
          However, Preeti is not Unicode-compliant. This creates serious problems:
        </p>

        <ul>
          <li>Documents don't display correctly on websites without the Preeti font installed</li>
          <li>Mobile devices can't render Preeti text properly</li>
          <li>Search engines can't index or search Preeti content</li>
          <li>Screen readers for visually impaired users can't read Preeti text</li>
          <li>Cloud platforms and modern software don't support font-based encoding</li>
          <li>Long-term digital preservation is at risk</li>
        </ul>

        <p>
          Meanwhile, Unicode Nepali has become the international standard, supported natively by all modern operating systems, browsers, and devices. The gap between legacy Preeti documents and Unicode-based modern systems needed a bridge.
        </p>

        <h2>Our Mission</h2>

        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
          <p className="text-lg font-medium mb-2">
            To make Nepali digital content accessible, searchable, and future-proof by providing fast, accurate, and privacy-respecting conversion tools.
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            We believe that language technology should empower communities, not create barriers.
          </p>
        </div>

        <h2>Why UniPreeti is Different</h2>

        <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Privacy-First</h3>
            <p className="text-sm text-muted-foreground">
              All conversion happens in your browser. Your documents never touch our servers. Perfect for sensitive legal, government, or personal files.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Accessible</h3>
            <p className="text-sm text-muted-foreground">
              Free forever, no registration, no ads, no tracking. Works on any device with a web browser. Built for everyone.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Accurate</h3>
            <p className="text-sm text-muted-foreground">
              Advanced rule-based engine handles complex Nepali typography including conjuncts, matras, and special characters.
            </p>
          </div>
        </div>

        <h2>Who We Serve</h2>

        <p>
          UniPreeti is designed for the entire Nepali-speaking community:
        </p>

        <ul>
          <li><strong>Government Offices:</strong> Digitize legacy records and make them accessible on modern web portals</li>
          <li><strong>Educational Institutions:</strong> Convert old teaching materials and research documents to Unicode</li>
          <li><strong>Legal Professionals:</strong> Modernize legal documents while maintaining confidentiality</li>
          <li><strong>Publishers & Media:</strong> Repurpose archived content for digital platforms</li>
          <li><strong>Designers:</strong> Work with legacy Preeti files in modern design workflows</li>
          <li><strong>Students & Researchers:</strong> Access historical documents for academic work</li>
          <li><strong>Libraries & Archives:</strong> Preserve cultural heritage in future-proof formats</li>
          <li><strong>Individual Users:</strong> Convert personal documents, letters, and creative writing</li>
        </ul>

        <h2>Our Commitment</h2>

        <p>
          UniPreeti will always remain:
        </p>

        <ul>
          <li><strong>Free:</strong> No premium tiers, no paywalls, no hidden costs</li>
          <li><strong>Private:</strong> Client-side processing, no data collection, no tracking</li>
          <li><strong>Open:</strong> Transparent about how we work and what we do</li>
          <li><strong>Community-Driven:</strong> Built for Nepali speakers, by people who care about Nepali digital content</li>
        </ul>

        <h2>The Technology</h2>

        <p>
          UniPreeti is built with modern web technologies:
        </p>

        <ul>
          <li><strong>Next.js 15:</strong> Fast, SEO-friendly React framework</li>
          <li><strong>TypeScript:</strong> Type-safe code for reliability</li>
          <li><strong>Client-Side Processing:</strong> All conversion happens in your browser using JavaScript</li>
          <li><strong>Rule-Based Engine:</strong> Comprehensive character mapping and reordering algorithms</li>
          <li><strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile</li>
        </ul>

        <p>
          The conversion engine uses carefully crafted mapping dictionaries and rule-based algorithms to handle the complexities of Nepali script, including conjunct characters, vowel sign positioning, and special cases that make Nepali typography unique.
        </p>

        <h2>Looking Forward</h2>

        <p>
          This is just the beginning. We're actively working on new features including:
        </p>

        <ul>
          <li>Support for .docx and other document formats</li>
          <li>Batch conversion for multiple files</li>
          <li>Browser extension for quick conversion</li>
          <li>Offline Progressive Web App (PWA) mode</li>
          <li>Support for other legacy Nepali fonts (Kantipur, etc.)</li>
          <li>API for developers</li>
        </ul>

        <h2>Join Us</h2>

        <p>
          UniPreeti is more than a tool—it's a contribution to preserving and modernizing Nepali digital heritage. Whether you're a user who benefits from the converter, a developer who wants to contribute code, or someone who wants to spread the word, you're part of this mission.
        </p>

        <p>
          Together, we can ensure that decades of Nepali digital content remains accessible for generations to come.
        </p>

        <div className="bg-muted p-6 rounded-lg mt-12">
          <h3 className="mt-0">Ready to Convert?</h3>
          <p className="mb-4">
            Start converting your Nepali text between Unicode and Preeti right now.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors no-underline"
          >
            Go to Converter
          </Link>
        </div>
      </article>
    </main>
  );
}
