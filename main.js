// start of burger menu script
const check = document.querySelector('#check');
const iconBars = document.querySelector('#iconBars');
const iconX = document.querySelector('#iconX');

check.addEventListener('click', () => {
    if (check.checked) {
        iconBars.style.display = "none";
        iconX.style.display = "block"
    } else {
        iconX.style.display = "none"
        iconBars.style.display = "block";
    }
});

const menuBtn = document.querySelectorAll(".menu-btn");
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', () => {
        if (check.checked) {
            check.checked = false;
            iconX.style.display = "none"
            iconBars.style.display = "block";
        }
    });
}


// end of menu script


// start of recipe script
const detailsCon = document.querySelector(".details-container");
const recipeBtn = Array.from(document.querySelectorAll('.recipe-btn'));
recipeBtn.map( button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case 'viewRecipe1':
                detailsCon.style.display = "block";
                console.log('1');
                break;
        
            default:
                console.log('error');
                break;
        }
    });
});

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    if (detailsCon.style.display == "block") {
        detailsCon.style.display = "none";
    } else {
        detailsCon.style.display = "block";
    }
    console.log('close');
})
// end of recipe script