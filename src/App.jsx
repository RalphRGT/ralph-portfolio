import cvFile from "./assets/Ralph George CV.pdf";

function App() {
  const strengths = [
    "SQL & Data Analysis",
    "Power BI Dashboards",
    "ERP & Systems Support",
    "Process Improvement",
    "Excel Reporting",
    "Requirement Gathering",
    "Workflow Analysis",
    "Python for Analytics",
  ];

  const experienceHighlights = [
    "Analysed sales and inventory data using Excel and SQL to support business operations and stock decisions.",
    "Built dashboards for monthly performance insights and stock planning in a live retail environment.",
    "Supported ERP troubleshooting, requirements analysis, and functional improvement across business processes.",
    "Resolved 50+ technical issues and contributed to a 20% reduction in downtime.",
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "linear-gradient(180deg, #faf7ff 0%, #f3f0ff 100%)",
        color: "#0f172a",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }

        @keyframes floatOne {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        @keyframes floatTwo {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(25px) translateX(-15px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        @keyframes floatThree {
          0% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.08) translateY(-15px); }
          100% { transform: scale(1) translateY(0px); }
        }

        .hero-blob-1 {
          position: absolute;
          width: 260px;
          height: 260px;
          background: rgba(99, 102, 241, 0.22);
          border-radius: 50%;
          filter: blur(60px);
          top: 30px;
          left: 8%;
          animation: floatOne 7s ease-in-out infinite;
        }

        .hero-blob-2 {
          position: absolute;
          width: 320px;
          height: 320px;
          background: rgba(139, 92, 246, 0.18);
          border-radius: 50%;
          filter: blur(70px);
          top: 80px;
          right: 8%;
          animation: floatTwo 9s ease-in-out infinite;
        }

        .hero-blob-3 {
          position: absolute;
          width: 220px;
          height: 220px;
          background: rgba(196, 181, 253, 0.30);
          border-radius: 50%;
          filter: blur(55px);
          bottom: 10px;
          left: 38%;
          animation: floatThree 8s ease-in-out infinite;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.12);
        }

        .nav-link:hover {
          color: #93c5fd;
        }

        .primary-btn:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
        }

        .secondary-btn:hover {
          background-color: #eff6ff;
          transform: translateY(-2px);
        }
      `}</style>

      <nav
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.92)",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
        }}
      >

        <div style={{ display: "flex", gap: "24px", fontSize: "16px", flexWrap: "wrap" }}>
          <a href="#about" style={navLinkStyle} className="nav-link">About</a>
          <a href="#strengths" style={navLinkStyle} className="nav-link">Strengths</a>
          <a href="#project" style={navLinkStyle} className="nav-link">Project</a>
          <a href="#experience" style={navLinkStyle} className="nav-link">Experience</a>
          <a href="#contact" style={navLinkStyle} className="nav-link">Contact</a>
        </div>
      </nav>

     <section
  style={{
    position: "relative",
    overflow: "hidden",
    padding: "120px 20px 90px",
    textAlign: "center",
    background: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 45%, #faf7ff 100%)",
  }}
>
  <div className="hero-blob-1"></div>
  <div className="hero-blob-2"></div>
  <div className="hero-blob-3"></div>

  <div
  style={{
    position: "relative",
    zIndex: 2,
    maxWidth: "860px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.6)",
    borderRadius: "28px",
    padding: "40px 28px",
    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.10)",
  }}
>
    <p
      style={{
        fontSize: "18px",
        fontWeight: "600",
        color: "#2563eb",
        marginBottom: "12px",
      }}
    >
      Hello, I’m Ralph George
    </p>

    <h1
      style={{
        fontSize: window.innerWidth <= 768 ? "34px" : "56px",
        lineHeight: window.innerWidth <= 768 ? "1.2" : "1.1",
        marginBottom: "20px",
        color: "#0f172a",
      }}
    >
      Business Analytics Graduate
    </h1>

    <h2
      style={{
        fontSize: "24px",
        fontWeight: "500",
        marginBottom: "28px",
        color: "#334155",
      }}
    >
      Data Analysis | ERP & Systems Support | Reporting | Process Improvement
    </h2>

    <p
      style={{
        maxWidth: "780px",
        margin: "0 auto",
        fontSize: "18px",
        lineHeight: "1.9",
        color: "#475569",
      }}
    >
      I combine business analytics, dashboarding, ERP support, and process-focused problem solving
      to help organisations make better operational and data-driven decisions.
    </p>

    <div
  style={{
    marginTop: "34px",
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  }}
>
  <a href="#project" style={primaryButtonStyle} className="primary-btn">
    View Featured Project
  </a>

  <a
    href={cvFile}
    target="_blank"
    rel="noopener noreferrer"
    style={secondaryButtonStyle}
    className="secondary-btn"
  >
    Download CV
  </a>

  <a href="#contact" style={secondaryButtonStyle} className="secondary-btn">
    Contact Me
  </a>
</div>
  </div>
</section>

      <section
  id="about"
  style={{
    padding: "70px 20px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  }}
>
  <h2 style={sectionHeadingStyle}>About Me</h2>

  <div style={mainCardStyle} className="card-hover">
    <p style={bodyTextStyle}>
      I am an MSc Business Analytics graduate with a background in Computer Science
      and practical experience across data analysis, dashboarding, ERP support,
      and business process improvement. My interest lies in roles where data,
      systems, and operations come together to improve efficiency and support
      better decision-making.
    </p>
  </div>
</section>

      <section
        id="strengths"
        style={{
          padding: "10px 20px 60px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2 style={sectionHeadingStyle}>Core Strengths</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {strengths.map((item, index) => (
           
           <div
  key={index}
  className="card-hover"
  style={strengthCardStyle}
>
  <div
    style={{
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "#2563eb",
      margin: "0 auto 14px",
      boxShadow: "0 0 12px rgba(37, 99, 235, 0.35)",
    }}
  ></div>

  {item}
</div>
          ))}
        </div>
      </section>

      
      <section
  id="project"
  style={{
    padding: "20px 20px 80px",
    maxWidth: "1100px",
    margin: "0 auto",
  }}
>
  <h2 style={sectionHeadingStyle}>Selected Projects</h2>

  <p
    style={{
      maxWidth: "760px",
      margin: "0 auto 34px",
      textAlign: "center",
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#475569",
    }}
  >
    A selection of projects that reflect my interests in analytics, reporting,
    business systems, and process-focused problem solving.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    }}
  >
    <div className="card-hover" style={projectCardStyle}>
      <p style={projectLabelStyle}>Project 1</p>

      <h3 style={projectTitleStyle}>
        PresciSafe – AI-Enabled Prescription Fraud Detection Platform
      </h3>

      <p style={projectTextStyle}>
        A healthcare-focused analytics project designed to detect suspicious
        prescription behaviour using machine learning, dashboards, and fraud-scoring workflows.
      </p>

      <div style={tagWrapperStyle}>
        <span style={tagStyle}>Python</span>
        <span style={tagStyle}>SQL</span>
        <span style={tagStyle}>Power BI</span>
        <span style={tagStyle}>Streamlit</span>
        <span style={tagStyle}>FastAPI</span>
      </div>

      <div style={{ marginTop: "22px" }}>
        <p style={miniInfoTitleStyle}>Highlights</p>
        <ul style={compactListStyle}>
          <li>Detected anomalies such as doctor shopping and overuse</li>
          <li>Combined analytics, ML concepts, and dashboard reporting</li>
          <li>Built as a practical healthcare fraud-monitoring solution</li>
        </ul>
      </div>
    </div>

   <div className="card-hover" style={projectCardStyle}>
  <p style={projectLabelStyle}>Project 2</p>

  <h3 style={projectTitleStyle}>
    Dublin Housing Predictive Analytics
  </h3>

  <p style={projectTextStyle}>
    A predictive analytics project focused on identifying the factors that influence
    house-buying decisions in Dublin using structured property data, feature engineering,
    and machine learning models.
  </p>

  <div style={tagWrapperStyle}>
    <span style={tagStyle}>Python</span>
    <span style={tagStyle}>Random Forest</span>
    <span style={tagStyle}>LightGBM</span>
    <span style={tagStyle}>SMOTE</span>
  </div>

  <div style={{ marginTop: "22px" }}>
    <p style={miniInfoTitleStyle}>Highlights</p>
    <ul style={compactListStyle}>
      <li>Worked with a Dublin housing dataset containing 13,072 property records</li>
      <li>Performed EDA, feature engineering, encoding, and outlier handling</li>
      <li>Compared multiple models including Logistic Regression, KNN, Decision Tree, Random Forest, and LightGBM</li>
      <li>Selected Random Forest as the final model with 72.71% accuracy and 78.55% ROC-AUC</li>
    </ul>
  </div>
</div>

    <div className="card-hover" style={projectCardStyle}>
      <p style={projectLabelStyle}>Next Project</p>

      <h3 style={projectTitleStyle}>
        Future Project Slot
      </h3>

      <p style={projectTextStyle}>
        You can later use this card for another project that supports your target
        roles and shows your practical skills in reporting, analysis, or systems work.
      </p>

      <div style={tagWrapperStyle}>
        <span style={tagStyle}>Coming Soon</span>
      </div>

      <div style={{ marginTop: "22px" }}>
        <p style={miniInfoTitleStyle}>Suggested use</p>
        <ul style={compactListStyle}>
          <li>ERP or operations-focused work</li>
          <li>Data analysis or process improvement project</li>
          <li>A business-facing technical solution</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section
  id="experience"
  style={{
    padding: "10px 20px 70px",
    maxWidth: "1000px",
    margin: "0 auto",
  }}
>
  <h2 style={sectionHeadingStyle}>Experience Highlights</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "20px",
    }}
  >
    <div className="card-hover" style={cardStyle}>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          textTransform: "uppercase",
          color: "#2563eb",
          marginBottom: "8px",
        }}
      >
        Co-Founder, Business Systems Analyst
      </p>
      <h3 style={cardTitleStyle}>Concours Fashions</h3>
      <p style={smallTextStyle}>
        Worked across Business analysis, inventory planning, dashboards and POS-related
        decision support in a live retail setting.
      </p>

      <ul style={listStyle}>
        <li>Used Excel and SQL to support sales and stock decisions</li>
        <li>Built dashboards for monthly performance and stock planning</li>
        <li>Supported POS and inventory system implementation decisions</li>
        <li>Contributed to pricing, vendor coordination, and seasonal planning</li>
      </ul>
    </div>

    <div className="card-hover" style={cardStyle}>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          textTransform: "uppercase",
          color: "#2563eb",
          marginBottom: "8px",
        }}
      >
        Junior Software Engineer
      </p>
      <h3 style={cardTitleStyle}>Coral Business Solutions</h3>
      <p style={smallTextStyle}>
        Supported ERP-related workflows through troubleshooting, requirements analysis,
        SQL-based data work, and Power BI reporting.
      </p>

      <ul style={listStyle}>
        <li>Resolved 50+ technical issues and helped reduce downtime by 20%</li>
        <li>Translated business requirements into ERP functional specifications</li>
        <li>Built SQL-based data systems for operational and reporting needs</li>
        <li>Created Power BI dashboards to highlight inefficiencies and insights</li>
      </ul>
    </div>
  </div>
</section>

      <section
        id="contact"
        style={{
          padding: "70px 20px",
          background: "linear-gradient(135deg, #1f2937 0%, #312e81 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "34px", marginBottom: "22px" }}>Contact</h2>
        <p style={contactTextStyle}>
  Email:{" "}
  <a href="mailto:georgergt123@gmail.com" style={contactLinkStyle}>
    georgergt123@gmail.com
  </a>
</p>
        <p style={contactTextStyle}>
  LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/ralph-george-443535253"
    target="_blank"
    rel="noopener noreferrer"
    style={contactLinkStyle}
  >
    View LinkedIn Profile
  </a>
</p>
        <p style={contactTextStyle}>Location: Cork, Ireland</p>
      </section>
    </div>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s ease",
};

const primaryButtonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "14px 24px",
  borderRadius: "14px",
  fontWeight: "700",
  boxShadow: "0 12px 30px rgba(37, 99, 235, 0.25)",
  transition: "0.3s ease",
};


const secondaryButtonStyle = {
  backgroundColor: "rgba(255,255,255,0.92)",
  color: "#0f172a",
  textDecoration: "none",
  padding: "14px 24px",
  borderRadius: "14px",
  fontWeight: "700",
  border: "1px solid #cbd5e1",
  transition: "0.3s ease",
};

const sectionHeadingStyle = {
  fontSize: "36px",
  marginBottom: "24px",
  color: "#0f172a",
  textAlign: "center",
  letterSpacing: "-0.5px",
};

const subHeadingStyle = {
  fontSize: "20px",
  marginBottom: "10px",
  color: "#1e293b",
};

const bodyTextStyle = {
  lineHeight: "1.95",
  fontSize: "17px",
  color: "#334155",
};

const listStyle = {
  lineHeight: "1.9",
  fontSize: "16px",
  color: "#334155",
  paddingLeft: "20px",
};

const strengthCardStyle = {
  background: "rgba(255,255,255,0.72)",
  padding: "26px 22px",
  borderRadius: "22px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  color: "#0f172a",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.45)",
  transition: "0.3s ease",
};


const mainCardStyle = {
  background: "rgba(255,255,255,0.82)",
  padding: "38px",
  borderRadius: "28px",
  boxShadow: "0 16px 38px rgba(15, 23, 42, 0.10)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.55)",
  transition: "0.3s ease",
};


const cardStyle = {
  background: "rgba(255,255,255,0.84)",
  padding: "32px",
  borderRadius: "24px",
  boxShadow: "0 14px 32px rgba(15, 23, 42, 0.10)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.5)",
  transition: "0.3s ease",
};

const cardTitleStyle = {
  marginTop: 0,
  marginBottom: "6px",
  fontSize: "24px",
  color: "#0f172a",
};

const companyStyle = {
  marginTop: 0,
  marginBottom: "16px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#2563eb",
};

const contactTextStyle = {
  fontSize: "18px",
  margin: "10px 0",
};

const miniCardStyle = {
  backgroundColor: "rgba(239,246,255,0.9)",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid #dbeafe",
};

const smallTextStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#475569",
};

const contactLinkStyle = {
  color: "#bfdbfe",
  textDecoration: "none",
  fontWeight: "600",
};
const projectCardStyle = {
  background: "rgba(255,255,255,0.85)",
  padding: "28px",
  borderRadius: "24px",
  boxShadow: "0 14px 32px rgba(15, 23, 42, 0.10)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.55)",
  transition: "0.3s ease",
  display: "flex",
  flexDirection: "column",
  minHeight: "420px",
};

const projectLabelStyle = {
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#2563eb",
  marginBottom: "10px",
};

const projectTitleStyle = {
  marginTop: 0,
  marginBottom: "14px",
  fontSize: "28px",
  lineHeight: "1.2",
  color: "#0f172a",
};

const projectTextStyle = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#475569",
  marginBottom: "18px",
};

const tagWrapperStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const tagStyle = {
  backgroundColor: "#eff6ff",
  color: "#1d4ed8",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "600",
};

const miniInfoTitleStyle = {
  fontSize: "16px",
  fontWeight: "700",
  marginBottom: "10px",
  color: "#0f172a",
};

const compactListStyle = {
  margin: 0,
  paddingLeft: "18px",
  color: "#475569",
  lineHeight: "1.8",
  fontSize: "15px",
};
export default App;