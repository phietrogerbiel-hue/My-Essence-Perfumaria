// ===== PRODUCT DATA =====
const products = [
  { id:1, brand:"O Boticário — Cuide-se Bem", name:"Morango & Leite", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p01_morango_leite.jpg", desc:"Body splash Cuide-se Bem com fragrância doce de morango e leite. Pele perfumada e vegano." },
  { id:2, brand:"O Boticário — Cuide-se Bem", name:"Beijinho", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p02_beijinho.jpg", desc:"Fragrância adocicada inspirada no clássico beijinho. Vegano e com pele perfumada de longa duração." },
  { id:3, brand:"Natura", name:"Ilía Secreto", size:"Eau de Parfum 50ml", price:185, cat:["perfume"], img:"images/p03_ilia_secreto.jpg", desc:"Perfume Ilía Secreto, da linha Natura Ilía — uma fragrância envolvente e misteriosa para o dia a dia." },
  { id:4, brand:"O Boticário", name:"Arbo", size:"Colônia 100ml", price:180, cat:["perfume"], img:"images/p04_arbo.jpg", desc:"Fragrância verde e amadeirada, inspirada na natureza. Frasco esculpido com relevo de folhagem." },
  { id:5, brand:"O Boticário — Cuide-se Bem", name:"Show de Banho", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p05_show_banho.jpg", desc:"Body splash Wonder Shower, leve e divertido, com pele perfumada e fórmula vegana." },
  { id:7, brand:"O Boticário", name:"Coffee Man Seduction", size:"Colônia 100ml", price:215, cat:["perfume"], img:"images/p07_coffee_man.jpg", desc:"Fragrância masculina intensa com notas de café e amadeirados, para quem gosta de presença marcante." },
  { id:8, brand:"O Boticário — Cuide-se Bem", name:"Boa Noite", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p08_boa_noite.jpg", desc:"Body splash Good Night, aroma suave e relaxante para fechar o dia. Vegano e pele perfumada." },
  { id:9, brand:"O Boticário — Cuide-se Bem", name:"Pessegura", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p09_pessegura.jpg", desc:"Fragrância frutada de pêssego, fresca e vegana, com plástico reciclado na embalagem." },
  { id:10, brand:"O Boticário", name:"Coffee Woman Seduction", size:"Colônia 100ml", price:215, cat:["perfume"], img:"images/p10_coffee_woman.jpg", desc:"Versão feminina da linha Coffee Seduction, com fragrância envolvente e frasco em vidro rosé translúcido." },
  { id:11, brand:"O Boticário — Cuide-se Bem", name:"Nuvem", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p11_nuvem.jpg", desc:"Fragrância suave e algodoada, inspirada em nuvens. Pele perfumada e fórmula vegana." },
  { id:12, brand:"O Boticário — Cuide-se Bem", name:"Deleite", size:"Body Splash 200ml", price:95, cat:["splash"], img:"images/p12_deleite.jpg", desc:"Aroma cremoso e adocicado da linha Deleite, com plástico reciclado e fórmula vegana." },
  { id:13, brand:"Eudora", name:"Diva", size:"Desodorante Colônia 100ml", price:145, cat:["perfume"], img:"images/p14_eudora_diva.jpeg", desc:"Adocicado, elegante e cremoso, ideal para quem gosta de perfumes marcantes com fundo abaunilhado e frutado. — nossa peça de assinatura." },
  { id:14, brand:"WOMEN'SECRET — BODY MIST", name:"So Captivating", size:"Body Mist 250ml", price:100, cat:["splash", "importado"], img:"images/p15_bodysplashred.jpeg", desc:"Body mist Women'Secret So Captivating com fragrância envolvente e partículas de brilho (glitter). Deixa a pele perfumada, iluminada e radiante." },
  { id:16, brand:"WOMEN'SECRET — BODY MIST", name:"Pretty & Sexy", size:"Body Mist 250ml", price:100, cat:["splash", "importado"], img:"images/p16_bodysplachprt.jpeg", desc:"Body mist Women'Secret Pretty & Sexy com fragrância suave, feminina e apaixonante. Ideal para perfumar a pele com leveza e um toque de frescor no dia a dia." },
  { id:17, brand:"WOMEN'SECRET — BODY MIST", name:"Daily Romance", size:"Body Mist 250ml", price:100, cat:["splash", "importado"], img:"images/p17_dayli.jpeg", desc:"Body mist Women'Secret Daily Romance com fragrância delicada, romântica e envolvente. Perfeito para manter a pele suavemente perfumada durante todo o dia." },
  { id:18, brand:"WOMEN'SECRET — BODY MIST", name:"Pure Charm", size:"Body Mist 250ml", price:100, cat:["splash", "importado"], img:"images/p18_bodys.jpeg", desc:"Body mist Women'Secret Pure Charm com fragrância luminosa, charmosa e refrescante. Enriquecido com partículas de brilho (glitter) para deixar a pele levemente perfumada e com um brilho radiante." },
  { id:19, brand:"NATURA — UNA", name:"Una Artisan", size:"De Parfum 75ml", price:180, cat:["perfume"], img:"images/p19_Una.jpeg", desc:"De Parfum Natura Una Artisan com fragrância chipre floral marcante e sofisticada. Combina notas florais com o toque quente do patchouli e a doçura da baunilha, ideal para momentos especiais." },
  { id:20, brand:"O BOTICÁRIO — LIZ", name:"Liz Flora", size:"Desodorante Colônia 100ml", price:170, cat:["perfume"], img:"images/p20_bol.jpeg", desc:"Desodorante colônia O Boticário Liz Flora com fragrância amadeirada floral envolvente e sofisticada. Traz a força da flor de Jacarandá combinada à assinatura amadeirada de Liz, inspirada no poder e na trajetória da mulher moderna."},
  { id:21, brand:"EUDORA — KISS ME", name:"Kiss Me Again", size:"Desodorante Colônia 50ml", price:110, cat:["perfume"], img:"images/p21_kiss.jpeg", desc:"Desodorante colônia Eudora Kiss Me Again com fragrância floriental gourmand apaixonante e marcante. Traz a combinação vibrante de frutas vermelhas com a cremosidade da baunilha, perfeita para expressar sua sensualidade."},
  { id:22, brand:"O BOTICÁRIO — EGEO", name:"Egeo Bomb Black", size:"Desodorante Colônia 90ml", price:165, cat:["perfume"], img:"images/p22_egeo.jpeg", desc:"Desodorante colônia O Boticário Egeo Bomb Black com fragrância oriental gourmand jovem e intensa. Mistura notas instigantes de couro com o toque doce do caramelo e da baunilha, perfeita para quem gosta de marcar presença."},
];

const WA_NUMBER = 559293885732;
function waLink(text){
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const grid = document.getElementById('productGrid');

function money(v){
  return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}

function renderProducts(){
  grid.innerHTML = products.map(p => `
    <article class="card" data-cats="${p.cat.join(' ')}">
      <div class="card-media" data-id="${p.id}">
        <span class="card-tag">${p.cat.includes('importado') ? 'Importado' : (p.cat.includes('perfume') ? 'Perfume' : 'Body Splash')}</span>
        <img src="${p.img}" alt="${p.name} — ${p.brand}" loading="lazy">
        <span class="card-expand" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" stroke="#17150f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </div>
      <div class="card-body">
        <span class="card-brand">${p.brand}</span>
        <h3 class="card-name">${p.name}</h3>
        <span class="card-size">${p.size}</span>
        <div class="card-foot">
          <div class="card-price"><small></small>${money(p.price)}</div>
          <a class="card-buy" href="${waLink('Olá! Tenho interesse no produto: ' + p.name + ' (' + p.size + ').')}" target="_blank" rel="noopener" aria-label="Comprar ${p.name} via WhatsApp" onclick="event.stopPropagation();">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.card-media').forEach(el=>{
    el.addEventListener('click', ()=> openModal(parseInt(el.dataset.id)));
  });
  observeCards();
}
renderProducts();

// ===== FILTERS =====
const filterBar = document.getElementById('filterBar');
filterBar.addEventListener('click', (e)=>{
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  filterBar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
});

function applyFilter(filter){
  document.querySelectorAll('.card').forEach(card=>{
    const cats = card.dataset.cats.split(' ');
    const show = filter === 'all' || cats.includes(filter);
    card.classList.toggle('hidden-item', !show);
  });
}

document.querySelectorAll('[data-filter-link]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const f = a.dataset.filterLink;
    filterBar.querySelectorAll('.filter-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.filter === f);
    });
    applyFilter(f);
    document.getElementById('colecao').scrollIntoView({behavior:'smooth'});
  });
});

// ===== MODAL =====
const modalOverlay = document.getElementById('modalOverlay');
const modalImg = document.getElementById('modalImg');
const modalBrand = document.getElementById('modalBrand');
const modalName = document.getElementById('modalName');
const modalSize = document.getElementById('modalSize');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');

function openModal(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  modalImg.src = p.img;
  modalImg.alt = p.name;
  modalBrand.textContent = p.brand;
  modalName.textContent = p.name;
  modalSize.textContent = p.size;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = money(p.price);
  modalBuy.href = waLink('Olá! Tenho interesse no produto: ' + p.name + ' (' + p.size + ').');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e)=>{ if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

// ===== HEADER SCROLL STATE =====
// ===== THEME TOGGLE (modo claro/escuro) =====
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'my-essence-theme';

function applyTheme(isDark){
  document.documentElement.classList.toggle('dark', isDark);
  themeToggle.setAttribute('aria-pressed', isDark);
}

function getStoredTheme(){
  try{ return localStorage.getItem(THEME_KEY); }
  catch(e){ return null; }
}

function storeTheme(value){
  try{ localStorage.setItem(THEME_KEY, value); }
  catch(e){ /* localStorage indisponível, ignora */ }
}

const storedTheme = getStoredTheme();
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(storedTheme ? storedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', ()=>{
  const isDark = !document.documentElement.classList.contains('dark');
  applyTheme(isDark);
  storeTheme(isDark ? 'dark' : 'light');
});

const header = document.getElementById('siteHeader');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 600);
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuOverlay.classList.toggle('open', isOpen);
  burgerBtn.classList.toggle('active', isOpen);
  
  // Bloqueia a rolagem do site enquanto o menu estiver aberto
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
  burgerBtn.classList.remove('active');
  document.body.style.overflow = '';
}

// Abrir e fechar pelo botão do menu
if (burgerBtn) burgerBtn.addEventListener('click', toggleMenu);

// Fechar ao clicar na parte escura (fora da gaveta)
if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

// Fechar automaticamente ao clicar em qualquer opção do menu
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=> revealObserver.observe(el));

function observeCards(){
  const cardObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        cardObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll('.card').forEach(el=> cardObserver.observe(el));
}
