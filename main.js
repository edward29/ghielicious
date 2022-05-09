// start of burger menu script
const check = document.querySelector('#check');
const iconBars = document.querySelector('#iconBars');
const iconX = document.querySelector('#iconX');

check.addEventListener('click', () => {
    if (check.checked) {
        iconBars.style.display = "none";
        iconX.style.display = "block"
        console.log("click");
    } else {
        iconX.style.display = "none"
        iconBars.style.display = "block";
    }
});

const menuBtn = document.querySelectorAll(".menu-btn");
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', function() {
        if (check.checked) {
            check.checked = false;
            iconX.style.display = "none"
            iconBars.style.display = "block";
            console.log('check');
        }
        console.log('hi');
    });
    
}


// end of menu script