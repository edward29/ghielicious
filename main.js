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
const img = document.querySelector("#detailsImg");
const instruction = document.querySelector("#instruction");
const ingredients = document.querySelector("#ingredients");
recipeBtn.map( button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        switch (e.target.id) {
            case 'viewRecipe1':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 1";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('1');
                break;
            case 'viewRecipe2':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 2";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('2');
                break;
            case 'viewRecipe3':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 3";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('3');
                break;
            case 'viewRecipe4':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 4";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('4');
                break;
            case 'viewRecipe5':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 5";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('5');
                break;
            case 'viewRecipe6':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 6";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('6');
                break;
            case 'viewRecipe7':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 7";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('7');
                break;
            case 'viewRecipe8':
                detailsCon.style.display = "block";
                img.src = "img/cake1.png";
                instruction.innerText = "sample 8";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('8');
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

// start of search script
function search() {
    let h2, txtValue;
    const input = document.querySelector("#searchInput");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        h2 = li[i].querySelectorAll(".names")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// end of search script