import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronRight, Crown, Shield, Flame, BookOpen, Target, Swords } from "lucide-react";

const repertoire = [
  {
    side: "White Repertoire",
    icon: Crown,
    color: "from-yellow-100 to-orange-100",
    intro: "Main weapon: 1.e4. Simple, aggressive, and perfect for improving tactics.",
    lines: [
      {
        name: "1.e4 e5 — Italian Game",
        moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
        priority: "Main White Opening",
        plan: "Fast development, fight for d4, castle early, attack f7, and learn normal piece play.",
        branches: [
          {
            name: "Giuoco Piano",
            moves: "3...Bc5 4.c3 Nf6 5.d3",
            idea: "Safe serious line. Build center slowly, castle, Re1, Nbd2-f1-g3, then d4 when ready.",
            remember: "Don’t rush attacks if Black is solid. Improve pieces first."
          },
          {
            name: "Evans Gambit",
            moves: "3...Bc5 4.b4",
            idea: "Sacrifice a pawn to gain time and open the center. Great for tactics and attacking skill.",
            remember: "After 4...Bxb4 5.c3 Ba5 6.d4, your lead in development matters more than the pawn."
          },
          {
            name: "Two Knights Defense",
            moves: "3...Nf6 4.d3",
            idea: "Avoid memorization war. Keep it calm, castle, c3, Re1, Nbd2, and prepare d4.",
            remember: "At 1000, stable development beats fancy theory."
          },
          {
            name: "Fried Liver warning",
            moves: "3...Nf6 4.Ng5 d5 5.exd5",
            idea: "Learn it later as a weapon, but don’t depend on cheap attacks only.",
            remember: "Use it if you know the line. Otherwise play 4.d3."
          }
        ]
      },
      {
        name: "1.e4 c5 — Anti-Sicilian Setup",
        moves: "1.e4 c5 2.Nf3 followed by 3.Bb5+ or 3.c3",
        priority: "Avoid Sicilian theory hell",
        plan: "Don’t memorize 30 Sicilian systems yet. Use a simple anti-Sicilian and get playable positions.",
        branches: [
          {
            name: "Rossolimo / Moscow style",
            moves: "1.e4 c5 2.Nf3 Nc6 3.Bb5 or 2...d6 3.Bb5+",
            idea: "Pin, castle, damage structure if useful, play d4 later.",
            remember: "Trade bishop only if it ruins Black’s structure or wins time."
          },
          {
            name: "Alapin",
            moves: "1.e4 c5 2.c3",
            idea: "Prepare d4 and build a strong center.",
            remember: "Simple and excellent for a serious beginner repertoire."
          }
        ]
      },
      {
        name: "1.e4 e6 — French Defense",
        moves: "1.e4 e6 2.d4 d5 3.Nc3 or 3.exd5",
        priority: "Common defense",
        plan: "Take space, develop naturally, don’t let Black’s bad bishop become active for free.",
        branches: [
          {
            name: "Exchange French",
            moves: "3.exd5 exd5 4.Nf3",
            idea: "Simple symmetrical structure. Develop, castle, c3, Bd3, O-O.",
            remember: "Good if you want low theory, but don’t play passively."
          },
          {
            name: "Classical choice",
            moves: "3.Nc3 Nf6 4.e5",
            idea: "Gain space and attack kingside later.",
            remember: "Your pawn chain points kingside: attack there."
          }
        ]
      },
      {
        name: "1.e4 c6 — Caro-Kann Defense",
        moves: "1.e4 c6 2.d4 d5 3.e5 or 3.Nc3",
        priority: "Very common online",
        plan: "Gain space or develop quickly. Don’t overextend pawns without piece support.",
        branches: [
          {
            name: "Advance Variation",
            moves: "3.e5 Bf5 4.Nf3 e6 5.Be2",
            idea: "Space advantage. Develop, castle, c3, Be3, Nbd2.",
            remember: "Protect d4 and don’t let Black break with ...c5 for free."
          },
          {
            name: "Classical simple",
            moves: "3.Nc3 dxe4 4.Nxe4",
            idea: "Normal development, easy to understand.",
            remember: "Good for learning piece play."
          }
        ]
      },
      {
        name: "1.e4 d5 — Scandinavian",
        moves: "1.e4 d5 2.exd5 Qxd5 3.Nc3",
        priority: "Punish early queen",
        plan: "Hit the queen, develop fast, gain tempo.",
        branches: [
          {
            name: "Main simple line",
            moves: "3...Qa5 4.d4 Nf6 5.Nf3",
            idea: "Build center, develop, castle, attack when ahead in development.",
            remember: "Do not chase the queen forever. Develop."
          }
        ]
      },
      {
        name: "1.e4 modern stuff — Pirc / Modern",
        moves: "1.e4 d6/g6 2.d4 Nf6/g6 3.Nc3",
        priority: "Setup defense",
        plan: "Take the center, develop, then attack. Black allows you space, so use it.",
        branches: [
          {
            name: "Austrian idea",
            moves: "f4, Nf3, Bd3, O-O",
            idea: "Big center and kingside attack.",
            remember: "Don’t push every pawn. Develop before attacking."
          }
        ]
      }
    ]
  },
  {
    side: "Black vs 1.e4",
    icon: Shield,
    color: "from-blue-100 to-slate-100",
    intro: "Main weapon: Caro-Kann. Solid, low blunder rate, good endgames, and easy plans.",
    lines: [
      {
        name: "Caro-Kann Main Setup",
        moves: "1.e4 c6 2.d4 d5",
        priority: "Main Black vs e4",
        plan: "Challenge White’s center safely. Develop bishop before ...e6 when possible.",
        branches: [
          {
            name: "Advance Variation",
            moves: "3.e5 Bf5 4.Nf3 e6 5.Be2 c5",
            idea: "Attack White’s center with ...c5. Develop naturally, don’t panic about space.",
            remember: "Your main break is ...c5. Without it, you get cramped."
          },
          {
            name: "Classical Variation",
            moves: "3.Nc3 dxe4 4.Nxe4 Bf5",
            idea: "Develop bishop actively, then ...e6, ...Nd7, ...Ngf6.",
            remember: "Trade pieces if cramped. Caro-Kann endgames are often comfortable."
          },
          {
            name: "Exchange Variation",
            moves: "3.exd5 cxd5 4.Bd3 Nc6",
            idea: "Symmetrical but fine. Develop, fight for e5/c4, don’t sleep.",
            remember: "Equal does not mean draw. Outplay them later."
          },
          {
            name: "Panov Attack",
            moves: "3.exd5 cxd5 4.c4 Nf6 5.Nc3 e6",
            idea: "White gets an isolated pawn. Blockade it, trade pieces, win endgame.",
            remember: "Target the isolated d-pawn."
          }
        ]
      },
      {
        name: "Optional Aggressive Backup: Sicilian Dragon-ish",
        moves: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6",
        priority: "Later weapon",
        plan: "Sharp attacking chess. Fianchetto bishop, castle, pressure center, attack queenside/center.",
        branches: [
          {
            name: "Dragon warning",
            moves: "...g6, ...Bg7, ...O-O",
            idea: "Very fun but theory-heavy. Add after your Caro-Kann is stable.",
            remember: "Don’t make this your only defense yet."
          }
        ]
      }
    ]
  },
  {
    side: "Black vs 1.d4 / 1.c4 / 1.Nf3",
    icon: BookOpen,
    color: "from-emerald-100 to-teal-100",
    intro: "Main weapon: Queen’s Gambit Declined structures. Stable, classical, and not too much theory.",
    lines: [
      {
        name: "Queen’s Gambit Declined",
        moves: "1.d4 d5 2.c4 e6",
        priority: "Main Black vs d4",
        plan: "Solid center. Develop pieces, castle, then break with ...c5 or ...e5 later.",
        branches: [
          {
            name: "Normal QGD",
            moves: "3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O",
            idea: "Classical development. Don’t grab random pawns. Finish development.",
            remember: "Your bad bishop on c8 needs a plan: ...b6/...Bb7 or ...Nbd7/...c5."
          },
          {
            name: "Exchange QGD",
            moves: "3.cxd5 exd5",
            idea: "Carlsbad structure. Watch minority attack with b4-b5 from White.",
            remember: "Don’t allow White to attack queenside for free. Use ...c6 and piece activity."
          },
          {
            name: "London System",
            moves: "1.d4 d5 2.Nf3 Nf6 3.Bf4 e6",
            idea: "Don’t tilt. Play ...c5, ...Nc6, ...Qb6, and challenge b2/d4.",
            remember: "Against London: hit the center, don’t just copy moves."
          },
          {
            name: "Aggressive anti-London setup",
            moves: "1.d4 d5 2.Bf4 Nf6 3.e3 c5! 4.Nf3 Nc6 5.c3 Qb6",
            idea: "Punish the slow London setup immediately. Pressure b2 and d4, develop fast, then break with ...e5.",
            remember: "Main attack plan: ...c5, ...Nc6, ...Qb6, ...Bd6, ...O-O, ...Re8, then ...e5. Trade their London bishop whenever possible."
          },
          {
            name: "London with early e3 and c3",
            moves: "1.d4 d5 2.Bf4 Nf6 3.e3 c5! 4.c3 Nc6 5.Nd2 Qb6",
            idea: "Classic London wall. Immediately pressure b2 and attack the center before White gets comfortable.",
            remember: "If White plays passively, attack fast with ...Qb6, ...Bf5 or ...Bd6, castle, then ...e5 or ...cxd4."
          },
          {
            name: "Super passive London",
            moves: "1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5!",
            idea: "White is playing too slowly. Seize space and open the center before they finish setup.",
            remember: "Against slow e3/Nf3 setups: attack center immediately. Never just mirror moves."
          },
          {
            name: "London bishop pin idea",
            moves: "1.d4 d5 2.Bf4 Nf6 3.e3 c5 4.Nf3 Nc6 5.Bd3 Bg4!",
            idea: "Use the bishop pin to increase pressure on d4 and make White uncomfortable.",
            remember: "Pins like ...Bg4 appear everywhere. If White blocks naturally, look for tactical pressure."
          },
          {
            name: "Colle / Stonewall setups",
            moves: "d4, e3, Bd3, Nf3",
            idea: "Develop normally, play ...c5, and prevent easy kingside attack.",
            remember: "Their plan is simple. Your center break must come."
          }
        ]
      },
      {
        name: "Against 1.c4 English",
        moves: "1.c4 e6 2.Nc3 d5",
        priority: "Transpose to QGD",
        plan: "Bring it back to structures you already know.",
        branches: [
          {
            name: "English becomes QGD",
            moves: "...e6, ...d5, ...Nf6, ...Be7, ...O-O",
            idea: "No need for a separate huge English repertoire yet.",
            remember: "At 1000, transposition is your best friend."
          }
        ]
      },
      {
        name: "Against 1.Nf3",
        moves: "1.Nf3 d5 2.d4 Nf6 or 2.c4 e6",
        priority: "Flexible setup",
        plan: "If they go d4/c4, enter QGD. If not, develop normally and claim center.",
        branches: [
          {
            name: "Reti style",
            moves: "1.Nf3 d5 2.g3 Nf6 3.Bg2 e6",
            idea: "Build center and develop. Don’t chase ghosts.",
            remember: "Take space but keep king safe."
          }
        ]
      },
      {
        name: "Optional Later Weapon: King’s Indian Defense",
        moves: "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7",
        priority: "Add later",
        plan: "Let White build center, then attack it with ...e5 or ...c5. Often kingside attack with ...f5.",
        branches: [
          {
            name: "Classic King’s Indian plan",
            moves: "...d6, ...O-O, ...e5, ...Nc6, ...f5",
            idea: "Sharp and old-school but still playable. Harder than QGD.",
            remember: "Learn this after you stop blundering in normal openings."
          }
        ]
      }
    ]
  }
];

