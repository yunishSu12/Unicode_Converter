'use client';

import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { unicodeToPreeti, preetiToUnicode } from '@/lib/converter';
import { downloadAsFile, copyToClipboard, readFileAsText } from '@/lib/utils';
import { 
  ArrowLeftRight, 
  Copy, 
  Download, 
  Upload, 
  Trash2,
  CheckCircle2,
  RefreshCw,
  Moon,
  Sun,
  Eye
} from 'lucide-react';

export default function Converter() {
  const [unicodeText, setUnicodeText] = useState('');
  const [preetiText, setPreetiText] = useState('');
  const [copied, setCopied] = useState<'unicode' | 'preeti' | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounced conversion for real-time updates
  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto-conversion happens here with debounce
      setIsConverting(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [unicodeText, preetiText]);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Convert Unicode to Preeti with debounce
  const handleUnicodeChange = useCallback((value: string) => {
    setUnicodeText(value);
    setIsConverting(true);
    setError(null);
    
    // Debounced conversion
    const timer = setTimeout(() => {
      try {
        const converted = unicodeToPreeti(value);
        setPreetiText(converted);
        setIsConverting(false);
      } catch (err) {
        setError('Conversion error. Please try again.');
        setIsConverting(false);
        console.error('Conversion error:', err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Convert Preeti to Unicode with debounce
  const handlePreetiChange = useCallback((value: string) => {
    setPreetiText(value);
    setIsConverting(true);
    setError(null);
    
    // Debounced conversion
    const timer = setTimeout(() => {
      try {
        const converted = preetiToUnicode(value);
        setUnicodeText(converted);
        setIsConverting(false);
      } catch (err) {
        setError('Conversion error. Please try again.');
        setIsConverting(false);
        console.error('Conversion error:', err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Manual convert button
  const handleManualConvert = () => {
    if (unicodeText) {
      const converted = unicodeToPreeti(unicodeText);
      setPreetiText(converted);
    } else if (preetiText) {
      const converted = preetiToUnicode(preetiText);
      setUnicodeText(converted);
    }
  };

  // Swap texts
  const handleSwap = () => {
    const temp = unicodeText;
    setUnicodeText(preetiText);
    setPreetiText(temp);
  };

  // Clear all
  const handleClear = () => {
    setUnicodeText('');
    setPreetiText('');
  };

  // Copy to clipboard
  const handleCopy = async (text: string, type: 'unicode' | 'preeti') => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  // Download as file
  const handleDownload = (text: string, type: 'unicode' | 'preeti') => {
    const filename = `${type}-${Date.now()}.txt`;
    downloadAsFile(text, filename);
  };

  // Upload file (supports .txt and .docx)
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'unicode' | 'preeti'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      let content = '';
      
      // Handle .txt files
      if (file.name.endsWith('.txt')) {
        content = await readFileAsText(file);
      }
      // Handle .docx files (basic support)
      else if (file.name.endsWith('.docx')) {
        // For now, show message that .docx needs to be converted to .txt first
        alert('For .docx files, please copy the text and paste it directly, or save as .txt first. Full .docx support coming soon!');
        e.target.value = '';
        return;
      }
      
      if (type === 'unicode') {
        handleUnicodeChange(content);
      } else {
        handlePreetiChange(content);
      }
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Error reading file. Please try again.');
    }
    
    // Reset input
    e.target.value = '';
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      {/* Header with Dark Mode Toggle */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1"></div>
          <h1 className="text-4xl font-bold text-primary flex-1">
            UniPreeti Converter
          </h1>
          <div className="flex-1 flex justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          युनिकोड ↔ प्रिती | Fast, Accurate, Privacy-First
        </p>
      </div>

      {/* Converter Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Unicode Side */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Unicode Nepali</h2>
            <div className="flex gap-2">
              <label htmlFor="unicode-upload">
                <Button variant="outline" size="sm" type="button" className="cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Upload
                </Button>
              </label>
              <input
                id="unicode-upload"
                type="file"
                accept=".txt,.docx"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'unicode')}
              />
            </div>
          </div>
          
          <Textarea
            value={unicodeText}
            onChange={(e) => handleUnicodeChange(e.target.value)}
            placeholder="यहाँ युनिकोड नेपाली टाइप गर्नुहोस्..."
            className="min-h-[300px] font-mono text-base"
            aria-label="Unicode Nepali input"
            aria-describedby="unicode-help"
          />
          <p id="unicode-help" className="sr-only">
            Type or paste Unicode Nepali text here. Conversion happens automatically.
          </p>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(unicodeText, 'unicode')}
              disabled={!unicodeText}
            >
              {copied === 'unicode' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownload(unicodeText, 'unicode')}
              disabled={!unicodeText}
            >
              <Download className="w-4 h-4" />
              Download .txt
            </Button>
          </div>
        </div>

        {/* Preeti Side */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Preeti Font</h2>
            <div className="flex gap-2">
              <label htmlFor="preeti-upload">
                <Button variant="outline" size="sm" type="button" className="cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Upload
                </Button>
              </label>
              <input
                id="preeti-upload"
                type="file"
                accept=".txt,.docx"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'preeti')}
              />
            </div>
          </div>
          
          <Textarea
            value={preetiText}
            onChange={(e) => handlePreetiChange(e.target.value)}
            placeholder="Type Preeti encoded text here..."
            className="min-h-[300px] font-mono text-base"
            aria-label="Preeti font encoded text input"
            aria-describedby="preeti-help"
          />
          <p id="preeti-help" className="sr-only">
            Type or paste Preeti encoded text here. Conversion to Unicode happens automatically.
          </p>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(preetiText, 'preeti')}
              disabled={!preetiText}
            >
              {copied === 'preeti' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownload(preetiText, 'preeti')}
              disabled={!preetiText}
            >
              <Download className="w-4 h-4" />
              Download .txt
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        <Button 
          onClick={handleManualConvert} 
          disabled={!unicodeText && !preetiText}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Convert
        </Button>
        <Button onClick={handleSwap} disabled={!unicodeText && !preetiText} variant="outline">
          <ArrowLeftRight className="w-4 h-4" />
          Swap
        </Button>
        <Button
          variant="outline"
          onClick={handleClear}
          disabled={!unicodeText && !preetiText}
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowPreview(!showPreview)}
          disabled={!preetiText}
        >
          <Eye className="w-4 h-4" />
          {showPreview ? 'Hide' : 'Show'} Preview
        </Button>
      </div>

      {/* Live Preview Box */}
      {showPreview && preetiText && (
        <div className="border rounded-lg p-6 bg-card">
          <h3 className="text-lg font-semibold mb-3">Preeti Font Preview</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This shows how the Preeti text will look when the Preeti font is applied.
            Install the Preeti font on your system to see proper Nepali characters.
          </p>
          <div 
            className="p-4 bg-background border rounded min-h-[100px] whitespace-pre-wrap break-words"
            style={{ fontFamily: 'Preeti, monospace', fontSize: '16px' }}
          >
            {preetiText || 'No Preeti text to preview'}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Note: You need the Preeti font installed to see this correctly. Without it, you'll see ASCII characters.
          </p>
        </div>
      )}

      {/* Converting Indicator */}
      {isConverting && (
        <div className="text-center text-sm text-muted-foreground">
          Converting...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center text-sm text-destructive bg-destructive/10 p-3 rounded-md" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
