// ===== PRODUCT DATA =====
const products = [
  { id:1, brand:"O Boticário — Cuide-se Bem", name:"Morango & Leite", size:"Body Splash 200ml", price:150, cat:["splash"], img:"images/p01_morango_leite.jpg", desc:"Body splash Cuide-se Bem com fragrância doce de morango e leite. Pele perfumada e vegano." },
  { id:2, brand:"O Boticário — Cuide-se Bem", name:"Beijinho", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P02}}", desc:"Fragrância adocicada inspirada no clássico beijinho. Vegano e com pele perfumada de longa duração." },
  { id:3, brand:"Natura", name:"Ilía Secreto", size:"Eau de Parfum 50ml", price:150, cat:["perfume"], img:"{{P03}}", desc:"Perfume Ilía Secreto, da linha Natura Ilía — uma fragrância envolvente e misteriosa para o dia a dia." },
  { id:4, brand:"O Boticário", name:"Arbo", size:"Colônia 100ml", price:150, cat:["perfume"], img:"{{P04}}", desc:"Fragrância verde e amadeirada, inspirada na natureza. Frasco esculpido com relevo de folhagem." },
  { id:5, brand:"O Boticário — Cuide-se Bem", name:"Show de Banho", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P05}}", desc:"Body splash Wonder Shower, leve e divertido, com pele perfumada e fórmula vegana." },
  { id:6, brand:"Natura", name:"Ilía Florescer", size:"Eau de Parfum 50ml", price:150, cat:["perfume"], img:"{{P06}}", desc:"Perfume Ilía Florescer, com notas florais e amadeiradas em tom rosé — delicadeza em cada borrifada." },
  { id:7, brand:"O Boticário", name:"Coffee Man Seduction", size:"Colônia 100ml", price:150, cat:["perfume"], img:"{{P07}}", desc:"Fragrância masculina intensa com notas de café e amadeirados, para quem gosta de presença marcante." },
  { id:8, brand:"O Boticário — Cuide-se Bem", name:"Boa Noite", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P08}}", desc:"Body splash Good Night, aroma suave e relaxante para fechar o dia. Vegano e pele perfumada." },
  { id:9, brand:"O Boticário — Cuide-se Bem", name:"Pessegura", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P09}}", desc:"Fragrância frutada de pêssego, fresca e vegana, com plástico reciclado na embalagem." },
  { id:10, brand:"O Boticário", name:"Coffee Woman Seduction", size:"Colônia 100ml", price:150, cat:["perfume"], img:"{{P10}}", desc:"Versão feminina da linha Coffee Seduction, com fragrância envolvente e frasco em vidro rosé translúcido." },
  { id:11, brand:"O Boticário — Cuide-se Bem", name:"Nuvem", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P11}}", desc:"Fragrância suave e algodoada, inspirada em nuvens. Pele perfumada e fórmula vegana." },
  { id:12, brand:"O Boticário — Cuide-se Bem", name:"Deleite", size:"Body Splash 200ml", price:150, cat:["splash"], img:"{{P12}}", desc:"Aroma cremoso e adocicado da linha Deleite, com plástico reciclado e fórmula vegana." },
  { id:13, brand:"O.U.I Paris", name:"Madeleine 862 La Pistacherie", size:"Eau de Parfum importado", price:150, cat:["perfume","importado"], img:"{{P13}}", desc:"Fragrância importada O.U.I Paris, com notas gourmand de pistache — nossa peça de assinatura." },
];

const WA_NUMBER = "{{WA_NUMBER}}";
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
          <div class="card-price"><small>A partir de</small>${money(p.price)}</div>
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
  modalPrice.textContent = 'A partir de ' + money(p.price);
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
const header = document.getElementById('siteHeader');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 600);
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// ===== MOBILE MENU =====
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', ()=>{
  const open = mobileMenu.classList.toggle('open');
  burgerBtn.classList.toggle('active', open);
  burgerBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    burgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  });
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
