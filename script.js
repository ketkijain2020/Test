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
},500);

// YES CLICK
yesBtn.onclick = () => {
    if(step === 0){
        step=1;
        showStep(1);
        sticker.src="stickers/Ask.gif";
    } else {
        showStep(4);
        sticker.src="stickers/Love.jpg";
        yesBtn.style.display="none";
        noBtn.style.display="none";
    }
};

// NO CLICK FLOW
noBtn.onclick = () => {
    if(step === 1){
        step=2;
        showStep(2);
        sticker.src="stickers/Think.jpg";
    }
    else if(step === 2){
        step=3;
        showStep(3);
        sticker.src="stickers/Angry.jpg";
        prankMode=true;
    }
};

// PRANK MODE (works on mobile tap + hover)
function moveNoButton(){
    const x = Math.random()*250 - 125;
    const y = Math.random()*200 - 100;
    noBtn.style.transform=`translate(${x}px,${y}px)`;
    yesBtn.style.transform="scale(1.1)";
}

noBtn.addEventListener("mouseover",()=>{ if(prankMode) moveNoButton(); });
noBtn.addEventListener("touchstart",()=>{ if(prankMode) moveNoButton(); });