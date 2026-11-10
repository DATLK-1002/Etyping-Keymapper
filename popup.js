const DEFAULTS = {
  enabled: true,
  accuracy: 100,
  showHud: true,
  forcePerfectWhenBlind: true,
  stealthRomaHint: true
};

const els = {
  enabled: document.getElementById('enabled'),
  accuracy: document.getElementById('accuracy'),
  accuracyVal: document.getElementById('accuracyVal'),
  showHud: document.getElementById('showHud'),
  forcePerfectWhenBlind: document.getElementById('forcePerfectWhenBlind'),
  stealthRomaHint: document.getElementById('stealthRomaHint')
};

function updateUI(settings) {
  els.enabled.checked = settings.enabled;
  els.accuracy.value = settings.accuracy;
  els.accuracyVal.textContent = settings.accuracy;
  els.showHud.checked = settings.showHud;
  if (els.forcePerfectWhenBlind) {
    els.forcePerfectWhenBlind.checked = settings.forcePerfectWhenBlind !== false;
  }
  if (els.stealthRomaHint) {
    els.stealthRomaHint.checked = settings.stealthRomaHint !== false;
  }
}

function saveSettings() {
  const newSettings = {
    enabled: els.enabled.checked,
    accuracy: Number(els.accuracy.value),
    showHud: els.showHud.checked,
    forcePerfectWhenBlind: els.forcePerfectWhenBlind ? els.forcePerfectWhenBlind.checked : true,
    stealthRomaHint: els.stealthRomaHint ? els.stealthRomaHint.checked : true
  };
  updateUI(newSettings);
  chrome.storage.local.set(newSettings);
}

chrome.storage.local.get(DEFAULTS, (items) => {
  updateUI(items);
});

Object.values(els).forEach((el) => {
  if (el && el.tagName === 'INPUT') {
    el.addEventListener('input', saveSettings);
    el.addEventListener('change', saveSettings);
  }
});
