const textEl = document.getElementById("text");

const totCon = document.getElementById("tot-con");

const remCon = document.getElementById("rem-con");


textEl.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totCon.innerText =  textEl.value.length;
    remCon.innerText =  textEl.getAttribute("maxLength") - textEl.value.length;
}
