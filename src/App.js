import './App.css';

function App() {
  const navItems = [
    ['Overview', 'OV'],
    ['Patients', 'PT'],
    ['Appointments', 'AP'],
    ['Prescriptions', 'RX'],
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">+</span><span>Careflow</span></div>
        <div className="workspace-label">PATIENT PORTAL</div>
        <nav className="nav-list" aria-label="Main navigation">
          {navItems.map(([label, icon], index) => <button className={`nav-item ${index === 0 ? 'active' : ''}`} key={label}><span className="nav-icon">{icon}</span>{label}</button>)}
        </nav>
        <div className="sidebar-bottom">
          <div className="support-card"><span className="support-dot" /><div><strong>Need help?</strong><small>Contact care support</small></div><span className="arrow">-&gt;</span></div>
          <button className="nav-item"><span className="nav-icon">ST</span>Settings</button>
          <div className="profile-mini"><div className="avatar avatar-small">AM</div><div><strong>Alex Morgan</strong><small>Patient account</small></div><span className="more">...</span></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> Overview</div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><span className="notification-dot" />N</button><div className="avatar">AM</div></div></header>
        <div className="content-wrap">
          <section className="welcome-row"><div><p className="eyebrow">TUESDAY, SEPTEMBER 15, 2026</p><h1>Good morning, Alex.</h1><p className="intro">Here is your care overview for today.</p></div><button className="primary-button"><span>+</span> Book an appointment</button></section>

          <section className="metric-grid" aria-label="Care summary">
            <article className="metric-card accent-green"><div className="metric-top"><span>Upcoming visits</span><span className="metric-icon">AP</span></div><strong>02</strong><small>Next visit in 3 days</small></article>
            <article className="metric-card accent-blue"><div className="metric-top"><span>Active prescriptions</span><span className="metric-icon">RX</span></div><strong>04</strong><small>All medications on track</small></article>
            <article className="metric-card accent-orange"><div className="metric-top"><span>Care plan progress</span><span className="metric-icon">CP</span></div><strong>78<span>%</span></strong><small>+12% since last month</small></article>
          </section>

          <section className="dashboard-grid">
            <article className="panel appointments-panel"><div className="panel-heading"><div><p className="eyebrow">YOUR SCHEDULE</p><h2>Upcoming appointments</h2></div><button className="text-button">View calendar <span>-&gt;</span></button></div><div className="appointment-list"><div className="appointment-item"><div className="date-tile"><strong>18</strong><span>SEP</span></div><div className="appointment-details"><strong>Annual wellness check</strong><span>Dr. Maya Patel <i /> Primary care</span><small>10:30 AM - 11:15 AM</small></div><span className="status confirmed">Confirmed</span><button className="row-menu" aria-label="Appointment options">...</button></div><div className="appointment-item"><div className="date-tile muted"><strong>26</strong><span>SEP</span></div><div className="appointment-details"><strong>Dental cleaning</strong><span>Dr. James Wilson <i /> Dentistry</span><small>2:00 PM - 2:45 PM</small></div><span className="status pending">Pending</span><button className="row-menu" aria-label="Appointment options">...</button></div></div></article>
            <article className="panel care-panel"><div className="panel-heading"><div><p className="eyebrow">CARE TEAM</p><h2>Your providers</h2></div><button className="round-button" aria-label="Add provider">+</button></div><div className="provider-list"><div className="provider"><div className="provider-avatar teal">MP</div><div><strong>Dr. Maya Patel</strong><span>Primary care</span></div><span className="online" /></div><div className="provider"><div className="provider-avatar violet">JW</div><div><strong>Dr. James Wilson</strong><span>Dentistry</span></div><span className="online" /></div><div className="provider"><div className="provider-avatar coral">LC</div><div><strong>Dr. Lena Chen</strong><span>Cardiology</span></div><span className="offline" /></div></div><button className="outline-button">View care team</button></article>
          </section>

          <section className="dashboard-grid bottom-grid"><article className="panel chart-panel"><div className="panel-heading"><div><p className="eyebrow">HEALTH SNAPSHOT</p><h2>Care plan progress</h2></div><button className="period-button">Last 6 months <span>v</span></button></div><div className="chart-area"><div className="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart"><div className="grid-line line-1" /><div className="grid-line line-2" /><div className="grid-line line-3" /><div className="grid-line line-4" /><svg viewBox="0 0 620 180" preserveAspectRatio="none" role="img" aria-label="Care plan progress rising from 54 to 78 percent"><path className="chart-fill" d="M0,130 C70,140 90,102 150,112 S220,78 275,96 S350,65 410,77 S490,38 540,55 S590,20 620,25 L620,180 L0,180 Z" /><path className="chart-line" d="M0,130 C70,140 90,102 150,112 S220,78 275,96 S350,65 410,77 S490,38 540,55 S590,20 620,25" /></svg><div className="chart-x"><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span></div></div></div></article><article className="panel activity-panel"><div className="panel-heading"><div><p className="eyebrow">RECENT UPDATES</p><h2>Activity</h2></div><button className="text-button">See all <span>-&gt;</span></button></div><div className="activity-list"><div className="activity-item"><span className="activity-icon green">RX</span><div><strong>Prescription renewed</strong><span>Vitamin D3 - 90 day supply</span><small>Today, 9:42 AM</small></div></div><div className="activity-item"><span className="activity-icon blue">LAB</span><div><strong>Lab results available</strong><span>Your blood panel is ready to review</span><small>Yesterday, 4:18 PM</small></div></div><div className="activity-item"><span className="activity-icon orange">MSG</span><div><strong>Message from Dr. Patel</strong><span>"Your results look great, Alex."</span><small>Sep 12, 11:06 AM</small></div></div></div></article></section>
          <footer className="footer"><span>Careflow Health Platform</span><span>Privacy &amp; security <i /> Help center</span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
