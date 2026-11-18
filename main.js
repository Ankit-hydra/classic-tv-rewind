(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus()}})}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var msg=document.querySelector('.share-msg');
  function say(t){if(msg){msg.textContent=t;setTimeout(function(){msg.textContent=''},3000)}}
  var s=document.querySelector('[data-share]'),c=document.querySelector('[data-copy]');
  if(s){if(!navigator.share){s.hidden=true}else{s.addEventListener('click',function(){navigator.share({title:s.dataset.title,url:location.href}).catch(function(){})})}}
  if(c){c.addEventListener('click',function(){
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(location.href).then(function(){say('Link copied')},function(){say('Copy failed. Copy the address bar link.')})}
    else{var t=document.createElement('textarea');t.value=location.href;document.body.appendChild(t);t.select();try{document.execCommand('copy');say('Link copied')}catch(e){say('Copy the address bar link.')}document.body.removeChild(t)}})}
})();
