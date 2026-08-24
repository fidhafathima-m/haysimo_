/**
 * The site's signature motif: a slow, continuously flowing wave line that
 * separates major sections — echoing water without resorting to a generic
 * blob or gradient mesh.
 */
export default function WaveDivider({
  flip = false,
  colorTop = '#FBFCFE',
  colorBottom = '#EAF3FA',
  className = '',
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ backgroundColor: colorTop }}
      aria-hidden="true"
    >
      <svg
        className={`w-[200%] h-16 sm:h-24 animate-[wave-scroll_18s_linear_infinite] ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 2800 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C100,180 200,20 350,80 C500,140 600,20 750,90 C900,160 1000,40 1150,90 C1300,140 1400,30 1550,90 C1700,150 1800,40 1950,90 C2100,140 2200,30 2350,90 C2500,150 2600,40 2800,100 L2800,200 L0,200 Z"
          fill={colorBottom}
        />
      </svg>
      <style>{`
        @keyframes wave-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
