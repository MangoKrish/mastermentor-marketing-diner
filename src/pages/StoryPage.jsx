export function StoryPage() {
  return (
    <div className="animate-in container section story-page" key="our-story">
      <div className="text-center story-heading">
        <span className="eyebrow">The Origin</span>
        <h1 className="h1 mt-4">Built from the burnout of application season.</h1>
      </div>

      <div className="card card-hover story-card">
        <h2 className="h2 mb-6">The Breaking Point.</h2>
        <p className="body-lg mt-4">
          It started in the middle of grade 12. Midterms were looming, early deadlines were approaching faster than anyone anticipated, and the pressure to secure admission to highly competitive engineering and science programs was suffocating.
        </p>
        <p className="body-lg mt-6">
          We had a dozen Chrome tabs open just for university portals. We were managing supplementary essays in three different cloud folders. Scholarship deadlines were being tracked on a spreadsheet that was completely forgotten the moment a physics test came up.
        </p>
        <p className="body-lg mt-6 story-emphasis">
          We weren&apos;t missing opportunities because we lacked the grades; we were missing them because the system we were using to track them was fundamentally broken.
        </p>

        <hr className="story-divider" />

        <h2 className="h2 mb-6">The Realization.</h2>
        <p className="body-lg mt-4">
          Students don&apos;t just need more generalized advice from a guidance counselor. They don&apos;t need another generic motivational speech. They need a <strong>structured system</strong>. A localized, digital workspace built by people who actually understand the modern academic landscape.
        </p>
        <p className="body-lg mt-6">
          We built Master Mentor to be the single source of truth we wished we had. A place where the noise of university transition is silenced, leaving only clear, actionable steps forward.
        </p>

        <div className="story-quote">
          <p className="body-lg">
            &quot;The platform exists to make academic progression feel manageable. Instead of jumping between scattered links and reminders, you get one focused, premium workspace for the tasks that actually dictate your future.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
