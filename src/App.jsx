import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('English')
  const [showGuide, setShowGuide] = useState(false)

  const services = [
    {
      icon: '🎓',
      title: 'College Services',
      detail: 'Bonafide, transcripts and certificates',
    },
    {
      icon: '🏦',
      title: 'Banking Services',
      detail: 'Account services and bank procedures',
    },
    {
      icon: '🏛️',
      title: 'Government Services',
      detail: 'Public services and required documents',
    },
    {
      icon: '📄',
      title: 'Forms & Documents',
      detail: 'Understand forms, fields and signatures',
    },
  ]

  const filteredServices = services.filter((service) =>
    `${service.title} ${service.detail}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  )

  function handleSearch(event) {
    event.preventDefault()

    const section = document.getElementById('services')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  function exploreService(title) {
    setSearch(title)
    setShowGuide(false)

    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="app">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">F</span>
          FormBridge<span className="brand-dot">.</span>
        </a>

        <select
          aria-label="Choose language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option>English</option>
          <option>తెలుగు</option>
          <option>हिंदी</option>
        </select>
      </nav>

      <section className="hero" id="home">
        <span className="eyebrow">YOUR GUIDE TO EVERYDAY SERVICES</span>

        <h1>
          Know before you go<span>.</span>
        </h1>

        <p>
          The right documents. The right steps. Less confusion.
          Find out what you need before visiting an office.
        </p>

        <form className="search-box" onSubmit={handleSearch}>
          <span aria-hidden="true">⌕</span>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Where do you want to go? Try bonafide..."
            aria-label="Search services"
          />

          <button type="submit">Search</button>
        </form>

        <div className="trust-note">
          ✦ Clear guidance · Verified information as available · Multilingual support
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>What can we help you with?</h2>
          </div>

          <span className="service-count">
            {filteredServices.length} categories
          </span>
        </div>

        <div className="service-grid">
          {filteredServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.detail}</p>

              <button
                type="button"
                className="text-button"
                onClick={() => exploreService(service.title)}
              >
                Explore services <span>→</span>
              </button>
            </article>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <p className="empty-state">
            No matching category yet. Try “college”, “bank”,
            “government” or “forms”.
          </p>
        )}
      </section>

      <section className="featured">
        <div className="featured-icon">🎓</div>

        <div>
          <span className="eyebrow">FIRST PILOT · KITSW</span>
          <h2>Bonafide Certificate Guide</h2>

          <p>
            Understand what to prepare and what to check before
            submitting your application.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowGuide((previous) => !previous)}
        >
          {showGuide ? 'Close guide ↑' : 'View guide →'}
        </button>
      </section>

      {showGuide && (
        <section className="guide-details" id="bonafide-guide">
          <span className="eyebrow">KITSW · STUDENT SERVICES</span>

          <h2>Bonafide Certificate Guide</h2>

          <p>
            Use this preliminary checklist to prepare. The current
            official KITSW procedure still needs to be confirmed.
          </p>

          <h3>What to check before you start</h3>

          <ul>
            <li>Whether a college-prescribed application form is required.</li>
            <li>Whether any challan or payment is required.</li>
            <li>Whether Aadhaar or other identification is required.</li>
            <li>Whether originals, photocopies or payment slips are needed.</li>
          </ul>

          <h3>Before submitting</h3>

          <ul>
            <li>Read the instructions before filling in the form.</li>
            <li>Check your details for spelling and other mistakes.</li>
            <li>Confirm where signatures are required.</li>
            <li>Confirm the correct office or submission box.</li>
            <li>Keep any receipt or acknowledgement you receive.</li>
          </ul>

          <div className="verification-note">
            <strong>Important:</strong> This is a preparation checklist,
            not a verified official procedure. Confirm the latest
            requirements with the KITSW office before making a payment
            or submitting documents.
          </div>

          <button
            type="button"
            onClick={() => setShowGuide(false)}
          >
            Close guide
          </button>
        </section>
      )}

      <footer>
        <a className="brand" href="#home">
          FormBridge<span className="brand-dot">.</span>
        </a>

        <p>Helping you take the next step with confidence.</p>

        <small>
          Prototype · Always verify procedures with the relevant institution.
        </small>
      </footer>
    </main>
  )
}

export default App