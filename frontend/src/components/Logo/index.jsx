export default function Logo({ width = 210, height = 60 }) {
  return (
    <div className="d-inline-block text-start">
      <svg
        width={width}
        height={height}
        viewBox="0 0 360 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Filtro para dar legibilidade ao texto sobre a linha */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* 1. Onda Contínua por TRÁS (atravessa do início ao fim sem interrupção) */}
        <path
          d="M 18 35 H 36 C 42 35 48 30 54 30 C 60 30 68 43 74 43 C 80 43 88 23 94 23 C 100 23 108 50 114 50 C 120 50 128 17 134 17 C 140 17 148 56 154 56 C 160 56 168 10 174 10 C 180 10 188 56 194 56 C 200 56 208 17 214 17 C 220 17 228 50 234 50 C 240 50 248 23 254 23 C 260 23 268 43 274 43 C 280 43 288 30 294 30 C 300 30 308 35 314 35 H 333"
          stroke="#C484F2"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* 2. Ponto de brilho ciano no final da linha */}
        <circle cx="339" cy="35" r="4" fill="#43E3D1" />

        {/* 3. Texto "PULSE" centralizado POR CIMA da onda */}
        <text
          x="180"
          y="48"
          fill="#ebf9f8"
          fontSize="42"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="3"
          textAnchor="middle"
          filter="url(#glow)"
        >
          PULSE
        </text>
      </svg>
    </div>
  );
}