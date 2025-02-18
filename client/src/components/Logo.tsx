export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10 C20 5.5 25.5 0 30 0 C34.5 0 40 5.5 40 10 L40 30 C40 34.5 34.5 40 30 40 C25.5 40 20 34.5 20 30 Z"
        fill="#1a365d"
      />
      <path
        d="M0 30 C0 34.5 5.5 40 10 40 C14.5 40 20 34.5 20 30 L20 10 C20 5.5 14.5 0 10 0 C5.5 0 0 5.5 0 10 Z"
        fill="#ed8936"
      />
      <text x="50" y="26" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#1a365d">
        Fidcent
      </text>
    </svg>
  );
}
