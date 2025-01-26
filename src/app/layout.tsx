import React from 'react';
import Image from 'next/image';
import './styles/main-tile.css';
import './styles/left-zone.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {background}
        {logo}
        {navigation}
        {children}
      </body>
    </html>
  );
}

const logo = (
  <div
    className="main-tile left-bar-tile"
    style={{
      position: "fixed",
      top: "20px",
      left: "20px",
      height: "73px",
      width: "300px",
    }}
  >
    <div className="logo-section">
      <Image
        src="/halo-eye-logo.svg"
        alt="Logo"
        width={50}
        height={50}
        className="logo-svg"
      />
      <div className="logo-text">
        <span className="logo-gradient-wrapper">
          <span className="first-logo-letter">H</span>
          <span className="logo-letter">A</span>
          <span className="logo-letter">L</span>
          <span className="logo-letter">O</span>
          <span className="first-logo-letter">E</span>
          <span className="logo-letter">Y</span>
          <span className="logo-letter">E</span>
        </span>
      </div>
    </div>
  </div>
);

const navigation = (
    <div className='main-tile left-bar-tile'
        style={{
            position: "fixed",
            top: "105px",
            left: "20px",
            height: "calc(100% - 125px)",
            width: "300px",
        }}>
    </div>
);

const background = (
  <>
    {/* Base background */}
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "#000000",
        zIndex: -2,
      }}
    ></div>

    {/* Colored blurred spots */}
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Spot 1 */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          backgroundColor: "#ff6b6b",
          borderRadius: "50%",
          filter: "blur(150px)",
          top: "10%",
          left: "15%",
          opacity: 0.6,
        }}
      ></div>

      {/* Spot 2 */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          backgroundColor: "#6c5ce7",
          borderRadius: "50%",
          filter: "blur(150px)",
          bottom: "15%",
          right: "10%",
          opacity: 0.5,
        }}
      ></div>

      {/* Spot 3 */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          backgroundColor: "#81ecec",
          borderRadius: "50%",
          filter: "blur(200px)",
          bottom: "5%",
          left: "20%",
          opacity: 0.4,
        }}
      ></div>

      {/* Spot 4 */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          backgroundColor: "#fd79a8",
          borderRadius: "50%",
          filter: "blur(200px)",
          top: "15%",
          right: "5%",
          opacity: 0.3,
        }}
      ></div>

      {/* Spot 5 */}
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          backgroundColor: "#d35400",
          borderRadius: "50%",
          filter: "blur(110px)",
          top: "10%",
          left: "50%",
          opacity: 0.6,
        }}
      ></div>
    </div>
  </>
);
