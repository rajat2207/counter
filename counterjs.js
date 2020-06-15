var input=document.getElementById('input');
var button=document.getElementById('button');
var current=document.querySelector('.current');
var next=document.querySelector('.next');

button.addEventListener('click',function(){
    if(input.value==""){
        current.innerText="0";
        return;
    }
    var count=input.value;
    input.value="";
    current.innerText="0";
    startCounter(count);
})

function startCounter(count){
    var counter=1;
    next.innerText=counter;
    var interval = setInterval(function(){
        if(counter==count){
            clearInterval(interval);
        }
        next.classList.add('animate');
        setTimeout(function() {
            next.classList.remove('animate');
            current.innerText=counter;
            counter++;
            next.innerText=counter;
        },500);
    },1000)
}

