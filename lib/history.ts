/**
 * Conversion history management using localStorage
 */

export interface ConversionHistoryItem {
  id: string;
  timestamp: number;
  unicodeText: string;
  preetiText: string;
  direction: 'unicode-to-preeti' | 'preeti-to-unicode';
}

const HISTORY_KEY = 'unipreeti_conversion_history';
const MAX_HISTORY_ITEMS = 50;

/**
 * Get conversion history from localStorage
 */
export function getHistory(): ConversionHistoryItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    
    const history = JSON.parse(stored);
    return Array.isArray(history) ? history : [];
  } catch (error) {
    console.error('Error reading history:', error);
    return [];
  }
}

/**
 * Save a conversion to history
 */
export function saveToHistory(
  unicodeText: string,
  preetiText: string,
  direction: 'unicode-to-preeti' | 'preeti-to-unicode'
): void {
  if (typeof window === 'undefined') return;
  if (!unicodeText && !preetiText) return;
  
  try {
    const history = getHistory();
    
    const newItem: ConversionHistoryItem = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      unicodeText: unicodeText.substring(0, 500), // Limit text length
      preetiText: preetiText.substring(0, 500),
      direction,
    };
    
    // Add to beginning of array
    history.unshift(newItem);
    
    // Keep only last MAX_HISTORY_ITEMS
    const trimmedHistory = history.slice(0, MAX_HISTORY_ITEMS);
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmedHistory));
  } catch (error) {
    console.error('Error saving to history:', error);
  }
}

/**
 * Clear all history
 */
export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing history:', error);
  }
}

/**
 * Delete a specific history item
 */
export function deleteHistoryItem(id: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const history = getHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting history item:', error);
  }
}

/**
 * Format timestamp for display
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString();
}
