const lb=document.getElementById('lb');let cur=0;
function show(i){cur=(i+ART.length)%ART.length;const o=ART[cur];lbimg.src=o.img;lbimg.alt=o.title;lbt.textContent=o.title;lba.textContent=o.author;lbc.textContent=o.caption;if(!lb.open)lb.showModal();}
document.querySelectorAll('.card').forEach(c=>c.onclick=()=>show(+c.dataset.i));
document.querySelector('.x').onclick=()=>lb.close();prev.onclick=()=>show(cur-1);next.onclick=()=>show(cur+1);
lb.onclick=e=>{if(e.target===lb)lb.close()};document.onkeydown=e=>{if(!lb.open)return;if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)};
