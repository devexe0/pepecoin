import React from 'react';
import PepeCoinLogo from './components/PepeCoinLogo';
import './App.css';

function App() {
  return (
    <div className="app">

      <main className="main">
        <section className="hero">
          <div className="hero-background">
            <div className="tech-grid"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-screenshot-container">
                <a 
                  href="https://archive.4plebs.org/s4s/thread/3218534/#3219125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-screenshot-link"
                >
                  <img 
                    src="/pepecoin.jpg" 
                    alt="Original 4chan PepeCoin Post Screenshot - Click to view original thread" 
                    className="hero-screenshot-image"
                  />
                  <div className="screenshot-overlay">
                    <div className="screenshot-text">
                      <span className="screenshot-title">THE ORIGINAL POST</span>
                      <span className="screenshot-subtitle">Click to view the legendary 4chan thread</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="hero-badge">
                <span className="badge-text">🐸 ORIGINAL • 2015 • LEGENDARY 🐸</span>
              </div>
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="title-main">🐸 PepeCoin 🐸</span>
                  <span className="title-accent">OG</span>
                </h1>
                <h2 className="hero-subtitle">The First Pepe Coin of All Time 🚀</h2>
                <div className="hero-description">
                  <p className="description-main">
                    Born on <strong>April 1st, 2015</strong> in the depths of 4chan's /s4s/ board, 
                    PepeCoin was the original memecoin that started it all. 🐸💎
                  </p>
                  <p className="description-details">
                    The authentic, community-driven token that predates the entire memecoin revolution. 
                    Before Dogecoin, before Shiba Inu, before the memecoin craze - there was PepeCoin. 📈🚀
                  </p>
                  <div className="original-post">
                    <div className="post-header">
                      <span className="post-board">/s4s/</span>
                      <span className="post-date">Wed 01 Apr 2015 08:49:55</span>
                    </div>
                    <div className="post-content">
                      <div className="post-poster">Anonymous</div>
                      <div className="post-message">"Here, have a Pepe Coin." 🐸</div>
                    </div>
                  </div>
                </div>
                <div className="provenance-info">
                  <div className="provenance-item">
                    <span className="provenance-label">🌐 ORIGIN</span>
                    <span className="provenance-value">4chan /s4s/</span>
                  </div>
                  <div className="provenance-item">
                    <span className="provenance-label">📅 DATE</span>
                    <span className="provenance-value">April 1, 2015</span>
                  </div>
                  <div className="provenance-item">
                    <span className="provenance-label">👑 STATUS</span>
                    <span className="provenance-value">LEGENDARY</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <a 
                    href="https://jup.ag/tokens/BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span className="btn-icon">🚀</span>
                    <span className="btn-text">APE IN NOW</span>
                  </a>
                  <a 
                    href="https://x.com/firstverpepe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-twitter"
                  >
                    <span className="btn-icon">🐸</span>
                    <span className="btn-text">JOIN CULT</span>
                  </a>
                  <a 
                    href="https://archive.4plebs.org/s4s/thread/3218534/#3219125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <span className="btn-icon">📜</span>
                    <span className="btn-text">VIEW HISTORY</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ca-section">
          <div className="container">
            <div className="ca-content">
              <div className="ca-logo">
                <PepeCoinLogo size={120} />
              </div>
              <div className="ca-info">
                <h3 className="ca-title">🐸 Contract Address 💎</h3>
                <div className="ca-address-container">
                  <div className="ca-address">
                    BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump
                  </div>
                  <button 
                    className="copy-btn" 
                    onClick={() => {
                      navigator.clipboard.writeText('BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump');
                      // You could add a toast notification here
                    }}
                    title="Copy Contract Address"
                  >
                    📋 Copy
                  </button>
                </div>
                <p className="ca-description">
                  🚀 Official PepeCoin contract address on Solana blockchain 🚀
                </p>
                <div className="ca-links">
                  <a 
                    href="https://jup.ag/tokens/BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-link jupiter-link"
                  >
                    🚀 APE IN NOW
                  </a>
                  <a 
                    href={`https://solscan.io/token/BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-link"
                  >
                    📊 VIEW CHART
                  </a>
                  <a 
                    href={`https://dexscreener.com/solana/BCmpLG9wsbTCy5DxBM92SFHSSeLoXQxqgm9papiipump`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ca-link"
                  >
                    💎 DEX SCREENER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section">
          <div className="container">
            <h3 className="section-title">🐸 THE LEGEND 🐸</h3>
            <div className="history-content">
              <div className="history-text">
                <h4>📜 HISTORY IN THE MAKING 📜</h4>
                <p>
                  On April 1st, 2015, an anonymous user on 4chan's /s4s/ board posted the very first Pepe Coin image 
                  with the message "Here, have a Pepe Coin." This simple post marked the beginning of what would 
                  become the first memecoin in history. 🐸💎
                </p>
                <p>
                  The original post featured the iconic green and blue circular logo that has become synonymous 
                  with PepeCoin. This design, with its distinctive horizontal separator line, was created years 
                  before the memecoin craze that would sweep the cryptocurrency world. 📈🚀
                </p>
                <div className="history-link">
                  <a 
                    href="https://archive.4plebs.org/s4s/thread/3218534/#3219125" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    🔗 VIEW ORIGINAL THREAD
                  </a>
                </div>
              </div>
              <div className="history-visual">
                <div className="archive-preview">
                  <div className="archive-header">
                    <span className="archive-board">/s4s/</span>
                    <span className="archive-date">Wed 01 Apr 2015 08:49:55</span>
                  </div>
                  <div className="archive-content">
                    <div className="archive-poster">Anonymous</div>
                    <div className="archive-message">"Here, have a Pepe Coin."</div>
                    <div className="archive-file">Pepe Coin.jpg, 11KiB, 288x252</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="x-community-section">
          <div className="container">
            <div className="x-community-content">
              <div className="x-community-header">
                <div className="x-community-icon">
                  <span className="x-symbol">𝕏</span>
                </div>
                <div className="x-community-text">
                  <h2 className="x-community-title">🐸 JOIN THE CULT 🐸</h2>
                  <p className="x-community-subtitle">Connect with fellow PepeCoin enthusiasts and stay updated on the latest developments 🚀💎</p>
                </div>
              </div>
              <div className="x-community-features">
                <div className="x-feature">
                  <span className="x-feature-icon">💬</span>
                  <span className="x-feature-text">Real-time discussions 🐸</span>
                </div>
                <div className="x-feature">
                  <span className="x-feature-icon">📢</span>
                  <span className="x-feature-text">Latest announcements 🚀</span>
                </div>
                <div className="x-feature">
                  <span className="x-feature-icon">🤝</span>
                  <span className="x-feature-text">Community support 💎</span>
                </div>
                <div className="x-feature">
                  <span className="x-feature-icon">🚀</span>
                  <span className="x-feature-text">Exclusive updates 📈</span>
                </div>
              </div>
              <div className="x-community-actions">
                <a 
                  href="https://x.com/i/communities/1974970350908690627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="x-community-btn"
                >
                  <span className="btn-icon">🐸</span>
                  <span className="btn-text">SEND IT</span>
                  <span className="btn-arrow">🚀</span>
                </a>
                <div className="x-community-stats">
                  <span className="stat-item">
                    <span className="stat-number">Active</span>
                    <span className="stat-label">Community</span>
                  </span>
                  <span className="stat-divider">•</span>
                  <span className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Updates</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <PepeCoinLogo size={40} />
              <span>PepeCoin</span>
            </div>
            <div className="footer-links">
              <a 
                href="https://archive.4plebs.org/s4s/thread/3218534/#3219125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Original 4chan Thread (2015)
              </a>
            </div>
            <p>&copy; 2024 PepeCoin. The first Pepe coin of all time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
