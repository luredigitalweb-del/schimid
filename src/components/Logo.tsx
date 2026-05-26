export default function Logo({
  className = '',
  variant = 'bare',
}: {
  className?: string;
  variant?: 'plate' | 'bare';
}) {
  if (variant === 'plate') {
    return (
      <a href="#top" className={`inline-flex items-center ${className}`}>
        <span className="inline-flex items-center justify-center bg-white rounded-xl px-3 py-1.5 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)]">
          <img
            src="/logo.png"
            alt="Mecânica Schimid"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </span>
      </a>
    );
  }

  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Mecânica Schimid"
        className="h-10 md:h-12 w-auto object-contain"
      />
    </a>
  );
}
