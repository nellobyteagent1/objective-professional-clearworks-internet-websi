const solutions = [
  {
    title: 'Internet Access',
    text: 'Business fiber, coax, fixed wireless, and dedicated access sourced from leading carriers with location-specific quoting.',
  },
  {
    title: 'Voice & Collaboration',
    text: 'Cloud voice, SIP, Teams integration, and contact center solutions matched to your call flows and growth plans.',
  },
  {
    title: 'Network Continuity',
    text: 'SD-WAN, managed routers, failover circuits, and 5G backup that keep branches and distributed teams online.',
  },
]

const metrics = [
  { value: '250+', label: 'carrier and provider options' },
  { value: '48 hrs', label: 'typical quote turnaround' },
  { value: '1 partner', label: 'for sourcing through renewal' },
]

const plans = [
  {
    name: 'Site Discovery',
    price: 'Free',
    detail: 'Early-stage guidance for new locations, relocations, and procurement planning.',
    items: ['Address validation', 'Carrier availability review', 'Budgetary recommendations'],
  },
  {
    name: 'Procurement Support',
    price: 'Commission-based',
    detail: 'Carrier-neutral comparison and contract guidance for internet and telecom buying.',
    items: ['Multi-provider quotes', 'SLA and term comparison', 'Order coordination'],
  },
  {
    name: 'Lifecycle Management',
    price: 'Custom',
    detail: 'Ongoing partner support for inventory, escalations, renewals, and change management.',
    items: ['Renewal tracking', 'Issue escalation', 'Expansion planning'],
  },
]

const industries = [
  'Multi-location retail',
  'Medical and dental practices',
  'Professional services firms',
  'Construction and field operations',
  'Warehousing and logistics',
  'Municipal and nonprofit teams',
]

const faqs = [
  {
    q: 'Does Clearworks sell only one carrier?',
    a: 'No. Clearworks acts as a reseller and advisor across multiple carrier and service-provider relationships so recommendations can be matched to serviceability, budget, and business requirements.',
  },
  {
    q: 'Can you help when a site is already under contract?',
    a: 'Yes. Clearworks can review incumbent services, flag renewal windows, compare upgrade paths, and plan changes around existing commitments.',
  },
  {
    q: 'Do you support locations outside major metros?',
    a: 'Yes. Rural and hard-to-serve sites often need blended options such as fixed wireless, coax, LTE/5G backup, or satellite, and those are part of the sourcing process.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark" aria-hidden="true">
              C
            </div>
            <div>
              <p className="eyebrow">Clearworks</p>
              <p className="brand-subtitle">Internet & Telecommunications Reseller</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#plans">Engagements</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="button button-secondary">
              Schedule a Call
            </a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="pill">Carrier-neutral guidance. Faster sourcing. Less telecom friction.</p>
            <h1>Business connectivity that is easier to buy, manage, and scale.</h1>
            <p className="hero-text">
              Clearworks helps growing organizations evaluate internet, voice, wireless, and
              network continuity options without getting boxed into a single provider. From first
              quote through renewals, the process stays clear.
            </p>
            <div className="cta-row">
              <a href="#contact" className="button">
                Request a connectivity review
              </a>
              <a href="#solutions" className="text-link">
                Explore services
              </a>
            </div>
            <dl className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-card">
            <p className="card-kicker">What Clearworks handles</p>
            <ul>
              <li>Internet circuit sourcing and installation coordination</li>
              <li>VoIP, UCaaS, and contact center comparison</li>
              <li>Redundancy planning with backup access options</li>
              <li>Contract reviews, renewals, and escalation support</li>
            </ul>
            <div className="status-band">
              <span>Coverage</span>
              <strong>Single site to nationwide footprints</strong>
            </div>
          </aside>
        </section>
      </header>

      <main>
        <section className="section" id="solutions">
          <div className="section-heading">
            <p className="eyebrow">Solutions</p>
            <h2>Clear recommendations across the services businesses depend on.</h2>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section band">
          <div className="split">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>Clearworks sits between your business requirements and provider complexity.</h2>
            </div>
            <ol className="process-list">
              <li>
                <strong>Assess</strong>
                <span>Review locations, usage, timelines, and incumbent services.</span>
              </li>
              <li>
                <strong>Compare</strong>
                <span>Source qualified provider options and highlight tradeoffs clearly.</span>
              </li>
              <li>
                <strong>Coordinate</strong>
                <span>Manage ordering, implementation, and provider follow-through.</span>
              </li>
              <li>
                <strong>Support</strong>
                <span>Stay involved for renewal planning, escalations, and expansion.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="plans">
          <div className="section-heading">
            <p className="eyebrow">Engagement Models</p>
            <h2>Start with discovery, or hand off the whole telecom sourcing cycle.</h2>
          </div>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.name}>
                <p className="plan-price">{plan.price}</p>
                <h3>{plan.name}</h3>
                <p>{plan.detail}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section accent-panel">
          <div>
            <p className="eyebrow">Who it serves</p>
            <h2>Built for organizations that cannot afford procurement guesswork or downtime.</h2>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <div className="industry-pill" key={industry}>
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from buyers evaluating providers and network upgrades.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Review your current connectivity options with Clearworks.</h2>
          <p>
            For new sites, renewals, or a second opinion on existing telecom spend, start with a
            short discovery call.
          </p>
        </div>
        <div className="contact-card">
          <a className="button" href="mailto:contact@clearworks.example">
            contact@clearworks.example
          </a>
          <a className="button button-secondary" href="tel:+18005550199">
            (800) 555-0199
          </a>
          <p className="fine-print">
            Replace the placeholder inbox and phone with Clearworks production contact details
            before public launch.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
