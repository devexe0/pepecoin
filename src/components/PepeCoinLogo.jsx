import React from 'react';

const PepeCoinLogo = ({ size = 100, className = '' }) => {
  return (
    <div className={`pepe-coin-logo ${className}`} style={{ width: size, height: size, padding: '20px' }}>
      <img
        src="/pepecoinlogo.jpg"
        alt="PepeCoin Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '50%',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
    </div>
  );
};

export default PepeCoinLogo;
