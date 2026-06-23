const SCHOOLS = [
  'University of Waterloo',
  'University of Toronto',
  'MIT',
  'Stanford',
  'UBC',
  'McGill',
  'Carnegie Mellon',
  'Georgia Tech',
  'Cornell',
  'Imperial College'
];

export function Marquee() {
  return (
    <div className="marquee" aria-label="Students using Master Mentor apply to leading programs">
      <div className="container marquee-label">
        Trusted by students applying to
      </div>
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {[...SCHOOLS, ...SCHOOLS].map((school, index) => (
            <span className="marquee-item" key={`${school}-${index}`} aria-hidden={index >= SCHOOLS.length}>
              {school}
              <span className="marquee-dot" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
