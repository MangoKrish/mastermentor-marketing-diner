import { Icons } from './Icons.jsx';
import { Reveal } from './Reveal.jsx';

const MENTORS = [
  {
    initials: 'DR', tone: 'green', name: 'Dr. Reyes', fit: 'Top match',
    school: 'Waterloo', program: 'Computer Science',
    tags: ['Scholarship winner', 'Co-op', 'Ontario']
  },
  {
    initials: 'AP', tone: 'amber', name: 'Aanya P.', fit: 'Strong fit',
    school: 'U of T', program: 'Engineering Science',
    tags: ['First-gen', 'Research', 'Ontario']
  },
  {
    initials: 'ML', tone: 'clay', name: 'Marcus L.', fit: 'Great fit',
    school: 'Georgia Tech', program: 'Computer Science',
    tags: ['International', 'Internships']
  },
  {
    initials: 'SR', tone: 'green', name: 'Sofia R.', fit: 'Strong fit',
    school: 'McGill', program: 'Biology · Pre-med',
    tags: ['MCAT', 'Volunteering', 'Quebec']
  },
  {
    initials: 'JK', tone: 'amber', name: 'Jordan K.', fit: 'Good fit',
    school: 'UBC', program: 'Commerce',
    tags: ['Case comps', 'Leadership', 'BC']
  }
];

export function MentorSpotlight() {
  return (
    <section className="spotlight-section">
      <div className="container">
        <Reveal className="spotlight-head">
          <div>
            <span className="eyebrow">Meet your mentors</span>
            <h2 className="h2 mt-4">Real students who&apos;ve been exactly where you are.</h2>
          </div>
          <a href="https://mastermentor.academy/portal" className="btn-ghost spotlight-browse">
            Browse the directory <Icons.ArrowUpRight />
          </a>
        </Reveal>
      </div>

      <div className="spotlight-rail-wrap">
        <div className="container spotlight-rail">
          {MENTORS.map((m) => (
            <article className="spotlight-card" key={m.name}>
              <div className="spotlight-card-top">
                <span className={`avatar avatar-${m.tone} spotlight-avatar`}>{m.initials}</span>
                <span className="match-badge match-green">{m.fit}</span>
              </div>
              <h3 className="spotlight-name">{m.name}</h3>
              <p className="spotlight-meta">
                <Icons.Compass /> {m.school} · {m.program}
              </p>
              <div className="spotlight-tags">
                {m.tags.map((t) => (
                  <span className="chip chip-ghost" key={t}>{t}</span>
                ))}
              </div>
              <span className="spotlight-link">View insights <Icons.ArrowUpRight /></span>
            </article>
          ))}
          <div className="spotlight-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
