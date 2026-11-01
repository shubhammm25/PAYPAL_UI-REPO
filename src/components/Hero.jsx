import { useState } from "react";
import { tabs, hero } from "../data.js";

function Hero() {
  const [activeTab, setActiveTab] = useState("Business");

  return (
    <section className="hero">
      <div className="switch" role="tablist" aria-label="Account type">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "switch-btn active" : "switch-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <h1 className="hero-title">{hero.title}</h1>
      <h2 className="hero-subtitle">{hero.subtitle}</h2>
      <p className="hero-text">{hero.description}</p>
      <div className="hero-actions">
        <button type="button" className="btn btn-dark btn-lg">
          {hero.primaryAction}
        </button>
        <button type="button" className="btn btn-light btn-lg">
          {hero.secondaryAction}
        </button>
      </div>
    </section>
  );
}

export default Hero;
