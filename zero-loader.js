(function(){
  // Fill these in with your real links.
  var ZERO={discord:'',shop:''};
  function link(attr,url){document.querySelectorAll('['+attr+']').forEach(function(a){
    if(url){a.href=url;a.target='_blank';a.rel='noopener'}else{a.setAttribute('aria-disabled','true');a.title='Link coming soon'}})}
  link('data-discord',ZERO.discord);link('data-shop',ZERO.shop);
  var here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav ul a').forEach(function(a){if(a.getAttribute('href')===here)a.setAttribute('aria-current','page')});
  requestAnimationFrame(function(){document.body.classList.add('ready')});
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){})}
})();
