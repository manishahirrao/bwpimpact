import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: '#0D1B4B', // navy-deep
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#E6C47A', // gold-primary
          borderRadius: '4px',
          fontWeight: 800,
        }}
      >
        B
      </div>
    ),
    {
      ...size,
    }
  );
}
