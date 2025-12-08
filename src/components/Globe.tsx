import styled from 'styled-components';

const GlobeWrapper = styled.div`
  width: 120px;
  height: 120px;
`;

export function Globe() {
  return (
    <GlobeWrapper>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="globe-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>

        {/* Globe outline */}
        <circle cx="50" cy="50" r="48" stroke="#D1D5DB" strokeWidth="1" fill="none" />

        {/* Grid lines */}
        <ellipse cx="50" cy="50" rx="48" ry="18" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        <ellipse cx="50" cy="50" rx="48" ry="36" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        <ellipse cx="50" cy="50" rx="20" ry="48" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />

        {/* Stippled continents - Americas focused */}
        <g clipPath="url(#globe-clip)">
          {/* North America - Canada/Alaska area */}
          <circle cx="22" cy="22" r="1.2" fill="#6B7280" />
          <circle cx="26" cy="20" r="1.2" fill="#6B7280" />
          <circle cx="30" cy="19" r="1.2" fill="#6B7280" />
          <circle cx="34" cy="20" r="1.2" fill="#6B7280" />
          <circle cx="38" cy="22" r="1.2" fill="#6B7280" />
          <circle cx="24" cy="26" r="1.2" fill="#6B7280" />
          <circle cx="28" cy="25" r="1.2" fill="#6B7280" />
          <circle cx="32" cy="24" r="1.2" fill="#6B7280" />
          <circle cx="36" cy="26" r="1.2" fill="#6B7280" />

          {/* North America - USA */}
          <circle cx="20" cy="30" r="1.2" fill="#6B7280" />
          <circle cx="24" cy="32" r="1.2" fill="#6B7280" />
          <circle cx="28" cy="30" r="1.2" fill="#6B7280" />
          <circle cx="32" cy="29" r="1.2" fill="#6B7280" />
          <circle cx="36" cy="31" r="1.2" fill="#6B7280" />
          <circle cx="40" cy="30" r="1.2" fill="#6B7280" />
          <circle cx="22" cy="35" r="1.2" fill="#6B7280" />
          <circle cx="26" cy="36" r="1.2" fill="#6B7280" />
          <circle cx="30" cy="34" r="1.2" fill="#6B7280" />
          <circle cx="34" cy="35" r="1.2" fill="#6B7280" />
          <circle cx="38" cy="36" r="1.2" fill="#6B7280" />
          <circle cx="25" cy="40" r="1.2" fill="#6B7280" />
          <circle cx="29" cy="39" r="1.2" fill="#6B7280" />
          <circle cx="33" cy="40" r="1.2" fill="#6B7280" />
          <circle cx="37" cy="41" r="1.2" fill="#6B7280" />

          {/* Mexico & Central America */}
          <circle cx="28" cy="44" r="1.2" fill="#6B7280" />
          <circle cx="32" cy="45" r="1.2" fill="#6B7280" />
          <circle cx="30" cy="49" r="1.2" fill="#6B7280" />
          <circle cx="34" cy="50" r="1.2" fill="#6B7280" />
          <circle cx="32" cy="54" r="1.2" fill="#6B7280" />
          <circle cx="35" cy="56" r="1.2" fill="#6B7280" />

          {/* South America */}
          <circle cx="38" cy="60" r="1.2" fill="#6B7280" />
          <circle cx="42" cy="58" r="1.2" fill="#6B7280" />
          <circle cx="46" cy="60" r="1.2" fill="#6B7280" />
          <circle cx="40" cy="64" r="1.2" fill="#6B7280" />
          <circle cx="44" cy="63" r="1.2" fill="#6B7280" />
          <circle cx="48" cy="65" r="1.2" fill="#6B7280" />
          <circle cx="42" cy="68" r="1.2" fill="#6B7280" />
          <circle cx="46" cy="69" r="1.2" fill="#6B7280" />
          <circle cx="50" cy="70" r="1.2" fill="#6B7280" />
          <circle cx="44" cy="73" r="1.2" fill="#6B7280" />
          <circle cx="48" cy="74" r="1.2" fill="#6B7280" />
          <circle cx="46" cy="78" r="1.2" fill="#6B7280" />
          <circle cx="44" cy="82" r="1.2" fill="#6B7280" />
          <circle cx="42" cy="86" r="1.2" fill="#6B7280" />

          {/* Europe hint (on the right edge) */}
          <circle cx="72" cy="28" r="1.2" fill="#6B7280" />
          <circle cx="76" cy="30" r="1.2" fill="#6B7280" />
          <circle cx="80" cy="32" r="1.2" fill="#6B7280" />
          <circle cx="74" cy="34" r="1.2" fill="#6B7280" />
          <circle cx="78" cy="36" r="1.2" fill="#6B7280" />

          {/* Africa hint (on the right edge) */}
          <circle cx="76" cy="44" r="1.2" fill="#6B7280" />
          <circle cx="80" cy="46" r="1.2" fill="#6B7280" />
          <circle cx="78" cy="50" r="1.2" fill="#6B7280" />
          <circle cx="82" cy="52" r="1.2" fill="#6B7280" />
          <circle cx="80" cy="56" r="1.2" fill="#6B7280" />
        </g>
      </svg>
    </GlobeWrapper>
  );
}
