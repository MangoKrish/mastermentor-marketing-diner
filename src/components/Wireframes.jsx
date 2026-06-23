import { Icons } from './Icons.jsx';

export function WireframeScholarship() {
  return (
    <div className="wireframe-scholarship ambient-float" aria-hidden="true">
      <div className="wireframe-heading" />
      <div className="wireframe-card-pair">
        <ScholarshipMiniCard accent="var(--primary-brand)" accessory="var(--primary-soft)" widthOne="80%" widthTwo="60%" footer="40%" />
        <ScholarshipMiniCard accent="var(--status-success)" accessory="rgba(5, 150, 105, 0.1)" widthOne="70%" widthTwo="50%" footer="30%" />
      </div>
      <div className="wireframe-summary-card">
        <div className="wireframe-avatar" />
        <div className="wireframe-lines">
          <div className="wireframe-line strong" />
          <div className="wireframe-line soft" />
        </div>
      </div>
    </div>
  );
}

function ScholarshipMiniCard({ accent, accessory, widthOne, widthTwo, footer }) {
  return (
    <div className="abstract-scholarship-card wireframe-mini-card">
      <div className="wireframe-chip" style={{ backgroundColor: accent }} />
      <div className="wireframe-line strong" style={{ width: widthOne }} />
      <div className="wireframe-line soft" style={{ width: widthTwo }} />
      <div className="wireframe-mini-footer">
        <div className="wireframe-line soft thin" style={{ width: footer }} />
        <div className="wireframe-badge" style={{ backgroundColor: accessory }} />
      </div>
    </div>
  );
}

export function WireframeDropbox() {
  return (
    <div className="wireframe-dropbox ambient-float-delayed" aria-hidden="true">
      <div className="dropbox-zone">
        <div className="dropbox-orb" />
        <div className="upload-icon">
          <Icons.Upload />
        </div>
        <div className="dropbox-progress-track">
          <div className="progress-bar" />
        </div>
        <div className="dropbox-caption" />
      </div>
    </div>
  );
}

export function WireframeResources() {
  return (
    <div className="wireframe-resources ambient-float" aria-hidden="true">
      {[1, 2, 3].map((item) => (
        <div key={item} className="resource-item wireframe-resource-card">
          <div className="resource-icon-placeholder">
            <div />
          </div>
          <div className="resource-copy-placeholder">
            <div className="wireframe-lines">
              <div className="wireframe-line muted" />
              <div className="wireframe-line strong short" />
            </div>
            <div className="resource-pill" />
          </div>
        </div>
      ))}
    </div>
  );
}
