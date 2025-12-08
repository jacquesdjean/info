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
          <pattern id="dots" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.7" fill="#1A1A1A" />
          </pattern>
          <clipPath id="globe-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>

        <circle cx="50" cy="50" r="48" stroke="#D1D5DB" strokeWidth="1" fill="none" />

        <ellipse cx="50" cy="50" rx="48" ry="18" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        <ellipse cx="50" cy="50" rx="48" ry="36" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        <ellipse cx="50" cy="50" rx="20" ry="48" stroke="#E5E7EB" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />

        <g clipPath="url(#globe-clip)">
          <path d="M15 28 Q25 18 38 22 Q48 28 45 42 Q38 52 28 50 Q18 45 15 35 Z" fill="url(#dots)" />
          <path d="M32 58 Q42 54 45 62 Q44 78 36 85 Q28 82 26 72 Q27 62 32 58 Z" fill="url(#dots)" />
          <path d="M52 22 Q62 18 68 24 Q72 32 68 38 Q60 42 54 38 Q50 30 52 22 Z" fill="url(#dots)" />
          <path d="M56 44 Q66 40 72 48 Q76 62 70 74 Q62 80 54 74 Q48 62 52 52 Z" fill="url(#dots)" />
          <path d="M72 20 Q88 16 95 28 Q92 42 82 48 Q72 44 68 34 Q68 24 72 20 Z" fill="url(#dots)" />
        </g>
      </svg>
    </GlobeWrapper>
  );
}
