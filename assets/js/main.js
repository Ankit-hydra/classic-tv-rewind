(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus()}})}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var supportModal=document.getElementById('support-modal');
  if(supportModal){
    var supportClosed=false;
    var closeSupport=function(){
      if(supportClosed)return;
      supportClosed=true;
      supportModal.hidden=true;
      document.body.classList.remove('support-modal-open');
      try{sessionStorage.setItem('ctrSupportPopupSeen','1')}catch(e){}
    };
    supportModal.querySelectorAll('[data-support-close]').forEach(function(el){el.addEventListener('click',closeSupport)});
    document.addEventListener('keydown',function(e){
      if(supportModal.hidden)return;
      if(e.key==='Escape'){closeSupport()}
      if(e.key==='Tab'){
        var focusable=supportModal.querySelectorAll('a[href],button:not([disabled])');
        if(!focusable.length)return;
        var first=focusable[0],last=focusable[focusable.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    });
    var alreadySeen=false;
    try{alreadySeen=sessionStorage.getItem('ctrSupportPopupSeen')==='1'}catch(e){}
    if(!alreadySeen){
      window.setTimeout(function(){
        if(!supportClosed&&!supportModal.hidden)return;
        supportModal.hidden=false;
        document.body.classList.add('support-modal-open');
        var closeButton=supportModal.querySelector('.support-modal-close');
        if(closeButton)closeButton.focus();
      },5000);
    }
  }
  var msg=document.querySelector('.share-msg');
  function say(t){if(msg){msg.textContent=t;setTimeout(function(){msg.textContent=''},3000)}}
  var s=document.querySelector('[data-share]'),c=document.querySelector('[data-copy]');
  if(s){if(!navigator.share){s.hidden=true}else{s.addEventListener('click',function(){navigator.share({title:s.dataset.title,url:location.href}).catch(function(){})})}}
  if(c){c.addEventListener('click',function(){
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(location.href).then(function(){say('Link copied')},function(){say('Copy failed. Copy the address bar link.')})}
    else{var t=document.createElement('textarea');t.value=location.href;document.body.appendChild(t);t.select();try{document.execCommand('copy');say('Link copied')}catch(e){say('Copy the address bar link.')}document.body.removeChild(t)}})}
  // Lightweight floating Ko-fi link (no third-party script)
  if(!document.getElementById('ctr-kofi-float')){
    var koFiLink=document.createElement('a');
    koFiLink.id='ctr-kofi-float';
    koFiLink.href='https://ko-fi.com/classictvrewind';
    koFiLink.target='_blank';
    koFiLink.rel='noopener noreferrer';
    koFiLink.textContent='☕ Buy me a coffee';
    koFiLink.setAttribute('aria-label','Buy me a coffee on Ko-fi');
    koFiLink.style.cssText='position:fixed;right:20px;bottom:20px;z-index:9999;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 17px;border-radius:999px;background:#D94B3D;color:#fff;font:600 14px/1.2 Arial,sans-serif;text-decoration:none;box-shadow:0 4px 16px rgba(0,0,0,.24);';
    document.body.appendChild(koFiLink);
  }

})();
