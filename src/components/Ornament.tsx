interface OrnamentProps {
  className?: string;
}

const Ornament = ({ className = '' }: OrnamentProps) => {
  return (
    <svg 
      viewBox="0 0 200 30" 
      className={`w-32 h-6 ${className}`}
      fill="currentColor"
    >
      <path 
        d="M0,15 Q20,5 40,15 T80,15 T120,15 T160,15 T200,15" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="100" cy="15" r="3" />
      <circle cx="85" cy="12" r="2" opacity="0.7" />
      <circle cx="115" cy="12" r="2" opacity="0.7" />
      <path d="M70,15 L60,10 M70,15 L60,20" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M130,15 L140,10 M130,15 L140,20" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="50" cy="15" r="1.5" opacity="0.5" />
      <circle cx="150" cy="15" r="1.5" opacity="0.5" />
    </svg>
  );
};

export default Ornament;
