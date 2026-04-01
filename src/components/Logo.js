export function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="0.5" stopColor="#fde047" />
          <stop offset="1" stopColor="#86efac" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="28" height="28" rx="8" fill="url(#logoGrad)" opacity="0.95" />
      <path
        d="M12 14h12M12 19h10M12 24h8"
        stroke="#0c4a6e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="30" cy="12" r="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
    </svg>
  );
}
