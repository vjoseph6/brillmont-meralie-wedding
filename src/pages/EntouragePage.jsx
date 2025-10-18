import "./EntouragePage.css";

function Section({ title, icon, children }) {
  return (
    <section className="ent-section">
      <div className="ent-section-header">
        <span className="ent-icon" aria-hidden="true">
          {icon}
        </span>
        <h2 className="ent-title font-display">{title}</h2>
        <div className="ent-divider" />
      </div>
      <div className="ent-content">{children}</div>
    </section>
  );
}

function TwoColumn({ leftTitle, leftItems, rightTitle, rightItems }) {
  return (
    <div className="two-col">
      <div className="col">
        <h3 className="col-title font-serif">{leftTitle}</h3>
        <ul className="ent-list">
          {leftItems.map((item, idx) => (
            <li key={idx} className="ent-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col">
        <h3 className="col-title font-serif">{rightTitle}</h3>
        <ul className="ent-list">
          {rightItems.map((item, idx) => (
            <li key={idx} className="ent-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((text, idx) => (
        <div key={idx} className="ent-card">
          <span className="ent-card-dot" />
          <span className="ent-card-text">{text}</span>
        </div>
      ))}
    </div>
  );
}

function EntouragePage() {
  return (
    <div className="entourage-page">
      <div className="ent-container">
        <header className="ent-header">
          <h1 className="ent-heading font-display">Our Entourage</h1>
          <p className="ent-subtitle font-serif">
            With love and gratitude, we honor the people beside us on this
            journey.
          </p>
        </header>

        <Section title="Parents" icon="👨‍👩‍👧">
          <TwoColumn
            leftTitle="Bride’s Parents"
            leftItems={["Father: Alex Dutosme", "Mother: Mercy Dutosme"]}
            rightTitle="Groom’s Parents"
            rightItems={[
              "Father: Winefredo Tampus",
              "Mother: Maria Erma Tampus",
            ]}
          />
        </Section>

        <Section title="Principal Sponsors" icon="💒">
          <CardGrid
            items={[
              "Mr. & Mrs. Ralston & Efe Velano",
              "Mr. & Mrs. Frederick & Juna Rayco",
              "Mr. & Mrs. Salvation & Siony Mercader",
              "Mr. & Mrs. John & Jenny Surban",
              "Mr. & Mrs. Christopher & Marichu Luzano",
              "Mr. & Mrs. Danny & Joji Sagarino",
              "Mr. & Mrs. Niño & Phoebe Dela Cruz",
              "Mr. & Mrs. Edgardo & Esmeralda Luzano",
              "Mr. & Mrs. Allen & Melodia Faulkner",
            ]}
          />
        </Section>

        <Section title="Secondary Sponsors" icon="💗">
          <div className="secondary-grid">
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Veil</h4>
              <ul className="ent-list">
                <li className="ent-item">
                  Mr. & Mrs. Kenneth & Luzcille Jumadla
                </li>
              </ul>
            </div>
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Cord</h4>
              <ul className="ent-list">
                <li className="ent-item">
                  Mr. & Mrs. Niño Jan & Rosana Luzano
                </li>
              </ul>
            </div>
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Candle</h4>
              <ul className="ent-list">
                <li className="ent-item">Mr & Mrs. Joel & Tessie Dihayco</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Main Entourage" icon="💍">
          <div className="two-col">
            <div className="col">
              <h3 className="col-title font-serif">Best Man</h3>
              <ul className="ent-list">
                <li className="ent-item">John Martin Luzano</li>
              </ul>
            </div>
            <div className="col">
              <h3 className="col-title font-serif">Maid of Honor</h3>
              <ul className="ent-list">
                <li className="ent-item">Micah Marie Dutosme</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Bridesmaids" icon="👗">
          <CardGrid
            items={[
              "Zuleike Margarette Jayme",
              "Precious Faith Jayme",
              "Akiko Nogra",
              "Wenna Fritz Tampus",
              "Caselle Faith Luzano",
              "Rheann Uriel Luzano",
              "Jernalyn Luzano",
            ]}
          />
        </Section>

        <Section title="Groomsmen" icon="🤵‍♂️">
          <CardGrid
            items={[
              "Psalm Zachariah Jayme",
              "Joseph Lhee Villariasa",
              "Joshua Torilla",
              "Jay Sagarino",
              "Vence Andre Luzano",
              "Von Andrielle Luzano",
              "Clive Vincent Ortiz",
            ]}
          />
        </Section>

        <Section title="Flower Girls" icon="🌸">
          <CardGrid
            items={[
              "Nicole Christiana Fernandes",
              "Chloe Christiana Fernandes",
              "Zichri Astlyr Niña Elle Dela Cruz",
            ]}
          />
        </Section>

        <Section title="Bearers" icon="🎁">
          <div className="secondary-grid">
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Ring Bearer</h4>
              <ul className="ent-list">
                <li className="ent-item">David Miles Jayme</li>
              </ul>
            </div>
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Bible Bearer</h4>
              <ul className="ent-list">
                <li className="ent-item">Kyros Kyle Dutosme</li>
              </ul>
            </div>
            <div className="secondary-card">
              <h4 className="secondary-title font-serif">Coin Bearer</h4>
              <ul className="ent-list">
                <li className="ent-item">Vaughn Drei Dumasig</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default EntouragePage;
