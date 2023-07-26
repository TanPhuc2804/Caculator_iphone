const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')
const present =document.querySelector('.present')
const fac=document.querySelector('.fac')

var firstValue ="";
var isFirstValue=false;
var secondValue="";
var isSecondValue=false;
var sign="";
var resultValue=0;

for(let i =0 ;i<numbers.length ;i++){
    numbers[i].addEventListener("click",(e)=>{
        let atr = e.target.getAttribute('value');//atr=1
        if(isFirstValue===false){
            getFirstValue(atr)
        }

        if(isSecondValue==false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el){//el=atr=1, el=2
    result.innerHTML=""
    firstValue+=el//first=12
    result.innerHTML=firstValue//hien 1 
    firstValue=+firstValue//1
}

function getSecondValue(el){
    if(firstValue !="" && sign!=""){
  
        secondValue += el
        result.innerHTML=secondValue
        secondValue=+secondValue
    }
}


function getSign(){
    for(let i =0;i<signs.length;i++){
        signs[i].addEventListener('click',(e)=>{
            sign=e.target.getAttribute('value')
            isFirstValue=true
            
        })
    }
}
getSign()

equal.addEventListener('click',()=>{
    result.innerHTML="";
    if(sign==="+"){
        resultValue=firstValue+secondValue
    }else if(sign==="-"){
        resultValue=firstValue-secondValue
    } else if(sign ==="/"){
        resultValue=firstValue/secondValue
    }else if(sign==="x"){
        resultValue=firstValue*secondValue
    }
    result.innerHTML=resultValue
    firstValue = resultValue
    secondValue=""


})

negative.addEventListener('click',()=>{
    result.innerHTML =""
    if(firstValue!=""){
        resultValue=-firstValue
        firstValue=resultValue
    }

    if(firstValue!="" && secondValue != "" && sign!=""){
        resultValue=-resultValue
    }

    result.innerHTML=resultValue
})

present.addEventListener('click',()=>{
    result.innerHTML =""
    if(firstValue!=""){
        resultValue=firstValue/100
        firstValue=resultValue
    }

    if(firstValue!="" && secondValue != "" && sign!=""){
        resultValue=resultValue/100
    }

    result.innerHTML=resultValue
})

fac.addEventListener('click',()=>{
    
})

clear.addEventListener('click',()=>{
    result.innerHTML=0
    firstValue ="";
    isFirstValue=false;
    secondValue="";
    isSecondValue=false;
    sign="";
    resultValue=0;
})