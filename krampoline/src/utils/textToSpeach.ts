function detectLanguage(sentence: string): string {
  // 간단한 언어 감지 로직 (예: 영어와 한국어를 감지)
  const koreanRegex = /[\uAC00-\uD7AF]/;
  return koreanRegex.test(sentence) ? "ko-KR" : "en-US";
}

function speakText(text: string): void {
  if (!text) return;

  const sentences = text.match(/[^.!?]+(?:[.!?]+(?:\s|$)|\s+$|$)/g) || [text];

  sentences.forEach((sentence) => {
    const language = detectLanguage(sentence);
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = language;

    speechSynthesis.speak(utterance);
  });
}

function stopText(): void {
  speechSynthesis.cancel();
}

// Expose the functions for external use (if needed)
export { speakText, stopText };
