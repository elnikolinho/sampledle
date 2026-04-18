"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    /* ── constants ── */
    const MAX_GUESSES = 6;
    const STORAGE_KEY = "sampledle_state_v2";

    const PUZZLES: Puzzle[] = [
      { sourceSearch:"Chic Good Times", answerSearch:"Sugarhill Gang Rapper's Delight",
        source:{title:"Good Times",artist:"Chic",year:1979},
        answer:{title:"Rapper's Delight",artist:"The Sugarhill Gang",year:1979},
        hint:"One of the earliest and most famous hip-hop records ever pressed",
        genre:"Hip-Hop", sampleAt:0,
        siblings:[{title:"Another One Bites the Dust",artist:"Queen",year:1980,note:"Inspired by the same bassline"},{title:"Jump to It",artist:"Aretha Franklin",year:1982,note:"Same Chic DNA"}]
      },
      { sourceSearch:"Rick James Super Freak", answerSearch:"MC Hammer U Can't Touch This",
        source:{title:"Super Freak",artist:"Rick James",year:1981},
        answer:{title:"U Can't Touch This",artist:"MC Hammer",year:1990},
        hint:"MC Hammer's signature hit — you'll know it by the pants",
        genre:"Pop Rap", sampleAt:1,
        siblings:[{title:"Give It to Me Baby",artist:"Rick James",year:1981,note:"Same session, same groove"},{title:"Pray",artist:"MC Hammer",year:1990,note:"Same album: Please Hammer Don't Hurt Em"}]
      },
      { sourceSearch:"Stevie Wonder Pastime Paradise", answerSearch:"Coolio Gangsta's Paradise",
        source:{title:"Pastime Paradise",artist:"Stevie Wonder",year:1976},
        answer:{title:"Gangsta's Paradise",artist:"Coolio ft. L.V.",year:1995},
        hint:"Featured on the Dangerous Minds soundtrack — spent 3 weeks at #1",
        genre:"Hip-Hop", sampleAt:7,
        siblings:[{title:"Skeletons",artist:"Stevie Wonder",year:1987,note:"Stevie's catalog is endlessly sampled"},{title:"I Wish",artist:"Stevie Wonder",year:1976,note:"Same Songs in the Key of Life album"}]
      },
      { sourceSearch:"Diana Ross I'm Coming Out", answerSearch:"Mo Money Mo Problems Notorious BIG",
        source:{title:"I'm Coming Out",artist:"Diana Ross",year:1980},
        answer:{title:"Mo Money Mo Problems",artist:"The Notorious B.I.G.",year:1997},
        hint:"Notorious B.I.G.'s posthumous 1997 chart-topper ft. Puff Daddy",
        genre:"East Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Upside Down",artist:"Diana Ross",year:1980,note:"Same Nile Rodgers session"},{title:"Hypnotize",artist:"The Notorious B.I.G.",year:1997,note:"Same Life After Death album"}]
      },
      { sourceSearch:"Marvin Gaye I Heard It Through the Grapevine", answerSearch:"California Love 2Pac",
        source:{title:"I Heard It Through the Grapevine",artist:"Marvin Gaye",year:1968},
        answer:{title:"California Love",artist:"2Pac ft. Dr. Dre",year:1995},
        hint:"2Pac and Dr. Dre's definitive West Coast anthem",
        genre:"West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Let's Get It On",artist:"Marvin Gaye",year:1973,note:"Marvin's catalog is foundational"},{title:"All Eyez on Me",artist:"2Pac",year:1996,note:"Same album era"}]
      },
      { sourceSearch:"Donna Summer I Feel Love", answerSearch:"Daft Punk Harder Better Faster",
        source:{title:"I Feel Love",artist:"Donna Summer",year:1977},
        answer:{title:"Harder, Better, Faster, Stronger",artist:"Daft Punk",year:2001},
        hint:"A Daft Punk classic later flipped again by Kanye West",
        genre:"French House / Electronic", sampleAt:0,
        siblings:[{title:"Around the World",artist:"Daft Punk",year:1997,note:"Same electronic DNA"},{title:"Stronger",artist:"Kanye West",year:2007,note:"Sampled this very Daft Punk track"}]
      },
      { sourceSearch:"Zapp Roger More Bounce to the Ounce", answerSearch:"Snoop Dogg Gin and Juice",
        source:{title:"More Bounce to the Ounce",artist:"Zapp & Roger",year:1980},
        answer:{title:"Gin and Juice",artist:"Snoop Dogg",year:1993},
        hint:"One of Snoop Dogg's most iconic debut-era singles",
        genre:"G-Funk / West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Nuthin' But a G Thang",artist:"Dr. Dre",year:1992,note:"West Coast G-funk companion"},{title:"So Fresh, So Clean",artist:"OutKast",year:2001,note:"Zapp vocoder influence lives on"}]
      },
      { sourceSearch:"Michael Jackson PYT Pretty Young Thing", answerSearch:"Kendrick Lamar Poetic Justice",
        source:{title:"P.Y.T. (Pretty Young Thing)",artist:"Michael Jackson",year:1982},
        answer:{title:"Poetic Justice",artist:"Kendrick Lamar",year:2012},
        hint:"A smooth Kendrick Lamar track from good kid, m.A.A.d city ft. Drake",
        genre:"West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Swimming Pools",artist:"Kendrick Lamar",year:2012,note:"Same album"},{title:"Human Nature",artist:"Michael Jackson",year:1982,note:"Also sampled by many hip-hop acts"}]
      },
      { sourceSearch:"Billie Holiday Strange Fruit", answerSearch:"Kanye West Blood on the Leaves",
        source:{title:"Strange Fruit",artist:"Billie Holiday",year:1939},
        answer:{title:"Blood on the Leaves",artist:"Kanye West",year:2013},
        hint:"A dark, orchestral Kanye West track from Yeezus using Nina Simone's version",
        genre:"Experimental Hip-Hop / Trap", sampleAt:0,
        siblings:[{title:"New Slaves",artist:"Kanye West",year:2013,note:"Same Yeezus album"},{title:"Strange Fruit",artist:"Nina Simone",year:1965,note:"The sampled version of this song"}]
      },
      { sourceSearch:"Abdel Halim Hafez Khosara", answerSearch:"Jay-Z Big Pimpin",
        source:{title:"Khosara Khosara",artist:"Abdel Halim Hafez",year:1957},
        answer:{title:"Big Pimpin'",artist:"Jay-Z ft. UGK",year:2000},
        hint:"One of Jay-Z's biggest commercial hits, featuring UGK",
        genre:"Hip-Hop / Southern Rap", sampleAt:0,
        siblings:[{title:"H to the Izzo",artist:"Jay-Z",year:2001,note:"Same Blueprint era"},{title:"Hard Knock Life",artist:"Jay-Z",year:1998,note:"Jay-Z's sample mastery"}]
      },
      { sourceSearch:"Pete Rock CL Smooth They Reminisce Over You", answerSearch:"French Montana Pop That",
        source:{title:"They Reminisce Over You",artist:"Pete Rock & C.L. Smooth",year:1992},
        answer:{title:"Pop That",artist:"French Montana ft. Rick Ross",year:2012},
        hint:"A 2012 hip-hop hit featuring Rick Ross, Drake and Lil Wayne",
        genre:"Trap / Hip-Hop", sampleAt:0,
        siblings:[{title:"Juicy",artist:"The Notorious B.I.G.",year:1994,note:"Golden age soul sample"},{title:"C.R.E.A.M.",artist:"Wu-Tang Clan",year:1993,note:"Same era of soul-flip hip-hop"}]
      },
      { sourceSearch:"Sly Family Stone Sing a Simple Song", answerSearch:"Nas The World Is Yours",
        source:{title:"Sing a Simple Song",artist:"Sly & the Family Stone",year:1968},
        answer:{title:"The World Is Yours",artist:"Nas",year:1994},
        hint:"A defining track from Nas's debut Illmatic — one of the greatest albums ever",
        genre:"East Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"N.Y. State of Mind",artist:"Nas",year:1994,note:"Same Illmatic album"},{title:"Ain't No Half Steppin'",artist:"Big Daddy Kane",year:1988,note:"Earlier soul flip"}]
      },
      { sourceSearch:"Skull Snaps It's a New Day", answerSearch:"Nas NY State of Mind",
        source:{title:"It's a New Day",artist:"Skull Snaps",year:1973},
        answer:{title:"N.Y. State of Mind",artist:"Nas",year:1994},
        hint:"Widely considered one of the greatest rap songs ever recorded",
        genre:"East Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"The Message",artist:"Grandmaster Flash",year:1982,note:"Defined NYC hip-hop"},{title:"C.R.E.A.M.",artist:"Wu-Tang Clan",year:1993,note:"Same dark NYC palette"}]
      },
      { sourceSearch:"Isaac Hayes Ike's Rap", answerSearch:"Kanye West Gone",
        source:{title:"Ike's Rap II",artist:"Isaac Hayes",year:1971},
        answer:{title:"Gone",artist:"Kanye West ft. Otis Redding",year:2005},
        hint:"A Late Registration deep cut by Kanye, featuring Otis Redding's vocals",
        genre:"Hip-Hop / Soul Rap", sampleAt:0,
        siblings:[{title:"Heard 'Em Say",artist:"Kanye West",year:2005,note:"Same Late Registration album"},{title:"Soul Power",artist:"James Brown",year:1971,note:"Same soul/funk era"}]
      },
      { sourceSearch:"Bobby Byrd Come On Do the James", answerSearch:"Missy Elliott Work It",
        source:{title:"Come On (Do the James)",artist:"Bobby Byrd",year:1967},
        answer:{title:"Work It",artist:"Missy Elliott",year:2002},
        hint:"Missy Elliott's signature 2002 track — the beat plays backwards",
        genre:"Hip-Hop / R&B", sampleAt:0,
        siblings:[{title:"Get Ur Freak On",artist:"Missy Elliott",year:2001,note:"Same creative peak era"},{title:"One Minute Man",artist:"Missy Elliott",year:2001,note:"Same Timbaland production era"}]
      },
      { sourceSearch:"Melvin Bliss Synthetic Substitution", answerSearch:"Dr Dre The Next Episode",
        source:{title:"Synthetic Substitution",artist:"Melvin Bliss",year:1973},
        answer:{title:"The Next Episode",artist:"Dr. Dre ft. Snoop Dogg",year:1999},
        hint:"Dr. Dre and Snoop Dogg track from the legendary 2001 album",
        genre:"West Coast Hip-Hop / G-Funk", sampleAt:10,
        siblings:[{title:"Still D.R.E.",artist:"Dr. Dre",year:1999,note:"Same 2001 album"},{title:"Forgot About Dre",artist:"Dr. Dre",year:1999,note:"Same drum break era"}]
      },
      { sourceSearch:"Lyn Collins Think About It", answerSearch:"Drake Hotline Bling",
        source:{title:"Think (About It)",artist:"Lyn Collins",year:1972},
        answer:{title:"Hotline Bling",artist:"Drake",year:2015},
        hint:"A 2015 Drake hit with a now-iconic music video",
        genre:"Pop Rap / R&B", sampleAt:0,
        siblings:[{title:"In the Air Tonight",artist:"Phil Collins",year:1981,note:"Another breakbeat era classic"},{title:"Impeach the President",artist:"The Honey Drippers",year:1973,note:"Foundational hip-hop sample source"}]
      },
      { sourceSearch:"The Winstons Amen Brother", answerSearch:"OutKast B.O.B.",
        source:{title:"Amen, Brother",artist:"The Winstons",year:1969},
        answer:{title:"B.O.B. (Bombs Over Baghdad)",artist:"OutKast",year:2000},
        hint:"OutKast's explosive 2000 opener — the Amen break is one of music's most sampled drums",
        genre:"Southern Hip-Hop / Experimental", sampleAt:86,
        siblings:[{title:"The Amen Break",artist:"Various artists",year:1986,note:"Foundational drum & bass break"},{title:"Ms. Jackson",artist:"OutKast",year:2000,note:"Same Stankonia album"}]
      },
      { sourceSearch:"James Brown Funky Drummer", answerSearch:"Public Enemy Fight the Power",
        source:{title:"Funky Drummer",artist:"James Brown",year:1970},
        answer:{title:"Fight the Power",artist:"Public Enemy",year:1989},
        hint:"A Public Enemy anthem from Spike Lee's Do the Right Thing",
        genre:"Political Hip-Hop", sampleAt:322,
        siblings:[{title:"Straight Outta Compton",artist:"N.W.A",year:1988,note:"Same drum break"},{title:"Paid in Full",artist:"Eric B. & Rakim",year:1987,note:"Golden age built on James Brown"}]
      },
    ];

    interface Sibling { title: string; artist: string; year: number; note: string; }
    interface Puzzle {
      sourceSearch: string; answerSearch: string;
      source: { title: string; artist: string; year: number };
      answer: { title: string; artist: string; year: number };
      hint: string; genre: string; sampleAt: number;
      siblings: Sibling[];
      previewOffset?: number;
    }

    const ALL_SONGS = [
      {title:"Hotline Bling",artist:"Drake"},{title:"Fight the Power",artist:"Public Enemy"},
      {title:"Rapper's Delight",artist:"The Sugarhill Gang"},{title:"U Can't Touch This",artist:"MC Hammer"},
      {title:"California Love",artist:"2Pac ft. Dr. Dre"},{title:"The World Is Yours",artist:"Nas"},
      {title:"N.Y. State of Mind",artist:"Nas"},{title:"Mo Money Mo Problems",artist:"The Notorious B.I.G."},
      {title:"Harder, Better, Faster, Stronger",artist:"Daft Punk"},{title:"Gin and Juice",artist:"Snoop Dogg"},
      {title:"The Next Episode",artist:"Dr. Dre ft. Snoop Dogg"},{title:"No Role Modelz",artist:"J. Cole"},
      {title:"Gone",artist:"Kanye West ft. Otis Redding"},{title:"Poetic Justice",artist:"Kendrick Lamar"},
      {title:"Pop That",artist:"French Montana ft. Rick Ross"},{title:"Big Pimpin'",artist:"Jay-Z ft. UGK"},
      {title:"B.O.B. (Bombs Over Baghdad)",artist:"OutKast"},{title:"Gangsta's Paradise",artist:"Coolio ft. L.V."},
      {title:"Work It",artist:"Missy Elliott"},{title:"Blood on the Leaves",artist:"Kanye West"},
      {title:"Lose Yourself",artist:"Eminem"},{title:"HUMBLE.",artist:"Kendrick Lamar"},
      {title:"Gold Digger",artist:"Kanye West"},{title:"99 Problems",artist:"Jay-Z"},
      {title:"In Da Club",artist:"50 Cent"},{title:"Ms. Jackson",artist:"OutKast"},
      {title:"Sicko Mode",artist:"Travis Scott"},{title:"God's Plan",artist:"Drake"},
      {title:"Alright",artist:"Kendrick Lamar"},{title:"Formation",artist:"Beyoncé"},
      {title:"Old Town Road",artist:"Lil Nas X"},{title:"Blinding Lights",artist:"The Weeknd"},
      {title:"Stronger",artist:"Kanye West"},{title:"Swimming Pools",artist:"Kendrick Lamar"},
      {title:"Empire State of Mind",artist:"Jay-Z"},{title:"Stan",artist:"Eminem"},
      {title:"Juicy",artist:"The Notorious B.I.G."},{title:"C.R.E.A.M.",artist:"Wu-Tang Clan"},
      {title:"Nuthin' But a G Thang",artist:"Dr. Dre"},{title:"Still D.R.E.",artist:"Dr. Dre"},
      {title:"H to the Izzo",artist:"Jay-Z"},{title:"New Slaves",artist:"Kanye West"},
      {title:"Heard 'Em Say",artist:"Kanye West"},{title:"Try Again",artist:"Aaliyah"},
      {title:"Get Ur Freak On",artist:"Missy Elliott"},{title:"Forgot About Dre",artist:"Dr. Dre"},
      {title:"Hard Knock Life",artist:"Jay-Z"},{title:"Around the World",artist:"Daft Punk"},
    ];

    const FREQS = [0.4,0.6,0.9,0.7,0.5,0.8,1.0,0.6,0.4,0.7,0.9,0.5,0.3,0.6,0.8,0.7,0.5,0.4,0.9,1.0,0.6,0.5,0.7,0.8,0.5,0.7,0.9,0.6,0.8,1.0];

    /* ── mutable state ── */
    let spotifyToken: string | null = null;
    let puzzle: Puzzle;
    let dayIndex = 0;
    let sourcePreviewUrl: string | null = null;
    let answerPreviewUrl: string | null = null;
    let sourceArtUrl: string | null = null;
    let answerArtUrl: string | null = null;
    let audio: HTMLAudioElement | null = null;
    let animFrame: number | null = null;
    let siblingPreviews: Record<number, string> = {};

    let state = {
      guesses: [] as { title: string; artist: string; correct: boolean; skipped: boolean; label?: string }[],
      input: "",
      suggestions: [] as { title: string; artist: string }[],
      gameOver: false,
      won: false,
      playsLeft: 3,
      isPlaying: false,
      activeBar: -1,
      loaded: false,
      hintUsed: false,
      genreUsed: false,
      siblingsUsed: false,
    };

    const DIFFICULTY_TIERS = [
      [0, 1, 2],
      [3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
      [17, 18],
    ];

    function getDayDifficulty() {
      return (new Date().getDay() + 1) % 7;
    }

    function getDayIndex() {
      const tier = DIFFICULTY_TIERS[getDayDifficulty()];
      const epoch = new Date("2026-04-18T00:00:00Z");
      const weekNum = Math.floor((Date.now() - epoch.getTime()) / (1000*60*60*24*7));
      return tier[((weekNum % tier.length) + tier.length) % tier.length];
    }

    function getTodayKey() {
      const d = new Date();
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }

    function loadSavedState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;
        const data = JSON.parse(saved);
        if (data.dateKey !== getTodayKey()) return false;
        state.guesses = data.guesses || [];
        state.gameOver = data.gameOver || false;
        state.won = data.won || false;
        state.playsLeft = data.playsLeft !== undefined ? data.playsLeft : 3;
        state.hintUsed = data.hintUsed || false;
        state.genreUsed = data.genreUsed || false;
        state.siblingsUsed = data.siblingsUsed || false;
        return true;
      } catch { return false; }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          dateKey: getTodayKey(),
          guesses: state.guesses,
          gameOver: state.gameOver,
          won: state.won,
          playsLeft: state.playsLeft,
          hintUsed: state.hintUsed,
          genreUsed: state.genreUsed,
          siblingsUsed: state.siblingsUsed,
        }));
      } catch {}
    }

    function loadStreak() {
      try {
        const s = localStorage.getItem("sampledle_streak");
        return s ? JSON.parse(s) : { count: 0, lastWonKey: null };
      } catch { return { count: 0, lastWonKey: null }; }
    }

    function updateStreak(won: boolean) {
      try {
        const streak = loadStreak();
        const todayKey = getTodayKey();
        const d = new Date(); d.setDate(d.getDate()-1);
        const yesterdayKey = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        if (won) {
          if (streak.lastWonKey === yesterdayKey) { streak.count++; }
          else if (streak.lastWonKey !== todayKey) { streak.count = 1; }
          streak.lastWonKey = todayKey;
        } else {
          if (streak.lastWonKey !== todayKey) { streak.count = 0; }
        }
        localStorage.setItem("sampledle_streak", JSON.stringify(streak));
        return streak;
      } catch { return { count: 0 }; }
    }

    function renderStreak() {
      const streak = loadStreak();
      const el = document.getElementById("streak-display");
      if (!el) return;
      if (streak.count > 1) el.textContent = `🔥 ${streak.count} day streak`;
      else if (streak.count === 1) el.textContent = "🎵 On a streak";
      else el.textContent = "";
    }

    async function getSpotifyToken() {
      const r = await fetch("/api/spotify-token", { method: "POST" });
      const d = await r.json();
      return d.access_token as string;
    }

    async function searchTrack(query: string, token: string) {
      const r = await fetch("https://api.spotify.com/v1/search?q=" + encodeURIComponent(query) + "&type=track&limit=3", {
        headers: { "Authorization": "Bearer " + token }
      });
      const d = await r.json();
      const track = d.tracks?.items?.[0];
      if (!track) return { preview: null, art: null };
      return {
        preview: track.preview_url || null,
        art: track.album?.images?.[1]?.url || track.album?.images?.[0]?.url || null,
      };
    }

    async function searchPreview(query: string): Promise<string | null> {
      const strategies: (() => Promise<string | null>)[] = [
        async () => {
          const r = await fetch("https://itunes.apple.com/search?term=" + encodeURIComponent(query) + "&media=music&limit=5");
          const d = await r.json();
          const t = d.results?.find((t: { previewUrl?: string }) => t.previewUrl) || d.results?.[0];
          return t?.previewUrl || null;
        },
        async () => {
          const r = await fetch("https://api.deezer.com/search?q=" + encodeURIComponent(query) + "&limit=5");
          const d = await r.json();
          return d.data?.find((t: { preview?: string }) => t.preview)?.preview || null;
        },
        async () => {
          const deezerUrl = "https://api.deezer.com/search?q=" + encodeURIComponent(query) + "&limit=5";
          const r = await fetch("https://corsproxy.io/?" + encodeURIComponent(deezerUrl));
          const d = await r.json();
          return d.data?.find((t: { preview?: string }) => t.preview)?.preview || null;
        },
      ];

      for (const tryFetch of strategies) {
        try {
          const preview = await tryFetch();
          if (preview) return preview;
        } catch {}
      }
      return null;
    }

    async function loadPuzzleMedia() {
      const safeSpotify = async (q: string) => { try { return await searchTrack(q, spotifyToken!); } catch { return {preview:null,art:null}; } };

      const [srcSpotify, ansSpotify, srcPreview, ansPreview] = await Promise.all([
        spotifyToken ? safeSpotify(puzzle.sourceSearch) : Promise.resolve({preview:null,art:null}),
        spotifyToken ? safeSpotify(puzzle.answerSearch) : Promise.resolve({preview:null,art:null}),
        searchPreview(puzzle.sourceSearch),
        searchPreview(puzzle.answerSearch),
      ]);

      sourceArtUrl = srcSpotify.art;
      answerArtUrl = ansSpotify.art;
      sourcePreviewUrl = srcPreview || srcSpotify.preview || null;
      answerPreviewUrl = ansPreview || ansSpotify.preview || null;

      if (!sourcePreviewUrl && state.guesses.length === 0) state.playsLeft = 0;
      if (sourcePreviewUrl && state.playsLeft <= 0 && state.guesses.length === 0) state.playsLeft = 3;
      render();
    }

    async function init() {
      dayIndex = getDayIndex();
      puzzle = PUZZLES[dayIndex];
      renderStreak();

      try {
        spotifyToken = await getSpotifyToken();
      } catch {
        spotifyToken = null;
      }

      const diffLabels = ["Saturday Starter", "Sunday Groove", "Monday Mix", "Tuesday Track", "Midweek Dig", "Thursday Deep Cut", "Friday Challenge"];
      const badge = document.getElementById("day-badge");
      if (badge) badge.textContent = diffLabels[getDayDifficulty()];
      loadSavedState();
      state.loaded = true;
      render();
      await loadPuzzleMedia();
    }

    function render() {
      const gameArea = document.getElementById("game-area");
      if (gameArea) gameArea.innerHTML = state.gameOver ? buildResult() : buildGame();
      attachEvents();
    }

    function buildGame() {
      if (!state.loaded) return `<div style="text-align:center;padding:3rem;color:var(--text2)">Loading...</div>`;

      const bars = FREQS.map((h, i) =>
        `<div class="bar ${state.isPlaying && i === state.activeBar ? 'active' : ''}" style="height:${Math.round(h*100)}%"></div>`
      ).join("");

      const artHTML = sourceArtUrl
        ? `<img class="album-art" src="${sourceArtUrl}" alt="album art"/>`
        : `<div class="album-art-ph">♪</div>`;

      const playDisabled = state.playsLeft <= 0 && !state.isPlaying;
      const playIcon = state.isPlaying ? "◼" : "▶";

      let rows = "";
      for (let i = 0; i < MAX_GUESSES; i++) {
        if (i < state.guesses.length) {
          const g = state.guesses[i];
          if (g.skipped) {
            rows += `<div class="guess-row"><div class="guess-tile skipped">— ${g.label || "skipped"} —</div></div>`;
          } else {
            const cls = g.correct ? "correct" : "wrong";
            rows += `<div class="guess-row"><div class="guess-tile ${cls}">"${g.title}" <span style="font-weight:400;opacity:.8">— ${g.artist}</span></div></div>`;
          }
        } else if (i === state.guesses.length) {
          rows += `<div class="guess-row"><div class="active-tile"></div></div>`;
        } else {
          rows += `<div class="guess-row"><div class="empty-tile"></div></div>`;
        }
      }

      const genreHTML = state.genreUsed
        ? `<div class="hint-box">Genre: ${puzzle.genre}</div>` : "";

      const hintHTML = state.hintUsed
        ? `<div class="hint-box">${puzzle.hint}</div>` : "";

      const siblings = puzzle.siblings || [];
      const siblingsHTML = state.siblingsUsed && siblings.length > 0
        ? `<div class="siblings-panel">
            <div class="siblings-label">Also sampled "${puzzle.source.title}"</div>
            ${siblings.map((s, i) => `
              <div class="sibling-card">
                <div class="sibling-info">
                  <div class="s-title">"${s.title}"</div>
                  <div class="s-artist">${s.artist} · ${s.year}</div>
                  ${s.note ? `<div class="s-note">${s.note}</div>` : ""}
                </div>
                <button class="sib-play-btn" data-sib-idx="${i}" title="Preview">▶</button>
              </div>`).join("")}
          </div>` : "";

      const suggHTML = state.suggestions.length > 0
        ? `<div class="suggestions">${state.suggestions.map(s =>
            `<div class="sugg-item" data-title="${s.title.replace(/"/g,'&quot;')}" data-artist="${s.artist.replace(/"/g,'&quot;')}">
              <span>${s.title}</span>
              <span class="sugg-artist">${s.artist}</span>
            </div>`).join("")}</div>`
        : "";

      const canGuess = state.guesses.length < MAX_GUESSES;
      const gNum = state.guesses.length + 1;

      return `
        <div class="player-card">
          <div class="source-label">Original sample — what song flipped this?</div>
          <div class="album-row">
            ${artHTML}
            <div class="album-info">
              <div class="source-song">"${puzzle.source.title}"</div>
              <div class="source-artist">${puzzle.source.artist}</div>
              <div class="source-year">${puzzle.source.year}</div>
            </div>
          </div>
          <div class="waveform" id="waveform">${bars}</div>
          <div class="controls">
            <button class="play-btn" id="play-btn" ${playDisabled ? "disabled" : ""}>
              ${playIcon}
            </button>
            <div class="plays-info">
              <div class="plays-left">${sourcePreviewUrl ? state.playsLeft + " listen" + (state.playsLeft === 1 ? "" : "s") + " remaining" : "Preview unavailable"}</div>
              ${!sourcePreviewUrl ? `<div class="no-preview">No audio preview found for this track</div>` : ""}
            </div>
          </div>
          ${sourcePreviewUrl ? `<div class="spotify-note"><div class="spotify-dot"></div>Powered by Spotify previews</div>` : ""}
        </div>
        <div class="guess-section">
          <div class="guess-history">${rows}</div>
          ${canGuess ? `
            ${genreHTML}
            ${hintHTML}
            ${siblingsHTML}
            <div class="input-area">
              <div class="input-wrap">
                <input class="song-input" id="song-input" type="text" placeholder="Type a song name..." value="${state.input.replace(/"/g,'&quot;')}" autocomplete="off" enterkeyhint="go"/>
              </div>
              ${suggHTML}
              <div class="btn-row">
              <button class="btn primary" id="guess-btn">Guess #${gNum}</button>
              ${!state.genreUsed ? `<button class="btn skip" id="genre-btn">Genre</button>` : ""}
              ${!state.hintUsed ? `<button class="btn skip" id="hint-btn">Hint</button>` : ""}
              ${!state.siblingsUsed ? `<button class="btn skip" id="siblings-btn">Related</button>` : ""}
              </div>
            </div>
          ` : ""}
        </div>`;
    }

    function buildResult() {
      const numG = state.won ? state.guesses.findIndex(g => g.correct) + 1 : null;
      const resultIcons: Record<number, string> = { 1:"🎯", 2:"🔥", 3:"🎵", 4:"🎧", 5:"👀", 6:"😅" };
      const icon = state.won ? (resultIcons[numG!] || "✓") : "😔";
      const title = state.won ? "You got it!" : "Not today!";
      const sub = state.won
        ? `Identified in ${numG} guess${numG === 1 ? "" : "es"}`
        : `The answer was "${puzzle.answer.title}"`;

      const dots = state.guesses.map(g =>
        g.correct ? `<div class="dot correct"></div>` :
        g.skipped ? `<div class="dot skipped"></div>` :
        `<div class="dot wrong"></div>`
      ).join("");
      const unused = Array(MAX_GUESSES - state.guesses.length).fill(`<div class="dot unused"></div>`).join("");

      const srcArt = sourceArtUrl
        ? `<img class="answer-art" src="${sourceArtUrl}" alt=""/>`
        : `<div class="answer-art-ph">♪</div>`;
      const ansArt = answerArtUrl
        ? `<img class="answer-art" src="${answerArtUrl}" alt=""/>`
        : `<div class="answer-art-ph">♫</div>`;

      const siblings = puzzle.siblings || [];
      const sibNodes = siblings.map(s => `
        <div class="tree-node">
          <div class="t-title">"${s.title}"</div>
          <div class="t-sub">${s.artist}</div>
          <div class="t-year">${s.year}</div>
          <div class="t-note">${s.note}</div>
        </div>`).join("");

      return `
        <div class="result-wrap">
          <div class="result-top">
            <div class="result-icon">${icon}</div>
            <div class="result-title">${title}</div>
            <div class="result-sub">${sub}</div>
            <div class="dots-row">${dots}${unused}</div>
          </div>
          <div class="answer-flow">
            <div class="answer-card">
              ${srcArt}
              <div class="answer-info">
                <div class="label">Sampled from</div>
                <div class="song">"${puzzle.source.title}"</div>
                <div class="artist">${puzzle.source.artist} · ${puzzle.source.year}</div>
              </div>
              ${sourcePreviewUrl ? `<button class="card-play-btn" id="play-source" title="Play source">▶</button>` : ""}
            </div>
            <div class="flow-arrow">↓</div>
            <div class="answer-card">
              ${ansArt}
              <div class="answer-info">
                <div class="label">Sampled in</div>
                <div class="song">"${puzzle.answer.title}"</div>
                <div class="artist">${puzzle.answer.artist} · ${puzzle.answer.year}</div>
              </div>
              ${answerPreviewUrl ? `<button class="card-play-btn" id="play-answer" title="Play answer">▶</button>` : ""}
            </div>
          </div>
          <div class="tree-section">
            <div class="tree-label">Sample family tree</div>
            <div class="tree-source">
              <div class="t-title">"${puzzle.source.title}"</div>
              <div class="t-sub">${puzzle.source.artist}, ${puzzle.source.year}</div>
              <div class="t-year">original source</div>
            </div>
            <div class="tree-connector"></div>
            <div class="tree-arrow-lbl">sampled by</div>
            <div class="tree-connector"></div>
            <div class="tree-branches">
              ${sibNodes}
              <div class="tree-node answer-node">
                <div class="t-title">"${puzzle.answer.title}"</div>
                <div class="t-sub">${puzzle.answer.artist}</div>
                <div class="t-year">${puzzle.answer.year}</div>
                <div class="t-note">today's answer ✓</div>
              </div>
            </div>
          </div>
          <div class="share-row">
            <button class="share-btn" id="share-btn">Copy result</button>
            <button class="share-btn" id="replay-btn">Replay</button>
            <button class="share-btn" id="next-btn">Next →</button>
          </div>
        </div>`;
    }

    function buildShareText() {
      const n = state.won ? state.guesses.findIndex(g => g.correct) + 1 : "X";
      const icons = state.guesses.map(g => g.correct ? "🟩" : g.skipped ? "⬜" : "🟥").join("");
      const unused = Array(MAX_GUESSES - state.guesses.length).fill("⬛").join("");
      const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      return `Sampledle (${days[new Date().getDay()]})\n"${puzzle.source.title}" → ?\n${icons}${unused}\n${n}/${MAX_GUESSES}\nPlay at: ${window.location.href}`;
    }

    function attachEvents() {
      const pb = document.getElementById("play-btn");
      if (pb) pb.onclick = handlePlay;

      const inp = document.getElementById("song-input") as HTMLInputElement | null;
      if (inp) {
        if (!state.gameOver) {
          inp.focus({ preventScroll: true });
          setTimeout(() => inp.scrollIntoView({ behavior: "smooth", block: "center" }), 350);
        }
        inp.onfocus = () => {
          setTimeout(() => inp.scrollIntoView({ behavior: "smooth", block: "center" }), 350);
        };
        inp.oninput = () => {
          state.input = inp.value;
          state.suggestions = state.input.length > 1
            ? ALL_SONGS.filter(s =>
                s.title.toLowerCase().includes(state.input.toLowerCase()) ||
                s.artist.toLowerCase().includes(state.input.toLowerCase())
              ).slice(0, 5)
            : [];
          render();
          const ni = document.getElementById("song-input") as HTMLInputElement | null;
          if (ni) { ni.focus({ preventScroll: true }); ni.setSelectionRange(ni.value.length, ni.value.length); }
        };
        inp.onkeydown = e => { if (e.key === "Enter") submitGuess(); };
      }

      document.querySelectorAll(".sugg-item").forEach(el => {
        (el as HTMLElement).onclick = () => {
          state.input = (el as HTMLElement).dataset.title || "";
          state.suggestions = [];
          render();
        };
      });

      const gb = document.getElementById("guess-btn");
      if (gb) gb.onclick = submitGuess;

      const gnb = document.getElementById("genre-btn");
      if (gnb) gnb.onclick = () => {
        state.genreUsed = true;
        state.guesses.push({ title: "", artist: "", correct: false, skipped: true, label: "used genre" });
        if (state.guesses.length >= MAX_GUESSES) { state.gameOver = true; state.won = false; updateStreak(false); }
        saveState(); render();
      };

      const hb = document.getElementById("hint-btn");
      if (hb) hb.onclick = () => {
        state.hintUsed = true;
        state.guesses.push({ title: "", artist: "", correct: false, skipped: true, label: "used hint" });
        if (state.guesses.length >= MAX_GUESSES) { state.gameOver = true; state.won = false; updateStreak(false); }
        saveState(); render();
      };

      const sibBtn = document.getElementById("siblings-btn");
      if (sibBtn) sibBtn.onclick = () => {
        state.siblingsUsed = true;
        state.guesses.push({ title: "", artist: "", correct: false, skipped: true, label: "used related" });
        if (state.guesses.length >= MAX_GUESSES) { state.gameOver = true; state.won = false; updateStreak(false); }
        const siblings = puzzle.siblings || [];
        siblings.forEach((s, i) => {
          if (!siblingPreviews[i]) {
            searchPreview(s.title + " " + s.artist).then(url => { if (url) siblingPreviews[i] = url; });
          }
        });
        saveState(); render();
      };

      document.querySelectorAll(".sib-play-btn").forEach(btn => {
        (btn as HTMLElement).onclick = () => {
          const idx = parseInt((btn as HTMLElement).dataset.sibIdx || "0");
          const s = puzzle.siblings[idx];
          const url = siblingPreviews[idx];
          if (!url) {
            searchPreview(s.title + " " + s.artist).then(u => {
              if (u) { siblingPreviews[idx] = u; playResultPreview(u, (btn as HTMLElement).id || "sib-" + idx); }
            });
            return;
          }
          playResultPreview(url, (btn as HTMLElement).id || "sib-" + idx);
        };
      });

      const shr = document.getElementById("share-btn");
      if (shr) shr.onclick = () => {
        navigator.clipboard.writeText(buildShareText()).then(() => {
          shr.textContent = "Copied! ✓";
          setTimeout(() => { const el = document.getElementById("share-btn"); if(el) el.textContent = "Copy result"; }, 2000);
        });
      };

      const rep = document.getElementById("replay-btn");
      if (rep) rep.onclick = () => {
        if (audio && !audio.paused) { audio.pause(); audio.currentTime = 0; }
        siblingPreviews = {};
        state = { guesses:[], input:"", suggestions:[], gameOver:false, won:false, playsLeft:3, isPlaying:false, activeBar:-1, loaded:true, hintUsed:false, genreUsed:false, siblingsUsed:false };
        saveState();
        render();
      };

      const nxt = document.getElementById("next-btn");
      if (nxt) nxt.onclick = () => {
        if (audio && !audio.paused) { audio.pause(); audio.currentTime = 0; }
        dayIndex = (dayIndex + 1) % PUZZLES.length;
        puzzle = PUZZLES[dayIndex];
        siblingPreviews = {};
        state = { guesses:[], input:"", suggestions:[], gameOver:false, won:false, playsLeft:3, isPlaying:false, activeBar:-1, loaded:true, hintUsed:false, genreUsed:false, siblingsUsed:false };
        sourcePreviewUrl = null; answerPreviewUrl = null; sourceArtUrl = null; answerArtUrl = null;
        const badge = document.getElementById("day-badge");
        if (badge) badge.textContent = "Puzzle " + (dayIndex + 1) + " of " + PUZZLES.length;
        render();
        loadPuzzleMedia();
      };

      const playSrc = document.getElementById("play-source");
      if (playSrc) playSrc.onclick = () => playResultPreview(sourcePreviewUrl!, "play-source");

      const playAns = document.getElementById("play-answer");
      if (playAns) playAns.onclick = () => playResultPreview(answerPreviewUrl!, "play-answer");
    }

    function handlePlay() {
      if (audio && state.isPlaying) {
        audio.pause(); audio.currentTime = 0;
        state.isPlaying = false; state.activeBar = -1;
        if (animFrame) cancelAnimationFrame(animFrame);
        render(); return;
      }
      if (state.playsLeft <= 0) return;

      state.playsLeft--;
      saveState();

      if (sourcePreviewUrl) {
        if (!audio) { audio = new Audio(); audio.crossOrigin = "anonymous"; }
        audio.src = sourcePreviewUrl;
        const offset = puzzle.previewOffset || 0;
        const startPlayback = () => {
          if (offset > 0) audio!.currentTime = offset;
          audio!.play().then(() => {
            state.isPlaying = true;
            animateWave();
            audio!.onended = () => {
              state.isPlaying = false; state.activeBar = -1;
              if (animFrame) cancelAnimationFrame(animFrame);
              render();
            };
          }).catch(() => fallbackAnimate());
        };
        if (audio.readyState >= 1) startPlayback();
        else audio.addEventListener("loadedmetadata", startPlayback, { once: true });
      } else {
        fallbackAnimate();
      }
    }

    function stopAllPreviewBtns() {
      document.querySelectorAll(".card-play-btn, .sib-play-btn").forEach(b => { b.textContent = "▶"; b.classList.remove("playing"); });
    }

    function playResultPreview(url: string, btnId: string) {
      if (!url) return;
      if (!audio) { audio = new Audio(); audio.crossOrigin = "anonymous"; }

      if (!audio.paused && (audio as HTMLAudioElement & { _currentPreview?: string })._currentPreview === url) {
        audio.pause(); audio.currentTime = 0;
        (audio as HTMLAudioElement & { _currentPreview?: string })._currentPreview = undefined;
        stopAllPreviewBtns();
        return;
      }

      audio.pause();
      stopAllPreviewBtns();

      audio.src = url;
      (audio as HTMLAudioElement & { _currentPreview?: string })._currentPreview = url;
      audio.play().then(() => {
        const btn = document.getElementById(btnId) || document.querySelector(`[data-sib-idx="${btnId.replace("sib-","")}"]`);
        if (btn) { btn.textContent = "◼"; btn.classList.add("playing"); }
        audio!.onended = () => {
          (audio as HTMLAudioElement & { _currentPreview?: string })._currentPreview = undefined;
          stopAllPreviewBtns();
        };
      }).catch(() => {});
    }

    function animateWave() {
      let bar = 0;
      const step = () => {
        if (!state.isPlaying) return;
        state.activeBar = bar % FREQS.length; bar++;
        const wv = document.getElementById("waveform");
        if (wv) wv.querySelectorAll(".bar").forEach((b, i) => b.classList.toggle("active", i === state.activeBar));
        animFrame = requestAnimationFrame(() => setTimeout(step, 80));
      };
      render();
      setTimeout(step, 50);
    }

    function fallbackAnimate() {
      state.isPlaying = true;
      let bar = 0; const total = FREQS.length * 2;
      render();
      const iv = setInterval(() => {
        state.activeBar = bar % FREQS.length; bar++;
        const wv = document.getElementById("waveform");
        if (wv) wv.querySelectorAll(".bar").forEach((b, i) => b.classList.toggle("active", i === state.activeBar));
        if (bar >= total) {
          clearInterval(iv); state.isPlaying = false; state.activeBar = -1; render();
        }
      }, 80);
    }

    function submitGuess() {
      const title = state.input.trim();
      if (!title) return;
      const match = ALL_SONGS.find(s => s.title.toLowerCase() === title.toLowerCase()) || { title, artist: "Unknown" };
      const correct = title.toLowerCase() === puzzle.answer.title.toLowerCase();
      state.guesses.push({ title: match.title, artist: match.artist, correct, skipped: false });
      state.input = ""; state.suggestions = [];
      if (correct) { state.gameOver = true; state.won = true; updateStreak(true); }
      else if (state.guesses.length >= MAX_GUESSES) { state.gameOver = true; state.won = false; updateStreak(false); }
      if (audio && state.isPlaying) { audio.pause(); state.isPlaying = false; }
      saveState();
      render();
      renderStreak();
    }

    init();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">Sample<span>dle</span></div>
        <div className="streak" id="streak-display"></div>
      </nav>
      <main>
        <div className="header">
          <h1>Sampledle</h1>
          <p>Hear the original sample. Name the song that flipped it.</p>
          <div className="day-badge" id="day-badge">Day #1</div>
        </div>
        <div id="game-area">
          <div style={{textAlign:"center",padding:"3rem",color:"var(--text2)",fontSize:"15px"}}>Loading today&apos;s puzzle...</div>
        </div>
      </main>
      <div className="footer">
        A daily music sample guessing game.<br />
        New puzzle every day. <a href="https://whosampled.com" target="_blank" rel="noopener noreferrer">WhoSampled.com</a> for the deep cuts.
      </div>
    </>
  );
}
