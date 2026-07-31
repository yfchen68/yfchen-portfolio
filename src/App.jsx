import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  tracks,
  trackLinks,
  projects,
  publications,
  mapLayout,
  ui,
  positioning,
  contact,
  pageMeta,
  FULL_PROFILE_URL,
  PUBLICATIONS_URL,
} from './content';
import './styles.css';

// ============================================================
// 路由
//
// 目前用 hash routing（#/projects/4），維持與現有部署相容。
// 之後若遷到 Next.js 或 react-router，只要換掉這一段，
// 其餘元件都是透過 route / navigate 兩個 prop 溝通，不用改。
// ============================================================

const ROUTES = ['home', 'projects'];

function parseHash() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  const [route, param] = raw.split('/');
  return { route: route || 'home', param: param || null };
}

function useRouter() {
  const [loc, setLoc] = useState(parseHash);

  useEffect(() => {
    const onChange = () => {
      setLoc(parseHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((route, param) => {
    window.location.hash = param ? `/${route}/${param}` : `/${route}`;
  }, []);

  const isKnown = ROUTES.includes(loc.route);
  return { ...loc, isKnown, navigate };
}

// ============================================================
// Hooks
// ============================================================

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** 進入視窗時加上 .is-visible。CSS 負責實際的過場。 */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

function useLang() {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = window.localStorage.getItem('yfc-lang');
      if (saved === 'zh' || saved === 'en') return saved;
    } catch {
      /* localStorage 可能被封鎖，忽略 */
    }
    return navigator.language?.startsWith('zh') ? 'zh' : 'zh';
  });

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem('yfc-lang', next);
    } catch {
      /* 忽略 */
    }
  }, []);

  return [lang, setLang];
}

// ============================================================
// 小工具
// ============================================================

const trackById = (id) => tracks.find((t) => t.id === id);
const projectById = (id) => projects.find((p) => p.id === Number(id));

const natureColor = {
  research: '#5A4A8B',
  industry: '#A65A2E',
  practice: '#3D6B5C',
};

function setMeta(name, value) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

// ============================================================
// 背景紋理
// ============================================================

function Grain() {
  return (
    <svg className="grain" aria-hidden="true" focusable="false">
      <filter id="grainFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0.08 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainFilter)" />
    </svg>
  );
}

// ============================================================
// 導覽列
// ============================================================

function Nav({ lang, setLang, route, navigate }) {
  const t = ui[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 48);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (r) => {
    navigate(r);
    setOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <button className="nav__brand" onClick={() => go('home')}>
        Yen-Fu Chen<span>陳彥甫</span>
      </button>

      <button
        className="nav__burger"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav__links">
        <button
          className={`nav__link${route === 'home' ? ' nav__link--active' : ''}`}
          onClick={() => go('home')}
        >
          {t.nav.home}
        </button>
        <button
          className={`nav__link${route === 'projects' ? ' nav__link--active' : ''}`}
          onClick={() => go('projects')}
        >
          {t.nav.projects}
        </button>
        <a className="nav__link nav__link--out" href={FULL_PROFILE_URL}>
          {t.nav.profile}
        </a>
        <button
          className="nav__lang"
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          aria-label={t.langToggleLabel}
        >
          {t.langToggle}
        </button>
      </div>
    </nav>
  );
}

// ============================================================
// Hero
// ============================================================

function Hero({ lang }) {
  const t = ui[lang];
  return (
    <header className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__inner">
        <p className="eyebrow rise" style={{ animationDelay: '0.1s' }}>
          {t.heroEyebrow}
        </p>
        <h1 className="hero__title rise" style={{ animationDelay: '0.2s' }}>
          {t.heroTitle}
        </h1>
        <p className="hero__sub rise" style={{ animationDelay: '0.34s' }}>
          {t.heroSubtitle}
        </p>
        <div className="hero__meta rise" style={{ animationDelay: '0.46s' }}>
          <span className="hero__name">{t.name}</span>
          <span className="hero__dash" aria-hidden="true" />
          <span className="hero__role">
            {t.role}
            <br />
            {t.role2}
          </span>
        </div>
        <p className="hero__note rise" style={{ animationDelay: '0.56s' }}>
          {t.heroNote}{' '}
          <a href={FULL_PROFILE_URL}>yfchen.info ↗</a>
        </p>
      </div>
    </header>
  );
}