function BranchCard({ branch }) {
  return (
    <div className="rounded-2xl border bg-white/80 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <Target className="mt-1 h-4 w-4 shrink-0" />
        <div>
          <h4 className="font-semibold text-slate-900">{branch.name}</h4>
          <p className="mt-1 rounded-lg bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800">{branch.moves}</p>
          <p className="mt-2 text-sm text-slate-700"><span className="font-semibold">Idea:</span> {branch.idea}</p>
          <p className="mt-1 text-sm text-slate-700"><span className="font-semibold">Remember:</span> {branch.remember}</p>
        </div>
      </div>
    </div>
  );
}

function LineCard({ line }) {
  const [open, setOpen] = useState(true);
  return (
    <motion.div layout className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50">
        <div>
          <div className="mb-2 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{line.priority}</div>
          <h3 className="text-xl font-bold text-slate-950">{line.name}</h3>
          <p className="mt-2 rounded-xl bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800">{line.moves}</p>
          <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Plan:</span> {line.plan}</p>
        </div>
        {open ? <ChevronDown className="mt-2 h-5 w-5" /> : <ChevronRight className="mt-2 h-5 w-5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-slate-50/70"
          >
            <div className="grid gap-3 p-5 md:grid-cols-2">
              {line.branches.map((branch) => <BranchCard key={branch.name} branch={branch} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Section({ section }) {
  const Icon = section.icon;
  return (
    <section className="mb-8">
      <div className={`mb-4 rounded-3xl bg-gradient-to-br ${section.color} p-6 shadow-sm`}>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-sm"><Icon className="h-6 w-6" /></div>
          <div>
            <h2 className="text-2xl font-black text-slate-950">{section.side}</h2>
            <p className="mt-1 text-slate-700">{section.intro}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        {section.lines.map((line) => <LineCard key={line.name} line={line} />)}
      </div>
    </section>
  );
}

export default function ChessOpeningTree() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return repertoire
      .filter(section => mode === "all" || section.side.toLowerCase().includes(mode))
      .map(section => ({
        ...section,
        lines: section.lines.filter(line => {
          const blob = JSON.stringify(line).toLowerCase();
          return !q || blob.includes(q);
        })
      }))
      .filter(section => section.lines.length > 0);
  }, [query, mode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-4 text-slate-900 md:p-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8 rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <Swords className="h-4 w-4" /> Serious 1000 Elo Repertoire
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">Opening Tree for Serious Study</h1>
              <p className="mt-3 max-w-2xl text-slate-300">Don’t memorize everything. Learn these branches, understand the plans, then review your games and add only the lines that actually happen to you.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Study rule:</p>
              <p>1 line per day. Play 2 rapid games. Review every opening mistake.</p>
            </div>
          </div>
        </motion.div>

        <div className="sticky top-0 z-10 mb-6 rounded-3xl border bg-white/90 p-3 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: Caro, French, London, Evans, Sicilian..."
                className="w-full rounded-2xl border px-11 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
            <select value={mode} onChange={(e) => setMode(e.target.value)} className="rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300">
              <option value="all">All</option>
              <option value="white">White</option>
              <option value="black vs 1.e4">Black vs e4</option>
              <option value="black vs 1.d4">Black vs d4/c4/Nf3</option>
            </select>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <Flame className="mb-3 h-6 w-6" />
            <h3 className="font-bold">Your attacking weapon</h3>
            <p className="mt-1 text-sm text-slate-600">Italian + Evans Gambit. Perfect for tactics and initiative.</p>
          </div>
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <Shield className="mb-3 h-6 w-6" />
            <h3 className="font-bold">Your safe defense</h3>
            <p className="mt-1 text-sm text-slate-600">Caro-Kann vs e4. Solid, logical, and hard to destroy.</p>
          </div>
          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <BookOpen className="mb-3 h-6 w-6" />
            <h3 className="font-bold">Your d4 answer</h3>
            <p className="mt-1 text-sm text-slate-600">QGD structures first. King’s Indian later as a sharp weapon.</p>
          </div>
        </div>

        {filtered.map((section) => <Section key={section.side} section={section} />)}

        <div className="rounded-3xl bg-slate-100 p-6 text-sm text-slate-700">
          <h3 className="mb-2 text-lg font-black text-slate-950">How to use this without becoming a theory zombie</h3>
          <p>First learn the first 5–8 moves and the plan. Then play games. When you lose in the opening, add that exact line to your personal notes. Your repertoire should grow from your real games, not from memorizing 300 random engine lines.</p>
        </div>
      </div>
    </div>
  );
}
