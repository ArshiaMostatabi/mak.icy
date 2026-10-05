const products = [
  { id: 1, brand: 'NOIR/23', name: 'کت نامتقارن رَگ', category: 'کت', price: 4890000, color: 'مشکی / لاکی', image: 'assets/images/campaign-hero.webp', badge: 'جدید' },
  { id: 2, brand: 'NORTH/09', name: 'بارانی حجم آبی', category: 'رویه', price: 3950000, color: 'آبی کبالت', image: 'assets/images/jacket-blue.webp', badge: 'محدود' },
  { id: 3, brand: 'FORMA', name: 'پالتو فرم سفید', category: 'پالتو', price: 6790000, color: 'استخوانی', image: 'assets/images/coat-bone.webp', badge: '' },
  { id: 4, brand: 'VANTA', name: 'بامبر زغالی اِکو', category: 'کت', price: 4290000, color: 'زغالی', image: 'assets/images/bomber-charcoal.webp', badge: 'جدید' },
  { id: 5, brand: 'ASTER', name: 'پولوشرت بافت مارون', category: 'بافت', price: 2180000, color: 'زرشکی', image: 'assets/images/polo-burgundy.webp', badge: 'پرفروش' },
  { id: 6, brand: 'KADO', name: 'وست متالیک S4', category: 'رویه', price: 3460000, color: 'نقره‌ای', image: 'assets/images/vest-silver.webp', badge: '' },
  { id: 7, brand: 'NOIR/23', name: 'شلوار خط‌دار نُه', category: 'شلوار', price: 2450000, color: 'مشکی', image: 'assets/images/campaign-hero.webp', badge: '' },
  { id: 8, brand: 'NORTH/09', name: 'ژاکت کُد ۰۲', category: 'رویه', price: 3750000, color: 'آبی کبالت', image: 'assets/images/jacket-blue.webp', badge: 'پرفروش' },
  { id: 9, brand: 'FORMA', name: 'کت بلند موزه', category: 'پالتو', price: 5980000, color: 'استخوانی', image: 'assets/images/coat-bone.webp', badge: '' },
  { id: 10, brand: 'VANTA', name: 'شلوار واید سایه', category: 'شلوار', price: 2790000, color: 'مشکی', image: 'assets/images/bomber-charcoal.webp', badge: '' },
  { id: 11, brand: 'ASTER', name: 'شلوار پیلی‌دار شن', category: 'شلوار', price: 2650000, color: 'شنی', image: 'assets/images/polo-burgundy.webp', badge: 'جدید' },
  { id: 12, brand: 'KADO', name: 'کارگو تکنیکال K2', category: 'شلوار', price: 3190000, color: 'مشکی', image: 'assets/images/vest-silver.webp', badge: '' },
  { id: 13, brand: 'NOIR/23', name: 'کمربند مینیمال خط', category: 'اکسسوری', price: 1280000, color: 'مشکی', image: 'assets/images/campaign-hero.webp', badge: '' },
  { id: 14, brand: 'NORTH/09', name: 'شل‌جکت کبالت', category: 'کت', price: 4580000, color: 'آبی', image: 'assets/images/jacket-blue.webp', badge: '' },
  { id: 15, brand: 'FORMA', name: 'شال حجم استخوان', category: 'اکسسوری', price: 1490000, color: 'استخوانی', image: 'assets/images/coat-bone.webp', badge: '' },
  { id: 16, brand: 'VANTA', name: 'بافت یقه‌گرد دوده', category: 'بافت', price: 2290000, color: 'دودی', image: 'assets/images/bomber-charcoal.webp', badge: '' },
  { id: 17, brand: 'ASTER', name: 'پولوشرت نیمه‌شب', category: 'بافت', price: 2350000, color: 'زرشکی', image: 'assets/images/polo-burgundy.webp', badge: '' },
  { id: 18, brand: 'KADO', name: 'وست لایه‌پذیر X1', category: 'رویه', price: 3320000, color: 'نقره‌ای', image: 'assets/images/vest-silver.webp', badge: 'محدود' }
];

const formatPrice = value => new Intl.NumberFormat('fa-IR').format(value) + ' تومان';
const getCart = () => JSON.parse(localStorage.getItem('makicy-cart') || localStorage.getItem('hamidxshop-cart') || localStorage.getItem('nakh-cart') || '[]');
const saveCart = cart => { localStorage.setItem('makicy-cart', JSON.stringify(cart)); updateCartCount(); };

