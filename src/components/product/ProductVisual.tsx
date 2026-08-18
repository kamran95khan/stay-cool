/**
 * SWAPPABLE PRODUCT VISUAL
 * ------------------------------------------------------------
 * Illustrated placeholder for the product photography.
 * To use real photos later, replace the body of this component with:
 *   <img src={photos[variant]} alt="..." className="h-full w-full object-cover" />
 */

type Variant = 0 | 1 | 2 | 3;

export function ProductVisual({
  variant = 0,
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-hero-glow ${className}`}>
      <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="Solar rechargeable fan illustration">
        {/* sun / solar motif */}
        <g className="animate-spin-slow" style={{ transformOrigin: "312px 82px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x={310}
              y={26}
              width={4}
              height={16}
              rx={2}
              fill="var(--solar)"
              transform={`rotate(${i * 30} 312 82)`}
              opacity={0.85}
            />
          ))}
        </g>
        <circle cx={312} cy={82} r={28} fill="var(--sun)" />
        <circle cx={312} cy={82} r={18} fill="var(--solar)" opacity={0.55} />

        {(variant === 0 || variant === 3) && (
          <>
            {/* stand */}
            <rect x={188} y={230} width={24} height={110} rx={12} fill="var(--forest)" opacity={0.9} />
            <rect x={140} y={336} width={120} height={16} rx={8} fill="var(--forest)" />
            {/* fan body */}
            <circle cx={200} cy={168} r={110} fill="#fff" />
            <circle cx={200} cy={168} r={110} fill="none" stroke="var(--forest)" strokeWidth={8} />
            <circle cx={200} cy={168} r={86} fill="none" stroke="var(--primary)" strokeWidth={3} opacity={0.35} />
            <circle cx={200} cy={168} r={62} fill="none" stroke="var(--primary)" strokeWidth={3} opacity={0.25} />
            {/* blades */}
            <g className="animate-spin-slow" style={{ transformOrigin: "200px 168px" }}>
              {[0, 72, 144, 216, 288].map((a) => (
                <path
                  key={a}
                  d="M200 168 C232 150 250 118 236 96 C214 104 196 130 200 168 Z"
                  fill="var(--primary)"
                  opacity={0.85}
                  transform={`rotate(${a} 200 168)`}
                />
              ))}
            </g>
            <circle cx={200} cy={168} r={20} fill="var(--forest)" />
            <circle cx={200} cy={168} r={7} fill="var(--sun)" />
            {variant === 3 && (
              <>
                {/* night light glow */}
                <circle cx={200} cy={300} r={44} fill="var(--sun)" opacity={0.35} />
                <rect x={176} y={288} width={48} height={14} rx={7} fill="var(--sun)" />
              </>
            )}
          </>
        )}

        {variant === 1 && (
          <>
            {/* solar panel */}
            <g transform="rotate(-12 200 210)">
              <rect x={78} y={130} width={244} height={160} rx={12} fill="var(--forest)" />
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 3 }).map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={90 + c * 78}
                    y={142 + r * 38}
                    width={66}
                    height={28}
                    rx={4}
                    fill="var(--primary)"
                    opacity={0.55 + r * 0.08}
                  />
                )),
              )}
            </g>
            <path d="M200 300 C240 320 280 320 320 336" stroke="var(--forest)" strokeWidth={6} fill="none" strokeLinecap="round" />
          </>
        )}

        {variant === 2 && (
          <>
            {/* battery + usb detail */}
            <rect x={92} y={150} width={190} height={100} rx={20} fill="#fff" stroke="var(--forest)" strokeWidth={8} />
            <rect x={282} y={182} width={18} height={36} rx={6} fill="var(--forest)" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={112 + i * 42} y={172} width={30} height={56} rx={8} fill="var(--primary)" opacity={0.85 - i * 0.15} />
            ))}
            <rect x={140} y={282} width={120} height={40} rx={12} fill="var(--forest)" />
            <rect x={166} y={296} width={68} height={12} rx={6} fill="var(--sun)" />
          </>
        )}
      </svg>
    </div>
  );
}
