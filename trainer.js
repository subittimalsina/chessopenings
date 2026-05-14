import { Chess } from "./node_modules/chess.js/dist/esm/chess.js";

const PIECE_URLS = {
  wp: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  wn: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
  wb: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
  wr: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
  wq: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
  wk: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
  bp: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  bn: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
  bb: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
  br: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
  bq: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
  bk: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
};

const PIECE_TEXT = {
  wp: "♙", wn: "♘", wb: "♗", wr: "♖", wq: "♕", wk: "♔",
  bp: "♟", bn: "♞", bb: "♝", br: "♜", bq: "♛", bk: "♚"
};

const whiteLines = [
  {
    tag: "vs 1...e5",
    name: "Italian Evans Gambit",
    moves: [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Bc5",
      "b4",
      "Bxb4",
      "c3",
      "Ba5",
      "d4",
      "exd4",
      "O-O",
      "Nf6",
      "e5"
    ]
  },
  {
    tag: "vs 1...e5",
    name: "Fried Liver Attack",
    moves: [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "Bc4",
      "Nf6",
      "Ng5",
      "d5",
      "exd5",
      "Nxd5",
      "Nxf7",
      "Kxf7",
      "Qf3+",
      "Ke6",
      "Nc3"
    ]
  },
  {
    tag: "vs 1...e5",
    name: "Scotch Open Center",
    moves: [
      "e4",
      "e5",
      "Nf3",
      "Nc6",
      "d4",
      "exd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "Bb4",
      "Nxc6",
      "bxc6",
      "Bd3",
      "d5",
      "exd5"
    ]
  },
  {
    tag: "vs 1...e5",
    name: "King's Gambit Fire",
    moves: [
      "e4",
      "e5",
      "f4",
      "exf4",
      "Nf3",
      "g5",
      "Bc4",
      "Bg7",
      "d4",
      "d6",
      "O-O",
      "h6",
      "c3"
    ]
  },
  {
    tag: "vs 1...e5",
    name: "Vienna Gambit Attack",
    moves: [
      "e4",
      "e5",
      "Nc3",
      "Nf6",
      "f4",
      "d5",
      "fxe5",
      "Nxe4",
      "Nf3",
      "Be7",
      "d4",
      "O-O",
      "Bd3"
    ]
  },
  {
    tag: "vs Sicilian",
    name: "Smith-Morra Gambit Accepted",
    moves: [
      "e4",
      "c5",
      "d4",
      "cxd4",
      "c3",
      "dxc3",
      "Nxc3",
      "Nc6",
      "Nf3",
      "d6",
      "Bc4",
      "e6",
      "O-O",
      "Nf6",
      "Qe2"
    ]
  },
  {
    tag: "vs Sicilian",
    name: "Smith-Morra Gambit Declined",
    moves: [
      "e4",
      "c5",
      "d4",
      "cxd4",
      "c3",
      "Nf6",
      "e5",
      "Nd5",
      "Nf3",
      "Nc6",
      "Bc4",
      "e6",
      "O-O"
    ]
  },
  {
    tag: "vs Sicilian",
    name: "Grand Prix Attack",
    moves: [
      "e4",
      "c5",
      "Nc3",
      "Nc6",
      "f4",
      "g6",
      "Nf3",
      "Bg7",
      "Bb5",
      "Nd4",
      "O-O"
    ]
  },
  {
    tag: "vs Sicilian",
    name: "Rossolimo Pressure",
    moves: [
      "e4",
      "c5",
      "Nf3",
      "Nc6",
      "Bb5",
      "g6",
      "O-O",
      "Bg7",
      "Re1",
      "e5",
      "c3",
      "Nge7",
      "d4"
    ]
  },
  {
    tag: "vs French",
    name: "French Advance Space Grab",
    moves: [
      "e4",
      "e6",
      "d4",
      "d5",
      "e5",
      "c5",
      "c3",
      "Nc6",
      "Nf3",
      "Qb6",
      "a3",
      "c4",
      "Nbd2"
    ]
  },
  {
    tag: "vs French",
    name: "French Milner-Barry Gambit",
    moves: [
      "e4",
      "e6",
      "d4",
      "d5",
      "e5",
      "c5",
      "c3",
      "Nc6",
      "Nf3",
      "Qb6",
      "Bd3",
      "cxd4",
      "O-O"
    ]
  },
  {
    tag: "vs Caro-Kann",
    name: "Caro-Kann Advance Only",
    moves: [
      "e4",
      "c6",
      "d4",
      "d5",
      "e5",
      "Bf5",
      "Nf3",
      "e6",
      "Be2",
      "c5",
      "O-O",
      "Nc6",
      "c3"
    ]
  },
  {
    tag: "vs Caro-Kann",
    name: "Caro Advance Tal h4",
    moves: [
      "e4",
      "c6",
      "d4",
      "d5",
      "e5",
      "Bf5",
      "h4",
      "h5",
      "Bd3",
      "Bxd3",
      "Qxd3",
      "e6",
      "Nf3",
      "c5"
    ]
  },
  {
    tag: "vs Scandinavian",
    name: "Scandi Queen Recapture",
    moves: [
      "e4",
      "d5",
      "exd5",
      "Qxd5",
      "Nc3",
      "Qa5",
      "d4",
      "Nf6",
      "Nf3",
      "c6",
      "Bc4",
      "Bf5",
      "O-O"
    ]
  },
  {
    tag: "vs Scandinavian",
    name: "Scandi 2...Nf6 Modern",
    moves: [
      "e4",
      "d5",
      "exd5",
      "Nf6",
      "d4",
      "Nxd5",
      "c4",
      "Nb6",
      "Nc3",
      "g6",
      "Be3",
      "Bg7",
      "Nf3",
      "O-O",
      "Be2"
    ]
  },
  {
    tag: "vs Scandinavian",
    name: "Scandi Portuguese Gambit Hit",
    moves: [
      "e4",
      "d5",
      "exd5",
      "Nf6",
      "d4",
      "Bg4",
      "f3",
      "Bf5",
      "c4",
      "e6",
      "Nc3",
      "exd5",
      "c5"
    ]
  },
  {
    tag: "vs Pirc/Modern",
    name: "Pirc Austrian Attack",
    moves: [
      "e4",
      "d6",
      "d4",
      "Nf6",
      "Nc3",
      "g6",
      "f4",
      "Bg7",
      "Nf3",
      "O-O",
      "Bd3",
      "Nc6",
      "O-O"
    ]
  },
  {
    tag: "vs Pirc/Modern",
    name: "Pirc 150 Attack Castle Long",
    moves: [
      "e4",
      "d6",
      "d4",
      "Nf6",
      "Nc3",
      "g6",
      "Be3",
      "Bg7",
      "Qd2",
      "O-O",
      "O-O-O",
      "c6",
      "f3",
      "b5",
      "h4"
    ]
  },
  {
    tag: "vs Modern",
    name: "Modern Austrian Attack",
    moves: [
      "e4",
      "g6",
      "d4",
      "Bg7",
      "Nc3",
      "d6",
      "f4",
      "Nf6",
      "Nf3",
      "O-O",
      "Bd3",
      "Nc6",
      "O-O"
    ]
  },
  {
    tag: "vs Alekhine",
    name: "Alekhine Four Pawns Style",
    moves: [
      "e4",
      "Nf6",
      "e5",
      "Nd5",
      "d4",
      "d6",
      "c4",
      "Nb6",
      "exd6",
      "cxd6",
      "Nc3",
      "g6",
      "Be3"
    ]
  },
  {
    tag: "vs Alekhine",
    name: "Alekhine Chase Space",
    moves: [
      "e4",
      "Nf6",
      "e5",
      "Nd5",
      "c4",
      "Nb6",
      "d4",
      "d6",
      "Nc3",
      "dxe5",
      "c5"
    ]
  },
  {
    tag: "vs Nimzowitsch",
    name: "Nimzowitsch 1...Nc6 Center Attack",
    moves: [
      "e4",
      "Nc6",
      "d4",
      "d5",
      "exd5",
      "Qxd5",
      "Nf3",
      "Bg4",
      "Be2",
      "O-O-O",
      "c4"
    ]
  },
  {
    tag: "vs Nimzowitsch",
    name: "Nimzowitsch 2...e5 Space Grab",
    moves: [
      "e4",
      "Nc6",
      "d4",
      "e5",
      "d5",
      "Nce7",
      "c4",
      "Ng6",
      "Nc3",
      "Bc5",
      "Nf3",
      "d6"
    ]
  },
  {
    tag: "vs Owen",
    name: "Owen Defense Big Center",
    moves: [
      "e4",
      "b6",
      "d4",
      "Bb7",
      "Bd3",
      "e6",
      "Nf3",
      "c5",
      "c3",
      "Nf6",
      "Qe2"
    ]
  },
  {
    tag: "vs St George",
    name: "St George 1...a6 Punish",
    moves: [
      "e4",
      "a6",
      "d4",
      "b5",
      "Nf3",
      "Bb7",
      "Bd3",
      "e6",
      "O-O",
      "c5"
    ]
  },
  {
    tag: "vs Borg",
    name: "Borg 1...g5 Punish",
    moves: [
      "e4",
      "g5",
      "d4",
      "h6",
      "h4",
      "gxh4",
      "Nf3",
      "e6",
      "Nxh4"
    ]
  },
  {
    tag: "vs Polish",
    name: "Polish 1...b5 Punish",
    moves: [
      "e4",
      "b5",
      "Bxb5",
      "Bb7",
      "Nc3",
      "e6",
      "Nf3",
      "Nf6",
      "e5"
    ]
  },
  {
    tag: "vs Fred",
    name: "Fred 1...f5 Punish",
    moves: [
      "e4",
      "f5",
      "exf5",
      "Nf6",
      "d4",
      "d5",
      "Bd3",
      "Nc6",
      "Nf3"
    ]
  }
];

