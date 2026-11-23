import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, Menu, X, MoveUpRight, Plus, Sparkles, Layers3, Compass, Workflow, Code2, Linkedin, Dribbble, Mail } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const projects = [
  { no: '01', name: 'Medilink360', type: 'HEALTHCARE / TELEHEALTH', desc: 'Connecting patients and healthcare providers through more accessible digital care experiences.', tag: 'HEALTHCARE', style: 'project-med', label: 'Care, connected.', detail: 'A digital healthcare platform designed to bring patients and providers closer through accessible telehealth experiences.' },
  { no: '02', name: 'Dovetales', type: 'AI / STORYTELLING', desc: 'An AI-powered storytelling experience built around personal, engaging narratives.', tag: 'AI & SAAS', style: 'project-dove', label: 'Stories that stay.', detail: 'An AI-powered storytelling platform focused on creating engaging and personalized storytelling experiences.' },
  { no: '03', name: 'LocalEyes', type: 'TRAVEL / MOBILE APP', desc: 'Helping travelers discover local destinations and explore places more intuitively.', tag: 'TRAVEL', style: 'project-local', label: 'See it differently.', detail: 'A tourism-focused mobile experience designed to help travelers discover local destinations.' },
  { no: '04', name: 'Go Rent', type: 'MOBILITY / LUXURY', desc: 'A refined digital experience for discovering and booking luxury vehicles.', tag: 'MOBILITY', style: 'project-rent', label: 'Arrive differently.', detail: 'A digital car rental experience designed to simplify the discovery and booking of luxury vehicles.' },
  { no: '05', name: 'TutorIn', type: 'EDTECH / AI', desc: 'Personalized language learning designed to make progress feel more human.', tag: 'EDTECH', style: 'project-tutor', label: 'Learn at your pace.', detail: 'An AI-powered language learning concept designed to make personalized learning more accessible.' },
  { no: '06', name: 'WTA by TechEdge', type: 'SAAS / MOBILE TECHNOLOGY', desc: 'A platform concept focused on transforming web applications into mobile experiences.', tag: 'SAAS', style: 'project-wta', label: 'Web, made mobile.', detail: 'A platform concept focused on transforming web applications into mobile app experiences.' },
]
const services = [
  { n: '01', title: 'Product discovery & strategy', desc: 'Find clarity before committing to pixels. Align the product vision, user needs and business priorities.', items: ['Product discovery', 'Competitor analysis', 'User journeys', 'MVP feature planning'], icon: Compass },
  { n: '02', title: 'MVP design', desc: 'Turn an early-stage idea into a focused, testable product experience that is ready for development.', items: ['Feature prioritization', 'User flows & wireframes', 'Interactive prototypes', 'Developer handoff'], icon: Sparkles },
  { n: '03', title: 'SaaS & complex products', desc: 'Make complex workflows feel clear. Design scalable platforms that help people get meaningful work done.', items: ['SaaS dashboards', 'B2B platforms', 'Design systems', 'Responsive interfaces'], icon: Layers3 },
  { n: '04', title: 'Product redesign', desc: 'Find friction in an existing experience and make the product easier to understand, use and trust.', items: ['UX audits', 'Usability improvements', 'Interface redesign', 'Accessibility improvements'], icon: Workflow },
]
const industries = [
  ['01', 'Healthcare', 'Patient journeys, telehealth and clinic operations.'],
  ['02', 'FinTech', 'Financial workflows, payments and money management.'],
  ['03', 'EdTech', 'Learning platforms and education experiences.'],
  ['04', 'LegalTech', 'AI-powered legal workflows and case experiences.'],
  ['05', 'SaaS & B2B', 'Operational tools, dashboards and business platforms.'],
]
function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  return <header className="site-header"><div className="nav-wrap">
    <Link className="wordmark" to="/" onClick={close}>K<span>.</span>SHAH</Link>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      <NavLink to="/services" onClick={close} className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
      <NavLink to="/startup-stories" onClick={close} className={({isActive}) => isActive ? 'active' : ''}>Startup stories</NavLink>
      <a href={location.pathname === '/' ? '#about' : '/#about'} onClick={close}>About</a>
      <Link className="nav-cta" to="/#contact" onClick={close}>Let’s talk <ArrowUpRight size={15}/></Link>
    </nav>
  </div></header>
}
function SectionLabel({ children }: {children: React.ReactNode}) { return <div className="section-label"><span className="label-dot"/>{children}</div> }
function ArrowLink({ children, href = '#contact' }: {children: React.ReactNode, href?: string}) { return <a className="arrow-link" href={href}>{children}<span><ArrowUpRight size={17}/></span></a> }
function Hero() {
  return <section className="hero section-shell">
    <div className="hero-copy">
      <SectionLabel>PRODUCT DESIGNER FOR STARTUPS & MVPs</SectionLabel>
      <h1>Help founders<br/>launch <em>market-ready</em><br/>startups<span className="orange-dot">.</span></h1>
      <div className="hero-bottom">
        <p className="hero-sub">From early-stage ideas to scalable digital products.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/#contact">Let’s build something <ArrowUpRight size={17}/></Link><Link className="text-link" to="/startup-stories">Explore startup stories <ArrowDownRight size={16}/></Link></div>
      </div>
    </div>
    <div className="hero-art" aria-label="Abstract product interface composition">
      <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
      <div className="art-index">PRODUCT / 001</div>
      <div className="art-card art-main">
        <div className="art-top"><span className="art-brand"><Asterisk size={17}/> PRODUCT / OVERVIEW</span><span className="art-live">● LIVE CONCEPT</span></div>
        <div className="art-greeting">Build with<br/><i>intention.</i></div>
        <div className="art-chart"><div className="chart-head"><span>PRODUCT MOMENTUM</span><b>+24.8%</b></div><div className="chart-bars">{[28,42,36,56,48,72,63,90,75,100,83,110].map((h,i)=><i key={i} style={{height:h}}/>)}</div><div className="chart-foot"><span>DISCOVER</span><span>DEFINE</span><span>DESIGN</span><span>DELIVER</span></div></div>
      </div>
      <div className="art-float art-float-top"><span className="float-icon"><Sparkles size={15}/></span><span><b>Idea to interface</b><small>One clear direction</small></span></div>
      <div className="art-float art-float-bottom"><span className="float-number">04</span><span><b>Built for what’s next</b><small>Systems that scale</small></span><ArrowUpRight size={16}/></div>
      <div className="art-stamp">THOUGHTFUL<br/>BY DESIGN<span>✳</span></div>
    </div>
    <div className="hero-meta"><span>INDEPENDENT PRODUCT DESIGNER</span><span>BASED IN PAKISTAN · WORKING GLOBALLY</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>
}
function Metrics() {
  return <section className="metrics-section"><div className="section-shell metrics-inner"><div className="metrics-intro"><SectionLabel>EXPERIENCE THAT GOES BEYOND PIXELS</SectionLabel><h2>Ideas become<br/><em>real products.</em></h2></div><div className="metrics-grid"><div><strong>04<span>+</span></strong><small>YEARS OF EXPERIENCE</small></div><div><strong>60<span>+</span></strong><small>DIGITAL PRODUCT PROJECTS</small></div><div><strong>15<span>+</span></strong><small>STARTUP COLLABORATIONS</small></div></div></div></section>
}
function ServicesPreview() {
  return <section className="services-section section-shell" id="services"><div className="section-heading split-heading"><div><SectionLabel>HOW I CAN HELP</SectionLabel><h2>Good ideas need<br/>more than <em>good design.</em></h2></div><p>Building a successful product takes more than a polished interface. It takes the right questions, clear decisions and a deep understanding of the people using it.</p></div>
    <div className="service-list">{services.map((s) => <div className="service-row" key={s.n}><span className="service-no">{s.n}</span><div className="service-title"><s.icon size={21}/><h3>{s.title}</h3></div><p>{s.desc}</p><div className="service-tags">{s.items.slice(0,3).map(x=><span key={x}>{x}</span>)}</div><ArrowUpRight className="service-arrow"/></div>)}</div>
    <div className="section-end"><span>STRATEGY / EXPERIENCE / EXECUTION</span><Link className="text-link" to="/services">Explore all services <ArrowUpRight size={16}/></Link></div>
  </section>
}
function Industries() {
  return <section className="industries-section"><div className="section-shell industries-inner"><div className="industries-heading"><SectionLabel>INDUSTRY EXPERIENCE</SectionLabel><h2>Different worlds.<br/><em>Shared ambition.</em></h2><p>I work in spaces where thoughtful design can make complicated things feel simple, useful and human.</p></div><div className="industry-list">{industries.map(([n,t,d])=><div className="industry-row" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={17}/></div>)}</div></div></section>
}
function ProjectVisual({project}:{project:typeof projects[number]}) {
  return <div className={`project-visual ${project.style}`}>
    <div className="visual-window"><div className="window-bar"><i/><i/><i/><span>{project.tag} / DIGITAL PRODUCT</span></div>
      <div className="window-content"><div className="mock-sidebar"><b>{project.name.slice(0,2).toUpperCase()}</b><i/><i/><i/><i/></div><div className="mock-main"><small>YOUR NEXT CHAPTER</small><strong>{project.label}</strong><div className="mock-stats"><span/><span/><span/></div><div className="mock-panels"><i/><i/></div></div></div>
    </div><div className="visual-orbit"/><span className="visual-caption">SELECTED PRODUCT EXPERIENCE</span>
  </div>
}
function Projects({all=false}) {
  const list = all ? projects : projects.slice(0,4)
  return <section className="work-section section-shell" id="work"><div className="section-heading work-heading"><div><SectionLabel>SELECTED WORK / 2022—2026</SectionLabel><h2>Ideas are interesting.<br/><em>What you build matters.</em></h2></div><p>Behind every product is a problem worth solving. Here are a few of the digital experiences I’ve helped shape.</p></div>
    <div className="project-list">{list.map((p,i)=><article className={`project-row ${i%2 ? 'reverse' : ''}`} key={p.no}><ProjectVisual project={p}/><div className="project-info"><span className="project-index">{p.no} / {p.type}</span><h3>{p.name}<span>.</span></h3><p>{p.desc}</p><div className="project-bottom"><span>{p.tag}</span><Link to={`/startup-stories#${p.name.toLowerCase().replaceAll(' ','-')}`} aria-label={`Explore ${p.name} story`}><ArrowUpRight size={19}/></Link></div></div></article>)}</div>
    {!all && <div className="work-footer"><span>MORE THINKING. MORE MAKING.</span><Link className="button button-outline" to="/startup-stories">View all startup stories <ArrowUpRight size={16}/></Link></div>}
  </section>
}
function Process() {
  const steps=[['01','Discover','Understand the business, users, market and the problem worth solving.'],['02','Define','Set product direction, prioritize features and map the experience.'],['03','Design','Turn requirements into clear flows, interfaces and prototypes.'],['04','Deliver','Prepare thoughtful handoff and collaborate through implementation.']]
  return <section className="process-section"><div className="section-shell"><div className="process-top"><SectionLabel>FROM IDEA TO LAUNCH</SectionLabel><h2>A clear process.<br/><em>Better product decisions.</em></h2><p>Good products are built through a series of thoughtful decisions. Here’s how I help move the work forward.</p></div><div className="process-track">{steps.map(([n,t,d],i)=><div className="process-step" key={n}><div className="step-marker">{n}<span>{i===3?<Check size={15}/>:<Plus size={15}/>}</span></div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
}
function WhyMe() {
  const points=[['Business-first thinking','Product decisions should support the business and the people it serves.'],['Startup experience','I understand the pace, constraints and ambiguity of early-stage teams.'],['Complex made clear','I enjoy simplifying complicated workflows into intuitive experiences.'],['Built with the team','I collaborate closely with founders, product teams and developers.']]
  return <section className="why-section section-shell"><div className="why-statement"><SectionLabel>A PRODUCT PARTNER, NOT JUST A DESIGNER</SectionLabel><h2>I care about what happens <em>after</em> the design is finished.</h2><span className="why-mark">K<span>.</span></span></div><div className="why-points">{points.map(([t,d],i)=><div className="why-point" key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={17}/></div>)}</div></section>
}
function About() {
  return <section className="about-section" id="about"><div className="section-shell about-inner"><div className="about-side"><SectionLabel>A LITTLE ABOUT ME</SectionLabel><div className="about-monogram">K<span>.</span>S</div><span className="about-caption">PRODUCT THINKING<br/>MEETS HUMAN EXPERIENCE</span></div><div className="about-copy"><h2>Hey, I’m Kamran.<br/>I design digital products<br/>that <em>solve real problems.</em></h2><p>I’m a Product Designer and Software Engineering graduate with four years of experience working with startups and cross-functional teams. My work sits at the intersection of product strategy, user experience and technology.</p><p>Having worked across healthcare, fintech, edtech, legal technology and SaaS, I’ve developed a strong interest in solving complex problems and turning early-stage ideas into meaningful digital experiences.</p><div className="credentials"><span><Check size={14}/> Google UX Design Professional Certificate</span><span><Check size={14}/> Software Engineering Background</span><span><Check size={14}/> 60+ Digital Product Projects</span></div><a className="text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">A little more on LinkedIn <ArrowUpRight size={16}/></a></div></div></section>
}
function Contact() {
  const [sent,setSent]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [project,setProject]=useState('')
  const [message,setMessage]=useState('')
  function submit(e:React.FormEvent){e.preventDefault();const body=`Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`;window.location.href=`mailto:hello@kamranshah.work?subject=${encodeURIComponent('Project inquiry from '+name)}&body=${encodeURIComponent(body)}`;setSent(true)}
  return <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div className="contact-copy"><SectionLabel>HAVE AN IDEA IN MIND?</SectionLabel><h2>Let’s make<br/>something <em>matter.</em></h2><p>Starting from scratch, shaping an MVP or improving an existing product? Tell me what you’re building.</p><a className="contact-email" href="mailto:hello@kamranshah.work">hello@kamranshah.work <ArrowUpRight size={17}/></a></div><form className="contact-form" onSubmit={submit}><div className="form-title"><span>01 — START A CONVERSATION</span><Asterisk size={22}/></div><label>Your name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="What should I call you?"/></label><label>Work email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"/></label><label>What are you building?<select value={project} onChange={e=>setProject(e.target.value)}><option value="">Choose a project type</option><option>MVP / New product</option><option>SaaS / B2B platform</option><option>Product redesign</option><option>Product strategy</option><option>Something else</option></select></label><label>Tell me a little about it<textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="A little context goes a long way..." rows={3}/></label><button className="button button-primary form-submit" type="submit">Send project inquiry <ArrowUpRight size={17}/></button>{sent&&<small className="form-note">Your email app should open with your inquiry ready to send.</small>}<small className="form-privacy">This form opens your email app. No information is stored on this website.</small></form></div></section>
}
function Footer(){return <footer className="footer"><div className="section-shell"><div className="footer-top"><Link className="wordmark" to="/">K<span>.</span>SHAH</Link><p>Helping founders turn complex ideas<br/>into market-ready digital products.</p><a href="#top" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 KAMRAN SHAH. ALL RIGHTS RESERVED.</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LINKEDIN</a><a href="https://dribbble.com/" target="_blank" rel="noreferrer"><Dribbble size={15}/> DRIBBBLE</a><a href="mailto:hello@kamranshah.work"><Mail size={15}/> EMAIL</a></div><span>DESIGNED WITH INTENTION ✳</span></div></div></footer>}
function Home(){return <><Hero/><Metrics/><ServicesPreview/><Industries/><Projects/><Process/><WhyMe/><About/><Contact/></>}
function ServicesPage(){return <main className="inner-page"><div className="section-shell inner-hero"><SectionLabel>WHAT I DO / SERVICES</SectionLabel><h1>Make the complex<br/><em>feel effortless.</em></h1><p>From the first product question to the final handoff, I help founders make confident decisions and create experiences people understand.</p><Link className="button button-primary" to="/#contact">Discuss your product <ArrowUpRight size={17}/></Link></div><div className="section-shell service-detail-list">{services.map(s=><article className="service-detail" key={s.n}><span>{s.n} / SERVICE</span><div><h2>{s.title}</h2><p>{s.desc}</p><div className="detail-tags">{s.items.map(x=><b key={x}>{x}</b>)}</div></div><s.icon size={30}/></article>)}</div><div className="section-shell page-cta"><h2>Have a product in mind?<br/><em>Let’s talk about it.</em></h2><Link className="button button-primary" to="/#contact">Start a conversation <ArrowUpRight size={17}/></Link></div></main>}
function StoriesPage(){return <main className="inner-page stories-page"><div className="section-shell inner-hero"><SectionLabel>SELECTED PROJECTS / STARTUP STORIES</SectionLabel><h1>Every product starts<br/>with a <em>why.</em></h1><p>Explore the challenges, decisions and design thinking behind the digital products I’ve helped shape.</p></div><div className="section-shell story-list">{projects.map((p,i)=><article className="story-detail" id={p.name.toLowerCase().replaceAll(' ','-')} key={p.no}><ProjectVisual project={p}/><div className="story-text"><span>{p.no} / {p.type}</span><h2>{p.name}</h2><p>{p.detail}</p><div className="story-meta"><span>OVERVIEW</span><span>PRODUCT EXPERIENCE</span><span>DESIGN EXPLORATION</span></div><p className="story-note">Project story content can be expanded with verified research, process artifacts and final product screens as those materials are added.</p></div></article>)}</div><div className="section-shell page-cta"><h2>Have a challenge<br/><em>worth solving?</em></h2><Link className="button button-primary" to="/#contact">Let’s build together <ArrowUpRight size={17}/></Link></div></main>}
export default function App(){return <><div id="top"/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/startup-stories" element={<StoriesPage/>}/></Routes><Footer/></>}
