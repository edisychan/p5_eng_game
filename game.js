/**
 * P5 English Quest: Pass Mission 60
 * Core Game Logic
 */

// ============================
// AUDIO SYSTEM (WEB AUDIO API SYNTH)
// ============================
class SoundManager {
  constructor() {
    this.ctx = null;
    this.bgmInterval = null;
    this.isMuted = false;
    this.step = 0;
  }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  toggleMute(forceState) {
    if (forceState !== undefined) {
      this.isMuted = !forceState;
    } else {
      this.isMuted = !this.isMuted;
    }
    
    // Update UI
    const muteBtn = document.getElementById('mute-btn');
    if (muteBtn) {
      muteBtn.textContent = this.isMuted ? '🔇' : '🔊';
    }
    
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.checked = !this.isMuted;
    }

    if (this.isMuted) {
      this.stopBGM();
    } else {
      this.startBGM();
    }
    return this.isMuted;
  }

  playTone(freq, type, duration, delay = 0, volume = 0.08) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    gain.gain.setValueAtTime(volume, this.ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + delay + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration);
  }

  playCorrect() {
    this.playTone(523.25, 'triangle', 0.1, 0, 0.12); // C5
    this.playTone(659.25, 'triangle', 0.1, 0.08, 0.12); // E5
    this.playTone(783.99, 'triangle', 0.1, 0.16, 0.12); // G5
    this.playTone(1046.50, 'triangle', 0.2, 0.24, 0.15); // C6
  }

  playWrong() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playComplete() {
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 523.25];
    const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.6];
    const durs = [0.1, 0.1, 0.1, 0.1, 0.1, 0.4];
    notes.forEach((note, i) => {
      this.playTone(note, 'triangle', durs[i], delays[i], 0.12);
    });
  }

  playClick() {
    this.playTone(600, 'sine', 0.06, 0, 0.08);
  }

  startBGM() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.bgmInterval) return;

    // Pleasant pentatonic background track
    const melody = [
      329.63, 329.63, 0, 329.63, 0, 261.63, 329.63, 0,
      392.00, 0, 0, 0, 196.00, 0, 0, 0,
      261.63, 0, 0, 196.00, 0, 0, 164.81, 0,
      220.00, 0, 246.94, 0, 220.00, 0, 196.00, 0
    ];
    this.step = 0;
    const tempo = 180; // ms per step

    this.bgmInterval = setInterval(() => {
      if (this.isMuted) return;
      const freq = melody[this.step];
      if (freq > 0) {
        this.playTone(freq, 'sine', 0.18, 0, 0.05);
      }
      this.step = (this.step + 1) % melody.length;
    }, tempo);
  }

  stopBGM() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }
}

const sounds = new SoundManager();

// ============================
// GAME STATE
// ============================
const state = {
  totalStars: 0,
  currentZoneIndex: null,
  currentQuestionIndex: 0,
  completedZones: new Set(),
  zoneStars: {},       // zoneId -> stars earned
  zoneCorrect: {},     // zoneId -> count of correct answers
  previousScreen: 'screen-start',
  answered: false,
  settings: {
    extendedMode: false
  },
  currentQuestions: [], // Shuffled active questions for the current zone
  zoneBackup: null      // Backup state for Leave/Forfeit function
};

// Calculate total possible stars dynamically (replaces original if extended mode is active)
function getMaxStars() {
  let total = 0;
  GAME_DATA.zones.forEach(zone => {
    if (state.settings.extendedMode && EXTENDED_QUESTIONS[zone.id]) {
      EXTENDED_QUESTIONS[zone.id].forEach(q => { total += q.stars; });
    } else {
      zone.questions.forEach(q => { total += q.stars; });
    }
  });
  return total;
}

// Helper to shuffle list
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

// ============================
// SCREEN MANAGEMENT
// ============================
function showScreen(screenId) {
  const current = document.querySelector('.screen.active');
  if (current) {
    state.previousScreen = current.id;
    current.classList.remove('active');
  }
  const next = document.getElementById(screenId);
  if (next) {
    next.classList.add('active');
    // Re-trigger animation
    next.style.animation = 'none';
    next.offsetHeight; // force reflow
    next.style.animation = '';
  }
}

