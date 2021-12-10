var randomNo = Math.random();
let arr = [];
let aniArr=[];
const section = document.getElementById("section");
const slider = document.getElementById("slider");
console.log(section.childNodes)
let numOfBars=slider.value;
console.log(numOfBars);


function resetArr(){
    let arr1=[];
    for (let i=0; i<numOfBars; i++){
        arr1.push(Math.random()*95);
    }
    return arr1
}

arr = resetArr();

function getWidth(noOfBars){
    return (99.8/noOfBars)-0.2;
}

function createChild(parent, i){
    createdElement = document.createElement("div");
    createdElement.classList.add("bar");
    createdElement.style.height= arr[i]+"%";
    createdElement.style.width=getWidth(numOfBars)+"%";
    parent.appendChild(createdElement);
}

function createDivs(){
    for (let i=0; i<arr.length; i++){
        createChild(section, i);
        // console.log(arr[i]+"px");
    }
}

function deleteDivs(){
    while(section.childNodes.length>0){
        section.removeChild(section.childNodes[0]);
    }
}
function compare(i){
    if(arr[i]>arr[i+1]){
        var b=arr[i+1];
        arr[i+1]=arr[i];
        arr[i]=b;
        section.insertBefore(section.childNodes[i+1], section.childNodes[i]);        
    }
}


function max(arr){
    for(let j=0; j<arr.length; j++){
        setTimeout(() => {
            for(let i=0; i<arr.length; i++){
                setTimeout(() => {  
                    compare(i); 
                }, (i+1)*5);        
            }    
        }, (j+1)*20);
    }
}

createDivs();
let btn = document.getElementById("click");
let reset = document.getElementById("reset");
btn.addEventListener("click", function(){max(arr)});
reset.addEventListener("click", function(){arr=resetArr();deleteDivs();createDivs();});
slider.addEventListener("change",function(){numOfBars=slider.value; arr=resetArr(); deleteDivs();createDivs();})


// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i])
//     }
// }