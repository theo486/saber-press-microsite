(function(){
  try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}catch(e){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});}
  document.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(ev){ev.preventDefault();var ok=f.querySelector('.ok');if(ok)ok.style.display='block';var b=f.querySelector('button');if(b){b.disabled=true;b.textContent='Sent ✓';}});});
})();