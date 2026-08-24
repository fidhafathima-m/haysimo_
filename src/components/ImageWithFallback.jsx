import { useState } from 'react';
import { Droplets } from 'lucide-react';

/**
 * Renders an <img>, but if the source fails to load (e.g. hotlink
 * restrictions or a moved asset), swaps in a themed placeholder so the
 * layout never breaks and never shows a browser's broken-image icon.
 */
export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  label,
  ...rest
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || label || 'Haysimo Water'}
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-horizon-100 via-sky-light/40 to-gold-light/30 ${className}`}
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(47,159,224,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(232,169,59,0.3),transparent_55%)]" />
        <div className="relative flex flex-col items-center gap-2 text-horizon-600/70 px-4 text-center">
          <Droplets className="w-8 h-8" strokeWidth={1.5} />
          <span className="text-xs font-medium tracking-wide uppercase">
            {label || alt || 'Haysimo Water'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
      {...rest}
    />
  );
}
