import Link from 'next/link';
import { ArrowLeft, Heart, Code, Shield, Zap, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            UniPreeti
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/how-to-use" className="hover:text-primary transition-colors">
              How to Use
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="text-primary font-medium">
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
          <h1 className="text-4xl font-bold">About UniPreeti</h1>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between legacy Preeti documents and modern Unicode Nepali text.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="p-8 rounded-lg border bg-card shadow-sm mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                UniPreeti was created to solve a critical problem facing the Nepali digital community: the need to convert millions of legacy Preeti font documents into modern, accessible Unicode format. We believe that Nepali digital content should be accessible to everyone, on every device, without barriers.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold">The Problem We're Solving</h2>
          <p className="text-muted-foreground leading-relaxed">
            For over two decades, Nepali computer users relied on the Preeti font for digital Nepali text. Government offices, educational institutions, legal firms, publishing houses, and countless individuals created millions of documents using this legacy encoding system. While Preeti served its purpose well in the pre-Unicode era, it has significant limitations in today's interconnected digital world.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Preeti documents cannot be properly displayed on modern websites without special fonts installed. They don't work on mobile devices, can't be indexed by search engines, aren't accessible to screen readers, and create compatibility issues across different platforms. This has created a digital divide, where valuable Nepali content remains trapped in an outdated format.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unicode Nepali, on the other hand, is the international standard that works seamlessly everywhere—from smartphones to government portals, from social media to cloud documents. Converting from Preeti to Unicode is essential for digital preservation, accessibility, and the future of Nepali content online.
          </p>
        </div>

        {/* Our Solution */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Our Solution</h2>
          <p className="text-muted-foreground leading-relaxed">
            UniPreeti provides fast, accurate, and completely private conversion between Unicode Nepali and Preeti encoding. Unlike other converters that require uploading your documents to external servers, UniPreeti runs entirely in your web browser. This means:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Complete Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Your sensitive documents—legal contracts, government records, personal letters—never leave your computer. Zero data collection, zero tracking.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Real-time conversion as you type. Process thousands of characters instantly without any server delays or waiting times.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Advanced Algorithm</h3>
              <p className="text-sm text-muted-foreground">
                Handles complex Nepali typography including conjuncts, vowel signs, half-forms, and special positioning rules accurately.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Works Everywhere</h3>
              <p className="text-sm text-muted-foreground">
                Compatible with all modern browsers and devices. Works on desktop, mobile, and tablet without any installation.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Who We Serve</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            UniPreeti is built for everyone in the Nepali community who works with digital text:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Government Offices</h3>
                <p className="text-sm text-muted-foreground">
                  Digitize and modernize legacy Preeti documents for web portals, digital archives, and e-governance initiatives.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Educational Institutions</h3>
                <p className="text-sm text-muted-foreground">
                  Convert textbooks, research papers, and educational materials to Unicode for online learning platforms and digital libraries.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Legal Professionals</h3>
                <p className="text-sm text-muted-foreground">
                  Preserve and convert legal documents, court records, and contracts while maintaining complete confidentiality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Publishers & Designers</h3>
                <p className="text-sm text-muted-foreground">
                  Convert old Preeti layouts to Unicode for modern publishing workflows, websites, and digital media.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Content Creators</h3>
                <p className="text-sm text-muted-foreground">
                  Repurpose old Preeti content for blogs, social media, YouTube descriptions, and modern web platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Libraries & Archives</h3>
                <p className="text-sm text-muted-foreground">
                  Preserve cultural heritage by converting historical Preeti documents to future-proof Unicode format.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Our Values</h2>
          
          <div className="grid gap-6">
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                We believe your data belongs to you. That's why UniPreeti never collects, stores, or transmits your text. All processing happens locally in your browser.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Always Free</h3>
              <p className="text-muted-foreground">
                Access to language tools should never be behind a paywall. UniPreeti is free for everyone—individuals, businesses, and institutions—with no hidden costs or premium tiers.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Open Source</h3>
              <p className="text-muted-foreground">
                We believe in transparency and community collaboration. UniPreeti's code is open source, allowing developers to learn from, improve, and integrate our conversion engine.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by the Nepali community, for the Nepali community. We listen to feedback, fix bugs quickly, and continuously improve based on real user needs.
              </p>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Technology</h2>
          <p className="text-muted-foreground leading-relaxed">
            UniPreeti is built with modern web technologies to ensure speed, reliability, and accessibility:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong>Next.js 14:</strong> React framework for optimal performance and SEO</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong>TypeScript:</strong> Type-safe code for reliability and maintainability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong>Tailwind CSS:</strong> Modern, responsive design that works on all devices</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong>Client-side Processing:</strong> All conversion happens in your browser using JavaScript</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span><strong>Advanced Algorithms:</strong> Rule-based conversion engine handling complex Nepali typography</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to Convert?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who trust UniPreeti for their Nepali text conversion needs.
          </p>
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
