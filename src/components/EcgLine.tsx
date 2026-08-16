type Props = {
  className?: string;
  color?: string;
};

// A looping ECG-style waveform. Doubles as the site's signature motif —
// grounded in the ECG-classification research in /research.
export default function EcgLine({ className = "", color = "var(--pulse)" }: Props) {
  const d =
    "M0,40 L60,40 L75,40 L85,10 L95,70 L105,40 L120,40 L160,40 " +
    "L220,40 L235,40 L245,10 L255,70 L265,40 L280,40 L340,40 " +
    "L400,40 L415,40 L425,10 L435,70 L445,40 L460,40 L520,40 " +
    "L580,40 L595,40 L605,10 L615,70 L625,40 L640,40 L700,40";

  return (
    <svg
      viewBox="0 0 700 80"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
        opacity={0.7}
      />
    </svg>
  );
}
