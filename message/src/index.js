const bannerMessage = document.getElementById('welcome-banner');
const hour = new Date().getHours();

const header2 = message => {
    return `<h2>${message}</h2>`;
}

// console.log(header2("hello"));
if (hour < 12) {
    bannerMessage.innerHTML = header2('Good Morning <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.png" /></span>');
} else if ( hour < 17){
    bannerMessage.innerHTML = header2('Good Afternoon <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.png" /></span>');
} else {
    bannerMessage.innerHTML = header2('Good Evening <span class="banner-span"><i>My Love</i> <img src="src/images/red_ribbon.png" /></span> ');
};