function goBack() {
  sounds.playClick();
  showScreen(state.previousScreen || 'screen-map');
}

// ============================
// INITIALIZATION
// ============================
function init() {
  renderWritingTips();
  // Show start screen
  showScreen('screen-start');
}

function startGame() {
  sounds.init();
  sounds.startBGM();
  sounds.playClick();
  showScreen('screen-map');
  renderMap();
}

function restartGame() {
  state.totalStars = 0;
  state.currentZoneIndex = null;
  state.currentQuestionIndex = 0;
  state.completedZones.clear();
  state.zoneStars = {};
  state.zoneCorrect = {};
  state.answered = false;
  state.zoneBackup = null;
  
  sounds.playClick();
  showScreen('screen-start');
}

// ============================
// MAP RENDERING
// ============================
function renderMap() {
  const container = document.getElementById('zone-cards');
  container.innerHTML = '';

  GAME_DATA.zones.forEach((zone, index) => {
    const isCompleted = state.completedZones.has(zone.id);
    const isBoss = zone.id === 'boss';
    const isBossLocked = isBoss && state.completedZones.size < 4;

    const card = document.createElement('div');
    card.className = 'zone-card' +
      (isCompleted ? ' zone-card--completed' : '') +
      (isBossLocked ? ' zone-card--locked' : '') +
      (isBoss ? ' boss-card' : '');

    card.style.setProperty('--zone-color', zone.color);
    
    // Dynamic question count
    const qCount = getQuestionCount(zone);

    card.innerHTML = `
      <div class="zone-card-icon">${zone.icon}</div>
      <div class="zone-card-name" style="color: ${zone.color}">${zone.name}</div>
      <div class="zone-card-subtitle">${zone.subtitle}</div>
      <div class="zone-card-questions">${qCount} questions${isCompleted ? ' ✅ Done!' : isBossLocked ? ' 🔒 Complete all zones first' : ''}</div>
    `;

    // Set the gradient overlay
    card.style.background = `linear-gradient(135deg, ${zone.color}11, ${zone.color}05)`;
    card.style.borderColor = `${zone.color}33`;

    if (!isBossLocked && !isCompleted) {
      card.onclick = () => { sounds.playClick(); startZone(index); };
      card.style.cursor = 'pointer';
    } else if (isCompleted) {
      card.onclick = () => { sounds.playClick(); startZone(index); }; // Allow replay
      card.style.cursor = 'pointer';
    }

    container.appendChild(card);
  });

  updateMapScore();
}

function getQuestionCount(zone) {
  if (state.settings.extendedMode && EXTENDED_QUESTIONS[zone.id]) {
    return EXTENDED_QUESTIONS[zone.id].length;
  }
  return zone.questions.length;
}

function updateMapScore() {
  document.getElementById('map-stars').textContent = state.totalStars;
  const maxS = getMaxStars();
  const pct = maxS > 0 ? Math.min(100, Math.round((state.totalStars / maxS) * 100)) : 0;
  document.getElementById('pass-percent').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
}

// ============================
// ZONE / QUESTION FLOW
// ============================
function startZone(zoneIndex) {
  state.currentZoneIndex = zoneIndex;
  state.currentQuestionIndex = 0;
  state.answered = false;

  const zone = GAME_DATA.zones[zoneIndex];
  
  // Backup state for Leave/Forfeit button
  state.zoneBackup = {
    totalStars: state.totalStars,
    zoneStars: state.zoneStars[zone.id] || 0,
    zoneCorrect: state.zoneCorrect[zone.id] || 0
  };

  // Subtract old score before active run to prevent duplication
  state.totalStars -= (state.zoneBackup.zoneStars);
  state.zoneStars[zone.id] = 0;
  state.zoneCorrect[zone.id] = 0;

  // Compile active list: replace original with extended if enabled
  let baseQuestions = [];
  if (state.settings.extendedMode && EXTENDED_QUESTIONS[zone.id]) {
    baseQuestions = [...EXTENDED_QUESTIONS[zone.id]];
  } else {
    baseQuestions = [...zone.questions];
  }
  
  // Shuffle active questions for non-repetitive gameplay
  state.currentQuestions = shuffleArray(baseQuestions);

  showScreen('screen-question');
  renderQuestion();
}