const blackE4Lines = [
  {
    tag: "Sicilian",
    name: "Dragon Main Fire",
    moves: [
      "e4",
      "c5",
      "Nf3",
      "d6",
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "g6",
      "Be3",
      "Bg7",
      "f3",
      "O-O",
      "Qd2",
      "Nc6"
    ]
  },
  {
    tag: "Sicilian",
    name: "Najdorf-Style e5 Hit",
    moves: [
      "e4",
      "c5",
      "Nf3",
      "d6",
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "a6",
      "Be3",
      "e5",
      "Nb3",
      "Be6"
    ]
  },
  {
    tag: "Sicilian",
    name: "Accelerated Dragon",
    moves: [
      "e4",
      "c5",
      "Nf3",
      "Nc6",
      "d4",
      "cxd4",
      "Nxd4",
      "g6",
      "c4",
      "Nf6",
      "Nc3",
      "Nxd4",
      "Qxd4",
      "d6"
    ]
  },
  {
    tag: "Sicilian",
    name: "Alapin Counterattack",
    moves: [
      "e4",
      "c5",
      "c3",
      "d5",
      "exd5",
      "Qxd5",
      "d4",
      "Nf6",
      "Nf3",
      "Bg4",
      "Be2",
      "e6"
    ]
  },
  {
    tag: "Sicilian",
    name: "Smith-Morra Accepted Counter",
    moves: [
      "e4",
      "c5",
      "d4",
      "cxd4",
      "c3",
      "dxc3",
      "Nxc3",
      "Nc6",
      "Nf3",
      "d6",
      "Bc4",
      "e6",
      "O-O",
      "Nf6"
    ]
  },
  {
    tag: "Sicilian",
    name: "Closed Sicilian Break",
    moves: [
      "e4",
      "c5",
      "Nc3",
      "Nc6",
      "g3",
      "g6",
      "Bg2",
      "Bg7",
      "d3",
      "d6",
      "f4",
      "e5"
    ]
  },
  {
    tag: "Sicilian",
    name: "Grand Prix Counter",
    moves: [
      "e4",
      "c5",
      "Nc3",
      "Nc6",
      "f4",
      "g6",
      "Nf3",
      "Bg7",
      "Bb5",
      "Nd4",
      "O-O",
      "Nxb5"
    ]
  }
];

