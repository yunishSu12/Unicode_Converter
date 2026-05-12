import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is the difference between Unicode and Preeti?",
      answer: "Unicode is an international standard for encoding text that works across all devices and platforms. Preeti is a legacy Nepali font that uses custom ASCII encoding. Unicode Nepali can be displayed on any device without special fonts, while Preeti requires the Preeti font to be installed."
    },
    {
      question: "Is my data safe when using UniPreeti?",
      answer: "Absolutely! UniPreeti runs entirely in your web browser using JavaScript. Your text never leaves your computer or gets uploaded to any server. All conversion happens locally on your device, ensuring complete privacy for sensitive documents."
    },
    {
      question: "Do I need to install anything to use UniPreeti?",
      answer: "No installation required! UniPreeti is a web-based tool that works directly in your browser. Simply visit the website and start converting. However, to view Preeti text properly, you&apos;ll need the Preeti font installed on your system."
    },
    {
      question: "Can I convert large documents?",
      answer: "Yes! UniPreeti can handle documents of any size. The conversion happens instantly in your browser, so there are no file size limits or processing delays. You can convert thousands of lines of text in seconds."
    },
    {
      question: "What file formats are supported?",
      answer: "UniPreeti currently supports plain text (.txt) files for upload and download. You can also copy and paste text from any source, including Word documents, PDFs, or websites."
    },
    {
      question: "Why does my converted text look wrong?",
      answer: "If converting from Preeti to Unicode, ensure your source text is properly formatted in Preeti font. If converting from Unicode to Preeti, make sure you have the Preeti font installed to view the output correctly. The converter handles complex Nepali typography automatically."
    },
    {
      question: "Can I use UniPreeti offline?",
      answer: "Once the page is loaded, UniPreeti works offline! The conversion engine runs entirely in your browser, so you don't need an internet connection to convert text. However, you'll need internet to initially load the website."
    },
    {
      question: "Is UniPreeti free to use?",
      answer: "Yes, UniPreeti is completely free with no hidden costs, subscriptions, or premium features. We believe in providing accessible tools for the Nepali community without any barriers."
    },
    {
      question: "How accurate is the conversion?",
      answer: "UniPreeti uses advanced rule-based algorithms to handle complex Nepali typography including conjunct characters (क्ष, त्र, ज्ञ), vowel signs, and special positioning rules. The conversion is highly accurate for standard Nepali text."
    },
    {
      question: "Can I convert text in both directions?",
      answer: "Yes! UniPreeti supports bidirectional conversion. You can convert from Unicode to Preeti and from Preeti to Unicode. Simply use the tabs or swap button to change the conversion direction."
    },
    {
      question: "What browsers are supported?",
      answer: "UniPreeti works on all modern web browsers including Chrome, Firefox, Safari, Edge, and Opera. It's also mobile-friendly and works on smartphones and tablets."
    },
    {
      question: "Do you collect any data?",
      answer: "No! We don't collect, store, or transmit any of your text or personal data. UniPreeti is privacy-first by design. There are no analytics, tracking, or data collection of any kind."
    },
    {
      question: "Can I use UniPreeti for commercial purposes?",
      answer: "Yes! UniPreeti is free for both personal and commercial use. Government offices, businesses, educational institutions, and individuals can all use it without restrictions or licensing fees."
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: "We welcome feedback! If you encounter any issues or have suggestions for improvements, please reach out through our contact channels. Your input helps us make UniPreeti better for everyone."
    },
    {
      question: "Why was UniPreeti created?",
      answer: "UniPreeti was created to help the Nepali community transition from legacy Preeti documents to modern Unicode standard. Many organizations and individuals have valuable content in Preeti format that needs to be accessible on modern platforms."
    },
    {
      question: "Can I integrate UniPreeti into my own application?",
      answer: "UniPreeti is open source! You can use the conversion engine in your own projects. Check our GitHub repository for documentation and integration guidelines."
    }
  ];

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
            <Link href="/faq" className="text-primary font-medium">
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
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about UniPreeti and Nepali text conversion.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="group p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-start justify-between cursor-pointer list-none">
                <h3 className="font-semibold text-lg pr-8 group-open:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20 text-center">
          <h2 className="text-2xl font-semibold mb-3">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Try UniPreeti Now
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
