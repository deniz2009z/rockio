const FLEET_PHONE_HTML = `
<div class="iphone iphone--showcase">
  <span class="iphone-side-btn iphone-side-btn--silent" aria-hidden="true"></span>
  <span class="iphone-side-btn iphone-side-btn--vol-up" aria-hidden="true"></span>
  <span class="iphone-side-btn iphone-side-btn--vol-down" aria-hidden="true"></span>
  <span class="iphone-side-btn iphone-side-btn--power" aria-hidden="true"></span>
  <div class="iphone-frame">
    <div class="iphone-island" aria-hidden="true">
      <span class="iphone-island-cam"></span>
    </div>
    <div class="iphone-screen">
      <div class="app-ui">
        <div class="app-status" aria-hidden="true">
          <span>9:41</span>
          <span class="app-status-icons">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" aria-hidden="true"><rect x="0" y="6" width="2" height="4" rx="0.5"/><rect x="3" y="4" width="2" height="6" rx="0.5"/><rect x="6" y="2" width="2" height="8" rx="0.5"/><rect x="9" y="0" width="2" height="10" rx="0.5"/></svg>
            LTE · 100%
          </span>
        </div>
        <header class="app-header">
          <div class="app-header-top">
            <span class="app-title">Rockio Fleet</span>
            <span class="app-live"><span class="app-live-dot" aria-hidden="true"></span>Live</span>
          </div>
          <p class="app-subtitle">North Valley · 847 ac · 5 units active</p>
        </header>
        <div class="app-map">
          <img class="app-map-photo" src="images/farm-aerial.jpg" alt="" width="800" height="600" loading="lazy">
          <div class="app-map-tint" aria-hidden="true"></div>
          <div class="app-map-grid" aria-hidden="true"></div>
          <svg class="app-map-blocks" viewBox="0 0 280 200" preserveAspectRatio="none" aria-hidden="true">
            <polygon class="app-map-field" points="5,5 74,5 74,96 5,96"/>
            <polygon class="app-map-field app-map-field--b" points="5,100 5,195 72,195 74,104 28,100 12,102 5,100"/>
            <polygon class="app-map-field app-map-field--c" points="80,5 166,5 164,195 78,195"/>
            <polygon class="app-map-field" points="168,5 275,5 275,195 166,195"/>
            <line class="app-map-road" x1="77" y1="0" x2="77" y2="200"/>
            <line class="app-map-divider" x1="167" y1="0" x2="167" y2="200"/>
            <text class="app-map-grid-label" x="22" y="22">BLOCK A</text>
            <text class="app-map-grid-label" x="22" y="152">BLOCK B</text>
            <text class="app-map-grid-label" x="108" y="22">BLOCK C</text>
            <text class="app-map-grid-label" x="208" y="22">BLOCK D</text>
          </svg>
          <div class="app-map-robot app-map-robot--a1">
            <span class="app-map-robot-ring" aria-hidden="true"></span>
            <div class="app-map-robot-pin"></div>
            <span class="app-map-robot-label">RK-01</span>
          </div>
          <div class="app-map-robot app-map-robot--a2">
            <span class="app-map-robot-ring" aria-hidden="true"></span>
            <div class="app-map-robot-pin"></div>
            <span class="app-map-robot-label">RK-02</span>
          </div>
          <div class="app-map-robot app-map-robot--a3">
            <span class="app-map-robot-ring" aria-hidden="true"></span>
            <div class="app-map-robot-pin app-map-robot-pin--drone"></div>
            <span class="app-map-robot-label">RK-03</span>
          </div>
          <div class="app-map-robot app-map-robot--a4">
            <span class="app-map-robot-ring" aria-hidden="true"></span>
            <div class="app-map-robot-pin"></div>
            <span class="app-map-robot-label">RK-04</span>
          </div>
          <div class="app-map-robot app-map-robot--a5">
            <span class="app-map-robot-ring" aria-hidden="true"></span>
            <div class="app-map-robot-pin app-map-robot-pin--drone"></div>
            <span class="app-map-robot-label">RK-05</span>
          </div>
          <div class="app-map-overlay">
            <span>37.7749° N</span>
            <span>122.4194° W</span>
          </div>
        </div>
        <div class="app-fleet">
          <div class="app-fleet-head">
            <span>Active units</span>
            <span>5 / 5</span>
          </div>
          <div class="app-robot-row">
            <span class="app-robot-id">RK-SPRAY 01</span>
            <span class="app-robot-pct">72%</span>
            <span class="app-robot-task">Spraying · Block A</span>
            <div class="app-robot-bar"><div class="app-robot-bar-fill" style="--bar-from: 68%; --bar-to: 76%;"></div></div>
          </div>
          <div class="app-robot-row">
            <span class="app-robot-id">RK-SPRAY 02</span>
            <span class="app-robot-pct">58%</span>
            <span class="app-robot-task">Spraying · Block B</span>
            <div class="app-robot-bar"><div class="app-robot-bar-fill" style="--bar-from: 52%; --bar-to: 64%;"></div></div>
          </div>
          <div class="app-robot-row">
            <span class="app-robot-id">RK-SCAN 03</span>
            <span class="app-robot-pct">91%</span>
            <span class="app-robot-task">Mapping · Block C</span>
            <div class="app-robot-bar"><div class="app-robot-bar-fill" style="--bar-from: 86%; --bar-to: 94%;"></div></div>
          </div>
          <div class="app-robot-row">
            <span class="app-robot-id">RK-GROUND 04</span>
            <span class="app-robot-pct">34%</span>
            <span class="app-robot-task">Monitoring · Block D</span>
            <div class="app-robot-bar"><div class="app-robot-bar-fill" style="--bar-from: 28%; --bar-to: 40%;"></div></div>
          </div>
          <div class="app-robot-row">
            <span class="app-robot-id">RK-SPRAY 05</span>
            <span class="app-robot-pct">67%</span>
            <span class="app-robot-task">Spraying · Block D</span>
            <div class="app-robot-bar"><div class="app-robot-bar-fill" style="--bar-from: 62%; --bar-to: 72%;"></div></div>
          </div>
        </div>
        <div class="iphone-home-bar" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</div>
`;

function mountFleetPhone(selector) {
  const el = document.querySelector(selector);
  if (!el || el.dataset.mounted === 'true') return;
  el.innerHTML = FLEET_PHONE_HTML;
  el.dataset.mounted = 'true';
}

document.addEventListener('DOMContentLoaded', () => {
  mountFleetPhone('#app-showcase-phone');
});