// ============================================================
// 研究定位 — 主張，後面的地圖是證據
// ============================================================

function Positioning({ lang }) {
  const c = positioning[lang];
  const revealRef = useReveal();

  return (
    <section className="section section--tint" id="positioning">
      <div className="wrap wrap--narrow reveal" ref={revealRef}>
        <p className="eyebrow">{c.label}</p>
        <p className="positioning__thesis">{c.thesis}</p>
        <p className="positioning__question">{c.question}</p>
        <p className="positioning__bridge">{c.bridge}</p>
      </div>
    </section>
  );
}

// ============================================================
// 研究地圖 — 本站的招牌元件
// ============================================================

const MAP_TYPE = {
  desktop: { label: 19, sub: 14, num: 38, cross: 13 },
  mobile: { label: 18, sub: 15, num: 30, cross: 14 },
};

function ResearchMap({ lang, navigate }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const key = isMobile ? 'mobile' : 'desktop';
  const layout = mapLayout[key];
  const size = MAP_TYPE[key];
  const t = ui[lang];

  // 't:01' 或 'p:4'，null 表示沒有任何節點被聚焦
  const [active, setActive] = useState(null);
  const revealRef = useReveal();

  const trackOf = useMemo(() => {
    const m = {};
    projects.forEach((p) => (m[p.id] = p.track));
    return m;
  }, []);

  const trackIsLit = (id) => {
    if (!active) return false;
    if (active === `t:${id}`) return true;
    if (active.startsWith('p:')) return trackOf[Number(active.slice(2))] === id;
    return false;
  };

  const projectIsLit = (id) => {
    if (!active) return false;
    if (active === `p:${id}`) return true;
    if (active.startsWith('t:')) return trackOf[id] === active.slice(2);
    return false;
  };

  const dimmed = (lit) => Boolean(active) && !lit;

  const pos = (kind, id) => (kind === 'track' ? layout.tracks[id] : layout.projects[id]);

  const activate = (k) => setActive(k);
  const clear = () => setActive(null);

  const nodeKeyHandler = (fn) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  return (
    <section className="section" id="map">
      <div className="wrap reveal" ref={revealRef}>
        <p className="eyebrow">{t.mapLabel}</p>
        <h2 className="h2">{t.mapTitle}</h2>
        <p className="lede">{t.mapHint}</p>

        <figure className="map__figure">
          <svg
            className="map__svg"
            viewBox={layout.viewBox}
            role="group"
            aria-label={t.mapTitle}
            onMouseLeave={clear}
          >
            <defs>
              {tracks.map((tr) => (
                <radialGradient key={tr.id} id={`halo-${tr.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={tr.colorHex} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={tr.colorHex} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* 軸線外圈虛線 */}
            {tracks.map((tr) => {
              const [x, y] = pos('track', tr.id);
              return (
                <circle
                  key={`ring-${tr.id}`}
                  cx={x}
                  cy={y}
                  r={layout.trackRadius + (isMobile ? 22 : 38)}
                  fill="none"
                  stroke={tr.colorHex}
                  strokeOpacity={trackIsLit(tr.id) ? 0.28 : 0.09}
                  strokeWidth="1"
                  strokeDasharray="2 6"
                  style={{ transition: 'stroke-opacity 0.45s ease' }}
                />
              );
            })}

            {/* 跨軸連結（虛線） */}
            {trackLinks.map((link, i) => {
              const [x1, y1] = pos('track', link.from);
              const [x2, y2] = pos('track', link.to);
              const lit = trackIsLit(link.from) || trackIsLit(link.to);
              return (
                <g key={`x-${i}`} className="map__link" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--muted)"
                    strokeOpacity={lit ? 0.55 : 0.2}
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <text
                    className="map__sublabel"
                    x={(x1 + x2) / 2}
                    y={(y1 + y2) / 2 - 7}
                    fontSize={size.cross}
                    textAnchor="middle"
                    opacity={lit ? 0.9 : 0.4}
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {link[lang]}
                  </text>
                </g>
              );
            })}

            {/* 專案 → 軸線 的連線 */}
            {projects.map((p, i) => {
              const [px, py] = pos('project', p.id);
              const [tx, ty] = pos('track', p.track);
              const tr = trackById(p.track);
              const lit = projectIsLit(p.id) || trackIsLit(p.track);
              const mx = (px + tx) / 2;
              const my = (py + ty) / 2;
              const bendX = -(ty - py) * 0.14;
              const bendY = (tx - px) * 0.14;
              return (
                <path
                  key={`l-${p.id}`}
                  className="map__link"
                  style={{ animationDelay: `${0.25 + i * 0.06}s` }}
                  d={`M ${px} ${py} Q ${mx + bendX} ${my + bendY} ${tx} ${ty}`}
                  fill="none"
                  stroke={tr.colorHex}
                  strokeWidth={lit ? 3 : 1.5}
                  strokeOpacity={dimmed(lit) ? 0.08 : lit ? 0.72 : 0.28}
                  strokeLinecap="round"
                  strokeDasharray={lit ? 'none' : '3 4'}
                />
              );
            })}

            {/* 軸線節點 */}
            {tracks.map((tr, i) => {
              const [x, y] = pos('track', tr.id);
              const lit = trackIsLit(tr.id);
              const r = layout.trackRadius;
              return (
                <g
                  key={`t-${tr.id}`}
                  className="map__node"
                  style={{ animationDelay: `${0.1 + i * 0.09}s` }}
                  tabIndex={0}
                  role="link"
                  aria-label={tr[lang].title}
                  onMouseEnter={() => activate(`t:${tr.id}`)}
                  onFocus={() => activate(`t:${tr.id}`)}
                  onBlur={clear}
                  onClick={() => {
                    document.getElementById(`track-${tr.id}`)?.scrollIntoView({ block: 'start' });
                  }}
                  onKeyDown={nodeKeyHandler(() =>
                    document.getElementById(`track-${tr.id}`)?.scrollIntoView({ block: 'start' })
                  )}
                >
                  <circle cx={x} cy={y} r={r + (lit ? 34 : 14)} fill={`url(#halo-${tr.id})`} />
                  <circle
                    className="map__focusring"
                    cx={x}
                    cy={y}
                    r={r + 12}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={lit ? r + 4 : r}
                    fill={tr.colorHex}
                    opacity={dimmed(lit) ? 0.42 : 1}
                    style={{ transition: 'r 0.4s ease, opacity 0.4s ease' }}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={r - 8}
                    fill="none"
                    stroke="rgba(245,241,232,0.35)"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y + size.num * 0.34}
                    textAnchor="middle"
                    fontFamily="var(--serif)"
                    fontSize={size.num}
                    fontWeight="300"
                    fill="var(--cream)"
                    style={{ pointerEvents: 'none', letterSpacing: '-0.02em' }}
                  >
                    {tr.id}
                  </text>
                  <text
                    className="map__label"
                    x={x}
                    y={y + r + size.label + 8}
                    textAnchor="middle"
                    fontSize={size.label}
                    opacity={dimmed(lit) ? 0.32 : 1}
                  >
                    {tr[lang].short}
                  </text>
                </g>
              );
            })}

            {/* 專案節點 */}
            {projects.map((p, i) => {
              const [x, y] = pos('project', p.id);
              const tr = trackById(p.track);
              const lit = projectIsLit(p.id);
              const r = layout.projectRadius;
              const openProject = () => navigate('projects', p.id);
              return (
                <g
                  key={`p-${p.id}`}
                  className="map__node"
                  style={{ animationDelay: `${0.34 + i * 0.06}s` }}
                  tabIndex={0}
                  role="link"
                  aria-label={p[lang].title}
                  onMouseEnter={() => activate(`p:${p.id}`)}
                  onFocus={() => activate(`p:${p.id}`)}
                  onBlur={clear}
                  onClick={openProject}
                  onKeyDown={nodeKeyHandler(openProject)}
                >
                  <circle className="map__focusring" cx={x} cy={y} r={r + 10} />
                  <circle
                    cx={x}
                    cy={y}
                    r={lit ? r + 3 : r}
                    fill="var(--cream)"
                    stroke={tr.colorHex}
                    strokeWidth={lit ? 2.5 : 1.5}
                    opacity={dimmed(lit) ? 0.38 : 1}
                    style={{ transition: 'r 0.35s ease, opacity 0.35s ease' }}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={lit ? 6 : 4}
                    fill={tr.colorHex}
                    opacity={dimmed(lit) ? 0.38 : 1}
                    style={{ transition: 'r 0.35s ease, opacity 0.35s ease' }}
                  />
                  <text
                    className="map__sublabel"
                    x={x}
                    y={y + r + size.sub + 5}
                    textAnchor="middle"
                    fontSize={size.sub}
                    fill="var(--ink)"
                    opacity={dimmed(lit) ? 0.3 : 0.9}
                  >
                    {p[lang].short}
                  </text>
                </g>
              );
            })}
          </svg>
        </figure>

        <div className="map__legend">
          {tracks.map((tr) => (
            <span className="map__legend-item" key={tr.id}>
              <span className="map__swatch" style={{ background: tr.colorHex }} />
              {tr[lang].title}
            </span>
          ))}
          <span className="map__legend-item map__legend-cross">
            <svg width="30" height="10" aria-hidden="true">
              <line x1="0" y1="5" x2="30" y2="5" stroke="currentColor" strokeDasharray="4 4" />
            </svg>
            {t.mapLegendCross}
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 研究軸線
// ============================================================

function Tracks({ lang }) {
  const t = ui[lang];
  const [active, setActive] = useState(null);
  const revealRef = useReveal();

  return (
    <section className="section section--tint" id="tracks">
      <div className="wrap reveal" ref={revealRef}>
        <p className="eyebrow">{t.tracksLabel}</p>
        <h2 className="h2">{t.tracksTitle}</h2>
        <p className="lede">{t.tracksLede}</p>

        <div className="tracks">
          {tracks.map((tr) => {
            const c = tr[lang];
            const on = active === tr.id;
            return (
              <article
                key={tr.id}
                id={`track-${tr.id}`}
                className={`track${on ? ' is-active' : ''}`}
                style={{ '--track-color': tr.color }}
                onMouseEnter={() => setActive(tr.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(tr.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
              >
                <div className="track__grid">
                  <div className="track__num">{tr.id}</div>
                  <div>
                    <h3 className="h3">{c.title}</h3>
                    <p className="track__alt">{c.titleAlt}</p>
                    <p className="track__excluded">
                      <span className="track__excluded-key">{t.excludedLabel}</span>
                      {c.excluded}
                    </p>
                    <p className="track__tagline">{c.tagline}</p>
                  </div>
                  <div>
                    <p className="track__desc">{c.desc}</p>
                    <div className="chips">
                      {tr.keywords.map((k) => (
                        <span className="chip" key={k}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 代表論文
// ============================================================

function PubRow({ p, lang }) {
  const title = lang === 'zh' && p.titleZh ? p.titleZh : p.title;
  const authors = lang === 'zh' && p.authorsZh ? p.authorsZh : p.authors;
  const venue = lang === 'zh' && p.venueZh ? p.venueZh : p.venue;
  const color = p.track ? trackById(p.track)?.color : 'var(--clay)';

  return (
    <article className="pub" style={{ '--pub-color': color }}>
      <div className="pub__year">{p.year}</div>
      <div>
        <div className="pub__venue">{venue}</div>
        {p.tag && <span className="pub__tag">{p.tag}</span>}
      </div>
      <div className="pub__title-cell">
        <h4 className="pub__title">{title}</h4>
        <p className="pub__authors">{authors}</p>
        {p.award && <span className="pub__award">★ {p.award}</span>}
        {p.doi && (
          <a
            className="pub__doi"
            href={`https://doi.org/${p.doi}`}
            target="_blank"
            rel="noreferrer"
          >
            DOI: {p.doi} ↗
          </a>
        )}
      </div>
    </article>
  );
}

function Publications({ lang }) {
  const t = ui[lang];
  const revealRef = useReveal();
  const journals = publications.filter((p) => p.type === 'journal');
  const confs = publications.filter((p) => p.type === 'conference');

  return (
    <section className="section" id="publications">
      <div className="wrap reveal" ref={revealRef}>
        <p className="eyebrow">{t.pubLabel}</p>
        <h2 className="h2">{t.pubTitle}</h2>

        {journals.length > 0 && (
          <div className="pub-group" style={{ marginTop: 60 }}>
            <h3 className="pub-group__head">— {t.pubJournal}</h3>
            {journals.map((p) => (
              <PubRow key={p.id} p={p} lang={lang} />
            ))}
          </div>
        )}

        {confs.length > 0 && (
          <div className="pub-group">
            <h3 className="pub-group__head">— {t.pubConference}</h3>
            {confs.map((p) => (
              <PubRow key={p.id} p={p} lang={lang} />
            ))}
          </div>
        )}

        <div className="pub-outro">
          <p>{t.pubFullListNote}</p>
          <a className="btn" href={PUBLICATIONS_URL}>
            {t.pubFullList} ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 首頁
// ============================================================

function HomePage({ lang, navigate }) {
  const t = ui[lang];
  return (
    <>
      <Hero lang={lang} />
      <Positioning lang={lang} />
      <ResearchMap lang={lang} navigate={navigate} />
      <Tracks lang={lang} />
      <section className="section section--dark section--tight">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <button className="btn btn--onDark" onClick={() => navigate('projects')}>
            {t.viewProjects} →
          </button>
        </div>
      </section>
      <Publications lang={lang} />
    </>
  );
}

// ============================================================
// 專案頁
// ============================================================

function ProjectsPage({ lang, param, navigate }) {
  const t = ui[lang];
  const [nature, setNature] = useState('all');

  const initial = projectById(param)?.id ?? projects[0].id;
  const [activeId, setActiveId] = useState(initial);

  // 從研究地圖點進來時，切到對應的專案
  useEffect(() => {
    const p = projectById(param);
    if (p) {
      setActiveId(p.id);
      setNature('all');
    }
  }, [param]);

  const visible = nature === 'all' ? projects : projects.filter((p) => p.nature === nature);

  useEffect(() => {
    if (!visible.some((p) => p.id === activeId) && visible.length) {
      setActiveId(visible[0].id);
    }
  }, [nature]); // eslint-disable-line react-hooks/exhaustive-deps

  const project = projects.find((p) => p.id === activeId) ?? projects[0];
  const c = project[lang];
  const tr = trackById(project.track);
  const natColor = natureColor[project.nature];

  const select = (id) => {
    setActiveId(id);
    navigate('projects', id);
  };

  return (
    <>
      <header className="page-head">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__inner">
          <p className="eyebrow rise">{t.projectsLabel}</p>
          <h1 className="page-head__title rise" style={{ animationDelay: '0.15s' }}>
            {t.projectsTitle}
          </h1>
          <p className="page-head__intro rise" style={{ animationDelay: '0.3s' }}>
            {t.projectsIntro}
          </p>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <div className="filters">
            <span className="filters__label">{t.filterLabel}</span>
            <button
              className={`filter${nature === 'all' ? ' is-on' : ''}`}
              onClick={() => setNature('all')}
            >
              {t.filterAll}
            </button>
            {Object.keys(natureColor).map((n) => (
              <button
                key={n}
                className={`filter${nature === n ? ' is-on' : ''}`}
                style={{ '--filter-color': natureColor[n] }}
                onClick={() => setNature(n)}
              >
                {t.nature[n]} ({projects.filter((p) => p.nature === n).length})
              </button>
            ))}
          </div>

          <div className="tabs" role="tablist">
            {visible.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.id === activeId}
                className={`tab${p.id === activeId ? ' is-on' : ''}`}
                style={{ '--tab-color': trackById(p.track).color }}
                onClick={() => select(p.id)}
              >
                <span className="tab__dot" style={{ background: natureColor[p.nature] }} />
                {p[lang].short}
              </button>
            ))}
          </div>

          <article className="proj" key={project.id} style={{ '--proj-color': tr.color }}>
            {project.image && (
              <img className="proj__image" src={project.image} alt={c.title} loading="lazy" />
            )}

            <div className="proj__top">
              <div>
                <div className="proj__badges">
                  <span className="proj__tracknum">{tr.id}</span>
                  <span className="proj__trackname">{tr[lang].short}</span>
                  <span className="badge" style={{ color: natColor }}>
                    {t.nature[project.nature]}
                  </span>
                </div>
                <h2 className="proj__title">{c.title}</h2>
                <p className="proj__subtitle">{c.subtitle}</p>
              </div>

              <dl className="proj__facts">
                <dt className="proj__factkey">{t.fieldPeriod}</dt>
                <dd style={{ margin: 0 }}>
                  {project.years}（{c.duration}）
                </dd>
                <dt className="proj__factkey">{t.fieldSite}</dt>
                <dd style={{ margin: 0 }}>{c.site}</dd>
                <dt className="proj__factkey">{t.fieldPartners}</dt>
                <dd style={{ margin: 0 }}>{c.collaboration}</dd>
                {c.grant && (
                  <>
                    <dt className="proj__factkey">{t.fieldGrant}</dt>
                    <dd style={{ margin: 0 }}>{c.grant}</dd>
                  </>
                )}
                <dt className="proj__factkey">{t.fieldOutcome}</dt>
                <dd style={{ margin: 0 }}>{c.outcome}</dd>
              </dl>
            </div>

            <div className="proj__story">
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                {t.sectionStory}
              </p>
              {c.narrative.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="proj__bottom">
              <div>
                <p className="eyebrow">{t.sectionMethods}</p>
                <div className="chips" style={{ marginTop: 0 }}>
                  {c.methods.map((m) => (
                    <span className="chip" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">{t.sectionReflection}</p>
                <p className="proj__quote">「{c.reflection}」</p>
              </div>
            </div>
          </article>

          <div className="btn-row">
            <button className="btn" onClick={() => navigate('home')}>
              ← {t.backHome}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// 404
// ============================================================

function NotFound({ lang, navigate }) {
  const t = ui[lang];
  return (
    <section className="notfound">
      <p className="notfound__code">404</p>
      <h1 className="h2" style={{ maxWidth: 'none' }}>
        {t.notFoundTitle}
      </h1>
      <p className="lede" style={{ margin: '18px auto 34px' }}>
        {t.notFoundBody}
      </p>
      <div>
        <button className="btn" onClick={() => navigate('home')}>
          ← {t.backHome}
        </button>
      </div>
    </section>
  );
}

// ============================================================
// 頁尾
// ============================================================

function Footer({ lang }) {
  const t = ui[lang];
  const revealRef = useReveal(0.05);

  return (
    <footer className="section section--dark">
      <div className="wrap reveal" ref={revealRef}>
        <p className="footer__lead">
          {lang === 'zh' ? '讓我們一起' : "Let's create"}
          <br />
          <em>{lang === 'zh' ? '創造連結。' : 'connections.'}</em>
        </p>

        <div className="footer__cols">
          <div>
            <p className="footer__key">{lang === 'zh' ? '地址' : 'Address'}</p>
            <p className="footer__val">{t.footerAddress}</p>
          </div>
          <div>
            <p className="footer__key">{t.footerContact}</p>
            <div className="footer__links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span className="footer__val">{contact.phone}</span>
            </div>
          </div>
          <div>
            <p className="footer__key">{t.footerProfiles}</p>
            <div className="footer__links">
              <a href={FULL_PROFILE_URL} rel="me">
                yfchen.info ↗
              </a>
              <a href={contact.orcid} rel="me noreferrer" target="_blank">
                ORCID ↗
              </a>
              <a href={contact.scholar} rel="noreferrer" target="_blank">
                Google Scholar ↗
              </a>
              <a href={contact.researchgate} rel="noreferrer" target="_blank">
                ResearchGate ↗
              </a>
            </div>
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} Yen-Fu Chen · Tatung University</span>
          <span>{t.footerCta}</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// App
// ============================================================

export default function App() {
  const [lang, setLang] = useLang();
  const { route, param, isKnown, navigate } = useRouter();
  const t = ui[lang];

  // <html lang> 與每頁的 title / description
  useEffect(() => {
    document.documentElement.lang = t.lang;
    const meta = pageMeta[route]?.[lang];
    if (isKnown && meta) {
      document.title = meta.title;
      setMeta('description', meta.desc);
    } else if (!isKnown) {
      document.title = `${t.notFoundTitle} | Yen-Fu Chen`;
    }
  }, [route, lang, isKnown, t]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Grain />
      <Nav lang={lang} setLang={setLang} route={route} navigate={navigate} />

      <main id="main">
        {!isKnown && <NotFound lang={lang} navigate={navigate} />}
        {isKnown && route === 'home' && <HomePage lang={lang} navigate={navigate} />}
        {isKnown && route === 'projects' && (
          <ProjectsPage lang={lang} param={param} navigate={navigate} />
        )}
      </main>

      <Footer lang={lang} />
    </>
  );
}
