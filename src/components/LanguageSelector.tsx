"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages?: string; autoDisplay?: boolean },
          elementId: string
        ) => void;
      };
    };
  }
}

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export default function LanguageSelector({ isScrolled = true }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const addScript = () => {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,zh-CN,ja,ko,pt,ar,hi,ru,it",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 transition-colors font-medium text-sm ${
          isScrolled
            ? "text-[var(--gray-600)] hover:text-[var(--primary-blue)]"
            : "text-white/90 hover:text-white"
        }`}
        aria-label="Select language"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-[var(--gray-100)] p-3 z-50 min-w-[200px]">
            <p className="text-xs text-[var(--gray-400)] uppercase tracking-wider mb-2 px-2">
              Select Language
            </p>
            <div id="google_translate_element" className="translate-widget" />
          </div>
        </>
      )}

      <style jsx global>{`
        .translate-widget .goog-te-gadget {
          font-family: inherit !important;
        }
        .translate-widget .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }
        .translate-widget .goog-te-gadget-simple .goog-te-menu-value {
          color: var(--gray-900) !important;
        }
        .translate-widget .goog-te-gadget-simple .goog-te-menu-value span {
          color: var(--gray-900) !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .skiptranslate {
          display: none !important;
        }
        .translate-widget .skiptranslate {
          display: block !important;
        }
      `}</style>
    </div>
  );
}
