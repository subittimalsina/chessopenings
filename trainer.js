import { Chess } from "./node_modules/chess.js/dist/esm/chess.js";

const trainingLines = [
  {
    group: "White",
    name: "Italian Game - Giuoco Piano",
    playAs: "w",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d3"]
  },
  {
    group: "White",
    name: "Italian Game - Evans Gambit",
    playAs: "w",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4", "Bxb4", "c3", "Ba5", "d4"]
  },
  {
    group: "White",
    name: "Italian Game - Two Knights Calm Line",
    playAs: "w",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "d3"]
  },
  {
    group: "White",
    name: "Anti-Sicilian - Rossolimo",
    playAs: "w",
    moves: ["e4", "c5", "Nf3", "Nc6", "Bb5"]
  },
  {
    group: "White",
    name: "Anti-Sicilian - Alapin",
    playAs: "w",
    moves: ["e4", "c5", "c3"]
  },
  {
    group: "White",
    name: "French Defense - Exchange",
    playAs: "w",
    moves: ["e4", "e6", "d4", "d5", "exd5", "exd5", "Nf3"]
  },
  {
    group: "White",
    name: "French Defense - Space Grab",
    playAs: "w",
    moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "e5"]
  },
  {
    group: "White",
    name: "Caro-Kann - Advance",
    playAs: "w",
    moves: ["e4", "c6", "d4", "d5", "e5", "Bf5", "Nf3", "e6", "Be2"]
  },
  {
    group: "White",
    name: "Scandinavian - Main Simple Line",
    playAs: "w",
    moves: ["e4", "d5", "exd5", "Qxd5", "Nc3", "Qa5", "d4", "Nf6", "Nf3"]
  },
  {
    group: "White",
    name: "Pirc / Modern - Austrian Idea",
    playAs: "w",
    moves: ["e4", "d6", "d4", "Nf6", "Nc3", "g6", "f4"]
  },
  {
    group: "Black vs e4",
    name: "Caro-Kann - Advance",
    playAs: "b",
    moves: ["e4", "c6", "d4", "d5", "e5", "Bf5", "Nf3", "e6", "Be2", "c5"]
  },
  {
    group: "Black vs e4",
    name: "Caro-Kann - Classical",
    playAs: "b",
    moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bf5"]
  },
  {
    group: "Black vs e4",
    name: "Caro-Kann - Exchange",
    playAs: "b",
    moves: ["e4", "c6", "d4", "d5", "exd5", "cxd5", "Bd3", "Nc6"]
  },
  {
    group: "Black vs e4",
    name: "Caro-Kann - Panov",
    playAs: "b",
    moves: ["e4", "c6", "d4", "d5", "exd5", "cxd5", "c4", "Nf6", "Nc3", "e6"]
  },
  {
    group: "Black vs e4",
    name: "Sicilian Dragon-ish Backup",
    playAs: "b",
    moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6"]
  },
  {
    group: "Black vs d4",
    name: "QGD - Normal",
    playAs: "b",
    moves: ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O"]
  },
  {
    group: "Black vs d4",
    name: "QGD - Exchange",
    playAs: "b",
    moves: ["d4", "d5", "c4", "e6", "cxd5", "exd5"]
  },
  {
    group: "Black vs d4",
    name: "London System",
    playAs: "b",
    moves: ["d4", "d5", "Nf3", "Nf6", "Bf4", "e6"]
  },
  {
    group: "Black vs d4",
    name: "Aggressive anti-London setup",
    playAs: "b",
    moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "Nf3", "Nc6", "c3", "Qb6"]
  },
  {
    group: "Black vs d4",
    name: "London with early e3 and c3",
    playAs: "b",
    moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "c3", "Nc6", "Nd2", "Qb6"]
  },
  {
    group: "Black vs d4",
    name: "Super passive London",
    playAs: "b",
    moves: ["d4", "d5", "Bf4", "Nf6", "e3", "e6", "Nf3", "c5"]
  },
  {
    group: "Black vs d4",
    name: "London bishop pin idea",
    playAs: "b",
    moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "Nf3", "Nc6", "Bd3", "Bg4"]
  },
  {
    group: "Black vs c4",
    name: "English into QGD",
    playAs: "b",
    moves: ["c4", "e6", "Nc3", "d5"]
  },
  {
    group: "Black vs Nf3",
    name: "Reti setup",
    playAs: "b",
    moves: ["Nf3", "d5", "g3", "Nf6", "Bg2", "e6"]
  },
  {
    group: "Black vs d4",
    name: "King's Indian later weapon",
    playAs: "b",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7"]
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
const clearArrowsEl = document.querySelector("#clear-arrows");
const clearPremoveEl = document.querySelector("#clear-premove");
const trainerStatusEl = document.querySelector("#trainer-status");
const bookStatusEl = document.querySelector("#book-status");
const premoveStatusEl = document.querySelector("#premove-status");
const engineStatusEl = document.querySelector("#engine-status");
const moveListEl = document.querySelector("#move-list");
const pageEls = [...document.querySelectorAll("[data-page]")];
const pageLinkEls = [...document.querySelectorAll("[data-nav-page]")];

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];
const pieceGlyphs = {
  wp: "&#9817;",
  wn: "&#9816;",
  wb: "&#9815;",
  wr: "&#9814;",
  wq: "&#9813;",
  wk: "&#9812;",
  bp: "&#9823;",
  bn: "&#9822;",
  bb: "&#9821;",
  br: "&#9820;",
  bq: "&#9819;",
  bk: "&#9818;"
};

