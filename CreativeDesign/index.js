const btns=document.querySelectorAll(".story-btn");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        btns[i].classList.toggle('btn-active');
        btns[i].nextElementSibling.classList.toggle('story-active');
    });
}
