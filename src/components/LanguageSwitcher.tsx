import React from 'react';
import { Globe } from 'lucide-react';

interface Props {
  current: 'en' | 'ja' | 'ko';
}

const languages = [
  { code: 'en', label: 'English', path: '/' },
  { code: 'ja', label: '日本語', path: '/ja' },
  { code: 'ko', label: '한국어', path: '/ko' },
];

export default function LanguageSwitcher({ current }: Props) {
  return (
    <div className="flex justify-end items-center gap-2 p-2">
      <Globe className="w-5 h-5 text-primary" />
      {languages.map(lang => (
        <a
          key={lang.code}
          href={lang.path}
          className={`px-2 py-1 rounded font-semibold transition-colors ${current === lang.code ? 'bg-accent text-white' : 'text-primary hover:bg-orange-100'}`}
        >
          {lang.label}
        </a>
      ))}
    </div>
  );
} 