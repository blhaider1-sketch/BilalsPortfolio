import React, { useMemo, useState } from 'react';

const projects = [
  {
    id: 'opspeoples', number: '01', name: 'OpsPeoples HRMS', type: 'SaaS · Human resources', status: 'Live',
    url: 'https://opspeoples.com', image: null,
    summary: 'A human resource management platform designed to bring employee administration and core people operations into one system.',
    focus: ['Employee management and self-service workflows', 'Attendance, leave and payroll operations', 'Operational HR processes and access controls'],
    stack: ['Frappe', 'Python', 'MariaDB', 'REST APIs'],
    note: 'The only live website in this portfolio. The platform is developed and operational.'
  },
  {
    id: 'bloody-malta', number: '02', name: 'Bloody Malta', type: 'E-commerce · Direct to consumer', status: 'Under development',
    url: null, image: '/projects/bloody-malta.png',
    summary: 'A direct-to-consumer storefront for single-origin red blood oranges from Khanpur, Haripur, with product-led storytelling and a streamlined shopping journey.',
    focus: ['Pre-order product packs and catalogue', 'Khanpur origin and brand storytelling', 'Order journey with local payment and delivery options'],
    stack: ['React', 'E-commerce', 'Tailwind CSS', 'Node.js'],
    note: 'Website preview supplied by the user. The project is not publicly live yet.'
  },
  {
    id: 'interiors-living', number: '03', name: 'Interiors & Living', type: 'E-commerce · Interior design', status: 'Under development',
    url: null, image: '/projects/interiors-living.png',
    summary: 'A premium digital showroom experience for interior consultancy and custom furniture, bringing product discovery, room planning and showroom enquiries together.',
    focus: ['Curated furniture collections and product pages', 'Room measurement and pricing experience', 'Showroom visit booking journey'],
    stack: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX'],
    note: 'Website preview supplied by the user. The project is not publicly live yet.'
  },
  {
    id: 'bite-hub', number: '04', name: 'Bite Hub', type: 'Marketplace · Food technology', status: 'Under development',
    url: null, image: null,
    summary: 'A multi-vendor food ordering and delivery concept connecting customers, restaurants and riders through a coordinated digital experience.',
    focus: ['Customer ordering and order status', 'Restaurant menu and kitchen workflows', 'Rider dispatch and earnings management'],
    stack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    note: 'Project showcase only. No public deployment link is currently available.'
  },
];

const expertise = [
  ['01', 'Product & software', 'Full-stack web applications, SaaS products, business systems and workflow automation.'],
  ['02', 'Technical delivery', 'React, JavaScript, Python, Frappe, APIs, databases and practical system architecture.'],
  ['03', 'Business operations', 'Project coordination, business development, process improvement and operational leadership.'],
  ['04', 'People & teams', 'HR operations, recruitment, workforce coordination and cross-functional collaboration.'],
];
const ventures = [
  ['MastersHub Private Limited', 'Technology and digital services venture'],
  ['OpsPeoples', 'Human resource management software'],
  ['Akseer Products', 'Hair-care consumer brand'],
];
const skills = ['React', 'JavaScript', 'Python', 'Frappe', 'Next.js', 'REST APIs', 'SaaS', 'HRMS', 'Project Coordination', 'Business Development', 'HR Operations'];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ProjectVisual({ project }) {
  if (project.image) return <img src={project.image} alt={`${project.name} website screenshot`} className="project-image" loading="lazy" />;
  if (project.id === 'opspeoples') return <div className="ops-visual"><div className="ops-top"><span>OPSPEOPLES</span><span className="ops-dot">●</span></div><div className="ops-body"><div className="ops-sidebar"><i/><i/><i/><i/></div><div className="ops-main"><small>PEOPLE OPERATIONS</small><b>Workforce overview</b><div className="ops-stats"><i/><i/><i/></div><div className="ops-chart"><span/><span/><span/><span/><span/><span/><span/></div></div></div><span className="ops-caption">HRMS · SaaS PLATFORM</span></div>;
  return <div className="project-placeholder"><span>BH</span><small>PRODUCT CONCEPT</small></div>;
}

