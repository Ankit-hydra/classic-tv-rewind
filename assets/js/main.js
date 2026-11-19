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
  // Ko-fi floating tip button (loaded on every page that uses this shared script)
  var koFiWidgetScript=document.createElement('script');
  koFiWidgetScript.src='https://storage.ko-fi.com/cdn/widget/Widget_2.js';
  koFiWidgetScript.async=true;
  koFiWidgetScript.onload=function(){
    if(window.kofiwidget2){
      window.kofiwidget2.init('Buy me a coffee','#D94B3D','U5O32AWBFY');
      window.kofiwidget2.draw();
    }
  };
  document.body.appendChild(koFiWidgetScript);

})();
