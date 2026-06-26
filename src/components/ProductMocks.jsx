import { Icons } from './Icons.jsx';
import { useTilt } from '../hooks/useTilt.js';

function WindowChrome({ title }) {
  return (
    <div className="mock-chrome">
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-chrome-title">{title}</span>
    </div>
  );
}

function Avatar({ initials, tone = 'amber' }) {
  return <span className={`avatar avatar-${tone}`}>{initials}</span>;
}

/* ---- Hero workspace ---- */
export function HeroDashboard() {
  const tiltRef = useTilt(7);
  return (
    <div className="hero-visual-stage" aria-hidden="true" ref={tiltRef}>
      <div className="hero-glow" />
      <div className="mock-card hero-mock">
        <WindowChrome title="Master Mentor · Workspace" />
        <div className="hero-mock-body">
          <div className="mock-row mock-greeting">
            <div>
              <p className="mock-eyebrow">Fall 2026 application</p>
              <p className="mock-greeting-title">Welcome back, Aanya</p>
            </div>
            <span className="status-pill status-pill-green"><span className="status-dot" /> On track</span>
          </div>

          <div className="mock-stat-grid">
            <div className="mock-stat">
              <span className="mock-stat-num">4</span>
              <span className="mock-stat-label">Deadlines this week</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-num">$48k</span>
              <span className="mock-stat-label">Scholarships matched</span>
            </div>
            <div className="mock-stat">
              <span className="mock-stat-num">92%</span>
              <span className="mock-stat-label">Profile strength</span>
            </div>
          </div>

          <div className="mock-list">
            <div className="mock-list-row">
              <span className="mock-list-icon tone-amber"><Icons.Compass /></span>
              <div className="mock-list-copy">
                <span className="mock-list-title">Schulich Leader Scholarship</span>
                <span className="mock-list-sub">94% match · STEM</span>
              </div>
              <span className="chip chip-amber"><Icons.Clock /> 3 days</span>
            </div>
            <div className="mock-list-row">
              <span className="mock-list-icon tone-green"><Icons.FileText /></span>
              <div className="mock-list-copy">
                <span className="mock-list-title">Common App — Supplement</span>
                <span className="mock-list-sub">Draft 2 · in review</span>
              </div>
              <span className="chip chip-green"><Icons.Check /> Feedback</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-chip floating-chip-1">
        <span className="floating-chip-icon tone-green"><Icons.CheckCircle /></span>
        <div>
          <strong>Essay reviewed</strong>
          <span>Mentor left 6 notes</span>
        </div>
      </div>

      <div className="floating-chip floating-chip-2">
        <span className="floating-chip-icon tone-amber"><Icons.Bell /></span>
        <div>
          <strong>Deadline in 3 days</strong>
          <span>Schulich Leader</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Pillar 01 ---- */
export function ScholarshipBoard() {
  const items = [
    { title: 'Schulich Leader', amount: '$100,000', match: '94%', tone: 'amber', due: '3 days', tag: 'STEM' },
    { title: 'Loran Award', amount: '$100,000', match: '88%', tone: 'green', due: '2 wks', tag: 'Leadership' },
    { title: 'TD Community', amount: '$70,000', match: '81%', tone: 'clay', due: '1 mo', tag: 'Service' }
  ];
  return (
    <div className="mock-card feature-mock" aria-hidden="true">
      <WindowChrome title="Scholarships · 24 matched" />
      <div className="feature-mock-body">
        <div className="board-head">
          <span className="board-title">Matched to your profile</span>
          <span className="chip chip-ghost">Sorted by fit</span>
        </div>
        {items.map((s) => (
          <div className="board-row" key={s.title}>
            <span className={`board-amount tone-${s.tone}`}>{s.amount}</span>
            <div className="board-copy">
              <span className="board-name">{s.title}</span>
              <span className="board-sub">{s.tag} · closes in {s.due}</span>
            </div>
            <span className={`match-badge match-${s.tone}`}>{s.match}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Pillar 02 ---- */
export function ReviewPanel() {
  return (
    <div className="mock-card feature-mock" aria-hidden="true">
      <WindowChrome title="Review Dropbox" />
      <div className="feature-mock-body">
        <div className="file-row">
          <span className="file-icon"><Icons.FileText /></span>
          <div className="board-copy">
            <span className="board-name">Personal_Statement_v3.pdf</span>
            <span className="board-sub">Shared with 1 mentor</span>
          </div>
          <span className="status-pill status-pill-green"><span className="status-dot" /> Reviewed</span>
        </div>

        <div className="progress-track-mock"><span className="progress-fill-mock" /></div>

        <div className="comment-bubble">
          <Avatar initials="DR" tone="green" />
          <div className="comment-body">
            <span className="comment-name">Dr. Reyes <span className="comment-time">· 2h ago</span></span>
            <span className="comment-text">
              Strong opening. Tighten paragraph 3 and lead with the robotics result — it&apos;s your best evidence.
            </span>
          </div>
        </div>
        <div className="comment-actions">
          <span className="chip chip-ghost">6 inline notes</span>
          <span className="chip chip-green"><Icons.Check /> Resolve</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Pillar 03 ---- */
export function ResourceLibrary() {
  const rows = [
    { name: 'Engineering supplement teardown', cat: 'Essays', icon: <Icons.FileText />, tone: 'amber' },
    { name: 'AP Physics C — full prep map', cat: 'Study', icon: <Icons.BookOpen />, tone: 'green' },
    { name: 'Scholarship interview playbook', cat: 'Interviews', icon: <Icons.Compass />, tone: 'clay' },
    { name: 'Prerequisite checklist · CS', cat: 'Planning', icon: <Icons.Check />, tone: 'amber' }
  ];
  return (
    <div className="mock-card feature-mock" aria-hidden="true">
      <WindowChrome title="Resource Library" />
      <div className="feature-mock-body">
        <div className="library-search">
          <Icons.Search />
          <span>Search 240+ vetted guides…</span>
        </div>
        {rows.map((r) => (
          <div className="library-row" key={r.name}>
            <span className={`library-icon tone-${r.tone}`}>{r.icon}</span>
            <span className="library-name">{r.name}</span>
            <span className="chip chip-ghost">{r.cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