const blackD4Lines = [
  {
    tag: "Benoni",
    name: "Modern Benoni Strike",
    moves: [
      "d4",
      "Nf6",
      "c4",
      "c5",
      "d5",
      "e6",
      "Nc3",
      "exd5",
      "cxd5",
      "d6",
      "e4",
      "g6",
      "Nf3",
      "Bg7"
    ]
  },
  {
    tag: "Benko",
    name: "Benko Gambit Pressure",
    moves: [
      "d4",
      "Nf6",
      "c4",
      "c5",
      "d5",
      "b5",
      "cxb5",
      "a6",
      "bxa6",
      "Bxa6",
      "Nc3",
      "d6",
      "Nf3",
      "g6"
    ]
  },
  {
    tag: "Dutch",
    name: "Leningrad Dutch Attack",
    moves: [
      "d4",
      "f5",
      "g3",
      "Nf6",
      "Bg2",
      "g6",
      "Nf3",
      "Bg7",
      "O-O",
      "O-O",
      "c4",
      "d6",
      "Nc3",
      "Qe8"
    ]
  },
  {
    tag: "Englund",
    name: "Englund Gambit Trap Line",
    moves: [
      "d4",
      "e5",
      "dxe5",
      "Nc6",
      "Nf3",
      "Qe7",
      "Bf4",
      "Qb4+",
      "Bd2",
      "Qxb2"
    ]
  },
  {
    tag: "Anti-London",
    name: "London Qb6 Pawn Snatch",
    moves: [
      "d4",
      "Nf6",
      "Bf4",
      "c5",
      "e3",
      "Qb6",
      "Nc3",
      "Qxb2",
      "Nb5",
      "Na6"
    ]
  },
  {
    tag: "Anti-London",
    name: "London Bishop Pin Attack",
    moves: [
      "d4",
      "Nf6",
      "Bf4",
      "c5",
      "e3",
      "Qb6",
      "Nf3",
      "Qxb2",
      "Nbd2",
      "Nd5"
    ]
  },
  {
    tag: "Jobava",
    name: "Jobava London Counter",
    moves: [
      "d4",
      "Nf6",
      "Nc3",
      "d5",
      "Bf4",
      "c5",
      "e3",
      "Qb6",
      "Nb5",
      "Na6"
    ]
  },
  {
    tag: "Trompowsky",
    name: "Trompowsky Hit Center",
    moves: [
      "d4",
      "Nf6",
      "Bg5",
      "Ne4",
      "Bf4",
      "c5",
      "d5",
      "Qb6",
      "Nd2",
      "Nxd2"
    ]
  },
  {
    tag: "Colle/Torre",
    name: "Slow System c5 Break",
    moves: [
      "d4",
      "Nf6",
      "Nf3",
      "c5",
      "e3",
      "g6",
      "Bd3",
      "Bg7",
      "O-O",
      "O-O",
      "c4",
      "cxd4"
    ]
  }
];

const blackFlankLines = [
  {
    tag: "English",
    name: "English Reversed Sicilian Attack",
    moves: [
      "c4",
      "e5",
      "Nc3",
      "Nf6",
      "Nf3",
      "Nc6",
      "g3",
      "d5",
      "cxd5",
      "Nxd5",
      "Bg2",
      "Nb6"
    ]
  },
  {
    tag: "English",
    name: "English e5-f5 Kingside Push",
    moves: [
      "c4",
      "e5",
      "Nc3",
      "f5",
      "g3",
      "Nf6",
      "Bg2",
      "Bb4",
      "Nf3",
      "e4"
    ]
  },
  {
    tag: "Reti",
    name: "Reti Center Strike",
    moves: [
      "Nf3",
      "d5",
      "g3",
      "Nf6",
      "Bg2",
      "c6",
      "O-O",
      "Bg4",
      "d3",
      "Nbd7",
      "Nbd2",
      "e5"
    ]
  },
  {
    tag: "Reti",
    name: "Reti c5 Clamp",
    moves: [
      "Nf3",
      "Nf6",
      "g3",
      "c5",
      "Bg2",
      "Nc6",
      "O-O",
      "e5",
      "d3",
      "d5"
    ]
  },
  {
    tag: "Bird",
    name: "From Gambit",
    moves: [
      "f4",
      "e5",
      "fxe5",
      "d6",
      "exd6",
      "Bxd6",
      "Nf3",
      "g5",
      "d4",
      "g4"
    ]
  },
  {
    tag: "King Fianchetto",
    name: "1.g3 Big Center",
    moves: [
      "g3",
      "e5",
      "Bg2",
      "d5",
      "d3",
      "Nf6",
      "Nf3",
      "Nc6",
      "O-O",
      "Bd6"
    ]
  },
  {
    tag: "Nimzo-Larsen",
    name: "1.b3 Center Smash",
    moves: [
      "b3",
      "e5",
      "Bb2",
      "Nc6",
      "e3",
      "d5",
      "Bb5",
      "Bd6",
      "Nf3",
      "Qe7"
    ]
  },
  {
    tag: "Polish",
    name: "1.b4 e5 Counter",
    moves: [
      "b4",
      "e5",
      "Bb2",
      "Bxb4",
      "Bxe5",
      "Nf6",
      "Nf3",
      "O-O"
    ]
  },
  {
    tag: "Van Geet",
    name: "1.Nc3 d5 Strike",
    moves: [
      "Nc3",
      "d5",
      "d4",
      "Nf6",
      "Bg5",
      "Nbd7",
      "e3",
      "e6",
      "Nf3",
      "c5"
    ]
  }
];

const repertoires = [
  {
    group: "Simple Repertoire",
    name: "WHITE — 1.e4 attacks vs everything",
    playAs: "w",
    description: "Complete aggressive 1.e4 tree: e5, Sicilian, French, Caro, Scandi, Pirc, Modern, Alekhine, Nimzowitsch, Owen, and weird first moves.",
    lines: whiteLines
  },
  {
    group: "Simple Repertoire",
    name: "WHITE — Scandinavian only",
    playAs: "w",
    description: "Only 1.e4 d5 2.exd5 lines, including 2...Qxd5 and 2...Nf6.",
    lines: whiteLines.filter((line) => line.moves[0] === "e4" && line.moves[1] === "d5")
  },
  {
    group: "Simple Repertoire",
    name: "BLACK — sharp vs 1.e4",
    playAs: "b",
    description: "Only sharp Sicilian replies: Dragon, Najdorf-style, Accelerated Dragon, Alapin/Morra/Closed counters.",
    lines: blackE4Lines
  },
  {
    group: "Simple Repertoire",
    name: "BLACK — anti-d4 / anti-London",
    playAs: "b",
    description: "Sharp replies vs d4: Benoni, Benko, Dutch, Englund, Anti-London, Jobava, Trompowsky, Colle/Torre.",
    lines: blackD4Lines
  },
  {
    group: "Simple Repertoire",
    name: "BLACK — everything else",
    playAs: "b",
    description: "Aggressive replies vs English, Reti, Bird, 1.g3, 1.b3, 1.b4, and 1.Nc3.",
    lines: blackFlankLines
  }
];

const boardEl = document.querySelector("#board");
const openingChoiceEl = document.querySelector("#opening-choice");
const playerSideEl = document.querySelector("#player-side");
const engineStrengthEl = document.querySelector("#engine-strength");
const newGameEl = document.querySelector("#new-game");
const flipBoardEl = document.querySelector("#flip-board");
const undoMoveEl = document.querySelector("#undo-move");
const themeToggleEl = document.querySelector("#theme-toggle");
const hintEl = document.querySelector("#hint-move");
const clearArrowsEl = document.querySelector("#clear-arrows");
const startPuzzlesEl = document.querySelector("#start-puzzles");
const nextPuzzleEl = document.querySelector("#next-puzzle");
const answerPuzzleEl = document.querySelector("#answer-puzzle");
const puzzleHintEl = document.querySelector("#puzzle-hint");
const exitPuzzlesEl = document.querySelector("#exit-puzzles");
const puzzleSideEl = document.querySelector("#puzzle-side");
const puzzleCountEl = document.querySelector("#puzzle-count");
const puzzleScoreEl = document.querySelector("#puzzle-score");
const navPuzzleStartEl = document.querySelector("#nav-puzzle-start");
const modeChipEl = document.querySelector("#mode-chip");
const trainerStatusEl = document.querySelector("#trainer-status");
const bookStatusEl = document.querySelector("#book-status");
const engineStatusEl = document.querySelector("#engine-status");
const moveListEl = document.querySelector("#move-list");
const lineCountEl = document.querySelector("#line-count");
const branchLineEl = document.querySelector("#branch-line");
const pageEls = [...document.querySelectorAll("[data-page]")];
const pageLinkEls = [...document.querySelectorAll("[data-nav-page]")];

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

