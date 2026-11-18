import {useState} from 'react';
import {CupSoda} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectClass?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'BA SỮA',
  aspectClass = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F5EFE7] via-[#FDF2F4] to-[#EAD7CA] text-[#6B4229] p-6 text-center ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <CupSoda className="w-10 h-10 mb-2 opacity-80" strokeWidth={1.5} />
        <span className="font-editorial text-sm font-medium">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