function renderQuestion() {
  const zone = GAME_DATA.zones[state.currentZoneIndex];
  const q = state.currentQuestions[state.currentQuestionIndex];

  // Header
  document.getElementById('q-zone-icon').textContent = zone.icon;
  document.getElementById('q-zone-name').textContent = zone.name;
  document.getElementById('q-progress').textContent =
    `Q${state.currentQuestionIndex + 1}/${state.currentQuestions.length}`;
  document.getElementById('q-stars').textContent = state.totalStars;

  // Passage button popup check
  const passageBtnContainer = document.getElementById('q-passage-btn-container');
  if (q.passage && PASSAGES[q.passage]) {
    passageBtnContainer.classList.remove('hidden');
    document.getElementById('modal-passage-content').innerHTML = PASSAGES[q.passage];
  } else {
    passageBtnContainer.classList.add('hidden');
  }

  // Instruction
  document.getElementById('q-instruction').textContent = q.instruction;

  // Sentence (for error_fix and fill_blank)
  const sentenceEl = document.getElementById('q-sentence');
  if (q.sentence) {
    sentenceEl.innerHTML = q.sentence;
    sentenceEl.classList.remove('hidden');
  } else {
    sentenceEl.classList.add('hidden');
  }

  // Question text
  document.getElementById('q-text').textContent = q.question;

  // Options
  const optionsEl = document.getElementById('q-options');
  optionsEl.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-option';
    btn.innerHTML = `<strong>${labels[i]}.</strong>&nbsp; ${opt}`;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });

  // Hide feedback
  const feedbackEl = document.getElementById('q-feedback');
  feedbackEl.classList.add('hidden');
  feedbackEl.classList.remove('correct', 'wrong');

  state.answered = false;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(selectedIndex) {
  if (state.answered) return;
  state.answered = true;

  const zone = GAME_DATA.zones[state.currentZoneIndex];
  const q = state.currentQuestions[state.currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  // Highlight options
  const options = document.querySelectorAll('.btn-option');
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correctIndex) {
      btn.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Update stars and play chime/buzz
  if (isCorrect) {
    sounds.playCorrect();
    state.totalStars += q.stars;
    state.zoneStars[zone.id] = (state.zoneStars[zone.id] || 0) + q.stars;
    state.zoneCorrect[zone.id] = (state.zoneCorrect[zone.id] || 0) + 1;
  } else {
    sounds.playWrong();
  }

  // Update star display
  const starEl = document.getElementById('q-stars');
  starEl.textContent = state.totalStars;
  starEl.classList.add('number-pop');
  setTimeout(() => starEl.classList.remove('number-pop'), 400);

  // Show feedback
  showFeedback(isCorrect, q.explanation, q.stars);
}

function showFeedback(isCorrect, explanation, stars) {
  const feedbackEl = document.getElementById('q-feedback');
  feedbackEl.classList.remove('hidden', 'correct', 'wrong');
  feedbackEl.classList.add(isCorrect ? 'correct' : 'wrong');

  document.getElementById('q-feedback-icon').textContent =
    isCorrect ? '🎉' : '😅';

  const correctMessages = [
    'Brilliant!', 'Well done!', 'Correct!', 'Perfect!', 'Great job!', 'You got it!', 'Superb!'
  ];
  const wrongMessages = [
    'Not quite!', 'Almost!', 'Keep trying!', 'Let\'s learn this!', 'Good effort!'
  ];

  document.getElementById('q-feedback-text').textContent =
    isCorrect
      ? `${correctMessages[Math.floor(Math.random() * correctMessages.length)]} +${stars} ⭐`
      : wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

  document.getElementById('q-explanation').innerHTML = explanation;

  // Scroll to feedback
  setTimeout(() => {
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

function nextQuestion() {
  sounds.playClick();
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex >= state.currentQuestions.length) {
    completeZone();
  } else {
    renderQuestion();
  }
}

function openPassage() {
  sounds.playClick();
  document.getElementById('modal-passage').classList.remove('hidden');
}

// ============================
// ZONE COMPLETION
// ============================
function completeZone() {
  const zone = GAME_DATA.zones[state.currentZoneIndex];
  state.completedZones.add(zone.id);
  state.zoneBackup = null; // Successfully completed, discard backup

  sounds.playComplete();

  showScreen('screen-zone-complete');

  document.getElementById('zone-complete-icon').textContent =
    zone.id === 'boss' ? '👑' : '🎉';
  document.getElementById('zone-complete-title').textContent =
    zone.id === 'boss' ? 'Boss Defeated!' : 'Zone Complete!';
  document.getElementById('zone-complete-name').textContent = `${zone.icon} ${zone.name}`;

  document.getElementById('zone-correct').textContent =
    `${state.zoneCorrect[zone.id] || 0} / ${state.currentQuestions.length}`;
  document.getElementById('zone-earned-stars').textContent =
    `${state.zoneStars[zone.id] || 0} ⭐`;
  document.getElementById('zone-total-stars').textContent =
    `${state.totalStars} ⭐`;

  // Check if all zones including boss are complete
  if (state.completedZones.size === GAME_DATA.zones.length) {
    setTimeout(() => showFinalResults(), 500);
  }

  // Confetti celebration!
  launchConfetti();
}

function returnToMap() {
  sounds.playClick();
  // Check if all regular zones done but boss not yet
  const allRegularDone = GAME_DATA.zones
    .filter(z => z.id !== 'boss')
    .every(z => state.completedZones.has(z.id));
  const bossNotDone = !state.completedZones.has('boss');

  if (allRegularDone && bossNotDone && state.completedZones.size >= 4) {
    // Boss just unlocked!
  }

  // Check if everything is complete
  if (state.completedZones.size === GAME_DATA.zones.length) {
    showFinalResults();
    return;
  }

  showScreen('screen-map');
  renderMap();
}

// ============================
// FINAL RESULTS
// ============================
function showFinalResults() {
  showScreen('screen-results');

  const maxS = getMaxStars();
  const passed = state.totalStars >= (maxS * 0.6);

  document.getElementById('results-emoji').textContent = passed ? '🏆' : '💪';
  document.getElementById('results-title').textContent =
    passed ? '🎉 You Passed!' : 'Quest Complete!';
  document.getElementById('results-stars').textContent = state.totalStars;
  document.getElementById('results-total').textContent = `/ ${maxS}`;

  const msgEl = document.getElementById('results-message');
  if (passed) {
    msgEl.className = 'results-message pass';
    msgEl.textContent = 'Amazing! You earned enough stars to pass! 🌟 Keep revising and you will do great on Tuesday!';
  } else {
    msgEl.className = 'results-message fail';
    msgEl.textContent = `You earned ${state.totalStars} stars. Try again to learn from the explanations and get 60%! You can do it! 💪`;
  }

  // Breakdown
  const breakdownEl = document.getElementById('results-breakdown');
  breakdownEl.innerHTML = '';
  GAME_DATA.zones.forEach(zone => {
    const stars = state.zoneStars[zone.id] || 0;
    
    // Dynamic max stars for breakdown
    let maxZone = zone.questions.reduce((sum, q) => sum + q.stars, 0);
    if (state.settings.extendedMode && EXTENDED_QUESTIONS[zone.id]) {
      maxZone += EXTENDED_QUESTIONS[zone.id].reduce((sum, q) => sum + q.stars, 0);
    }
    
    const div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML = `
      <div class="breakdown-icon">${zone.icon}</div>
      <div class="breakdown-name">${zone.name}</div>
      <div class="breakdown-stars">${stars}/${maxZone} ⭐</div>
    `;
    breakdownEl.appendChild(div);
  });

  if (passed) launchConfetti();
}

// ============================
// WRITING TIPS
// ============================
function renderWritingTips() {
  const tips = GAME_DATA.writingTips;

  // Structure cards
  const structureEl = document.getElementById('tips-structure');
  structureEl.innerHTML = tips.structure.map(s => `
    <div class="tip-card">
      <div class="tip-card-icon">${s.icon}</div>
      <div class="tip-card-label">${s.label}</div>
      <div class="tip-card-content">${s.content}</div>
    </div>
  `).join('');

  // Sentence starters
  const startersEl = document.getElementById('tips-starters');
  startersEl.innerHTML = tips.starters.map(s => `
    <span class="starter-chip">${s}</span>
  `).join('');

  // Exam rules
  const rulesEl = document.getElementById('tips-rules');
  rulesEl.innerHTML = tips.examRules.map(r => `
    <div class="rule-card">
      <div class="rule-icon">${r.icon}</div>
      <div>
        <div class="rule-text">${r.rule}</div>
        <div class="rule-example">${r.example}</div>
      </div>
    </div>
  `).join('');

  // Sample diary
  const sampleEl = document.getElementById('tips-sample');
  sampleEl.innerHTML = tips.sampleDiary;
}

// ============================
// CONFETTI 🎊
// ============================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#F1C40F', '#E74C3C', '#3498DB', '#2ECC71', '#9B59B6', '#FF8C42', '#e67e22'];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      opacity: 1
    });
  }

  let frame = 0;
  const maxFrames = 180;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.vy += 0.05; // gravity

      if (frame > maxFrames - 40) {
        p.opacity = Math.max(0, p.opacity - 0.03);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (frame < maxFrames) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// Handle window resize for confetti
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ============================
// SETTINGS & DIALOG ACTIONS
// ============================
function openSettings() {
  sounds.playClick();
  document.getElementById('modal-settings').classList.remove('hidden');
  document.getElementById('extended-toggle').checked = state.settings.extendedMode;
  document.getElementById('sound-toggle').checked = !sounds.isMuted;
}

function closeSettings() {
  sounds.playClick();
  document.getElementById('modal-settings').classList.add('hidden');
}

function closeSettingsOnOuterClick(e) {
  if (e.target.id === 'modal-settings') {
    closeSettings();
  }
}

function toggleExtendedMode(checked) {
  state.settings.extendedMode = checked;
  sounds.playClick();
  renderMap();
}

function toggleSoundFromSettings(checked) {
  sounds.toggleMute(!checked);
}

function toggleMute() {
  sounds.toggleMute();
}

function confirmResetProgress() {
  sounds.playClick();
  if (confirm("Are you sure you want to reset all progress? This will delete your stars and unlocked zones!")) {
    restartGame();
    closeSettings();
  }
}

// Leave Zone Modal Prompt
function promptLeaveZone() {
  sounds.playClick();
  document.getElementById('modal-leave').classList.remove('hidden');
}

function cancelLeaveZone() {
  sounds.playClick();
  document.getElementById('modal-leave').classList.add('hidden');
}

function confirmLeaveZone() {
  sounds.playClick();
  document.getElementById('modal-leave').classList.add('hidden');

  if (state.zoneBackup) {
    // Restore state from backup
    state.totalStars = state.zoneBackup.totalStars;
    const zone = GAME_DATA.zones[state.currentZoneIndex];
    state.zoneStars[zone.id] = state.zoneBackup.zoneStars;
    state.zoneCorrect[zone.id] = state.zoneBackup.zoneCorrect;
    state.zoneBackup = null;
  }

  showScreen('screen-map');
  renderMap();
}

// Passage Modal Actions
function closePassage() {
  sounds.playClick();
  document.getElementById('modal-passage').classList.add('hidden');
}

function closePassageOnOuterClick(e) {
  if (e.target.id === 'modal-passage') {
    closePassage();
  }
}

// ============================
// START!
// ============================
document.addEventListener('DOMContentLoaded', init);
