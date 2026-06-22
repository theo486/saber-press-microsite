(function(){
  try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}catch(e){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});}
  document.querySelectorAll('form[data-press]').forEach(function(f){f.addEventListener('submit',function(ev){ev.preventDefault();
    var g=function(id){var el=f.querySelector('#'+id);return el?el.value.trim():'';};
    var name=g('pname'),outlet=g('poutlet'),email=g('pemail'),msg=g('pmsg');
    var subj='Press enquiry'+(outlet?' \u2014 '+outlet:(name?' \u2014 '+name:''));
    var body='Name: '+name+'\nOutlet: '+outlet+'\nEmail: '+email+'\n\n'+msg;
    window.location.href='mailto:press@sabermine.ai?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
    var ok=f.querySelector('.ok');if(ok)ok.style.display='block';});});
})();