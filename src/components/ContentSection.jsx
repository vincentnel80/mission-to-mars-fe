function ContentSection({ section, title, text }) {
  return (
    <section className={section}>
      <div className="section-inner">
        <h4>{title}</h4>
        <h2>{text}</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default ContentSection;