let game = new Chess();
let selectedLine = trainingLines[0];
let playerColor = selectedLine.playAs;
let boardFlipped = false;
let selectedSquare = null;
let lastMove = null;
let engine = null;
let engineReady = false;
let engineFailed = false;
let engineThinking = false;
let opponentTimer = 0;
let engineSearchToken = 0;
let activeEngineSearchToken = 0;
let arrows = [];
let draftArrow = null;
let pendingPremove = null;
let pointerState = null;
let dragTargetSquare = null;
let dragPiece = null;
let suppressNextContextMenuClear = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readSavedTheme() {
  try {
    return localStorage.getItem("chess-opening-theme") || "light";
  } catch (error) {
    return "light";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("chess-opening-theme", theme);
  } catch (error) {
    // Private browsing can block storage; the theme still works for this page load.
  }
}

function applyTheme(theme, persist = true) {
  const cleanTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = cleanTheme;
  themeToggleEl.textContent = cleanTheme === "dark" ? "Light theme" : "Dark theme";
  if (persist) {
    saveTheme(cleanTheme);
  }
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

function normalizeSan(move) {
  return String(move).replace(/[+#?!]+/g, "");
}

function currentBookMove() {
  const history = game.history();

  for (let index = 0; index < history.length; index += 1) {
    if (normalizeSan(history[index]) !== normalizeSan(selectedLine.moves[index])) {
      return null;
    }
  }

  return selectedLine.moves[history.length] || null;
}

function isBookIntact() {
  const history = game.history();

  for (let index = 0; index < history.length; index += 1) {
    if (normalizeSan(history[index]) !== normalizeSan(selectedLine.moves[index])) {
      return false;
    }
  }

  return history.length <= selectedLine.moves.length;
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

  if (col < 0 || row < 0) {
    return null;
  }

  return {
    x: (col + 0.5) * 12.5,
    y: (row + 0.5) * 12.5
  };
}

function renderArrow(from, to, displayFiles, displayRanks, className = "") {
  const start = squareCenter(from, displayFiles, displayRanks);
  const end = squareCenter(to, displayFiles, displayRanks);

  if (!start || !end || from === to) {
    return "";
  }

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy) || 1;
  const shrink = 4.8;
  const targetX = end.x - (dx / length) * shrink;
  const targetY = end.y - (dy / length) * shrink;

  return `<line class="board-arrow ${className}" x1="${start.x}" y1="${start.y}" x2="${targetX}" y2="${targetY}" />`;
}

function renderArrows(displayFiles, displayRanks) {
  const activeArrows = [...arrows];

  if (draftArrow && draftArrow.to && draftArrow.from !== draftArrow.to) {
    activeArrows.push({ ...draftArrow, draft: true });
  }

  return `
    <svg class="board-arrows" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <marker id="arrow-head" viewBox="0 0 10 10" refX="7.8" refY="5" markerWidth="3.6" markerHeight="3.6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z"></path>
        </marker>
      </defs>
      ${activeArrows.map((arrow) => renderArrow(arrow.from, arrow.to, displayFiles, displayRanks, arrow.draft ? "draft" : "")).join("")}
    </svg>
  `;
}

function toggleArrow(from, to) {
  const existingIndex = arrows.findIndex((arrow) => arrow.from === from && arrow.to === to);

  if (existingIndex >= 0) {
    arrows.splice(existingIndex, 1);
  } else {
    arrows.push({ from, to });
  }
}

function clearArrows() {
  arrows = [];
  draftArrow = null;
  renderBoard();
}

function cancelBoardInteraction() {
  pointerState = null;
  draftArrow = null;
  dragTargetSquare = null;
  dragPiece = null;
  selectedSquare = null;
  renderBoard();
}

function setPremoveStatus(message = "") {
  premoveStatusEl.textContent = message;
  premoveStatusEl.hidden = !message;
}

function clearPremove(message = "") {
  pendingPremove = null;
  setPremoveStatus(message);
  renderBoard();
}

function populateOpenings() {
  openingChoiceEl.innerHTML = trainingLines
    .map((line, index) => {
      const side = line.playAs === "w" ? "White" : "Black";
      return `<option value="${index}">${escapeHtml(line.group)} - ${escapeHtml(line.name)} (${side})</option>`;
    })
    .join("");
}

function setEngineStatus(message) {
  engineStatusEl.textContent = message;
}

function currentPageFromHash() {
  const page = location.hash.replace("#", "") || "practice";
  return pageEls.some((element) => element.dataset.page === page) ? page : "practice";
}

function showPage(page) {
  pageEls.forEach((element) => {
    element.classList.toggle("active", element.dataset.page === page);
  });

  pageLinkEls.forEach((element) => {
    element.classList.toggle("active", element.dataset.navPage === page);
  });
}

function initStockfish() {
  if (location.protocol === "file:") {
    engineFailed = true;
    setEngineStatus("Open this from http://localhost so Stockfish 18 can load its WASM file.");
    return;
  }

  try {
    engine = new Worker("./node_modules/stockfish/bin/stockfish-18-lite-single.js");
  } catch (error) {
    engineFailed = true;
    setEngineStatus("Stockfish 18 could not start. The trainer will use legal fallback moves.");
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
      setEngineStatus(`Stockfish 18 ready at ${engineStrengthLabel()}.`);
      if (game.turn() !== playerColor && !engineThinking) {
        scheduleOpponentMove(180);
      }
      return;
    }

    if (line.startsWith("bestmove ")) {
      if (!activeEngineSearchToken) {
        return;
      }

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
    setEngineStatus("Stockfish 18 hit a loading error. The trainer will use legal fallback moves.");
  };

  sendEngine("uci");
}

function sendEngine(command) {
  if (engine) {
    engine.postMessage(command);
  }
}

function isMaxEngineStrength() {
  return engineStrengthEl.value === "max";
}

function engineStrengthLabel() {
  return isMaxEngineStrength() ? "maximum strength" : `Elo ${engineStrengthEl.value}`;
}

function applyEngineStrengthOptions() {
  if (isMaxEngineStrength()) {
    sendEngine("setoption name UCI_LimitStrength value false");
    sendEngine("setoption name Skill Level value 20");
    sendEngine("setoption name Hash value 128");
    return;
  }

  sendEngine("setoption name UCI_LimitStrength value true");
  sendEngine(`setoption name UCI_Elo value ${engineStrengthEl.value}`);
}

function setEngineStrength() {
  if (engine) {
    applyEngineStrengthOptions();
    setEngineStatus(`Stockfish 18 level set to ${engineStrengthLabel()}.`);
  }
}

function newGame() {
  clearTimeout(opponentTimer);
  cancelEngineSearch();
  game = new Chess();
  selectedSquare = null;
  lastMove = null;
  pendingPremove = null;
  arrows = [];
  draftArrow = null;
  dragTargetSquare = null;
  dragPiece = null;
  selectedLine = trainingLines[Number(openingChoiceEl.value) || 0];
  playerColor = selectedLine.playAs;
  boardFlipped = playerColor === "b";
  playerSideEl.value = playerColor === "w" ? "White" : "Black";
  setPremoveStatus();
  renderBoard();
  updateStatus();
  if (game.turn() !== playerColor) {
    scheduleOpponentMove(350);
  }
}

function flipBoard() {
  boardFlipped = !boardFlipped;
  renderBoard();
}

function undoMovePair() {
  clearTimeout(opponentTimer);
  cancelEngineSearch();
  selectedSquare = null;
  pendingPremove = null;
  dragPiece = null;
  setPremoveStatus();

  if (game.history().length === 0) {
    return;
  }

  game.undo();

  if (game.history().length > 0 && game.turn() !== playerColor) {
    game.undo();
  }

  lastMove = null;
  renderBoard();
  updateStatus();

  if (!game.isGameOver() && game.turn() !== playerColor) {
    scheduleOpponentMove(250);
  }
}

function renderBoard() {
  const { displayFiles, displayRanks } = boardOrientation();
  const legalTargets = selectedSquare && game.turn() === playerColor && !engineThinking
    ? game.moves({ square: selectedSquare, verbose: true }).map((move) => move.to)
    : [];

  const squaresHtml = displayRanks
    .map((rank, rowIndex) => displayFiles
      .map((file, columnIndex) => {
        const square = `${file}${rank}`;
        const piece = game.get(square);
        const tone = (rowIndex + columnIndex) % 2 === 0 ? "light" : "dark";
        const classes = ["square", tone];

        if (piece) {
          classes.push(piece.color === "w" ? "white-piece" : "black-piece");
          classes.push(`piece-${piece.color}${piece.type}`);
        }

        if (square === selectedSquare) {
          classes.push("selected");
        }

        if (legalTargets.includes(square)) {
          classes.push("legal");
        }

        if (lastMove && (lastMove.from === square || lastMove.to === square)) {
          classes.push("last-move");
        }

        if (pendingPremove && pendingPremove.from === square) {
          classes.push("premove-from");
        }

        if (pendingPremove && pendingPremove.to === square) {
          classes.push("premove-to");
        }

        if (dragTargetSquare === square) {
          classes.push("drag-target");
        }

        if (dragPiece && dragPiece.from === square) {
          classes.push("drag-source");
        }

        const glyph = piece ? `<span class="piece-glyph">${pieceGlyphs[piece.color + piece.type]}</span>` : "";
        const coordinates = `
          ${columnIndex === 0 ? `<span class="coord-label rank-label">${rank}</span>` : ""}
          ${rowIndex === 7 ? `<span class="coord-label file-label">${file}</span>` : ""}
        `;
        return `<button class="${classes.join(" ")}" type="button" data-square="${square}" aria-label="${square}" draggable="false">${glyph}${coordinates}</button>`;
      })
      .join(""))
    .join("");

  const dragHtml = dragPiece
    ? `<div class="drag-ghost ${dragPiece.colorClass} ${dragPiece.pieceClass}" style="--drag-x: ${dragPiece.x}px; --drag-y: ${dragPiece.y}px;">${pieceGlyphs[dragPiece.pieceKey]}</div>`
    : "";

  boardEl.innerHTML = `${renderArrows(displayFiles, displayRanks)}<div class="board-grid">${squaresHtml}</div>${dragHtml}`;
}

function updateStatus() {
  const expected = currentBookMove();
  const intact = isBookIntact();
  const sideToMove = game.turn() === "w" ? "White" : "Black";

  if (game.isCheckmate()) {
    trainerStatusEl.textContent = `${sideToMove} is checkmated.`;
  } else if (game.isDraw()) {
    trainerStatusEl.textContent = "Game drawn.";
  } else if (game.isGameOver()) {
    trainerStatusEl.textContent = "Game over.";
  } else if (game.turn() === playerColor) {
    trainerStatusEl.textContent = game.inCheck() ? "Your move. You are in check." : "Your move.";
  } else {
    trainerStatusEl.textContent = engineThinking ? "Stockfish 18 is thinking..." : "Engine to move.";
  }

  if (expected && intact) {
    const owner = game.turn() === playerColor ? "Your book move" : "Engine book move";
    bookStatusEl.textContent = `${owner}: ${expected}`;
  } else if (intact) {
    bookStatusEl.textContent = "Book line complete. Stockfish 18 will calculate from here.";
  } else {
    bookStatusEl.textContent = "Out of book. Stockfish 18 will calculate the replies.";
  }

  setPremoveStatus(pendingPremove ? `Premove queued: ${pendingPremove.from}-${pendingPremove.to}` : "");
  moveListEl.textContent = game.history().length ? game.pgn() : "Moves will appear here.";
}

function pointerPositionInBoard(event) {
  const rect = boardEl.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function squareFromPointer(event) {
  const element = document.elementFromPoint(event.clientX, event.clientY);
  return element?.closest?.("[data-square]")?.dataset.square || null;
}

function handleBoardPointerDown(event) {
  const square = squareFromPointer(event);

  if (event.button === 2 && pointerState?.type === "move") {
    event.preventDefault();
    cancelBoardInteraction();
    return;
  }

  if (!square || game.isGameOver()) {
    return;
  }

  if (event.button === 2) {
    event.preventDefault();
    pointerState = {
      type: "arrow",
      from: square,
      to: square,
      pointerId: event.pointerId
    };
    draftArrow = { from: square, to: square };
    boardEl.setPointerCapture(event.pointerId);
    renderBoard();
    return;
  }

  if (event.button !== 0) {
    return;
  }

  const piece = game.get(square);
  const canMovePiece = piece && piece.color === playerColor;

  pointerState = {
    type: "move",
    from: square,
    to: square,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    pointerId: event.pointerId,
    canMovePiece,
    pieceKey: piece ? piece.color + piece.type : null
  };

  if (canMovePiece) {
    selectedSquare = square;
    dragTargetSquare = null;
    renderBoard();
  }

  boardEl.setPointerCapture(event.pointerId);
}

function handleBoardPointerMove(event) {
  if (!pointerState) {
    return;
  }

  const square = squareFromPointer(event);

  if (pointerState.type === "arrow") {
    if (square && square !== pointerState.to) {
      pointerState.to = square;
      draftArrow = { from: pointerState.from, to: square };
      renderBoard();
    }
    return;
  }

  const movedDistance = Math.hypot(event.clientX - pointerState.startX, event.clientY - pointerState.startY);
  if (movedDistance > 5) {
    pointerState.moved = true;
  }

  let shouldRender = false;

  if (pointerState.canMovePiece && pointerState.moved) {
    const position = pointerPositionInBoard(event);
    dragPiece = {
      from: pointerState.from,
      pieceKey: pointerState.pieceKey,
      pieceClass: `piece-${pointerState.pieceKey}`,
      colorClass: pointerState.pieceKey.startsWith("w") ? "white-piece" : "black-piece",
      x: position.x,
      y: position.y
    };
    shouldRender = true;
  }

  if (square && square !== dragTargetSquare) {
    pointerState.to = square;
    dragTargetSquare = pointerState.moved ? square : null;
    shouldRender = true;
  }

  if (shouldRender) {
    renderBoard();
  }
}

function handleBoardPointerUp(event) {
  if (!pointerState) {
    return;
  }

  const state = pointerState;
  const square = squareFromPointer(event) || state.to || state.from;

  try {
    boardEl.releasePointerCapture(state.pointerId);
  } catch (error) {
    // Pointer capture may already be released by the browser.
  }

  pointerState = null;
  dragTargetSquare = null;
  dragPiece = null;

  if (state.type === "arrow") {
    draftArrow = null;
    if (square && square !== state.from) {
      toggleArrow(state.from, square);
      suppressNextContextMenuClear = true;
      window.setTimeout(() => {
        suppressNextContextMenuClear = false;
      }, 500);
    } else {
      clearArrows();
      return;
    }
    renderBoard();
    return;
  }

  if (state.moved && square && square !== state.from) {
    handleMoveIntent(state.from, square);
  } else {
    handleSquareTap(square);
  }
}

function handleSquareTap(square) {
  if (!square || game.isGameOver()) {
    return;
  }

  const piece = game.get(square);

  if (!selectedSquare) {
    if (piece && piece.color === playerColor) {
      selectedSquare = square;
      renderBoard();
    }
    return;
  }

  if (square === selectedSquare) {
    selectedSquare = null;
    renderBoard();
    return;
  }

  if (piece && piece.color === playerColor) {
    selectedSquare = square;
    renderBoard();
    return;
  }

  handleMoveIntent(selectedSquare, square);
}

function handleMoveIntent(from, to) {
  const piece = game.get(from);

  if (!piece || piece.color !== playerColor || game.isGameOver()) {
    selectedSquare = null;
    renderBoard();
    return;
  }

  if (game.turn() === playerColor && !engineThinking) {
    playPlayerMove(from, to);
  } else {
    queuePremove(from, to);
  }
}

function queuePremove(from, to) {
  if (from === to) {
    clearPremove();
    return;
  }

  pendingPremove = { from, to, promotion: "q" };
  selectedSquare = null;
  renderBoard();
  updateStatus();
}

function playPlayerMove(from, to) {
  const expected = currentBookMove();
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

  if (expected && normalizeSan(move.san) !== normalizeSan(expected)) {
    bookStatusEl.textContent = `That was legal, but the book move was ${expected}. Stockfish 18 is taking over.`;
  }

  updateStatus();

  if (!game.isGameOver()) {
    scheduleOpponentMove(320);
  }
}

function tryPlayPremove() {
  if (!pendingPremove || game.turn() !== playerColor || game.isGameOver()) {
    return false;
  }

  const premove = pendingPremove;
  const expected = currentBookMove();
  pendingPremove = null;
  const move = makeMove(premove);

  if (!move) {
    selectedSquare = null;
    renderBoard();
    updateStatus();
    setPremoveStatus(`Premove ${premove.from}-${premove.to} was no longer legal.`);
    return false;
  }

  selectedSquare = null;
  lastMove = { from: move.from, to: move.to };
  renderBoard();

  if (expected && normalizeSan(move.san) !== normalizeSan(expected)) {
    bookStatusEl.textContent = `Premove played, but the book move was ${expected}. Stockfish 18 is taking over.`;
  }

  updateStatus();

  if (!game.isGameOver()) {
    scheduleOpponentMove(260);
  }

  return true;
}

function finishOpponentMove(move) {
  lastMove = { from: move.from, to: move.to };

  if (tryPlayPremove()) {
    return;
  }

  renderBoard();
  updateStatus();
}

function scheduleOpponentMove(delay) {
  clearTimeout(opponentTimer);
  opponentTimer = setTimeout(playOpponentMove, delay);
}

function playOpponentMove() {
  if (game.isGameOver() || game.turn() === playerColor) {
    updateStatus();
    return;
  }

  const bookMove = currentBookMove();

  if (bookMove) {
    const move = makeMove(bookMove);
    if (move) {
      finishOpponentMove(move);
      return;
    }
  }

  requestStockfishMove();
}

function requestStockfishMove() {
  if (game.isGameOver()) {
    updateStatus();
    return;
  }

  if (engineFailed || !engine) {
    playFallbackMove();
    return;
  }

  if (!engineReady) {
    setEngineStatus("Stockfish 18 is still loading...");
    scheduleOpponentMove(500);
    return;
  }

  engineThinking = true;
  activeEngineSearchToken = ++engineSearchToken;
  updateStatus();
  sendEngine(`position fen ${game.fen()}`);
  sendEngine(`go movetime ${isMaxEngineStrength() ? 2500 : 700}`);
}

function cancelEngineSearch() {
  engineSearchToken += 1;
  activeEngineSearchToken = 0;
  engineThinking = false;

  if (engineReady) {
    sendEngine("stop");
  }
}

function playUciMove(uci) {
  if (!uci || uci === "(none)" || game.isGameOver()) {
    updateStatus();
    return;
  }

  const move = makeMove({
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.slice(4, 5) || "q"
  });

  if (!move) {
    playFallbackMove();
    return;
  }

  finishOpponentMove(move);
}

function playFallbackMove() {
  const legalMoves = game.moves({ verbose: true });
  const move = legalMoves[Math.floor(Math.random() * legalMoves.length)];

  if (!move) {
    updateStatus();
    return;
  }

  const played = makeMove({ from: move.from, to: move.to, promotion: move.promotion || "q" });
  if (played) {
    setEngineStatus("Stockfish 18 is unavailable, so the trainer made a legal fallback move.");
    finishOpponentMove(played);
    return;
  }

  renderBoard();
  updateStatus();
}

function makeMove(move) {
  try {
    return game.move(move);
  } catch (error) {
    return null;
  }
}

populateOpenings();
openingChoiceEl.addEventListener("change", newGame);
engineStrengthEl.addEventListener("change", setEngineStrength);
newGameEl.addEventListener("click", newGame);
flipBoardEl.addEventListener("click", flipBoard);
undoMoveEl.addEventListener("click", undoMovePair);
themeToggleEl.addEventListener("click", toggleTheme);
clearArrowsEl.addEventListener("click", clearArrows);
clearPremoveEl.addEventListener("click", () => clearPremove());
window.addEventListener("storage", (event) => {
  if (event.key === "chess-opening-theme" && event.newValue) {
    applyTheme(event.newValue, false);
  }
});
window.addEventListener("hashchange", () => showPage(currentPageFromHash()));
boardEl.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (suppressNextContextMenuClear) {
    suppressNextContextMenuClear = false;
    return;
  }

  if (pointerState?.type === "move" || dragPiece) {
    cancelBoardInteraction();
    return;
  }

  clearArrows();
});
boardEl.addEventListener("pointerdown", handleBoardPointerDown);
boardEl.addEventListener("pointermove", handleBoardPointerMove);
boardEl.addEventListener("pointerup", handleBoardPointerUp);
boardEl.addEventListener("pointercancel", () => {
  cancelBoardInteraction();
});

applyTheme(readSavedTheme());
showPage(currentPageFromHash());
initStockfish();
newGame();
