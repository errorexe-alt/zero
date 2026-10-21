(function(){
  document.querySelectorAll('[data-countdown]').forEach(function(el){
    var d=Date.parse(el.dataset.date||'');
    if(isNaN(d)){return}
    el.innerHTML='<p class="muted">'+(el.dataset.label||'Coming up')+'</p><div class="count"><div><span data-u="d">0</span><small>days</small></div><div><span data-u="h">0</span><small>hours</small></div><div><span data-u="m">0</span><small>minutes</small></div><div><span data-u="s">0</span><small>seconds</small></div></div>';
    function tick(){var t=Math.max(0,d-Date.now()),v={d:Math.floor(t/864e5),h:Math.floor(t/36e5)%24,m:Math.floor(t/6e4)%60,s:Math.floor(t/1e3)%60};
      for(var k in v){el.querySelector('[data-u='+k+']').textContent=v[k]}}
    tick();setInterval(tick,1000);
  });
})();
