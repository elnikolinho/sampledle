"use client";

import { useEffect, useRef } from "react";

export default function VideogaddlePage() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const STORAGE_KEY = "videogaddle_state_v4";
    const STREAK_KEY = "videogaddle_streak";

    interface PuzzleStep {
      answer: string;
      clue: string;
    }

    interface Puzzle {
      startWord: string;
      startDesc: string;
      steps: PuzzleStep[];
    }

    const PUZZLES: Puzzle[] = [
      // ── 0  Easy · 3 steps ──
      {
        startWord: "STAR",
        startDesc: "Mario's invincibility power-up",
        steps: [
          { answer: "RATS", clue: "Rearrange — Sewer-dwelling pests" },
          { answer: "ARTS", clue: "Rearrange — What sprite designers major in" },
          { answer: "KARTS", clue: "Add a letter — Mario's racing machines" },
        ],
      },
      // ── 1  Easy · 3 steps ──
      {
        startWord: "BONUS",
        startDesc: "The extra stage after the credits",
        steps: [
          { answer: "BONES", clue: "Change a letter — What skeleton enemies leave behind" },
          { answer: "TONES", clue: "Change a letter — What rhythm games are built on" },
          { answer: "NOTES", clue: "Rearrange — What scrolls down the Guitar Hero highway" },
        ],
      },
      // ── 2  Easy · 4 steps ──
      {
        startWord: "FAST",
        startDesc: "What Sonic always has to go",
        steps: [
          { answer: "FIST", clue: "Change a letter — An empty-handed weapon" },
          { answer: "FISH", clue: "Change a letter — Every fishing minigame's prize" },
          { answer: "DISH", clue: "Change a letter — Best served cold, on one of these" },
          { answer: "DASH", clue: "Change a letter — Geometry ___" },
        ],
      },
      // ── 3  Easy · 4 steps ──
      {
        startWord: "LINK",
        startDesc: "Hyrule's hero (not Zelda)",
        steps: [
          { answer: "RINK", clue: "Change a letter — Where ice-themed minigames play out" },
          { answer: "RING", clue: "Change a letter — Where boxing matches go down" },
          { answer: "KING", clue: "Change a letter — The title Bowser claims" },
          { answer: "KONG", clue: "Change a letter — Nintendo's barrel-throwing ape" },
        ],
      },
      // ── 4  Medium · 4 steps · compound chain ──
      {
        startWord: "FIRE",
        startDesc: "Every mage's starter spell",
        steps: [
          { answer: "FLOWER", clue: "Combine words — Mario's pyro power-up" },
          { answer: "POT", clue: "Combine words — A gardener's clay vessel" },
          { answer: "SHOT", clue: "Combine words — A camper's lucky kill from spawn" },
          { answer: "GUN", clue: "Combine words — The Doom Slayer's trusty companion" },
        ],
      },
      // ── 5  Medium · 4 steps ──
      {
        startWord: "BOSS",
        startDesc: "The big bad at the end of each stage",
        steps: [
          { answer: "LOSS", clue: "Change a letter — Elden Ring's favorite gift to players" },
          { answer: "LOST", clue: "Change a letter — Every roguelike hero's final status" },
          { answer: "LOOT", clue: "Change a letter — The real endgame in any Diablo clone" },
          { answer: "BOOT", clue: "Change a letter — What you do to a console at startup" },
        ],
      },
      // ── 6  Medium · 4 steps · sound + compound chain ──
      {
        startWord: "KNIGHT",
        startDesc: "A medieval class in every RPG",
        steps: [
          { answer: "NIGHT", clue: "Sounds the same — When survival horror peaks" },
          { answer: "FALL", clue: "Combine words — Destiny's twilight expansion" },
          { answer: "OUT", clue: "Combine words — Bethesda's wasteland series" },
          { answer: "RUN", clue: "Combine words — SEGA's classic arcade racer" },
        ],
      },
      // ── 7  Medium · 4 steps ──
      {
        startWord: "HERO",
        startDesc: "Every game's protagonist",
        steps: [
          { answer: "HERD", clue: "Change a letter — What a group of Chocobos makes" },
          { answer: "HARD", clue: "Change a letter — The difficulty that makes you rage-quit" },
          { answer: "CARD", clue: "Change a letter — What TCG players hoard" },
          { answer: "CART", clue: "Change a letter — What retro Nintendo games came on" },
        ],
      },
      // ── 8  Medium-hard · 4 steps · compound chain ──
      {
        startWord: "END",
        startDesc: "Where the credits roll",
        steps: [
          { answer: "GAME", clue: "Combine words — Every strategy match's final phase" },
          { answer: "OVER", clue: "Combine words — What the screen says when you die" },
          { answer: "WATCH", clue: "Combine words — Blizzard's hero shooter" },
          { answer: "DOGS", clue: "Combine words — Ubisoft's hacking open-world series" },
        ],
      },
      // ── 9  Medium-hard · 4 steps ──
      {
        startWord: "CRAFT",
        startDesc: "Mine, build, survive, repeat",
        steps: [
          { answer: "DRAFT", clue: "Change a letter — Building a deck from random packs" },
          { answer: "DRIFT", clue: "Change a letter — Sliding sideways through a hairpin" },
          { answer: "GRIFT", clue: "Change a letter — A con artist's specialty" },
          { answer: "GIFT", clue: "Drop a letter — What a loot box pretends to be" },
        ],
      },
      // ── 10  Hard · 5 steps ──
      {
        startWord: "WARP",
        startDesc: "Mario's pipe shortcut",
        steps: [
          { answer: "WAR", clue: "Drop a letter — It never changes, says Fallout" },
          { answer: "WARD", clue: "Add a letter — A paladin's protective aura" },
          { answer: "WAND", clue: "Change a letter — A wizard's spell-channeling tool" },
          { answer: "LAND", clue: "Change a letter — The open world beneath your feet" },
          { answer: "LANE", clue: "Change a letter — A path on a MOBA map" },
        ],
      },
      // ── 11  Hard · 5 steps ──
      {
        startWord: "CHEST",
        startDesc: "Loot inside, mimics optional",
        steps: [
          { answer: "CHEAT", clue: "Change a letter — IDDQD, for example" },
          { answer: "HEAT", clue: "Drop a letter — What fire spells bring" },
          { answer: "HEAL", clue: "Change a letter — A white mage's bread and butter" },
          { answer: "REAL", clue: "Change a letter — What VR aims to feel" },
          { answer: "REALM", clue: "Add a letter — A fantasy kingdom" },
        ],
      },
      // ── 12  Hard · 5 steps ──
      {
        startWord: "SPACE",
        startDesc: "Where Invaders come from",
        steps: [
          { answer: "SPARE", clue: "Change a letter — An extra life" },
          { answer: "SPORE", clue: "Change a letter — Wright's evolution sandbox" },
          { answer: "STORE", clue: "Change a letter — Where gold goes to die" },
          { answer: "STONE", clue: "Change a letter — Thunder___, Fire___, Water___" },
          { answer: "TONE", clue: "Drop a letter — A rhythm game's foundation" },
        ],
      },
      // ── 13  Hard · 5 steps ──
      {
        startWord: "SPAWN",
        startDesc: "Where you appear when you enter the server",
        steps: [
          { answer: "PAWN", clue: "Drop a letter — The sacrificial chess piece" },
          { answer: "DAWN", clue: "Change a letter — When Animal Crossing resets" },
          { answer: "DRAWN", clue: "Add a letter — What a bowstring is before release" },
          { answer: "DRAIN", clue: "Change a letter — What vampires do to your HP" },
          { answer: "TRAIN", clue: "Change a letter — How you level up Pokémon" },
        ],
      },
      // ── 14  Easy · 3 steps ──
      {
        startWord: "CRASH",
        startDesc: "Bandicoot's first name",
        steps: [
          { answer: "CLASH", clue: "Change a letter — Royale, or of Clans" },
          { answer: "FLASH", clue: "Change a letter — The platform that powered browser games" },
          { answer: "FLASK", clue: "Change a letter — What you sip to heal in Dark Souls" },
        ],
      },
      // ── 15  Easy · 3 steps ──
      {
        startWord: "SEGA",
        startDesc: "The company behind the Genesis",
        steps: [
          { answer: "SAGE", clue: "Rearrange — The wise NPC who sends you on your quest" },
          { answer: "MAGE", clue: "Change a letter — The spell-casting class" },
          { answer: "MAZE", clue: "Change a letter — Every dungeon's favorite layout" },
        ],
      },
      // ── 16  Easy · 3 steps · compound chain ──
      {
        startWord: "SPEED",
        startDesc: "What every racer craves",
        steps: [
          { answer: "RUN", clue: "Combine words — The art of finishing games as fast as possible" },
          { answer: "WAY", clue: "Combine words — Where planes take off and land" },
          { answer: "POINT", clue: "Combine words — A map marker guiding your next objective" },
        ],
      },
      // ── 17  Easy · 3 steps · compound chain ──
      {
        startWord: "RED",
        startDesc: "The color of a critical HP bar",
        steps: [
          { answer: "DEAD", clue: "Combine words — Rockstar's Wild West saga" },
          { answer: "LOCK", clue: "Combine words — Valve's hero shooter" },
          { answer: "DOWN", clue: "Combine words — A mode where nobody escapes" },
        ],
      },
      // ── 18  Medium · 4 steps ──
      {
        startWord: "DOOM",
        startDesc: "id Software's demon-slaying classic",
        steps: [
          { answer: "BOOM", clue: "Change a letter — What barrels do when you shoot them" },
          { answer: "LOOM", clue: "Change a letter — A LucasArts adventure classic" },
          { answer: "BLOOM", clue: "Add a letter — The glow effect on every modern lens" },
          { answer: "BLOOD", clue: "Change a letter — What Mortal Kombat put on the map" },
        ],
      },
      // ── 19  Medium · 3 steps ──
      {
        startWord: "ROGUE",
        startDesc: "The genre that never gives you a second chance",
        steps: [
          { answer: "ROUGE", clue: "Rearrange — Sonic's jewel-thieving bat" },
          { answer: "ROUTE", clue: "Change a letter — A numbered path through Pokémon's world" },
          { answer: "OUTER", clue: "Rearrange — ___ Wilds: the time-looping space mystery" },
        ],
      },
      // ── 20  Medium · 3 steps · compound chain ──
      {
        startWord: "MOON",
        startDesc: "Majora's Mask's terrifying face in the sky",
        steps: [
          { answer: "LIGHT", clue: "Combine words — What illuminates every dark cave" },
          { answer: "SABER", clue: "Combine words — A Jedi's weapon in every Star Wars game" },
          { answer: "TOOTH", clue: "Combine words — The fanged Ice Age predator" },
        ],
      },
      // ── 21  Medium · 3 steps · anagram chain ──
      {
        startWord: "SONIC",
        startDesc: "SEGA's blue blur",
        steps: [
          { answer: "ICONS", clue: "Rearrange — What fills an ability bar" },
          { answer: "COINS", clue: "Rearrange — What Mario can never have enough of" },
          { answer: "SCION", clue: "Rearrange — The heir to a dark bloodline" },
        ],
      },
      // ── 22  Medium-hard · 4 steps ──
      {
        startWord: "DREAM",
        startDesc: "What Sega's final console was chasing",
        steps: [
          { answer: "DREAD", clue: "Change a letter — Metroid ___: Samus's latest hunt" },
          { answer: "TREAD", clue: "Change a letter — What tank tracks do in armored combat" },
          { answer: "TRADE", clue: "Rearrange — The backbone of every MMO economy" },
          { answer: "RATED", clue: "Rearrange — What the ESRB does before launch" },
        ],
      },
      // ── 23  Medium-hard · 4 steps ──
      {
        startWord: "VALVE",
        startDesc: "The company behind Half-Life and Steam",
        steps: [
          { answer: "VALE", clue: "Drop a letter — A valley in any fantasy kingdom" },
          { answer: "TALE", clue: "Change a letter — Under___, or Bard's ___" },
          { answer: "LATE", clue: "Rearrange — What your dodge roll was when you got hit" },
          { answer: "PLATE", clue: "Add a letter — The heaviest armor class" },
        ],
      },
      // ── 24  Hard · 4 steps · pure anagram chain ──
      {
        startWord: "SMITE",
        startDesc: "Hi-Rez's mythological MOBA",
        steps: [
          { answer: "MITES", clue: "Rearrange — Tiny pests in cave levels" },
          { answer: "TIMES", clue: "Rearrange — What speedrunners obsess over" },
          { answer: "ITEMS", clue: "Rearrange — What fills your inventory" },
          { answer: "EMITS", clue: "Rearrange — What a signal tower does" },
        ],
      },
      // ── 25  Hard · 4 steps · pure anagram chain ──
      {
        startWord: "STEAM",
        startDesc: "Valve's PC gaming empire",
        steps: [
          { answer: "MEATS", clue: "Rearrange — What you carve from monsters in Monster Hunter" },
          { answer: "TEAMS", clue: "Rearrange — What you draft in esports" },
          { answer: "MATES", clue: "Rearrange — Your allies in co-op" },
          { answer: "TAMES", clue: "Rearrange — What you do to dinos in ARK" },
        ],
      },
      // ── 26  Hard · 4 steps ──
      {
        startWord: "GAMES",
        startDesc: "What you're here to play",
        steps: [
          { answer: "MAGES", clue: "Rearrange — The arcane class in every RPG" },
          { answer: "RAGES", clue: "Change a letter — What barbarians do in battle" },
          { answer: "GEARS", clue: "Rearrange — ___ of War: Marcus Fenix's saga" },
          { answer: "TEARS", clue: "Change a letter — ___ of the Kingdom" },
        ],
      },
      // ── 27  Hard · 4 steps ──
      {
        startWord: "GHOST",
        startDesc: "Pac-Man's colorful chasers",
        steps: [
          { answer: "HOST", clue: "Drop a letter — The server that runs the lobby" },
          { answer: "SHOT", clue: "Rearrange — Every FPS player's bread and butter" },
          { answer: "SHOP", clue: "Change a letter — Where you spend gold between rounds" },
          { answer: "HOPS", clue: "Rearrange — What platformer characters do all day" },
        ],
      },
    ];

    const DIFFICULTY_TIERS = [
      [0, 1, 14, 15],
      [2, 3, 16, 17],
      [4, 5, 18, 19],
      [6, 7, 20, 21],
      [8, 9, 22, 23],
      [10, 11, 24, 25],
      [12, 13, 26, 27],
    ];

    const diffLabels = [
      "Saturday Starter",
      "Sunday Setup",
      "Monday Morph",
      "Tuesday Twist",
      "Midweek Maze",
      "Thursday Thinker",
      "Friday Frenzy",
    ];

    const TUTORIAL_KEY = "videogaddle_tutorial_seen";

    interface State {
      loaded: boolean;
      currentStep: number;
      hintsUsed: number[];
      solved: boolean[];
      input: string;
      gameOver: boolean;
      wrongFlash: boolean;
      streak: number;
      clueOrder: number[];
      tutorialStep: number;
    }

    let dayIndex = 0;
    let puzzle: Puzzle;

    const state: State = {
      loaded: false,
      currentStep: 0,
      hintsUsed: [],
      solved: [],
      input: "",
      gameOver: false,
      wrongFlash: false,
      streak: 0,
      clueOrder: [],
      tutorialStep: 0,
    };

    function getDayDifficulty() {
      return (new Date().getDay() + 1) % 7;
    }

    function getDayIndex() {
      const tier = DIFFICULTY_TIERS[getDayDifficulty()];
      const epoch = new Date("2026-04-18T00:00:00Z");
      const weekNum = Math.floor(
        (Date.now() - epoch.getTime()) / (1000 * 60 * 60 * 24 * 7),
      );
      return tier[((weekNum % tier.length) + tier.length) % tier.length];
    }

    function seededShuffle(arr: number[], seed: number): number[] {
      const out = [...arr];
      let s = seed;
      for (let i = out.length - 1; i > 0; i--) {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        const j = s % (i + 1);
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    }

    function todayKey() {
      const d = new Date();
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }

    function saveState() {
      const data = {
        day: todayKey(),
        puzzleIndex: dayIndex,
        currentStep: state.currentStep,
        hintsUsed: state.hintsUsed,
        solved: state.solved,
        gameOver: state.gameOver,
        clueOrder: state.clueOrder,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function loadSavedState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (data.day !== todayKey() || data.puzzleIndex !== dayIndex) return;
        state.currentStep = data.currentStep;
        state.hintsUsed = data.hintsUsed;
        state.solved = data.solved;
        state.gameOver = data.gameOver;
        if (data.clueOrder) state.clueOrder = data.clueOrder;
      } catch {
        /* ignore */
      }
    }

    function loadStreak() {
      try {
        const raw = localStorage.getItem(STREAK_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        state.streak = data.streak || 0;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yKey = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;
        if (data.lastDay !== todayKey() && data.lastDay !== yKey) {
          state.streak = 0;
        }
      } catch {
        /* ignore */
      }
    }

    function updateStreak(won: boolean) {
      if (won) {
        const raw = localStorage.getItem(STREAK_KEY);
        let prev = { streak: 0, lastDay: "" };
        if (raw) {
          try { prev = JSON.parse(raw); } catch { /* ignore */ }
        }
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yKey = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;
        if (prev.lastDay === yKey) {
          state.streak = prev.streak + 1;
        } else if (prev.lastDay === todayKey()) {
          state.streak = prev.streak;
        } else {
          state.streak = 1;
        }
      } else {
        state.streak = 0;
      }
      localStorage.setItem(
        STREAK_KEY,
        JSON.stringify({ streak: state.streak, lastDay: todayKey() }),
      );
    }

    function getStepScore(hints: number) {
      if (hints === 0) return 5;
      if (hints === 1) return 2;
      return 0;
    }

    function getStepEmoji(hints: number) {
      if (hints === 0) return "⭐";
      if (hints === 1) return "💡";
      return "⛔";
    }

    function totalScore() {
      let s = 0;
      for (let i = 0; i < puzzle.steps.length; i++) {
        if (state.solved[i]) s += getStepScore(state.hintsUsed[i]);
      }
      return s;
    }

    function maxScore() {
      return puzzle.steps.length * 5;
    }

    /* ── Rendering ── */

    function buildStartCard() {
      return `
        <div class="r-start-card">
          <div class="r-start-label">START WORD</div>
          <div class="r-start-word">${puzzle.startWord}</div>
          <div class="r-start-desc">${puzzle.startDesc}</div>
        </div>`;
    }

    function buildCluePool() {
      const unmatched: { idx: number; clue: string; highlighted: boolean }[] = [];
      for (const i of state.clueOrder) {
        if (state.solved[i]) continue;
        const isCurrentAndHinted = i === state.currentStep && state.hintsUsed[i] >= 1;
        unmatched.push({ idx: i, clue: puzzle.steps[i].clue, highlighted: isCurrentAndHinted });
      }

      if (unmatched.length === 0 && state.gameOver) return "";

      let html = '<div class="r-clue-pool">';
      html += '<div class="r-clue-pool-label">CLUES</div>';
      html += '<div class="r-clue-pool-list">';
      for (const item of unmatched) {
        const cls = item.highlighted ? "r-pool-clue highlighted" : "r-pool-clue";
        html += `<div class="${cls}">
          <span class="r-pool-bullet">${item.highlighted ? "▸" : "•"}</span>
          <span>${item.clue}</span>
        </div>`;
      }
      html += "</div></div>";
      return html;
    }

    function buildLetterBoxes(word: string, letterState: "solved" | "revealed" | "active" | "locked") {
      const letters = word.split("");
      let html = '<div class="r-letters">';
      for (let i = 0; i < letters.length; i++) {
        if (letterState === "solved") {
          html += `<div class="r-letter solved" style="animation-delay:${i * 0.08}s">${letters[i]}</div>`;
        } else if (letterState === "revealed") {
          html += `<div class="r-letter revealed" style="animation-delay:${i * 0.08}s">${letters[i]}</div>`;
        } else if (letterState === "active") {
          html += `<div class="r-letter empty"></div>`;
        } else {
          html += `<div class="r-letter locked"></div>`;
        }
      }
      html += "</div>";
      return html;
    }

    function buildStep(index: number) {
      const step = puzzle.steps[index];
      const isSolved = state.solved[index];
      const isActive = !state.gameOver && index === state.currentStep;
      const isLocked = !isSolved && !isActive;
      const hints = state.hintsUsed[index];
      const wasRevealed = isSolved && hints >= 2;

      let cls = "r-step";
      if (isSolved) cls += wasRevealed ? " revealed" : " solved";
      else if (isActive) cls += " active";
      else cls += " locked";

      let html = `<div class="${cls}">`;

      html += '<div class="r-step-header">';
      html += `<span class="r-step-num">${index + 1}</span>`;
      if (isSolved) {
        html += `<span class="r-step-score">${getStepEmoji(hints)}</span>`;
      }
      html += "</div>";

      if (isSolved) {
        html += `<div class="r-clue">${step.clue}</div>`;
        const letterSt = wasRevealed ? "revealed" : "solved";
        html += buildLetterBoxes(step.answer, letterSt);
      } else if (isActive) {
        html += '<div class="r-input-area">';
        html += `<input type="text" class="r-input" id="r-answer-input"
          placeholder="Type your answer..." maxlength="15"
          value="${state.input}" autocomplete="off" autocapitalize="off" />`;

        if (state.wrongFlash) {
          html += '<div class="r-wrong-msg">Not quite — try again!</div>';
        }

        html += '<div class="r-btn-row">';
        const hintLabel = hints >= 1 ? "⛔ Reveal Answer" : "💡 Reveal Clue";
        html += `<button class="btn r-hint-btn" id="r-hint-btn">${hintLabel}</button>`;
        html += '<button class="btn primary" id="r-submit-btn">Submit</button>';
        html += "</div></div>";
      } else {
        html += '<div class="r-letters"><div class="r-letter locked">?</div></div>';
      }

      html += "</div>";
      return html;
    }

    function buildResult() {
      const score = totalScore();
      const max = maxScore();
      const perfect = score === max;
      const chain = [puzzle.startWord, ...puzzle.steps.map((s) => s.answer)].join(" → ");

      let html = '<div class="r-result-wrap">';
      html += '<div class="r-result-top">';
      html += `<div class="r-result-icon">${perfect ? "🏆" : score > 0 ? "🎮" : "💀"}</div>`;
      html += `<div class="r-result-title">${perfect ? "Perfect Ladder!" : score >= max * 0.6 ? "Well Played!" : "Ladder Complete"}</div>`;
      html += `<div class="r-result-sub">Score: ${score} / ${max}</div>`;
      html += `<div class="r-result-chain">${chain}</div>`;

      const dots = puzzle.steps.map((_, i) => {
        const h = state.hintsUsed[i];
        const cls = h === 0 ? "dot correct" : h === 1 ? "dot near-miss" : "dot wrong";
        return `<div class="${cls}"></div>`;
      }).join("");
      html += `<div class="dots-row">${dots}</div>`;

      html += "</div>";

      html += '<div class="r-result-steps">';
      for (let i = 0; i < puzzle.steps.length; i++) {
        const step = puzzle.steps[i];
        const h = state.hintsUsed[i];
        const emoji = getStepEmoji(h);
        const pts = getStepScore(h);
        html += `<div class="r-result-step">
          <span class="r-result-step-num">${i + 1}.</span>
          <span class="r-result-step-word">${step.answer}</span>
          <span class="r-result-step-pts">${emoji} ${pts}pts</span>
        </div>`;
      }
      html += "</div>";

      html += '<div class="share-row">';
      html += '<button class="share-btn" id="r-share-btn">Copy result</button>';
      html += "</div>";

      html += "</div>";
      return html;
    }

    /* ── Tutorial ── */

    const TUTORIAL_STEPS = [
      {
        title: "Welcome to Videogaddle!",
        body: `<p>Transform a starting word step by step to climb the ladder. Each step changes the word using clues — it's a video game word puzzle!</p>
          <p>Let's walk through a quick example.</p>`,
      },
      {
        title: "You start with a word",
        body: `<div class="r-start-card" style="margin:16px 0">
            <div class="r-start-label">START WORD</div>
            <div class="r-start-word">JUMP</div>
            <div class="r-start-desc">What you press A for in every platformer</div>
          </div>
          <p>Your job is to transform this word into new words, one step at a time, by following the clues.</p>`,
      },
      {
        title: "Clues are shuffled",
        body: `<p>You'll see all the clues at once, but they're <strong>shuffled</strong> — you don't know which clue goes with which step!</p>
          <div class="r-clue-pool" style="margin:16px 0">
            <div class="r-clue-pool-label">CLUES</div>
            <div class="r-clue-pool-list">
              <div class="r-pool-clue"><span class="r-pool-bullet">•</span><span>Change a letter — What a Goomba looks like</span></div>
              <div class="r-pool-clue"><span class="r-pool-bullet">•</span><span>Change a letter — What Koopa shells do to you</span></div>
            </div>
          </div>
          <p>Figure out which clue matches the current step and how the word transforms.</p>`,
      },
      {
        title: "Solve each step",
        body: `<p>The clue tells you <strong>how</strong> to transform the word (change, add, drop, rearrange, or combine) and <strong>what</strong> the answer means.</p>
          <div style="margin:16px 0">
            <div class="r-step solved" style="margin-bottom:12px">
              <div class="r-step-header"><span class="r-step-num" style="background:var(--green-border);border-color:var(--green-border);color:#fff">1</span><span class="r-step-score">⭐</span></div>
              <div class="r-clue">Change a letter — What Koopa shells do to you</div>
              <div class="r-letters">
                <div class="r-letter solved">B</div><div class="r-letter solved">U</div><div class="r-letter solved">M</div><div class="r-letter solved">P</div>
              </div>
            </div>
          </div>
          <p><strong>JUMP → BUMP</strong>: "Change a letter" tells you to swap one letter. The J becomes a B!</p>
          <p>Once solved, that clue disappears from the list and the next step unlocks.</p>`,
      },
      {
        title: "Use hints if you're stuck",
        body: `<p>Each step has a hint button with two levels:</p>
          <div class="r-tut-scoring" style="margin:16px 0">
            <div class="r-tut-score-row"><span class="r-tut-emoji">⭐</span><span><strong>5 points</strong> — solved with no hints</span></div>
            <div class="r-tut-score-row"><span class="r-tut-emoji">💡</span><span><strong>2 points</strong> — first hint reveals which clue matches</span></div>
            <div class="r-tut-score-row"><span class="r-tut-emoji">⛔</span><span><strong>0 points</strong> — second hint reveals the full answer</span></div>
          </div>
          <p>Your goal: climb the whole ladder with the highest score possible!</p>`,
      },
      {
        title: "One more thing",
        body: `<p>A new puzzle drops every day, and they get <strong>harder as the week goes on</strong>:</p>
          <div class="r-tut-scoring" style="margin:14px 0">
            <div class="r-tut-score-row"><span class="r-tut-emoji">🟢</span><span>Saturday &amp; Sunday — shorter, easier ladders</span></div>
            <div class="r-tut-score-row"><span class="r-tut-emoji">🟡</span><span>Monday–Wednesday — medium difficulty</span></div>
            <div class="r-tut-score-row"><span class="r-tut-emoji">🔴</span><span>Thursday &amp; Friday — longer, trickier chains</span></div>
          </div>
          <p>Each clue tells you the operation, but you won't know how many letters the answer has — that's the challenge!</p>`,
      },
    ];

    function buildTutorial() {
      const idx = state.tutorialStep - 1;
      const step = TUTORIAL_STEPS[idx];
      const isFirst = idx === 0;
      const isLast = idx === TUTORIAL_STEPS.length - 1;

      let html = '<div class="r-tutorial">';
      html += `<div class="r-tut-header">
        <span class="r-tut-badge">How to Play</span>
        <span class="r-tut-progress">${idx + 1} / ${TUTORIAL_STEPS.length}</span>
      </div>`;
      html += `<h2 class="r-tut-title">${step.title}</h2>`;
      html += `<div class="r-tut-body">${step.body}</div>`;

      html += '<div class="r-tut-nav">';
      if (!isFirst) {
        html += '<button class="btn" id="r-tut-back">Back</button>';
      }
      if (isLast) {
        html += '<button class="btn primary" id="r-tut-done">Start Playing</button>';
      } else {
        html += '<button class="btn primary" id="r-tut-next">Next</button>';
      }
      html += "</div>";

      if (isFirst) {
        html += '<button class="r-tut-skip" id="r-tut-skip">Skip tutorial</button>';
      }

      html += "</div>";
      return html;
    }

    function closeTutorial() {
      state.tutorialStep = 0;
      localStorage.setItem(TUTORIAL_KEY, "1");
      render();
    }

    function attachTutorialEvents() {
      const next = document.getElementById("r-tut-next");
      if (next) next.addEventListener("click", () => { state.tutorialStep++; render(); });

      const back = document.getElementById("r-tut-back");
      if (back) back.addEventListener("click", () => { state.tutorialStep--; render(); });

      const done = document.getElementById("r-tut-done");
      if (done) done.addEventListener("click", () => closeTutorial());

      const skip = document.getElementById("r-tut-skip");
      if (skip) skip.addEventListener("click", () => closeTutorial());
    }

    function renderTutorial() {
      const area = document.getElementById("videogaddle-game-area");
      if (!area) return;
      area.innerHTML = buildTutorial();
      attachTutorialEvents();
    }

    /* ── Main render ── */

    function buildGame() {
      let html = buildStartCard();

      html += buildCluePool();

      html += '<div class="r-ladder">';
      for (let i = 0; i < puzzle.steps.length; i++) {
        html += '<div class="r-connector"></div>';
        html += buildStep(i);
      }
      html += "</div>";

      if (state.gameOver) {
        html += buildResult();
      }

      return html;
    }

    function render() {
      const area = document.getElementById("videogaddle-game-area");
      if (!area) return;
      if (!state.loaded) return;

      if (state.tutorialStep >= 1) {
        renderTutorial();
        return;
      }

      area.innerHTML = buildGame();
      attachEvents();
    }

    function attachEvents() {
      const input = document.getElementById("r-answer-input") as HTMLInputElement | null;
      if (input) {
        input.addEventListener("input", (e) => {
          state.input = (e.target as HTMLInputElement).value;
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            submitAnswer();
          }
        });
        setTimeout(() => input.focus(), 50);
      }

      const submitBtn = document.getElementById("r-submit-btn");
      if (submitBtn) {
        submitBtn.addEventListener("click", () => submitAnswer());
      }

      const hintBtn = document.getElementById("r-hint-btn");
      if (hintBtn) {
        hintBtn.addEventListener("click", () => useHint());
      }

      const shareBtn = document.getElementById("r-share-btn");
      if (shareBtn) {
        shareBtn.addEventListener("click", () => shareResults());
      }

      const howTo = document.getElementById("r-how-to-play");
      if (howTo) {
        howTo.addEventListener("click", () => {
          state.tutorialStep = 1;
          render();
        });
      }
    }

    function submitAnswer() {
      const answer = state.input.trim().toUpperCase();
      if (!answer) return;

      const expected = puzzle.steps[state.currentStep].answer.toUpperCase();
      if (answer === expected) {
        state.solved[state.currentStep] = true;
        state.input = "";
        state.wrongFlash = false;

        if (state.currentStep >= puzzle.steps.length - 1) {
          state.gameOver = true;
          const allSolved = state.solved.every(Boolean);
          updateStreak(allSolved);
        } else {
          state.currentStep++;
        }

        saveState();
        render();
      } else {
        state.wrongFlash = true;
        state.input = "";
        render();
        setTimeout(() => {
          state.wrongFlash = false;
          const msg = document.querySelector(".r-wrong-msg");
          if (msg) msg.remove();
        }, 1500);
      }
    }

    function useHint() {
      const step = state.currentStep;
      if (state.hintsUsed[step] === 0) {
        state.hintsUsed[step] = 1;
        saveState();
        render();
      } else if (state.hintsUsed[step] === 1) {
        state.hintsUsed[step] = 2;
        state.solved[step] = true;
        state.input = "";
        state.wrongFlash = false;

        if (step >= puzzle.steps.length - 1) {
          state.gameOver = true;
          const score = totalScore();
          updateStreak(score > 0);
        } else {
          state.currentStep++;
        }

        saveState();
        render();
      }
    }

    function shareResults() {
      const diff = getDayDifficulty();
      const dayNum = Math.floor(
        (Date.now() - new Date("2026-04-18T00:00:00Z").getTime()) / (1000 * 60 * 60 * 24),
      ) + 1;

      const emojis = puzzle.steps.map((_, i) => getStepEmoji(state.hintsUsed[i])).join("");
      const score = totalScore();
      const max = maxScore();

      const text = [
        `🎮 Videogaddle — Day #${dayNum} (${diffLabels[diff]})`,
        `${emojis} — ${score}/${max}`,
        "",
        "sampledle.vercel.app/videogaddle",
      ].join("\n");

      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("r-share-btn");
        if (!btn) return;
        btn.textContent = "Copied! ✓";
        setTimeout(() => {
          const el = document.getElementById("r-share-btn");
          if (el) el.textContent = "Copy result";
        }, 2000);
      });
    }

    function renderStreak() {
      const el = document.getElementById("r-streak-display");
      if (!el) return;
      el.textContent = state.streak > 0 ? `🔥 ${state.streak}` : "";
    }

    function init() {
      dayIndex = getDayIndex();
      puzzle = PUZZLES[dayIndex];

      state.hintsUsed = puzzle.steps.map(() => 0);
      state.solved = puzzle.steps.map(() => false);

      const indices = puzzle.steps.map((_, i) => i);
      state.clueOrder = seededShuffle(indices, dayIndex * 7919 + 31337);

      loadStreak();
      loadSavedState();

      const badge = document.getElementById("r-day-badge");
      if (badge) badge.textContent = diffLabels[getDayDifficulty()];

      const seenTutorial = localStorage.getItem(TUTORIAL_KEY);
      if (!seenTutorial) {
        state.tutorialStep = 1;
      }

      state.loaded = true;
      render();
      renderStreak();
    }

    init();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          Videogadd<span>le</span>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Sampledle</a>
        </div>
        <div className="streak" id="r-streak-display"></div>
      </nav>
      <main>
        <div className="header">
          <h1>Videogaddle</h1>
          <p>Match the clues. Transform the word. Climb the ladder.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
            <div className="day-badge" id="r-day-badge" style={{ marginTop: 0 }}>
              Loading...
            </div>
            <button className="r-how-btn" id="r-how-to-play">How to Play</button>
          </div>
        </div>
        <div id="videogaddle-game-area">
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: "var(--text2)",
              fontSize: "15px",
            }}
          >
            Loading today&apos;s puzzle...
          </div>
        </div>
      </main>
      <div className="footer">
        A daily word-ladder game for gamers.
        <br />
        New puzzle every day. Inspired by{" "}
        <a
          href="https://raddle.quest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raddle
        </a>
        .
      </div>
    </>
  );
}