let game = new Chess();
let selectedRepertoire = repertoires[0];
let playerColor = selectedRepertoire.playAs;
let boardFlipped = false;
let selectedSquare = null;
let lastMove = null;
let engine = null;
let engineReady = false;
let engineFailed = false;
let engineThinking = false;
let opponentTimer = 0;
let activeEngineSearchToken = 0;
let arrows = [];
let draftArrow = null;
let pointerState = null;
let dragGhost = null;
let puzzleMode = false;
let puzzleBank = [];
let currentPuzzle = null;
let puzzleSolved = false;
let puzzleFeedback = "";
let puzzleDetails = "";
let puzzleHintLevel = 0;
let puzzleHintMove = null;
let puzzleWrongMove = null;
let puzzleCorrect = 0;
let puzzleAttempts = 0;
let puzzleStreak = 0;
let puzzleTimer = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeSan(move) {
  return String(move).replace(/[+#?!]+/g, "");
}

function readSavedTheme() {
  try {
    return localStorage.getItem("chess-opening-theme") || "dark";
  } catch {
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("chess-opening-theme", theme);
  } catch {
    // storage can be unavailable on some Android browsers
  }
}

function applyTheme(theme, persist = true) {
  const clean = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = clean;
  if (themeToggleEl) themeToggleEl.textContent = clean === "dark" ? "Light" : "Dark";
  if (persist) saveTheme(clean);
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

function getLinePool() {
  return selectedRepertoire.lines || [];
}

function lineMatchesHistory(line, history) {
  if (!line || history.length > line.moves.length) return false;
  for (let i = 0; i < history.length; i += 1) {
    if (normalizeSan(history[i]) !== normalizeSan(line.moves[i])) return false;
  }
  return true;
}

function matchingBookLines() {
  const history = game.history();
  return getLinePool().filter((line) => lineMatchesHistory(line, history));
}

function currentBookMoves() {
  const historyLength = game.history().length;
  const seen = new Set();
  const moves = [];

  for (const line of matchingBookLines()) {
    const move = line.moves[historyLength];
    if (!move) continue;
    const key = normalizeSan(move);
    if (!seen.has(key)) {
      seen.add(key);
      moves.push(move);
    }
  }

  return moves;
}

function currentBranchName() {
  const matches = matchingBookLines();
  if (!matches.length) return "Out of book";
  if (matches.length === 1) return matches[0].name;
  const tags = [...new Set(matches.map((line) => line.tag))].slice(0, 3);
  return tags.length ? tags.join(" / ") : `${matches.length} possible branches`;
}

function chooseBookMove() {
  const moves = currentBookMoves();
  if (!moves.length) return null;
  return moves[Math.floor(Math.random() * moves.length)];
}

function isMoveInBook(san, moves) {
  return moves.some((move) => normalizeSan(move) === normalizeSan(san));
}

function formatMoves(moves) {
  return moves.length ? moves.join(" / ") : "—";
}

function isBookIntact() {
  return matchingBookLines().length > 0;
}


function sourceOpeningLines() {
  return [
    ...whiteLines.map((line) => ({ ...line, repertoireSide: "w", repertoireName: "White aggressive" })),
    ...blackE4Lines.map((line) => ({ ...line, repertoireSide: "b", repertoireName: "Black vs e4" })),
    ...blackD4Lines.map((line) => ({ ...line, repertoireSide: "b", repertoireName: "Black vs d4" })),
    ...blackFlankLines.map((line) => ({ ...line, repertoireSide: "b", repertoireName: "Black vs flank" }))
  ];
}

function buildOpeningPuzzles() {
  const grouped = new Map();

  for (const line of sourceOpeningLines()) {
    const probe = new Chess();
    const played = [];

    for (let ply = 0; ply < line.moves.length; ply += 1) {
      const answerText = line.moves[ply];
      const sideToMove = probe.turn();
      const beforeFen = probe.fen();
      const test = new Chess(beforeFen);
      const answerMove = test.move(answerText);

      if (!answerMove) {
        break;
      }

      // Skip the very first move from the starting position. Everything else becomes a puzzle.
      if (ply > 0) {
        const key = `${beforeFen}|${sideToMove}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            id: key,
            fen: beforeFen,
            side: sideToMove,
            moveNumber: Math.floor(ply / 2) + 1,
            answers: [],
            lineNames: [],
            tags: new Set(),
            beforeMoves: [...played]
          });
        }

        const puzzle = grouped.get(key);
        if (!puzzle.answers.some((answer) => normalizeSan(answer.san) === normalizeSan(answerMove.san))) {
          puzzle.answers.push({ san: answerMove.san, from: answerMove.from, to: answerMove.to });
        }
        if (!puzzle.lineNames.includes(line.name)) puzzle.lineNames.push(line.name);
        if (line.tag) puzzle.tags.add(line.tag);
      }

      probe.move(answerText);
      played.push(answerMove.san);
    }
  }

  return [...grouped.values()].map((puzzle) => ({
    ...puzzle,
    tags: [...puzzle.tags],
    label: puzzle.tags.size ? [...puzzle.tags].slice(0, 2).join(" / ") : puzzle.lineNames.slice(0, 1).join(" / ")
  }));
}

function filteredPuzzleBank() {
  const side = puzzleSideEl?.value || "all";
  return puzzleBank.filter((puzzle) => side === "all" || puzzle.side === side);
}

function updatePuzzleCount() {
  if (!puzzleCountEl) return;
  const bank = filteredPuzzleBank();
  puzzleCountEl.textContent = `${bank.length} puzzles`;
}

function updatePuzzleScore(extraClass = "") {
  if (!puzzleScoreEl) return;
  puzzleScoreEl.classList.remove("good", "bad");
  if (extraClass) puzzleScoreEl.classList.add(extraClass);
  const accuracy = puzzleAttempts ? Math.round((puzzleCorrect / puzzleAttempts) * 100) : 0;
  puzzleScoreEl.textContent = `Score ${puzzleCorrect}/${puzzleAttempts} • ${accuracy}% • Streak ${puzzleStreak}`;
}

function puzzleAnswerText() {
  return currentPuzzle?.answers?.map((answer) => answer.san).join(" / ") || "—";
}

function puzzleSideName(side = currentPuzzle?.side) {
  return side === "w" ? "White" : "Black";
}

function pieceNameForHint(piece) {
  if (!piece) return "piece";
  const names = { p: "pawn", n: "knight", b: "bishop", r: "rook", q: "queen", k: "king" };
  return names[piece.type] || "piece";
}

function puzzleMovePreview() {
  if (!currentPuzzle?.beforeMoves?.length) return "Starting position";
  return currentPuzzle.beforeMoves.join(" ");
}

function updatePuzzleStatus() {
  if (!currentPuzzle) return;
  const answer = puzzleAnswerText();
  const side = puzzleSideName();

  if (modeChipEl) modeChipEl.textContent = "Puzzle mode";
  if (lineCountEl) lineCountEl.textContent = `${filteredPuzzleBank().length} puzzles`;
  if (branchLineEl) branchLineEl.textContent = `${currentPuzzle.label} • move ${currentPuzzle.moveNumber}`;

  trainerStatusEl.textContent = puzzleFeedback || `${side} to move — find the aggressive book move.`;
  bookStatusEl.textContent = puzzleDetails || (puzzleSolved
    ? `Answer: ${answer}`
    : `Opening puzzle from: ${currentPuzzle.lineNames.slice(0, 2).join(" / ")}`);
  engineStatusEl.textContent = "Puzzle mode: Stockfish is paused. No opponent reply.";
  moveListEl.textContent = puzzleWrongMove
    ? `Wrong move played: ${puzzleWrongMove.san} • Position after: ${puzzleMovePreview()}`
    : `Position after: ${puzzleMovePreview()}`;
  updatePuzzleScore();
}

function startPuzzleMode() {
  clearTimeout(opponentTimer);
  clearTimeout(puzzleTimer);
  cancelEngineSearch();
  puzzleMode = true;
  puzzleCorrect = 0;
  puzzleAttempts = 0;
  puzzleStreak = 0;
  puzzleFeedback = "";
  puzzleDetails = "";
  puzzleHintLevel = 0;
  puzzleHintMove = null;
  puzzleWrongMove = null;
  updatePuzzleScore();
  nextPuzzle();
}

function nextPuzzle() {
  if (!puzzleBank.length) puzzleBank = buildOpeningPuzzles();
  const bank = filteredPuzzleBank();

  if (!bank.length) {
    puzzleFeedback = "No puzzles found for that side.";
    puzzleDetails = "Try changing Puzzle side to All.";
    updatePuzzleCount();
    updatePuzzleScore("bad");
    return;
  }

  clearTimeout(opponentTimer);
  clearTimeout(puzzleTimer);
  cancelEngineSearch();
  puzzleMode = true;
  currentPuzzle = bank[Math.floor(Math.random() * bank.length)];
  puzzleSolved = false;
  puzzleFeedback = "";
  puzzleDetails = "";
  puzzleHintLevel = 0;
  puzzleHintMove = null;
  puzzleWrongMove = null;
  game = new Chess(currentPuzzle.fen);
  playerColor = currentPuzzle.side;
  boardFlipped = playerColor === "b";
  selectedSquare = null;
  lastMove = null;
  arrows = [];
  draftArrow = null;
  playerSideEl.value = playerColor === "w" ? "White" : "Black";
  renderBoard();
  updatePuzzleCount();
  updatePuzzleStatus();
}

function showPuzzleAnswer() {
  if (!puzzleMode || !currentPuzzle) {
    startPuzzleMode();
    return;
  }
  const firstAnswer = currentPuzzle.answers[0];
  puzzleHintMove = firstAnswer ? { from: firstAnswer.from, to: firstAnswer.to } : null;
  puzzleHintLevel = 3;
  puzzleFeedback = `Answer: ${puzzleAnswerText()}`;
  puzzleDetails = firstAnswer
    ? `Correct move starts on ${firstAnswer.from} and lands on ${firstAnswer.to}.`
    : "No answer found for this puzzle.";
  puzzleStreak = 0;
  selectedSquare = null;
  renderBoard();
  updatePuzzleScore("bad");
  updatePuzzleStatus();
}

function exitPuzzleMode() {
  puzzleMode = false;
  currentPuzzle = null;
  puzzleSolved = false;
  puzzleFeedback = "";
  puzzleDetails = "";
  puzzleHintLevel = 0;
  puzzleHintMove = null;
  puzzleWrongMove = null;
  clearTimeout(puzzleTimer);
  if (modeChipEl) modeChipEl.textContent = "Aggressive only";
  newGame();
}

function playPuzzleMove(from, to) {
  if (!currentPuzzle || puzzleSolved) return;

  puzzleWrongMove = null;
  const move = makeMove({ from, to, promotion: "q" });

  if (!move) {
    selectedSquare = null;
    puzzleStreak = 0;
    puzzleFeedback = "Illegal move.";
    puzzleDetails = "That move is not legal in this position. Try another move or tap Hint.";
    renderBoard();
    updatePuzzleScore("bad");
    updatePuzzleStatus();
    return;
  }

  const correct = currentPuzzle.answers.some((answer) => normalizeSan(answer.san) === normalizeSan(move.san));
  puzzleAttempts += 1;

  if (!correct) {
    puzzleWrongMove = { from: move.from, to: move.to, san: move.san };
    game.undo();
    selectedSquare = null;
    lastMove = null;
    puzzleStreak = 0;
    puzzleFeedback = `Wrong move: ${move.san}`;
    puzzleDetails = "That was legal, but not the aggressive book move. Tap Hint for help or Show answer.";
    renderBoard();
    updatePuzzleScore("bad");
    updatePuzzleStatus();
    return;
  }

  puzzleCorrect += 1;
  puzzleStreak += 1;
  puzzleSolved = true;
  puzzleHintMove = null;
  puzzleWrongMove = null;
  puzzleHintLevel = 0;
  puzzleFeedback = `Correct: ${move.san}. Next puzzle loading...`;
  puzzleDetails = "Nice. You found the book move.";
  selectedSquare = null;
  lastMove = { from: move.from, to: move.to };
  renderBoard();
  updatePuzzleScore("good");
  updatePuzzleStatus();
  puzzleTimer = setTimeout(nextPuzzle, 850);
}

function populateOpenings() {
  openingChoiceEl.innerHTML = repertoires.map((rep, index) => {
    const side = rep.playAs === "w" ? "White" : "Black";
    return `<option value="${index}">${escapeHtml(rep.name)} (${side}, ${rep.lines.length} lines)</option>`;
  }).join("");
}

function boardOrientation() {
  return {
    displayFiles: boardFlipped ? [...files].reverse() : files,
    displayRanks: boardFlipped ? ranks : [...ranks].reverse()
  };
}

function squareCenter(square, displayFiles, displayRanks) {
  const file = square[0];
  const rank = square[1];
  const col = displayFiles.indexOf(file);
  const row = displayRanks.indexOf(rank);
  if (col < 0 || row < 0) return null;
  return { x: (col + 0.5) * 12.5, y: (row + 0.5) * 12.5 };
}

function renderArrow(from, to, displayFiles, displayRanks, className = "") {
  const start = squareCenter(from, displayFiles, displayRanks);
  const end = squareCenter(to, displayFiles, displayRanks);
  if (!start || !end || from === to) return "";

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy) || 1;
  const shrink = 4.7;
  const targetX = end.x - (dx / length) * shrink;
  const targetY = end.y - (dy / length) * shrink;

  return `<line class="board-arrow ${className}" x1="${start.x}" y1="${start.y}" x2="${targetX}" y2="${targetY}" />`;
}

function renderArrows(displayFiles, displayRanks) {
  const active = [...arrows];
  if (draftArrow && draftArrow.from !== draftArrow.to) active.push({ ...draftArrow, draft: true });

  return `
    <svg class="board-arrows" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <marker id="arrow-head" viewBox="0 0 10 10" refX="7.9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z"></path>
        </marker>
      </defs>
      ${active.map((arrow) => renderArrow(arrow.from, arrow.to, displayFiles, displayRanks, arrow.draft ? "draft" : "")).join("")}
    </svg>`;
}

function pieceHtml(piece) {
  if (!piece) return "";
  const key = piece.color + piece.type;
  return `
    <span class="piece-wrap" aria-hidden="true">
      <img class="piece-img" src="${PIECE_URLS[key]}" draggable="false" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">
      <span class="piece-fallback">${PIECE_TEXT[key]}</span>
    </span>`;
}

function renderBoard() {
  const { displayFiles, displayRanks } = boardOrientation();
  const legalTargets = selectedSquare && game.turn() === playerColor && !engineThinking
    ? game.moves({ square: selectedSquare, verbose: true }).map((move) => move.to)
    : [];

  const squares = displayRanks.map((rank, row) => displayFiles.map((file, col) => {
    const square = `${file}${rank}`;
    const piece = game.get(square);
    const tone = (row + col) % 2 === 0 ? "light" : "dark";
    const classes = ["square", tone];

    if (piece) {
      classes.push(piece.color === "w" ? "white-piece" : "black-piece");
      classes.push(`piece-${piece.color}${piece.type}`);
    }
    if (square === selectedSquare) classes.push("selected");
    if (legalTargets.includes(square)) classes.push("legal");
    if (lastMove && (lastMove.from === square || lastMove.to === square)) classes.push("last-move");
    if (puzzleWrongMove && (puzzleWrongMove.from === square || puzzleWrongMove.to === square)) classes.push("wrong-move");
    if (puzzleHintMove && puzzleHintMove.from === square) classes.push("hint-from");
    if (puzzleHintMove && puzzleHintLevel >= 2 && puzzleHintMove.to === square) classes.push("hint-to");

    return `<button class="${classes.join(" ")}" data-square="${square}" type="button" aria-label="${square}">
      ${pieceHtml(piece)}
      ${col === 0 ? `<span class="coord rank-label">${rank}</span>` : ""}
      ${row === 7 ? `<span class="coord file-label">${file}</span>` : ""}
    </button>`;
  }).join("")).join("");

  boardEl.innerHTML = `${renderArrows(displayFiles, displayRanks)}<div class="board-grid">${squares}</div>`;
}

function updateStatus() {
  if (puzzleMode) {
    updatePuzzleStatus();
    return;
  }
  if (modeChipEl) modeChipEl.textContent = "Aggressive only";
  const bookMoves = currentBookMoves();
  const side = game.turn() === "w" ? "White" : "Black";

  if (game.isCheckmate()) {
    trainerStatusEl.textContent = `${side} is checkmated.`;
  } else if (game.isDraw()) {
    trainerStatusEl.textContent = "Game drawn.";
  } else if (game.isGameOver()) {
    trainerStatusEl.textContent = "Game over.";
  } else if (game.turn() === playerColor) {
    trainerStatusEl.textContent = game.inCheck() ? "Your move — you are in check." : "Your move.";
  } else {
    trainerStatusEl.textContent = engineThinking ? "Stockfish is thinking..." : "Opponent move.";
  }

  if (bookMoves.length) {
    const owner = game.turn() === playerColor ? "Your sharp book move" : "Book reply";
    bookStatusEl.textContent = `${owner}: ${formatMoves(bookMoves)}`;
  } else if (isBookIntact()) {
    bookStatusEl.textContent = "Branch complete. Stockfish will calculate now.";
  } else {
    bookStatusEl.textContent = "Out of book. Stockfish will calculate from here.";
  }

  if (lineCountEl) lineCountEl.textContent = `${selectedRepertoire.lines.length} sharp lines`;
  if (branchLineEl) branchLineEl.textContent = currentBranchName();
  moveListEl.textContent = game.history().length ? game.pgn() : "Moves will appear here.";
}

function setEngineStatus(message) {
  if (engineStatusEl) engineStatusEl.textContent = message;
}

function currentPageFromHash() {
  const page = location.hash.replace("#", "") || "practice";
  return pageEls.some((el) => el.dataset.page === page) ? page : "practice";
}

function showPage(page) {
  pageEls.forEach((el) => el.classList.toggle("active", el.dataset.page === page));
  pageLinkEls.forEach((el) => el.classList.toggle("active", el.dataset.navPage === page));
}

function initStockfish() {
  if (location.protocol === "file:") {
    engineFailed = true;
    setEngineStatus("Open with npm start / localhost so Stockfish can load.");
    return;
  }

  try {
    engine = new Worker("./node_modules/stockfish/bin/stockfish-18-lite-single.js");
  } catch {
    engineFailed = true;
    setEngineStatus("Stockfish failed to start. Using fast legal replies.");
    return;
  }

  engine.onmessage = (event) => {
    const line = String(event.data || "");

    if (line === "uciok") {
      applyEngineStrengthOptions();
      sendEngine("isready");
      return;
    }

    if (line === "readyok") {
      engineReady = true;
      engineFailed = false;
      setEngineStatus(`Stockfish ready: ${engineStrengthLabel()}.`);
      if (game.turn() !== playerColor && !engineThinking) scheduleOpponentMove(160);
      return;
    }

    if (line.startsWith("bestmove ")) {
      if (!activeEngineSearchToken) return;
      const bestMove = line.split(/\s+/)[1];
      activeEngineSearchToken = 0;
      engineThinking = false;
      playUciMove(bestMove);
    }
  };

  engine.onerror = () => {
    engineFailed = true;
    engineReady = false;
    engineThinking = false;
    setEngineStatus("Stockfish loading error. Using legal replies.");
  };

  sendEngine("uci");
}

function sendEngine(command) {
  if (engine) engine.postMessage(command);
}

function isMaxEngineStrength() {
  return engineStrengthEl.value === "max";
}

function engineStrengthLabel() {
  return isMaxEngineStrength() ? "max" : `Elo ${engineStrengthEl.value}`;
}

function applyEngineStrengthOptions() {
  sendEngine("setoption name Threads value 1");
  sendEngine("setoption name Hash value 8");

  if (isMaxEngineStrength()) {
    sendEngine("setoption name UCI_LimitStrength value false");
    sendEngine("setoption name Skill Level value 20");
    return;
  }

  sendEngine("setoption name UCI_LimitStrength value true");
  sendEngine(`setoption name UCI_Elo value ${engineStrengthEl.value}`);
}

function setEngineStrength() {
  if (!engine) return;
  applyEngineStrengthOptions();
  setEngineStatus(`Stockfish level set: ${engineStrengthLabel()}.`);
}

function cancelEngineSearch() {
  if (engineThinking) {
    try { sendEngine("stop"); } catch {}
  }
  engineThinking = false;
  activeEngineSearchToken = 0;
}

function newGame() {
  puzzleMode = false;
  currentPuzzle = null;
  puzzleSolved = false;
  puzzleFeedback = "";
  clearTimeout(puzzleTimer);
  clearTimeout(opponentTimer);
  cancelEngineSearch();
  game = new Chess();
  selectedSquare = null;
  lastMove = null;
  arrows = [];
  draftArrow = null;
  selectedRepertoire = repertoires[Number(openingChoiceEl.value) || 0];
  playerColor = selectedRepertoire.playAs;
  boardFlipped = playerColor === "b";
  playerSideEl.value = playerColor === "w" ? "White" : "Black";
  renderBoard();
  updateStatus();
  if (game.turn() !== playerColor) scheduleOpponentMove(220);
}

function flipBoard() {
  boardFlipped = !boardFlipped;
  renderBoard();
}

function undoMovePair() {
  if (puzzleMode && currentPuzzle) {
    clearTimeout(puzzleTimer);
    game = new Chess(currentPuzzle.fen);
    selectedSquare = null;
    lastMove = null;
    puzzleSolved = false;
    puzzleFeedback = "Position reset.";
    puzzleDetails = "Try the book move again. Tap Hint if stuck.";
    puzzleHintLevel = 0;
    puzzleHintMove = null;
    puzzleWrongMove = null;
    renderBoard();
    updatePuzzleStatus();
    return;
  }
  clearTimeout(opponentTimer);
  cancelEngineSearch();
  selectedSquare = null;

  if (game.history().length === 0) return;
  game.undo();
  if (game.history().length > 0 && game.turn() !== playerColor) game.undo();

  lastMove = null;
  renderBoard();
  updateStatus();
  if (!game.isGameOver() && game.turn() !== playerColor) scheduleOpponentMove(200);
}

function makeMove(move) {
  try {
    return game.move(move);
  } catch {
    return null;
  }
}

function playPlayerMove(from, to) {
  if (puzzleMode) {
    playPuzzleMove(from, to);
    return;
  }
  const bookMoves = currentBookMoves();
  const move = makeMove({ from, to, promotion: "q" });

  if (!move) {
    selectedSquare = null;
    renderBoard();
    updateStatus();
    return;
  }

  selectedSquare = null;
  lastMove = { from: move.from, to: move.to };
  renderBoard();

  if (bookMoves.length && !isMoveInBook(move.san, bookMoves)) {
    bookStatusEl.textContent = `Legal, but sharp book wanted: ${formatMoves(bookMoves)}.`;
  }

  updateStatus();
  if (!game.isGameOver()) scheduleOpponentMove(180);
}

function finishOpponentMove(move) {
  lastMove = { from: move.from, to: move.to };
  renderBoard();
  updateStatus();
}

function playOpponentMove() {
  if (puzzleMode) return;
  if (game.isGameOver() || game.turn() === playerColor) {
    updateStatus();
    return;
  }

  const bookMove = chooseBookMove();
  if (bookMove) {
    const move = makeMove(bookMove);
    if (move) {
      finishOpponentMove(move);
      return;
    }
  }

  requestStockfishMove();
}

function scheduleOpponentMove(delay = 180) {
  clearTimeout(opponentTimer);
  opponentTimer = setTimeout(playOpponentMove, delay);
}

function requestStockfishMove() {
  const legal = game.moves({ verbose: true });
  if (!legal.length) {
    updateStatus();
    return;
  }

  if (engineFailed || !engine || !engineReady) {
    const moveInfo = legal[Math.floor(Math.random() * legal.length)];
    const move = makeMove({ from: moveInfo.from, to: moveInfo.to, promotion: moveInfo.promotion || "q" });
    if (move) finishOpponentMove(move);
    return;
  }

  engineThinking = true;
  activeEngineSearchToken = Date.now();
  updateStatus();
  sendEngine(`position fen ${game.fen()}`);
  sendEngine(`go movetime ${isMaxEngineStrength() ? 450 : 120}`);
}

function playUciMove(uci) {
  if (!uci || uci === "(none)") {
    updateStatus();
    return;
  }

  const move = makeMove({
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.slice(4, 5) || "q"
  });

  if (move) finishOpponentMove(move);
  else updateStatus();
}

function squareFromPointer(event) {
  const target = event.target.closest?.("[data-square]");
  if (target) return target.dataset.square;

  const rect = boardEl.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (x < 0 || y < 0 || x > rect.width || y > rect.height) return null;

  const { displayFiles, displayRanks } = boardOrientation();
  const col = Math.min(7, Math.max(0, Math.floor((x / rect.width) * 8)));
  const row = Math.min(7, Math.max(0, Math.floor((y / rect.height) * 8)));
  return `${displayFiles[col]}${displayRanks[row]}`;
}

function createDragGhost(square, event) {
  const piece = game.get(square);
  if (!piece) return;
  const key = piece.color + piece.type;
  dragGhost = document.createElement("div");
  dragGhost.className = "drag-ghost";
  dragGhost.innerHTML = pieceHtml(piece);
  boardEl.appendChild(dragGhost);
  moveDragGhost(event);
}

function moveDragGhost(event) {
  if (!dragGhost) return;
  const rect = boardEl.getBoundingClientRect();
  dragGhost.style.transform = `translate3d(${event.clientX - rect.left}px, ${event.clientY - rect.top}px, 0) translate(-50%, -50%)`;
}

function clearDragGhost() {
  if (dragGhost) dragGhost.remove();
  dragGhost = null;
}

function handlePointerDown(event) {
  if (event.button && event.button !== 0 && event.button !== 2) return;
  const square = squareFromPointer(event);
  if (!square) return;

  const piece = game.get(square);
  const rightClick = event.button === 2 || event.buttons === 2;

  pointerState = {
    from: square,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    rightClick,
    canMove: Boolean(piece && piece.color === playerColor && game.turn() === playerColor && !engineThinking)
  };

  if (rightClick) {
    draftArrow = { from: square, to: square };
    renderBoard();
    event.preventDefault();
    return;
  }

  if (pointerState.canMove) boardEl.setPointerCapture?.(event.pointerId);
}

function handlePointerMove(event) {
  if (!pointerState) return;

  const distance = Math.hypot(event.clientX - pointerState.startX, event.clientY - pointerState.startY);
  if (distance > 6) pointerState.moved = true;

  const square = squareFromPointer(event);

  if (pointerState.rightClick) {
    if (square && square !== draftArrow?.to) {
      draftArrow = { from: pointerState.from, to: square };
      renderBoard();
    }
    return;
  }

  if (pointerState.canMove && pointerState.moved) {
    if (!dragGhost) createDragGhost(pointerState.from, event);
    moveDragGhost(event);
  }
}

function handlePointerUp(event) {
  if (!pointerState) return;

  const from = pointerState.from;
  const to = squareFromPointer(event);
  const wasRightClick = pointerState.rightClick;
  const moved = pointerState.moved;
  const canMove = pointerState.canMove;

  pointerState = null;
  clearDragGhost();

  if (wasRightClick) {
    if (draftArrow?.from && draftArrow?.to && draftArrow.from !== draftArrow.to) {
      const existing = arrows.findIndex((a) => a.from === draftArrow.from && a.to === draftArrow.to);
      if (existing >= 0) arrows.splice(existing, 1);
      else arrows.push({ from: draftArrow.from, to: draftArrow.to });
    }
    draftArrow = null;
    renderBoard();
    return;
  }

  if (moved && canMove && to && to !== from) {
    playPlayerMove(from, to);
    return;
  }

  handleTapSquare(from);
}

function handleTapSquare(square) {
  if (game.isGameOver() || game.turn() !== playerColor || engineThinking) return;
  const piece = game.get(square);

  if (!selectedSquare) {
    if (piece && piece.color === playerColor) {
      selectedSquare = square;
      renderBoard();
      updateStatus();
    }
    return;
  }

  if (square === selectedSquare) {
    selectedSquare = null;
    renderBoard();
    updateStatus();
    return;
  }

  if (piece && piece.color === playerColor) {
    selectedSquare = square;
    renderBoard();
    updateStatus();
    return;
  }

  playPlayerMove(selectedSquare, square);
}

function showPuzzleHint() {
  if (!puzzleMode || !currentPuzzle) {
    startPuzzleMode();
    return;
  }

  const firstAnswer = currentPuzzle.answers[0];
  if (!firstAnswer) {
    puzzleFeedback = "No hint available for this puzzle.";
    puzzleDetails = "Use Show answer or skip to the next puzzle.";
    updatePuzzleStatus();
    return;
  }

  puzzleWrongMove = null;
  puzzleHintLevel = Math.min(puzzleHintLevel + 1, 3);
  puzzleHintMove = { from: firstAnswer.from, to: firstAnswer.to };
  const piece = game.get(firstAnswer.from);
  const pieceName = pieceNameForHint(piece);

  if (puzzleHintLevel === 1) {
    puzzleFeedback = `Hint 1: move the ${pieceName} from ${firstAnswer.from}.`;
    puzzleDetails = "The starting square is highlighted blue.";
  } else if (puzzleHintLevel === 2) {
    puzzleFeedback = `Hint 2: move it to ${firstAnswer.to}.`;
    puzzleDetails = "Both the starting square and target square are highlighted blue.";
  } else {
    puzzleFeedback = `Hint 3: play ${puzzleAnswerText()}.`;
    puzzleDetails = "That is the exact aggressive book move for this opening puzzle.";
  }

  selectedSquare = null;
  renderBoard();
  updatePuzzleStatus();
}

function showHint() {
  if (puzzleMode && currentPuzzle) {
    showPuzzleHint();
    return;
  }
  const moves = currentBookMoves();
  if (moves.length) {
    bookStatusEl.textContent = `Hint: ${formatMoves(moves)}`;
  } else {
    bookStatusEl.textContent = "No book hint here. Use normal chess principles.";
  }
}

function clearArrows() {
  arrows = [];
  draftArrow = null;
  renderBoard();
}

function wireEvents() {
  openingChoiceEl.addEventListener("change", newGame);
  engineStrengthEl.addEventListener("change", setEngineStrength);
  newGameEl.addEventListener("click", newGame);
  flipBoardEl.addEventListener("click", flipBoard);
  undoMoveEl.addEventListener("click", undoMovePair);
  if (themeToggleEl) themeToggleEl.addEventListener("click", toggleTheme);
  if (hintEl) hintEl.addEventListener("click", showHint);
  if (clearArrowsEl) clearArrowsEl.addEventListener("click", clearArrows);
  if (startPuzzlesEl) startPuzzlesEl.addEventListener("click", startPuzzleMode);
  if (nextPuzzleEl) nextPuzzleEl.addEventListener("click", nextPuzzle);
  if (answerPuzzleEl) answerPuzzleEl.addEventListener("click", showPuzzleAnswer);
  if (puzzleHintEl) puzzleHintEl.addEventListener("click", showPuzzleHint);
  if (exitPuzzlesEl) exitPuzzlesEl.addEventListener("click", exitPuzzleMode);
  if (puzzleSideEl) puzzleSideEl.addEventListener("change", () => {
    updatePuzzleCount();
    if (puzzleMode) nextPuzzle();
  });
  if (navPuzzleStartEl) navPuzzleStartEl.addEventListener("click", (event) => {
    event.preventDefault();
    location.hash = "practice";
    startPuzzleMode();
  });

  boardEl.addEventListener("pointerdown", handlePointerDown);
  boardEl.addEventListener("pointermove", handlePointerMove);
  boardEl.addEventListener("pointerup", handlePointerUp);
  boardEl.addEventListener("pointercancel", () => {
    pointerState = null;
    draftArrow = null;
    clearDragGhost();
    renderBoard();
  });
  boardEl.addEventListener("contextmenu", (event) => event.preventDefault());

  window.addEventListener("hashchange", () => showPage(currentPageFromHash()));
}

applyTheme(readSavedTheme(), false);
populateOpenings();
wireEvents();
showPage(currentPageFromHash());
puzzleBank = buildOpeningPuzzles();
updatePuzzleCount();
updatePuzzleScore();
initStockfish();
newGame();
