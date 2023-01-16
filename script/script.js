const mainbox = document.querySelector(".main-box");
const submit = document.querySelector(".submit-button");
const mainbox2=document.querySelector(".main-box-two")
const reset=document.querySelector(".reset-button")
const rating=document.getElementById("result")
const rates=document.querySelectorAll(".button")



submit.addEventListener("click" ,()=>{
mainbox2.classList.remove("hide")
mainbox.style.display="none"
}
)
reset.addEventListener("click" ,()=>{
mainbox2.classList.add("hide")
mainbox.style.display="block"
}
)


rates.forEach( (rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerText=rate.innerText
        console.log("hi");
    })
})



  









