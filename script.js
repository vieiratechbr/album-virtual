let memories = [];
let selectedImg = null;

const rotations = [-3, -2, -1, 0, 1, 2, 3, -4, 4];

function openModal() {
  selectedImg = null;
  document.getElementById('captionInput').value = '';
  document.getElementById('textInput').value = '';
  document.getElementById('dateInput').value = '';
  document.getElementById('uploadArea').innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a090" stroke-width="1.5" style="margin-bottom:8px">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg><br>
    <span>Clique para escolher uma foto</span>`;
  document.getElementById('modalBg').classList.add('open');
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
}

function previewImg(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    selectedImg = ev.target.result;
    document.getElementById('uploadArea').innerHTML =
      `<img src="${selectedImg}" alt="preview">`;
  };
  reader.readAsDataURL(file);
}

function saveMemory() {
  const caption = document.getElementById('captionInput').value.trim();
  const text    = document.getElementById('textInput').value.trim();
  const date    = document.getElementById('dateInput').value.trim();

  if (!selectedImg && !text) {
    alert('Adicione ao menos uma foto ou um texto!');
    return;
  }

  const rot = rotations[memories.length % rotations.length];
  memories.push({ img: selectedImg, caption, text, date, rot, id: Date.now() });
  renderAlbum();
  closeModal();
}

function deleteMemory(id) {
  if (confirm('Remover esta memória?')) {
    memories = memories.filter(m => m.id !== id);
    renderAlbum();
  }
}

function renderAlbum() {
  const grid = document.getElementById('albumGrid');

  if (memories.length === 0) {
    grid.innerHTML = '';
    grid.appendChild(createEmptyState());
    return;
  }

  grid.innerHTML = '';

  memories.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.style.setProperty('--rot', m.rot + 'deg');
    card.style.animationDelay = (i * 0.07) + 's';

    const delBtn = `<button class="delete-btn" onclick="deleteMemory(${m.id})">✕</button>`;

    let polaroidHTML = '';
    if (m.img) {
      polaroidHTML = `
        <div class="polaroid" style="--rot:${m.rot}deg">
          ${delBtn}
          <img src="${m.img}" class="polaroid-img" alt="memória">
          ${m.caption ? `<div class="polaroid-caption">${m.caption}</div>` : ''}
        </div>`;
    }

    let paperHTML = '';
    if (m.text) {
      const paperRot = -m.rot * 0.4;
      paperHTML = `
        <div class="paper-note" style="--rot:${m.rot}deg; transform: rotate(${paperRot}deg)">
          <div class="tape washi-top"></div>
          <div class="paper-torn">
            <div class="paper-lines"></div>
            <div class="paper-text">${m.text.replace(/\n/g, '<br>')}</div>
            ${m.date ? `<div class="paper-date">${m.date}</div>` : ''}
          </div>
        </div>`;
    }

    if (!m.img && m.text) {
      card.innerHTML = delBtn + paperHTML;
    } else if (m.img && !m.text) {
      card.innerHTML = polaroidHTML;
    } else {
      card.innerHTML = polaroidHTML + paperHTML;
    }

    grid.appendChild(card);
  });
}

function createEmptyState() {
  const d = document.createElement('div');
  d.className = 'empty-state';
  d.id = 'emptyState';
  d.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c9a090" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    <p>Sua história começa aqui... ♥</p>`;
  return d;
}

// Fechar modal ao clicar fora
document.getElementById('modalBg').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});