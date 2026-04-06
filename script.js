let step = 0;
let prankMode = false;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sticker = document.getElementById("sticker");

const steps = [
    document.getElementById("step0"),
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("finalMsg")
];

function showStep(num){
    steps.forEach(s => s.classList.add("hide"));
    steps[num].classList.remove("hide");
}

// floating hearts 💖
setInterval(()=>{
    let heart=document.createElement("div");
    heart.innerHTML="💖";
    heart.className="heart";
    heart.style.left=Math.random()*100+"%";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
},400);

// YES CLICK 💖
yesBtn.onclick = () => {
    if(step < 1){
        step=1;
        showStep(1);
        sticker.src="stickers/first.gif";
    } else {
        showStep(4);
        sticker.src="stickers/Final.jpg";
        yesBtn.style.display="none";
        noBtn.style.display="none";
    }
};

// NO CLICK 😈
noBtn.onclick = () => {
    if(step === 1){
        step=2;
        showStep(2);
        sticker.src="stickers/second.jpg";
    }
    else if(step === 2){
        step=3;
        showStep(3);
        sticker.src="stickers/third.jpg";
        prankMode=true; // prank activated 😈
    }
};

// NO button runs crazy after step 3 😆
noBtn.addEventListener("mouseover",()=>{
    if(prankMode){
        const x=Math.random()*700-350;
        const y=Math.random()*500-250;
        noBtn.style.transform=`translate(${x}px,${y}px)`;
        yesBtn.style.fontSize=(parseInt(getComputedStyle(yesBtn).fontSize)+3)+"px";
    }
});