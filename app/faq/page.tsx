import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is the difference between Unicode and Preeti?",
      answer: "Unicode is an international standard for encoding text that works across all devices and platforms. Preeti is a legacy font-based encoding system that requires the Preeti font to be installed. Unicode Nepali displays correctly everywhere, while Preeti text appears as random characters without the specific font."
    },
    {
      question: "Why do I need this converter?",
      answer: "If you have old documents created with Preeti font, they won't display correctly on modern websites, mobile devices, or cloud platforms. Converting to Unicode ensures your content is accessible, searchable, and future-proof. Conversely, if you need to work with legacy systems that only support Preeti, you can convert Unicode text to Preeti format."
    },
    {
      question: "Does UniPreeti handle conjuncts and matras correctly?",
      answer: "Yes! UniPreeti uses advanced rule-based algorithms to handle complex Nepali typography including conjunct characters (क्ष, त्र, द्ध, ज्ञ), vowel signs (matras like ि, ी, ु, ू), half-forms, and special positioning rules. The converter is designed specifically for accurate Nepali text conversion."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely! UniPreeti runs entirely in your web browser using JavaScript. Your text never leaves your computer or gets uploaded to any server. This makes it perfect for sensitive documents like legal contracts, government records, or personal correspondence. We don't collect, store, or transmit any of your data."
    },
    {
      question: "Can I use UniPreeti offline?",
      answer: "Currently, you need an internet connection to load the website initially. However, once loaded, the conversion happens entirely in your browser without requiring internet access. We're working on adding Progressive Web App (PWA) support for full offline functionality in future updates."
    },
    {
      question: "Are there any file size limits?",
      answer: "UniPreeti can handle large documents, but performance depends on your device. Most modern computers can easily process documents with tens of thousands of characters instantly. For very large files (100+ pages), we recommend breaking them into smaller chunks for optimal performance."
    },
    {
      question: "How accurate is the conversion for complex sentences?",
      answer: "UniPreeti uses comprehensive character mapping and rule-based conversion that handles the vast majority of Nepali text accurately. However, because Preeti is not a standardized encoding (different versions exist), some rare edge cases might need manual review. We recommend always reviewing converted text for critical documents."
    },
    {
      question: "What's the difference between Preeti, Kantipur, and other Nepali fonts?",
      answer: "Preeti, Kantipur, and similar fonts are legacy font-based encoding systems that use different character mappings. Each requires its own specific converter. UniPreeti is specifically designed for Preeti font conversion. If you have text in Kantipur or other fonts, you'll need a different converter or may need to convert through multiple steps."
    },
    {
      question: "How do I install the Preeti font on my computer?",
      answer: "To view Preeti-encoded text with proper Nepali characters, you need to install the Preeti font on your system. Download the Preeti.ttf font file from a trusted source, then: On Windows, right-click the font file and select 'Install'. On Mac, double-click the font file and click 'Install Font'. On Linux, copy the font to ~/.fonts/ directory. After installation, restart your applications to use the font."
    },
    {
      question: "Why does my converted text look like random characters?",
      answer: "If converted Preeti text appears as random English characters and symbols, that's normal! Preeti encoding uses ASCII characters to represent Nepali letters. To see it as Nepali text, you need to apply the Preeti font in your word processor or text editor. In Unicode, the text displays correctly without any special font."
    },
    {
      question: "Does UniPreeti work on mobile devices?",
      answer: "Yes! UniPreeti is fully responsive and works on smartphones and tablets. The interface adapts to smaller screens, and all features including copy, paste, and file upload work on mobile browsers. However, file download functionality may vary depending on your mobile browser."
    },
    {
      question: "Can I convert .docx or PDF files?",
      answer: "Currently, UniPreeti supports .txt (plain text) files. For .docx or PDF files, you'll need to first copy the text content and paste it into the converter, or save the document as plain text. We're exploring adding direct .docx support in future updates."
    },
    {
      question: "What happens to English text and numbers during conversion?",
      answer: "English letters, numbers, and standard punctuation marks are preserved exactly as-is during conversion. Only Nepali Devanagari characters (अ-ह, vowel signs, etc.) are converted. This means mixed Nepali-English documents convert correctly with English portions remaining unchanged."
    },
    {
      question: "Is UniPreeti free to use?",
      answer: "Yes, completely free! There are no hidden costs, no premium features, and no registration required. UniPreeti is built as a public service for the Nepali community. We believe essential tools for preserving and modernizing Nepali digital content should be accessible to everyone."
    },
    {
      question: "Can I use UniPreeti for commercial projects?",
      answer: "Absolutely! You can use UniPreeti for personal, educational, government, or commercial purposes without any restrictions. Whether you're a business digitizing records, a publisher converting content, or a freelancer working on client projects, feel free to use the tool as much as you need."
    },
    {
      question: "Will there be new features in the future?",
      answer: "Yes! We're actively developing UniPreeti and plan to add features like: batch file conversion, .docx support, browser extension, offline PWA mode, conversion history, and support for other legacy Nepali fonts. Follow our updates or contribute to the project if you're a developer!"
    }
  ];

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
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Find answers to common questions about UniPreeti, Unicode, Preeti font, and Nepali text conversion.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-8 last:border-b-0">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-muted p-6 rounded-lg mt-12">
          <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground">
            If you couldn't find the answer you're looking for, check out our{' '}
            <Link href="/how-to-use" className="text-primary hover:underline">
              How to Use guide
            </Link>{' '}
            or learn more on the{' '}
            <Link href="/about" className="text-primary hover:underline">
              About page
            </Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
