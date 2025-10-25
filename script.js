// Minimal interactions for the Peterfy landing page

function handleSignup(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Minimal UX: show a friendly confirm — in real app you'd POST to signup API
  alert(`Thanks! If this were real, we'd send an invite to ${email} — Welcome to Peterfy.`);
  document.getElementById('email').value = '';
}

// Smooth scroll for in-page links
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const href = a.getAttribute('href');
  if(href === '#') return;
  const target = document.querySelector(href);
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// Small decorative confetti of Peter heads (playful)
(function spawnHeads(){
  const root = document.body;
  const max = 8;
  function make(){
    const el = document.createElement('img');
    el.src = 'https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png';
    el.style.position='fixed';
    el.style.width='48px';
    el.style.height='48px';
    el.style.borderRadius='50%';
    el.style.left=Math.random()*100+'%';
    el.style.top='-60px';
    el.style.opacity = Math.random()*0.6+0.4;
    el.style.transform = `translateY(0) rotate(${Math.random()*40-20}deg)`;
    el.style.transition = `transform 6s linear, top 6s linear, opacity 6s linear`;
    document.body.appendChild(el);
    requestAnimationFrame(()=>{
      el.style.top = (80+Math.random()*20)+'%';
      el.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
      el.style.opacity = '0';
    });
    setTimeout(()=>el.remove(),7000);
  }
  setInterval(()=>{
    if(document.hidden) return;
    for(let i=0;i<Math.floor(Math.random()*2)+1;i++) make();
  },2500);
})();