function headerMarkup() {
  const page = document.body.dataset.page;
  const active = name => page === name ? 'aria-current="page"' : '';
  return `
    <a class="skip-link" href="#main">رفتن به محتوای اصلی</a>
    <div class="announcement">ارسال رایگان برای خریدهای بالای ۳ میلیون تومان — منتخب برندهای مستقل ایران و جهان</div>
    <div class="site-header">
      <div class="header-row">
        <nav class="main-nav" aria-label="ناوبری اصلی">
          <a href="index.html" ${active('home')}>خانه</a>
          <a href="products.html" ${active('products')}>فروشگاه</a>
          <a href="index.html#brands">برندها</a>
          <a href="about.html" ${active('about')}>درباره فروشگاه</a>
          <a class="mobile-only" href="login.html">ورود / حساب کاربری</a>
        </nav>
        <a class="brand" href="index.html" aria-label="mak icy، صفحه اصلی"><img src="assets/images/mak-icy-logo.png" alt="لوگوی mak icy"><span class="brand-name">mak icy</span></a>
        <div class="header-tools">
          <a class="icon-link desktop-only" href="products.html" aria-label="جست‌وجوی محصولات">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          </a>
          <a class="login-link desktop-only" href="${page === 'account' ? 'account.html' : 'login.html'}" ${page === 'login' || page === 'account' ? 'aria-current="page"' : ''}>${page === 'account' ? 'حساب من' : 'ورود'}</a>
          <a class="icon-link cart-link" href="cart.html" aria-label="سبد خرید">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h2l2.2 10.2h10.7L21 8H6"/><circle cx="9" cy="19" r="1"/><circle cx="18" cy="19" r="1"/></svg>
            <span class="cart-count" aria-live="polite">0</span>
          </a>
          <button class="menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

function footerMarkup() {
  return `<div class="site-footer">
    <div class="footer-grid">
      <div><div class="footer-brand"><img src="assets/images/mak-icy-logo.png" alt="لوگوی mak icy"><span>mak icy</span></div><p class="footer-intro">فروشگاه آنلاین پوشاک چندبرندی؛ انتخاب‌های تازه از برندهای مستقل و جریان‌ساز.</p></div>
      <div class="footer-col"><h3>فروشگاه</h3><a href="products.html">همه محصولات</a><a href="products.html?category=رویه">رویه‌ها</a><a href="products.html?category=پالتو">پالتوها</a><a href="cart.html">سبد خرید</a></div>
      <div class="footer-col"><h3>حساب کاربری</h3><a href="login.html">ورود یا عضویت</a><a href="account.html">سفارش‌های من</a><a href="#">علاقه‌مندی‌ها</a><a href="#">پشتیبانی</a></div>
      <div class="footer-col"><h3>ما را پیدا کن</h3><a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Telegram</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 MAK ICY</span><span>CURATED MULTI-BRAND FASHION</span></div>
  </div>`;
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = new Intl.NumberFormat('fa-IR').format(count); el.setAttribute('aria-label', `${new Intl.NumberFormat('fa-IR').format(count)} کالا در سبد خرید`); });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); document.body.appendChild(toast); }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function addToCart(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  existing ? existing.qty++ : cart.push({ id: product.id, qty: 1, size: 'M' });
  saveCart(cart);
  showToast(`${product.name} به سبد خرید اضافه شد`);
}

function setupShell() {
  const header = document.querySelector('#site-header');
  const footer = document.querySelector('#site-footer');
  if (header) header.innerHTML = headerMarkup();
  if (footer) footer.innerHTML = footerMarkup();
  document.querySelector('.menu-toggle')?.addEventListener('click', e => {
    const open = document.body.classList.toggle('menu-open');
    e.currentTarget.setAttribute('aria-expanded', String(open));
    e.currentTarget.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  });
  updateCartCount();
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(el => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  items.forEach(el => observer.observe(el));
}

function setupProducts() {
  const grid = document.querySelector('#product-grid');
  if (!grid) return;
  const pagination = document.querySelector('#pagination');
  const resultCount = document.querySelector('#result-count');
  let category = new URLSearchParams(location.search).get('category') || 'همه';
  let sort = 'featured';
  let currentPage = 1;
  const perPage = 8;
  const render = () => {
    let list = category === 'همه' ? [...products] : products.filter(p => p.category === category);
    if (sort === 'low') list.sort((a,b) => a.price - b.price);
    if (sort === 'high') list.sort((a,b) => b.price - a.price);
    const pageCount = Math.max(1, Math.ceil(list.length / perPage));
    currentPage = Math.min(currentPage, pageCount);
    const visibleProducts = list.slice((currentPage - 1) * perPage, currentPage * perPage);
    if (resultCount) resultCount.textContent = `${new Intl.NumberFormat('fa-IR').format(list.length)} محصول`;
    grid.innerHTML = visibleProducts.length ? visibleProducts.map(p => `<article class="product-card reveal">
      <div class="product-card-media">
        <a href="product.html?id=${p.id}" aria-label="مشاهده ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="quick-add" type="button" data-add="${p.id}">افزودن سریع به سبد</button>
      </div>
      <div class="product-meta"><span class="product-brand en">${p.brand}</span><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><p>${p.color}</p><span class="price">${formatPrice(p.price)}</span></div>
    </article>`).join('') : '<div class="empty-products"><h2>محصولی در این دسته نیست.</h2><p>فیلتر دیگری را امتحان کنید.</p></div>';
    if (pagination) {
      pagination.innerHTML = Array.from({ length: pageCount }, (_, index) => `<button type="button" class="page-btn ${currentPage === index + 1 ? 'active' : ''}" data-page="${index + 1}" aria-label="صفحه ${index + 1}" ${currentPage === index + 1 ? 'aria-current="page"' : ''}>${new Intl.NumberFormat('fa-IR').format(index + 1)}</button>`).join('');
      pagination.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => { currentPage = Number(button.dataset.page); render(); document.querySelector('.shop-controls').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }));
    }
    grid.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); addToCart(btn.dataset.add); }));
    setupReveal();
  };
  document.querySelectorAll('.filter-chip').forEach(btn => {
    if (btn.dataset.category === category) { document.querySelector('.filter-chip.active')?.classList.remove('active'); btn.classList.add('active'); }
    btn.addEventListener('click', () => { category = btn.dataset.category; currentPage = 1; document.querySelector('.filter-chip.active')?.classList.remove('active'); btn.classList.add('active'); render(); });
  });
  document.querySelector('#sort-products')?.addEventListener('change', e => { sort = e.target.value; currentPage = 1; render(); });
  render();
}

function setupProductDetail() {
  const root = document.querySelector('#product-detail');
  if (!root) return;
  const id = Number(new URLSearchParams(location.search).get('id') || 2);
  const p = products.find(item => item.id === id) || products[1];
  document.title = `${p.name} — mak icy`;
  root.innerHTML = `<div class="detail-gallery">
      <img class="primary" src="${p.image}" alt="${p.name}">
      <img class="secondary" src="${p.image}" alt="نمای دوم ${p.name}">
    </div>
    <div class="detail-info">
      <p class="eyebrow">${p.brand} / SELECTED</p><h1>${p.name}</h1><p class="detail-price">${formatPrice(p.price)}</p>
      <p class="detail-copy">منتخب mak icy از کالکشن تازه ${p.brand}. طراحی معاصر، کیفیت ساخت دقیق و امکان هفت روز بازگشت کالا.</p>
      <div class="option-label"><span>انتخاب اندازه</span><a href="#">راهنمای اندازه</a></div>
      <div class="size-options" role="group" aria-label="انتخاب اندازه"><button class="size-option">S</button><button class="size-option active">M</button><button class="size-option">L</button><button class="size-option">XL</button></div>
      <div class="detail-actions"><button class="btn btn-red" data-add="${p.id}">افزودن به سبد خرید</button><button class="wishlist" aria-label="افزودن به علاقه‌مندی‌ها">♡</button></div>
      <div class="detail-notes"><div class="detail-note"><span>برند</span><strong class="en">${p.brand}</strong></div><div class="detail-note"><span>ارسال</span><strong>۲ تا ۴ روز کاری</strong></div><div class="detail-note"><span>مرجوعی</span><strong>تا ۷ روز</strong></div><div class="detail-note"><span>شناسه</span><strong class="en">HXS-${String(p.id).padStart(3,'0')}</strong></div></div>
    </div>`;
  root.querySelectorAll('.size-option').forEach(btn => btn.addEventListener('click', () => { root.querySelector('.size-option.active')?.classList.remove('active'); btn.classList.add('active'); }));
  root.querySelector('[data-add]').addEventListener('click', () => addToCart(p.id));
  root.querySelector('.wishlist').addEventListener('click', e => { e.currentTarget.textContent = e.currentTarget.textContent === '♡' ? '♥' : '♡'; showToast('فهرست علاقه‌مندی‌ها به‌روزرسانی شد'); });
}

function setupCart() {
  const itemsRoot = document.querySelector('#cart-items');
  const summaryRoot = document.querySelector('#cart-summary-data');
  if (!itemsRoot || !summaryRoot) return;
  const render = () => {
    const cart = getCart();
    if (!cart.length) {
      itemsRoot.innerHTML = '<div class="empty-cart"><h2>سبد تو هنوز خالی است.</h2><p>تازه‌ترین محصولات برندهای منتخب را ببین.</p><a class="btn btn-dark" href="products.html">رفتن به فروشگاه</a></div>';
      summaryRoot.innerHTML = '<div class="summary-line total"><span>جمع کل</span><strong>۰ تومان</strong></div>';
      return;
    }
    itemsRoot.innerHTML = cart.map(item => { const p = products.find(x => x.id === item.id); return `<article class="cart-item">
      <img class="cart-thumb" src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>اندازه ${item.size} / ${p.color}</p><div class="qty" aria-label="تعداد"><button data-dec="${p.id}" aria-label="کم کردن">−</button><span>${new Intl.NumberFormat('fa-IR').format(item.qty)}</span><button data-inc="${p.id}" aria-label="زیاد کردن">+</button></div></div>
      <div class="cart-item-side"><strong class="price">${formatPrice(p.price * item.qty)}</strong><button class="remove-item" data-remove="${p.id}">حذف</button></div></article>`; }).join('');
    const subtotal = cart.reduce((sum,item) => sum + products.find(p => p.id === item.id).price * item.qty, 0);
    const shipping = subtotal >= 3000000 ? 0 : 120000;
    summaryRoot.innerHTML = `<div class="summary-line"><span>جمع محصولات</span><strong>${formatPrice(subtotal)}</strong></div><div class="summary-line"><span>ارسال</span><strong>${shipping ? formatPrice(shipping) : 'رایگان'}</strong></div><div class="summary-line total"><span>جمع کل</span><strong>${formatPrice(subtotal + shipping)}</strong></div><button class="btn btn-red" id="checkout-btn">ادامه و ثبت سفارش</button>`;
    itemsRoot.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => changeQty(Number(b.dataset.inc), 1)));
    itemsRoot.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => changeQty(Number(b.dataset.dec), -1)));
    itemsRoot.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => { saveCart(getCart().filter(i => i.id !== Number(b.dataset.remove))); render(); }));
    document.querySelector('#checkout-btn')?.addEventListener('click', () => showToast('این بخش آماده اتصال به درگاه پرداخت است'));
  };
  const changeQty = (id, amount) => { const cart = getCart(); const item = cart.find(i => i.id === id); item.qty += amount; saveCart(cart.filter(i => i.qty > 0)); render(); };
  render();
}

function setupNewsletter() {
  document.querySelector('.newsletter-form')?.addEventListener('submit', e => { e.preventDefault(); showToast('ایمیل شما برای خبرنامه ثبت شد'); e.currentTarget.reset(); });
}

function setupAccountOrders() {
  const tabs = document.querySelectorAll('[data-order-filter]');
  const orders = document.querySelectorAll('[data-order-status]');
  if (!tabs.length) return;
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');
    const filter = tab.dataset.orderFilter;
    orders.forEach(order => { order.hidden = filter !== 'all' && order.dataset.orderStatus !== filter; });
  }));
}

function setupLogin() {
  const form = document.querySelector('#login-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'در حال ورود…';
    setTimeout(() => { location.href = 'account.html'; }, 500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupShell(); setupReveal(); setupProducts(); setupProductDetail(); setupCart(); setupNewsletter(); setupLogin(); setupAccountOrders();
  document.querySelectorAll('[data-add]').forEach(btn => { if (!btn.closest('#product-detail') && !btn.closest('#product-grid')) btn.addEventListener('click', () => addToCart(btn.dataset.add)); });
});
