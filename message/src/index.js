const bannerMessage = document.getElementById('welcome-banner');
const subHeader = document.querySelector('sub-header');
const hour = new Date().getHours();

const header2 = message => {
    return `<h2>${message}</h2>`;
}

const messages = [
    "<p>Hello Ash!</p>",
    "<p>Brice told me about you. I heard you are my biggest fan</p>",
    "<p>I wanted to say thank you for supporting me all these years and for being a part of the adventure</p>",
    "<p>Also I wanted to tell you that I am proud of you, Brice told me much about you",
    "<p>He said how you make him happy, how strong you are, how much he loves you and how important you are to him</p>",
    "<p>Is he your boyfriend?</p>",
    "<p>Not yet? aww, well maybe things will change for you soon :)</p>",
    "<p>He seems to really love you</p>",
    "<p>Also, Brice said he would like to watch Hello Kitty with you</p>",
    "<p>I look forward to seeing you two on my adventures</p>",
    "<p>I am proud of you Ash strong girl.<br> Unfortunately it's time for me to go. But Brice has something to tell you </p>",
    "<p>Have a good time together! And I will you soon!</p>",
];

// console.log(header2("hello"));
if (hour < 12) {
    bannerMessage.innerHTML = header2('Good Morning <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.webp" /></span>');
} else if ( hour < 17){
    bannerMessage.innerHTML = header2('Good Afternoon <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.webp" /></span>');
} else {
    bannerMessage.innerHTML = header2('Good Evening <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.webp" /></span> ');
};

const setupKitty = (el) => {
    el.classList.add('kitty-appear');
};

const elementInView = (el, scrollOffSet = 0) => {
    let elementTop = el.getBoundingClientRect().top;
    console.log(elementTop);
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffSet )
    );
};
const disappear = el => {
    el.style.display = "none";
}
const onScrollDo = () => {
    const kitty = document.getElementById('hi-kitty');
    if (elementInView(kitty,300)) {
        const ghostText = document.querySelector('.text');
        ghostText.classList.add('ghosty');
        // setTimeout(()=> {disappear(ghostText), 3000});
        setupKitty(kitty);
        document.querySelector('.chat-box-section').classList.add('chat-box-appear');
        console.log('success');
    };
};

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const chatBox = document.querySelector('.chat-box');
let chatIndex = 0;

const next = () => {
    if (chatIndex === messages.length - 1) return;
    chatBox.innerHTML = messages[chatIndex + 1];
    chatIndex ++;
}
const prev = () => {
    if (chatIndex === 0) return;
    chatBox.innerHTML = messages[chatIndex - 1];
    chatIndex -= 1;
}
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click',next);
window.addEventListener("scroll", onScrollDo, false);

