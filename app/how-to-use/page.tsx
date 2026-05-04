import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HowToUse() {
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
        <h1>How to Use UniPreeti Converter</h1>
        
        <p className="lead">
          UniPreeti is designed to be simple and intuitive. Follow these step-by-step instructions to convert your Nepali text between Unicode and Preeti encoding formats.
        </p>

        <h2>Method 1: Direct Text Input (Recommended)</h2>
        
        <h3>Converting Unicode to Preeti:</h3>
        <ol>
          <li>Open the UniPreeti homepage in your web browser</li>
          <li>Locate the left text area labeled "Unicode Nepali"</li>
          <li>Type or paste your Unicode Nepali text (e.g., नमस्ते, स्वागत छ)</li>
          <li>The conversion happens automatically in real-time</li>
          <li>The converted Preeti text appears instantly in the right text area</li>
          <li>Click "Copy" to copy the result to your clipboard, or "Download" to save as a .txt file</li>
        </ol>

        <h3>Converting Preeti to Unicode:</h3>
        <ol>
          <li>Locate the right text area labeled "Preeti Font"</li>
          <li>Type or paste your Preeti-encoded text</li>
          <li>The Unicode conversion appears automatically in the left text area</li>
          <li>Use the "Copy" or "Download" buttons to save your result</li>
        </ol>

        <h2>Method 2: File Upload</h2>
        
        <p>
          If you have existing .txt files in Unicode or Preeti format, you can upload them directly:
        </p>

        <ol>
          <li>Click the "Upload" button above either text area (Unicode or Preeti side)</li>
          <li>Select your .txt file from your computer</li>
          <li>The file content will be loaded automatically</li>
          <li>Conversion happens instantly</li>
          <li>Download the converted result using the "Download" button</li>
        </ol>

        <h2>Additional Features</h2>

        <h3>Swap Button</h3>
        <p>
          Click the "Swap" button (with left-right arrows) to exchange the content between Unicode and Preeti text areas. This is useful when you want to reverse the conversion direction.
        </p>

        <h3>Clear All Button</h3>
        <p>
          Click "Clear All" to remove all text from both text areas and start fresh.
        </p>

        <h2>Tips for Best Results</h2>

        <ul>
          <li><strong>Use plain text:</strong> For best accuracy, use plain .txt files without formatting</li>
          <li><strong>Check complex characters:</strong> Conjunct characters (क्ष, त्र, ज्ञ) and special combinations are handled automatically, but always verify critical documents</li>
          <li><strong>Preserve English text:</strong> English letters, numbers, and punctuation remain unchanged during conversion</li>
          <li><strong>Large documents:</strong> The converter can handle large documents, but for very large files (100+ pages), consider breaking them into smaller chunks</li>
          <li><strong>Preview before finalizing:</strong> Always review the converted text, especially for important documents</li>
        </ul>

        <h2>Common Use Cases</h2>

        <h3>For Government Offices:</h3>
        <p>
          Upload old Preeti documents, convert to Unicode, and publish on modern web portals. This ensures accessibility across all devices and platforms.
        </p>

        <h3>For Designers:</h3>
        <p>
          Convert legacy Preeti text from old design files to Unicode for use in modern design software and web projects.
        </p>

        <h3>For Students:</h3>
        <p>
          Convert research materials, historical documents, or study notes between formats as needed for different applications.
        </p>

        <h2>Troubleshooting</h2>

        <h3>Text appears garbled:</h3>
        <p>
          Make sure you're converting in the correct direction. If Unicode text looks garbled, it might already be in Preeti format—try pasting it in the Preeti text area instead.
        </p>

        <h3>Some characters don't convert:</h3>
        <p>
          English text, numbers, and standard punctuation are preserved as-is. Only Nepali Devanagari characters are converted.
        </p>

        <h3>Copy button doesn't work:</h3>
        <p>
          Ensure your browser allows clipboard access. Modern browsers may require you to grant permission the first time.
        </p>

        <div className="bg-muted p-6 rounded-lg mt-8">
          <h3 className="mt-0">Need More Help?</h3>
          <p className="mb-0">
            Check our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> for answers to common questions, or visit the <Link href="/about" className="text-primary hover:underline">About page</Link> to learn more about the project.
          </p>
        </div>
      </article>
    </main>
  );
}
