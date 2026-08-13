import React, { useState, useEffect } from 'react'

const HERO_SLIDES = [
  {
    title: "Elegant Neutral Looks",
    subtitle: "Timeless style for every moment.",
    image: "/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb1.png",
    tag: "FASHION EDITORIAL",
    link: "#fashion"
  },
  {
    title: "Modern Classic Outfits",
    subtitle: "Effortless fashion with a refined touch.",
    image: "/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/three_women.png",
    tag: "LIFESTYLE MUSE",
    link: "#lifestyle"
  },
  {
    title: "Chic Street Style",
    subtitle: "Where comfort meets confidence.",
    image: "/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/image.png",
    tag: "STREET CULTURE",
    link: "#beauty"
  },
  {
    title: "Cozy Chic Layers",
    subtitle: "Soft textures and relaxed silhouettes for everyday warmth.",
    image: "/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB15.png",
    tag: "AUTUMN TRENDS",
    link: "#fashion"
  },
  {
    title: "Minimalist Essentials",
    subtitle: "Clean cuts and neutral tones redefining modern luxury.",
    image: "/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB13.png",
    tag: "MINIMALISM",
    link: "#fashion"
  }
]

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoplay])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (firstName.trim() && email.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setFirstName('')
        setEmail('')
      }, 5000)
    }
  }

  return (
    <div className="homepage-wrapper">
      {/* 1. Header & Navigation */}
      <header className="header-container">
        {/* Header corner frames: element_1 */}
        <img src="/cropped_elements/element_1.png" className="header-decor-corner header-corner-top-left" alt="" />
        <img src="/cropped_elements/element_1.png" className="header-decor-corner header-corner-top-right" alt="" />
        
        {/* Header side leaf branches: element_3 */}
        <img src="/cropped_elements/element_3.png" className="header-side-leaf-left" alt="" />
        <img src="/cropped_elements/element_3.png" className="header-side-leaf-right" alt="" />
        
        {/* Logo sparkles overlays: element_29 (left) and element_8 (right) */}
        <img src="/cropped_elements/element_29.png" className="header-logo-sparkles-left" alt="" />
        <img src="/cropped_elements/element_8.png" className="header-logo-sparkles-right" alt="" />
        
        {/* Navigation bottom spills: element_25 (left) and element_29 (right) */}
        <img src="/cropped_elements/element_25.png" className="header-nav-spill-left" alt="" />
        <img src="/cropped_elements/element_29.png" className="header-nav-spill-right" alt="" />

        <div className="container">
          <div className="logo-wrapper">
            <img src="/fashion logo.png?v=4" alt="Cybersplash Logo" className="logo-img" />
          </div>
        </div>
        
        <nav className="nav-bar">
          <div className="container">
            <ul className="nav-list">
              <li className="nav-item"><a href="#home">Home</a></li>
              <li className="nav-item"><a href="#fashion">Fashion</a></li>
              <li className="nav-item"><a href="#beauty">Beauty</a></li>
              <li className="nav-item"><a href="#lifestyle">Lifestyle</a></li>
              <li className="nav-item"><a href="#about">About</a></li>
              <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* 2. Hero Slider Section - Premium Organia-Inspired Terracotta Overlay Carousel */}
      <section 
        className="hero-slider" 
        id="home"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Floating gold ornaments everywhere around the slider */}
        <img src="/cropped_elements/element_1.png" className="slider-decor-corner-left" alt="" />
        <img src="/cropped_elements/element_1.png" className="slider-decor-corner-right" alt="" />
        <img src="/cropped_elements/element_3.png" className="slider-decor-leaf-left" alt="" />
        <img src="/cropped_elements/element_13.png" className="slider-decor-leaf-right" alt="" />
        <div className="slider-decor-sparkles" style={{ backgroundImage: "url('/cropped_elements/element_25.png')" }}></div>

        <div className="hero-slider-inner">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeSlide
            return (
              <div 
                key={index} 
                className={`hero-slide ${isActive ? 'active' : ''}`}
              >
                {/* Background image container with Ken Burns effect class */}
                <div 
                  className="hero-slide-bg-image" 
                  style={{ backgroundImage: `url('${slide.image}')` }}
                ></div>
                <div className="hero-slide-overlay-shade"></div>
                <div className="container hero-slide-container">
                  <div className="hero-overlay">
                    <span className="hero-slide-tag">{slide.tag}</span>
                    <h2 className="hero-title">{slide.title}</h2>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <a href={slide.link} className="hero-slide-btn-simple">
                      VIEW LOOKBOOK
                      <span className="hero-slide-btn-arrow-simple">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slide Navigation Controls */}
        <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Slide Pagination Dots */}
        <div className="slider-dots">
          {HERO_SLIDES.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Hero-to-Category Rich Decorative Divider Section */}
      <div className="hero-category-divider-section">
        {/* Left curved gold sweeping line: element_30 */}
        <img src="/cropped_elements/element_30.png" className="hc-decor-left-curve" alt="" />
        {/* Right pointed branch: element_3 */}
        <img src="/cropped_elements/element_3.png" className="hc-decor-right-branch" alt="" />
        {/* Background star sparkles: element_25 */}
        <div className="hc-glitter-bg" style={{ backgroundImage: "url('/cropped_elements/element_25.png')" }}></div>
        
        <div className="hc-divider-center-wrapper">
          {/* Long gold line with diamonds: element_14 */}
          <img src="/cropped_elements/element_14.png" className="hc-divider-line-main" alt="" />
          {/* Shorter scroll flourish below: element_2 */}
          <img src="/cropped_elements/element_2.png" className="hc-divider-scroll-sub" alt="" />
        </div>
      </div>

      {/* 3. Category Overlay Row - CLEAN AS PER PDF */}
      <div className="container" style={{ position: 'relative' }}>
        <section className="category-row">
          <div className="category-card">
            <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/imag.png" alt="Featured Posts" className="card-img" />
            <div className="category-card-overlay">
              <button className="category-card-btn">Featured Posts</button>
            </div>
          </div>
          <div className="category-card">
            <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/ima.png" alt="Editor's Picks" className="card-img" />
            <div className="category-card-overlay">
              <button className="category-card-btn">Editor's Picks</button>
            </div>
          </div>
          <div className="category-card">
            <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb2.png" alt="Latest in Fashion" className="card-img" />
            <div className="category-card-overlay">
              <button className="category-card-btn">Latest in Fashion</button>
            </div>
          </div>
        </section>
        
        {/* Divider below category row: element_19 */}
        <img src="/cropped_elements/element_19.png" className="row-divider-bottom" alt="" />
      </div>

      {/* Category-to-Hero Rich Decorative Divider Section */}
      <div className="category-to-hero-divider">
        {/* Background sparkles behind center divider: element_27 */}
        <div className="ch-glitter-bg-center" style={{ backgroundImage: "url('/cropped_elements/element_27.png')" }}></div>
        
        {/* Left branch: element_7 */}
        <img src="/cropped_elements/element_7.png" className="ch-decor-left" alt="" />
        {/* Right curve: element_30 (mirrored to sweep from right) */}
        <img src="/cropped_elements/element_30.png" className="ch-decor-right" alt="" />
        {/* Center scroll line divider: element_6 */}
        <img src="/cropped_elements/element_6.png" className="ch-divider-center" alt="" />
      </div>

      {/* Hero Article Image wrapper (restored fb3.png) */}
      <div className="container hero-image-container">
        <div className="hero-article-img-wrapper">
          <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb3.png" alt="The Return of Effortless Elegance" className="hero-article-img" />
        </div>
      </div>

      {/* 4. Hero Article (The Return of Effortless Elegance) - CLEAN AS PER PDF */}
      <section className="hero-article-section" id="fashion">
        <div className="container" style={{ position: 'relative' }}>
          {/* Background decorations positioned to the sides, NOT overlapping text */}
          <img src="/cropped_elements/element_13.png" className="article-decor-left" alt="" />
          <img src="/cropped_elements/element_25.png" className="article-decor-right" alt="" />
          
          <div className="hero-article-content-wrapper">
            
            <div className="hero-article-content">
              <p className="hero-article-meta">March 2026 — Fashion</p>
              <h2 className="hero-article-title">The Return of Effortless Elegance</h2>
              <p className="hero-article-text">
                Fashion trends may come and go, but true elegance remains timeless. This season
                embraces soft tones, minimal silhouettes, and confident simplicity that defines modern
                style.
              </p>
              {/* Under-paragraph divider: element_21 (long gold divider with diamonds) */}
              <img src="/cropped_elements/element_21.png" className="article-decor-bottom-line" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Latest Stories Section - CLEAN AS PER PDF */}
      <section className="latest-stories-section section-padding">
        {/* Background decorations flanking the grid cards: sparkles on left, branch on right */}
        <img src="/cropped_elements/element_25.png" className="stories-decor-left-glitter" alt="" />
        <img src="/cropped_elements/element_3.png" className="stories-decor-right-branch" alt="" />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header-wrapper">
            <div className="section-header-row">
              {/* Star sparkles to the left: element_29 */}
              <img src="/cropped_elements/element_29.png" className="stories-header-decor-left" alt="" />
              <h2 className="section-header">LATEST STORIES</h2>
              {/* Butterfly to the right: element_12 */}
              <img src="/cropped_elements/element_12.png" className="stories-header-decor-right" alt="" />
            </div>
            {/* Short diamond divider line below header: element_28 */}
            <div className="stories-header-divider-wrapper">
              <img src="/cropped_elements/element_28.png" className="stories-header-divider-line" alt="" />
            </div>
          </div>
          
          <div className="stories-grid">
            {/* Story 1 (Left Col, Row 1) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>LIFESTYLE</span></p>
                <h3 className="story-title">The Royal Aesthetic:<br />Inspired Living</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb4.png" alt="The Royal Aesthetic: Inspired Living" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Step into a world of timeless elegance inspired by rich textures and graceful living.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 2 (Middle Col, Row 1) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>FASHION</span></p>
                <h3 className="story-title">Denim Diaries: Casual<br />Meets Chic</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb5.png" alt="Denim Diaries: Casual Meets Chic" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Denim redefined with elegance and everyday comfort.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 3 (Right Col, Row 1) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>BEAUTY</span></p>
                <h3 className="story-title">My Story: A Journey into<br />Style</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/fb6.png" alt="My Story: A Journey into Style" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  A glimpse into how fashion became more than just clothing — it became a statement of identity.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 4 (Left Col, Row 2) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>TRENDS</span></p>
                <h3 className="story-title">Minimalism: Less is More</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB7.png" alt="Minimalism: Less is More" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Clean cuts and neutral tones redefine modern fashion.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 5 (Middle Col, Row 2) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>FASHION</span></p>
                <h3 className="story-title">Street Style: New York<br />Edition</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB8.png" alt="Street Style: New York Edition" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Bold and confident looks inspired by urban fashion culture.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 6 (Right Col, Row 2) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>STYLE</span></p>
                <h3 className="story-title">Modern Muse: Everyday<br />Glam</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB9.png" alt="Modern Muse: Everyday Glam" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Effortlessly blending comfort with sophistication, this look captures the essence of modern fashion with a chic everyday twist.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 7 (Left Col, Row 3) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>BEAUTY</span></p>
                <h3 className="story-title">Glow & Grace: Natural<br />Beauty Trends</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB10.png" alt="Glow & Grace: Natural Beauty Trends" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Embrace a fresh, radiant look with minimal makeup and skincare-focused beauty that enhances your natural glow.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 8 (Middle Col, Row 3) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>FASHION</span></p>
                <h3 className="story-title">Effortless Layers: Styling<br />with Ease</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB11.png" alt="Effortless Layers: Styling with Ease" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Layering meets elegance with versatile pieces that create a balanced, stylish look perfect for everyday fashion.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>

            {/* Story 9 (Right Col, Row 3) */}
            <article className="story-card">
              <div className="story-header-content">
                <p className="story-meta">MARCH 1, 2026 — <span>LIFESTYLE</span></p>
                <h3 className="story-title">Cozy Chic: Comfort Meets<br />Style</h3>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-top" alt="" />
              </div>
              <div className="story-img-wrapper">
                <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB12.png" alt="Cozy Chic: Comfort Meets Style" className="story-img" />
              </div>
              <div className="story-body-content">
                <p className="story-description">
                  Soft layers and relaxed silhouettes redefine comfort dressing while keeping your style effortlessly on point.
                </p>
                <img src="/cropped_elements/element_28.png" className="story-card-divider-bottom" alt="" />
              </div>
            </article>
          </div>

          <div className="center-btn-wrapper-relative">
            {/* Left wave trail: element_15 */}
            <img src="/cropped_elements/element_15.png" className="stories-bottom-wave-left" alt="" />
            {/* Right wave trail: element_15 (mirrored) */}
            <img src="/cropped_elements/element_15.png" className="stories-bottom-wave-right" alt="" />
            {/* Middle branch curving up: element_3 */}
            <img src="/cropped_elements/element_3.png" className="stories-bottom-branch-middle" alt="" />
            
            <a href="#explore" className="btn-capsule-pink-explore">
              <span className="btn-circle-arrow-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              EXPLORE MORE
            </a>
          </div>
        </div>
      </section>

      {/* 6. Style Categories Section - CLEAN AS PER PDF */}
      <section className="style-categories-section" id="beauty">
        <div className="container" style={{ position: 'relative' }}>
          {/* Giant leaf branch scroll positioned absolutely on the right margin */}
          <img src="/cropped_elements/element_16.png" className="categories-header-decor-right" alt="" />
          
          <div className="section-header-wrapper">
            <div className="section-header-row">
              {/* Star sparkles to the left: element_29 */}
              <img src="/cropped_elements/element_29.png" className="stories-header-decor-left" alt="" />
              <h2 className="section-header">STYLE CATEGORIES</h2>
            </div>
            {/* Gold sub-header line: element_21 */}
            <div className="categories-divider">
              <img src="/cropped_elements/element_21.png" className="gold-line-divider-categories" alt="" />
            </div>
          </div>

          <div className="categories-grid">
            <div className="category-style-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB13.png" alt="Minimalism" className="card-img" />
              <div className="category-style-overlay">
                <h3 className="category-style-name">Minimalism</h3>
                <p className="category-style-desc">Clean cuts and neutral tones redefine modern fashion.</p>
              </div>
            </div>

            <div className="category-style-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB14.png" alt="Street Style" className="card-img" />
              <div className="category-style-overlay">
                <h3 className="category-style-name">Street Style</h3>
                <p className="category-style-desc">Bold and confident looks inspired by urban culture.</p>
              </div>
            </div>

            <div className="category-style-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB15.png" alt="Cozy Chic" className="card-img" />
              <div className="category-style-overlay">
                <h3 className="category-style-name">Cozy Chic</h3>
                <p className="category-style-desc">Soft layers and relaxed silhouettes for everyday comfort.</p>
              </div>
            </div>
          </div>

          <div className="center-btn-wrapper-categories-relative">
            {/* Left loop curve: element_17 */}
            <img src="/cropped_elements/element_17.png" className="categories-bottom-curve-left" alt="" />
            {/* Right loop curve: element_17 (mirrored) */}
            <img src="/cropped_elements/element_17.png" className="categories-bottom-curve-right" alt="" />
            
            <a href="#see-more" className="btn-capsule-pink-explore">
              <span className="btn-circle-arrow-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              SEE MORE
            </a>
          </div>
        </div>
      </section>

      {/* 7. About Cybersplash Section - CLEAN AS PER PDF */}
      <section className="about-section" id="about">
        {/* Far right vertical leaf: element_18 (round leaves eucalyptus) */}
        <img src="/cropped_elements/element_18.png" className="about-decor-far-right" alt="" />
        
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrapper">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB16.png" alt="About Cybersplash" className="about-img" />
            </div>
            <div className="about-content">
              {/* Star sparkles background decoration top-left */}
              <img src="/cropped_elements/element_25.png" className="about-decor-top-left" alt="" />
              
              <h2 className="about-title">About<br />Cybersplash</h2>
              {/* Flourish under title: element_6 */}
              <img src="/cropped_elements/element_6.png" className="about-title-flourish" alt="" />
              <p className="about-text">
                Cybersplash is a modern fashion and lifestyle platform for women who embrace
                elegance, confidence, and individuality. We curate the latest trends, styling ideas,
                and inspiring stories to help you express your personal style effortlessly.
              </p>
              {/* Centered Divider 1: element_21 (gold line with diamonds) */}
              <img src="/cropped_elements/element_21.png" className="about-content-divider-line" alt="" />
              {/* Centered Divider 2: element_6 (horizontal gold scroll) */}
              <img src="/cropped_elements/element_6.png" className="about-content-divider-scroll" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Instagram Section - CLEAN AS PER PDF */}
      <section className="instagram-section">
        <div className="container" style={{ position: 'relative' }}>
          <div className="instagram-header-wrapper">
            {/* Left pointed branch: element_3 */}
            <img src="/cropped_elements/element_3.png" className="insta-decor-left" alt="" />
            {/* Right sparkles: element_25 */}
            <img src="/cropped_elements/element_25.png" className="insta-decor-right" alt="" />
            
            <h2 className="instagram-title">Follow on instagram @cybersplase</h2>
            {/* Double divider under title: element_21 and element_6 */}
            <img src="/cropped_elements/element_21.png" className="insta-header-divider-line" alt="" />
            <img src="/cropped_elements/element_6.png" className="insta-header-divider-scroll" alt="" />
          </div>
          
          <div className="instagram-grid">
            <div className="instagram-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB17.png" alt="Instagram post 1" className="card-img" />
              <div className="instagram-hover-overlay">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="instagram-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB18.png" alt="Instagram post 2" className="card-img" />
              <div className="instagram-hover-overlay">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="instagram-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB19.png" alt="Instagram post 3" className="card-img" />
              <div className="instagram-hover-overlay">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Daily Inspiration Banner - CLEAN AS PER PDF */}
      <section className="inspiration-banner">
        {/* Gold star sparkles background: element_25 */}
        <div className="glitter-bg" style={{ backgroundImage: "url('/cropped_elements/element_25.png')", opacity: 0.2 }}></div>
        
        {/* Side leaf branches on margins: element_3 */}
        <img src="/cropped_elements/element_3.png" className="inspiration-decor-left" alt="" />
        <img src="/cropped_elements/element_3.png" className="inspiration-decor-right" alt="" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Top divider: element_14 */}
          <img src="/cropped_elements/element_14.png" alt="Gold decoration" className="inspiration-top-divider" />
          <p className="inspiration-text">
            FOLLOW US FOR DAILY FASHION INSPIRATION, BEAUTY TRENDS, AND STYLING IDEAS THAT ELEVATE YOUR EVERYDAY LOOK.
          </p>
          {/* Bottom divider: element_21 */}
          <img src="/cropped_elements/element_21.png" alt="Gold decoration bottom" className="inspiration-bottom-divider" />
        </div>
      </section>

      {/* 10. The Fashion Edit & Newsletter Section - CLEAN AS PER PDF */}
      <section className="fashion-edit-section" id="lifestyle">
        <div className="container">
          <h2 className="fashion-edit-title">The Fashion Edit</h2>
          
          <div className="fashion-edit-grid">
            <div className="fashion-edit-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB20.png" alt="Fashion Edit" className="card-img" />
              <div className="fashion-edit-overlay">
                <span className="fashion-edit-tag">FASHION</span>
              </div>
            </div>
            <div className="fashion-edit-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB21.png" alt="Inspiration Edit" className="card-img" />
              <div className="fashion-edit-overlay">
                <span className="fashion-edit-tag">INSPIRATION</span>
              </div>
            </div>
            <div className="fashion-edit-card">
              <img src="/FASHION HOME PAGE IMAGES/FASHION HOME PAGE IMAGES/FB24.JPG" alt="Travel Edit" className="card-img" />
              <div className="fashion-edit-overlay">
                <span className="fashion-edit-tag">TRAVEL</span>
              </div>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="newsletter-container">
            <p className="newsletter-text">
              Unlock a world of luxury fashion, expert styling tips, and exclusive updates
            </p>
            {subscribed ? (
              <div className="newsletter-success-text">
                Thank you for subscribing, {firstName}!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="text" 
                  placeholder="Firsy name" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  className="newsletter-input" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="newsletter-input" 
                  required 
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 11. Footer Section - CLEAN AS PER PDF */}
      <footer className="footer" id="contact">
        {/* Glitter texture background on margins: element_25 */}
        <div className="footer-glitter-left" style={{ backgroundImage: "url('/cropped_elements/element_25.png')" }}></div>
        <div className="footer-glitter-right" style={{ backgroundImage: "url('/cropped_elements/element_25.png')" }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="footer-logo">
            <img src="/fashion logo.png?v=4" alt="Cybersplash Logo" className="footer-logo-img" />
          </div>
          
          {/* Logo scroll divider: element_21 */}
          <div className="footer-divider-wrapper">
            <img src="/cropped_elements/element_21.png" className="footer-divider-graphic" alt="Gold divider" />
          </div>
          
          <div className="footer-nav-spaced">
            <a href="#home">Home</a> <span className="footer-nav-pipe">|</span> <a href="#fashion">Fashion</a> <span className="footer-nav-pipe">|</span> <a href="#beauty">Beauty</a> <span className="footer-nav-pipe">|</span> <a href="#lifestyle">Lifestyle</a> <span className="footer-nav-pipe">|</span> <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">
            &copy; 2026 CYBERSPLASH. Designed with passion for fashion lovers.
          </p>
          <div className="footer-socials">
            <a href="#facebook" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#instagram" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="#twitter" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#email" className="social-icon"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
