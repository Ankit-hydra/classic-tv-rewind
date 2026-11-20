(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus()}})}

  // Keep the article contents expanded on desktop and collapsed by default on phones.
  var tocDetails=document.querySelectorAll('.toc-dropdown');
  if(tocDetails.length){
    var tocMobile=window.matchMedia('(max-width: 959px)');
    var syncToc=function(){tocDetails.forEach(function(toc){toc.open=!tocMobile.matches})};
    syncToc();
    if(tocMobile.addEventListener)tocMobile.addEventListener('change',syncToc);
    else if(tocMobile.addListener)tocMobile.addListener(syncToc);
  }
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
        if(supportClosed||alreadySeen)return;
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
  // Floating retro-TV button for one-time Ko-fi tips. The Ko-fi page must have one-time tips as its default.
  if(!document.getElementById('ctr-kofi-float')){
    var koFiLink=document.createElement('a');
    koFiLink.id='ctr-kofi-float';
    koFiLink.className='ctr-kofi-float';
    koFiLink.href='https://ko-fi.com/classictvrewind';
    koFiLink.target='_blank';
    koFiLink.rel='noopener noreferrer';
    koFiLink.innerHTML='<svg viewBox="0 0 48 42" aria-hidden="true" focusable="false"><path d="M11 10 5 2M29 10l7-8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><rect x="3" y="10" width="38" height="27" rx="5" fill="none" stroke="currentColor" stroke-width="3"/><rect x="8" y="15" width="22" height="16" rx="2" fill="currentColor" opacity=".2"/><path d="M13 23h12M19 17v12M34 18h3M34 24h3M34 30h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>Support us</span>';
    koFiLink.setAttribute('aria-label','Support us — send a one-time tip on Ko-fi');
    document.body.appendChild(koFiLink);
  }

})();
