import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const mothMarkDark = `${import.meta.env.BASE_URL}mothq-mark-dark.png`;
const mothMarkLight = `${import.meta.env.BASE_URL}mothq-mark-light.png`;

const releases = [["MothQ", "Flagship reasoning model", "Model card"], ["Local runtime", "Edge-native deployment tools", "Release notes"], ["Technical report", "Architecture, training, evaluation", "Read paper"]];
const research = [["Efficient long-context inference", "Engineering note"], ["Evaluating reasoning under constraints", "Technical report"], ["Open deployment recipes", "Community"]];

export function App() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => {
    const items = [...document.querySelectorAll(".site-header, main > section, footer")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const copyCommand = async () => {
    try { await navigator.clipboard.writeText("mothq run MothQ --device local"); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch { setCopied(false); }
  };
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MothQ home"><img src={theme === "light" ? mothMarkDark : mothMarkLight} alt="" /><span>MothQ</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#models" onClick={() => setMenuOpen(false)}>Models</a><a href="#runtime" onClick={() => setMenuOpen(false)}>Runtime</a><a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
        </nav>
        <div className="header-actions"><button className="theme-toggle" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "Dark" : "Light"}</button><a className="button button-ink" href="#models">Explore models</a><button className="menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button></div>
      </header>

      <section className="hero page-width" id="top">
        <div className="hero-main"><p className="kicker"><span></span> Open-source reasoning models</p><h1>Reasoning,<br />optimized.</h1><p className="hero-deck">MothQ builds edge-native architectures for capable local reasoning — open by design, efficient by default.</p><a className="text-action" href="#models">Explore MothQ</a></div>
        <aside className="research-index" aria-label="Research index"><p className="mono-label">Research index</p><ol><li><span>01</span><a href="#research">Our approach <small>Edge-native AI</small></a></li><li><span>02</span><a href="#models">Model releases <small>MothQ</small></a></li><li><span>03</span><a href="#research">Technical reports <small>Research & evaluation</small></a></li><li><span>04</span><a href="#runtime">Engineering <small>Tools & inference</small></a></li></ol><p className="index-note">Smaller models.<br />Bigger possibilities.</p></aside>
      </section>

      <section className="runtime-wrap" id="runtime"><div className="runtime page-width">
        <div className="runtime-intro"><p className="kicker"><span></span> Local runtime</p><h2>Intelligence that<br />stays with you.</h2><p>Run powerful reasoning locally — on a laptop, workstation, or edge device.</p><a className="button button-accent" href="#models">Run locally</a></div>
        <div className="terminal" aria-label="Local inference code sample"><div className="terminal-head"><span>Python</span><span>CLI</span><span>Local inference</span><button type="button" onClick={copyCommand}>{copied ? "Copied" : "Copy command"}</button></div><pre><code><span className="code-muted"># Load MothQ locally</span>{"\n"}<span className="code-key">model</span> = MothQ.from_pretrained(<span className="code-string">"MothQ"</span>, device=<span className="code-string">"local"</span>){"\n\n"}<span className="code-key">prompt</span> = <span className="code-string">"Summarize sensor data and suggest next steps."</span>{"\n"}<span className="code-key">response</span> = model.generate(prompt, max_tokens=<span className="code-number">256</span>){"\n\n"}print(response)</code></pre></div>
        <div className="architecture" aria-label="MothQ edge-native architecture"><p className="mono-label">From laptops to local devices</p><div className="architecture-flow"><div className="flow-column"><span>User input</span><span>Local context</span><span>Tool use</span><span>On-device data</span></div><div className="model-node"><strong>MothQ</strong><span>Reasoning model</span><small>Edge-native</small></div><div className="flow-column output"><span>Reasoning</span><span>Planning</span><span>Tool calling</span><span>Local execution</span></div></div><div className="runtime-facts"><span>Edge-native</span><span>Open source</span><span>Local-first</span></div></div>
      </div></section>

      <section className="models page-width" id="models"><div className="section-rule"><span className="mono-label">Latest model</span></div><div className="model-grid"><div className="model-heading"><h2>MothQ</h2><p>Frontier reasoning for real-world devices.</p></div><p className="model-copy">A high-performance reasoning model built for local deployment. Open weights, practical inference, and a smaller environmental footprint.</p><div className="model-specs"><span>Architecture <strong>Edge-native</strong></span><span>License <strong>Open</strong></span></div></div><div className="model-links"><a href="#research"><b>Model card</b><span>Architecture, training, and evaluation</span></a><a href="#runtime"><b>Get the model</b><span>Weights, inference code, deployment guides</span></a><a href="#community"><b>Open source</b><span>Build, experiment, and contribute</span></a></div></section>

      <section className="research page-width" id="research"><div className="section-rule"><span className="mono-label">Research, released</span><p>Compact reasoning for a more capable world.</p></div><div className="research-grid"><div><h3>Research</h3>{research.map(([title, type]) => <a href="#community" className="list-row" key={title}><span>{title}</span><small>{type}</small></a>)}</div><div><h3>Release notes</h3>{releases.map(([title, description, action]) => <a href="#models" className="list-row" key={title}><span>{title}<small>{description}</small></span><small>{action}</small></a>)}</div></div></section>

      <section className="closing" id="community"><div className="page-width closing-inner"><p className="kicker"><span></span> MothQ community</p><h2>Build intelligence<br /><em>that fits the world.</em></h2><p>Follow research, run models, and help make efficient reasoning broadly available.</p><div><a className="button button-ink" href="mailto:hello@mothq.ai">Talk to MothQ</a><a className="text-action" href="#research">Read the research</a></div></div></section>
      <footer className="footer page-width"><span>© 2026 MothQ</span><span>Open models for finite resources.</span><a href="#top">Back to top</a></footer>
      <nav className="account-links page-width" aria-label="MothQ accounts">
        <span>MothQ channels</span>
        <div>
          <a href="https://github.com/mothq-dev" target="_blank" rel="noreferrer" aria-label="MothQ on GitHub"><FaGithub aria-hidden="true" /><span>GitHub</span></a>
          <a href="https://x.com/mothqdev" target="_blank" rel="noreferrer" aria-label="MothQ on X"><FaXTwitter aria-hidden="true" /><span>X</span></a>
          <a href="mailto:mothq.labs@gmail.com" aria-label="Email MothQ"><SiGmail aria-hidden="true" /><span>Email</span></a>
        </div>
      </nav>
    </main>
  );
}
