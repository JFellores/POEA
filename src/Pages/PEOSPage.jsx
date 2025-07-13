import React, { useEffect } from 'react';

export default function PEOSPage() {
  useEffect(() => {
    console.log('✅ PEOSPage mounted');
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: '#000000' }}>
        PEOS Processing
        </h2>

      <p style={{ color: '#000000' }}>Welcome to the PEOS page.</p>
    </div>
  );
}