export default function App() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.status === filter), [filter]);
  const email = 'Blhaider1@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/syedbilalhaiderr/';
  const whatsapp = 'https://wa.me/923195051601';

  return <main id="top">
    <header className="site-header"><nav className="nav-wrap" aria-label="Main navigation">
      <a href="#top" className="brand"><span className="brand-mark">SB</span><span>Syed Bilal Haider<span className="brand-period">.</span></span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#ventures">Ventures</a></div>
      <a className="nav-cta" href={`mailto:${email}`}>Let's talk <Arrow /></a>
    </nav></header>

    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot"/> TECHNOLOGY <b>·</b> BUSINESS <b>·</b> OPERATIONS</div>
        <h1>I build digital products and help businesses <em>move forward.</em></h1>
        <p className="hero-intro">I'm Syed Bilal Haider — a technology founder and multidisciplinary professional working across software development, SaaS products, business operations and people management.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore selected work <span>↓</span></a><a className="button button-light" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
      </div>
      <aside className="hero-aside"><p className="eyebrow muted">A MULTIDISCIPLINARY APPROACH</p><p className="aside-statement">From shaping a product idea to coordinating the people and processes that bring it to life.</p><div className="aside-numbers"><div><b>01</b><span>Build products</span></div><div><b>02</b><span>Lead operations</span></div></div></aside>
    </section>

    <section id="work" className="work-section"><div className="section-shell">
      <div className="section-heading"><div><p className="eyebrow accent">SELECTED WORK</p><h2>Projects & systems<span>.</span></h2></div><p>A selection of product, platform and commerce work. Each project is clearly marked by its current development status.</p></div>
      <div className="filter-row" role="group" aria-label="Filter projects">{['All', 'Live', 'Under development'].map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter active' : 'filter'}>{item}</button>)}</div>
      <div className="project-grid">{filtered.map(project => <article className="project-card" key={project.id}>
        <button className="project-preview" onClick={() => setSelected(project)} aria-label={`View ${project.name} project details`}><ProjectVisual project={project}/><span className={project.status === 'Live' ? 'status status-live' : 'status status-dev'}>{project.status}</span><span className="preview-open">View project <Arrow/></span></button>
        <div className="project-info"><div className="project-meta"><span>/{project.number}</span><span>{project.type}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom">{project.url ? <a href={project.url} target="_blank" rel="noreferrer">Visit live website <Arrow/></a> : <span className="muted-note">Preview only · Not publicly live</span>}<button className="text-button" onClick={() => setSelected(project)}>Details <Arrow/></button></div></div>
      </article>)}</div>
      <p className="work-footnote">Project status is shown transparently: OpsPeoples is live; all other listed projects are under development.</p>
    </div></section>

    <section id="about" className="about-section section-shell"><div className="about-label"><p className="eyebrow accent">ABOUT</p><h2>More than a job title<span>.</span></h2></div><div className="about-copy"><p className="about-lead">My work sits at the intersection of technology, business and people.</p><p> I enjoy turning complex requirements into practical systems, building products around real operational needs, and helping teams deliver consistently.</p><p>My experience spans software and product development, HR and project coordination, business development, and general operations. That cross-functional perspective helps me connect technical decisions with the day-to-day realities of running a business.</p><div className="about-facts"><div><small>BASED IN</small><b>Lahore, Pakistan</b></div><div><small>OPEN TO</small><b>Roles · Collaborations · Projects</b></div></div></div></section>

    <section id="expertise" className="expertise-section"><div className="section-shell"><p className="eyebrow accent">WHAT I BRING</p><div className="section-heading expertise-heading"><h2>Areas of expertise<span>.</span></h2><p>A connected skill set for building, improving and operating digital businesses.</p></div><div className="expertise-grid">{expertise.map(([number, title, description]) => <article key={number}><small>/{number}</small><h3>{title}</h3><p>{description}</p></article>)}</div><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></section>

    <section id="ventures" className="ventures-section section-shell"><div><p className="eyebrow accent">ENTREPRENEURSHIP</p><h2>Building beyond projects<span>.</span></h2></div><div className="venture-list">{ventures.map(([name, description], i) => <div className="venture" key={name}><div><h3>{name}</h3><p>{description}</p></div><span>0{i + 1}</span></div>)}</div></section>

    <section className="contact-section"><div className="section-shell"><p className="eyebrow accent">LET'S CONNECT</p><div className="contact-main"><div><h2>Have a good problem to solve?</h2><p>Whether you're hiring, exploring a partnership or looking to build a digital product, I'd be glad to hear what you're working on.</p></div><a className="button button-dark" href={`mailto:${email}?subject=${encodeURIComponent('Portfolio enquiry')}`}>Start a conversation <Arrow/></a></div><div className="contact-links"><div><small>EMAIL</small><a href={`mailto:${email}`}>{email}</a></div><div><small>LINKEDIN</small><a href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow/></a></div><div><small>WHATSAPP</small><a href={whatsapp} target="_blank" rel="noreferrer">Message me <Arrow/></a></div></div></div></section>

    <footer className="footer section-shell"><span>© {new Date().getFullYear()} Syed Bilal Haider</span><span>Designed around clarity, craft and useful work.</span><a href="#top">Back to top ↑</a></footer>

    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details">×</button><div className="modal-image"><ProjectVisual project={selected}/></div><div className="modal-content"><div className="modal-status"><span className={selected.status === 'Live' ? 'status status-live' : 'status status-dev'}>{selected.status}</span><span>{selected.type}</span></div><h2 id="modal-title">{selected.name}</h2><p>{selected.summary}</p><h3>Focus areas</h3><ul>{selected.focus.map(item => <li key={item}>{item}</li>)}</ul><h3>Technology</h3><div className="tag-list">{selected.stack.map(tag => <span key={tag}>{tag}</span>)}</div><p className="modal-note">{selected.note}</p>{selected.url && <a className="button button-dark" href={selected.url} target="_blank" rel="noreferrer">Visit website <Arrow/></a>}</div></section></div>}
  </main>;
}
