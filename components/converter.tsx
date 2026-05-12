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

type ConversionMode = 'unicodeToPreeti' | 'preetiToUnicode';

export default function Converter() {
  const [mode, setMode] = useState<ConversionMode>('unicodeToPreeti');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState<'input' | 'output' | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Convert text based on mode with debounce
  const handleInputChange = useCallback((value: string) => {
    setInputText(value);
    setIsConverting(true);
    setError(null);
    
    // Debounced conversion
    const timer = setTimeout(() => {
      try {
        if (!value) {
          setOutputText('');
          setIsConverting(false);
          return;
        }
        
        const converted = mode === 'unicodeToPreeti' 
          ? unicodeToPreeti(value)
          : preetiToUnicode(value);
        setOutputText(converted);
        setIsConverting(false);
        setError(null);
      } catch (err) {
        setError(`Conversion error: ${err instanceof Error ? err.message : 'Please try again.'}`);
        setIsConverting(false);
        console.error('Conversion error:', err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [mode]);

  // Manual convert button
  const handleManualConvert = () => {
    if (inputText) {
      try {
        const converted = mode === 'unicodeToPreeti' 
          ? unicodeToPreeti(inputText)
          : preetiToUnicode(inputText);
        setOutputText(converted);
      } catch (err) {
        setError('Conversion error. Please try again.');
        console.error('Conversion error:', err);
      }
    }
  };

  // Swap: interchange input/output AND switch mode
  const handleSwap = () => {
    // Swap the text content
    const temp = inputText;
    setInputText(outputText);
    setOutputText(temp);
    
    // Switch the conversion mode
    setMode(mode === 'unicodeToPreeti' ? 'preetiToUnicode' : 'unicodeToPreeti');
  };

  // Clear all
  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  // Copy to clipboard
  const handleCopy = async (text: string, type: 'input' | 'output') => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  // Download as file
  const handleDownload = (text: string, type: 'input' | 'output') => {
    const label = mode === 'unicodeToPreeti' 
      ? (type === 'input' ? 'unicode' : 'preeti')
      : (type === 'input' ? 'preeti' : 'unicode');
    const filename = `${label}-${Date.now()}.txt`;
    downloadAsFile(text, filename);
  };

  // Upload file (supports .txt and .doc)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log('File selected:', file.name, 'Type:', file.type, 'Size:', file.size);

    try {
      let content = '';
      
      // Handle .txt files
      if (file.name.endsWith('.txt')) {
        console.log('Reading .txt file...');
        content = await readFileAsText(file);
        console.log('Content length:', content.length);
      }
      // Handle .doc files (basic support - read as text)
      else if (file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        console.log('Reading .doc/.docx file...');
        // For .doc/.docx files, we can only read them as text if they're actually text-based
        // Modern .docx are ZIP files, so this won't work perfectly
        try {
          content = await readFileAsText(file);
          console.log('Content read, length:', content.length);
          // If the content looks like binary (has lots of null characters), show error
          if (content.includes('\0') || content.length === 0) {
            alert('Binary .doc/.docx files cannot be read directly in the browser.\n\nPlease:\n1. Open your Word document\n2. Copy the text (Ctrl+A, Ctrl+C)\n3. Paste it directly into the text area\n\nOr save as .txt file first.');
            e.target.value = '';
            return;
          }
        } catch (err) {
          console.error('Error reading doc file:', err);
          alert('Cannot read this Word document format.\n\nPlease:\n1. Open your Word document\n2. Copy the text (Ctrl+A, Ctrl+C)\n3. Paste it directly into the text area\n\nOr save as .txt file first.');
          e.target.value = '';
          return;
        }
      } else {
        alert('Please upload a .txt or .doc file.');
        e.target.value = '';
        return;
      }
      
      if (content) {
        console.log('Setting input text...');
        handleInputChange(content);
      } else {
        alert('The file appears to be empty.');
      }
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Error reading file. Please try again or paste the text directly.');
    }
    
    // Reset input
    e.target.value = '';
  };

  // Get labels based on current mode
  const inputLabel = mode === 'unicodeToPreeti' ? 'Unicode Nepali' : 'Preeti Font';
  const outputLabel = mode === 'unicodeToPreeti' ? 'Preeti Font' : 'Unicode Nepali';
  const inputPlaceholder = mode === 'unicodeToPreeti' 
    ? 'यहाँ युनिकोड नेपाली टाइप गर्नुहोस्...'
    : 'Type Preeti encoded text here...';
  const outputPlaceholder = mode === 'unicodeToPreeti'
    ? 'Preeti output will appear here...'
    : 'युनिकोड आउटपुट यहाँ देखिनेछ...';

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
        {/* Input Side */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{inputLabel}</h2>
            <div className="flex gap-2">
              <input
                id="file-upload"
                type="file"
                accept=".txt,.doc,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button 
                variant="outline" 
                size="sm" 
                type="button" 
                onClick={() => document.getElementById('file-upload')?.click()}
                className="cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                Upload
              </Button>
            </div>
          </div>
          
          <Textarea
            value={inputText}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={inputPlaceholder}
            className="min-h-[300px] font-mono text-base"
            aria-label={`${inputLabel} input`}
          />
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(inputText, 'input')}
              disabled={!inputText}
            >
              {copied === 'input' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownload(inputText, 'input')}
              disabled={!inputText}
            >
              <Download className="w-4 h-4" />
              Download .txt
            </Button>
          </div>
        </div>

        {/* Output Side */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{outputLabel}</h2>
            <div className="h-9"></div> {/* Spacer for alignment */}
          </div>
          
          <Textarea
            value={outputText}
            readOnly
            placeholder={outputPlaceholder}
            className="min-h-[300px] font-mono text-base bg-muted/50"
            aria-label={`${outputLabel} output`}
          />
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(outputText, 'output')}
              disabled={!outputText}
            >
              {copied === 'output' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownload(outputText, 'output')}
              disabled={!outputText}
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
          disabled={!inputText}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Convert
        </Button>
        <Button 
          onClick={handleSwap} 
          variant="outline"
          title="Swap input and output, and switch conversion direction"
        >
          <ArrowLeftRight className="w-4 h-4" />
          Swap
        </Button>
        <Button
          variant="outline"
          onClick={handleClear}
          disabled={!inputText && !outputText}
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </Button>
        {mode === 'unicodeToPreeti' && (
          <Button
            variant="outline"
            onClick={() => setShowPreview(!showPreview)}
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Hide' : 'Show'} Preview
          </Button>
        )}
      </div>

      {/* Live Preview Box (only for Unicode to Preeti mode) */}
      {showPreview && mode === 'unicodeToPreeti' && (
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
            {outputText || 'g]kfnL o\'lgsf]8 / k|Llt kmg\\6df n]v\\g n]v\\g\'; 86 sd k|of]u ug{\'xf];\\ Û'}
          </div>
          {!outputText && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              Example text: "नेपाली युनिकोड र प्रीति फन्टमा लेख्न लेख्नुस डट कम प्रयोग गर्नुहोस् !"
            </p>
          )}
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
