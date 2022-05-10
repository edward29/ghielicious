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
                img.src = "img/1st cake.png";
                instruction.innerText = "sample 1";
                ingredients.innerHTML = "";
                console.log('1');
                break;
            case 'viewRecipe2':
                detailsCon.style.display = "block";
                img.src = "img/Choco moist.png";
                instruction.innerText = "sample 2";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('2');
                break;
            case 'viewRecipe3':
                detailsCon.style.display = "block";
                img.src = "img/Cocomelon.png";
                instruction.innerHTML = "1. SIFT FLOUR ,SALT ,BAKING POWDER AND BAKING SODA AND  ADD SUGAR..THEN I MIX AND SET ASIDE<br/>2. IN ANOTHER BOWL PUT MILK,CANOLA OIL,EGG AND VANILLA ,MIX AGAIN  ADD TO DRY INGREDIENTS<br/>3. MIX COCOA POWDER AND COFFEE ADD HOT WATER ,STIR AND ADD TO BATTER MIXTURE.<br/>4. MIX AND TRANSFER TO A PAN WITH PARCHMENT PAPER .<br/>5. BAKE INTO PRE HEATED OVEN WIT 160°C FOR 50 MINUTES.<br/>6. COOL COMPLETELY TO COOLING RACK.";
                ingredients.innerHTML = "2 CUPS ALL PURPOSE FLOUR<br/>2 CUPS WHITE SUGAR<br/>2 TSP BAKING POWDER<br/>1 1/2 TSP BAKING SODA<br/>1/2 TSP SALT<br/>3/4 CUPS COCOA POWDER<br/>1 TSP COFFEE<br/>1 CUP MILK (FRESH MILK OR EVAPORATED MILK)<br/>1 TSP VANILLA<br/>1/2 CUP CANOLA OIL<br/>1 CUP HOT WATER<br/>2 EGGS";
                console.log('3');
                break;
            case 'viewRecipe4':
                detailsCon.style.display = "block";
                img.src = "img/blippi.png";
                instruction.innerText = "sample 4";
                ingredients.innerHTML = "<b>for choco moist chocolate cake:</b><br/>2 cups all purpose flour<br/>2 cups sugar (washed or brown sugar)<br/>2 tsp baking powder<br/>1 1/2 tsp baking soda<br/>1/2 tsp IODIZED SALT<br/>3/4 cup cocoa powder<br/>1 tsp coffee<br/>1 cup fresh milk or evaporated milk<br/>1 tsp vanilla <br/>1/2 cup canola oil<br/>1 cup hot water<br/>1/2 cup canola oil<br/><br/><b>for frosting:</b><br/>1 cup ever whipped<br/>1/2 cup powdered sugar<br/><br/><b>for chocolate ganache:</b><br/>1  can evaporated milk<br/>1 cup sugar<br/>1/2 cup cocoa powder<br/>2 tbsp all purpose flour<br/>1 tsp instant coffee<br/>1/4 cup water<br/>4 tbsp butter<br/><br/><b>for design:</b><br/>printable topper<br/>sprinkles";
                console.log('4');
                break;
            case 'viewRecipe5':
                detailsCon.style.display = "block";
                img.src = "img/xmas.png";
                instruction.innerText = "sample 5";
                ingredients.innerHTML = "dfsgsg<br/>sdgsgs <br/>dsdgsgfs<br/>sdgsg";
                console.log('5');
                break;
            case 'viewRecipe6':
                detailsCon.style.display = "block";
                img.src = "img/coffee cake.png";
                instruction.innerHTML = "1. Sift the dry ingredients flour baking powder  salt in a bowl <br/>2. put egg yolks sugar<br/>3. mixed until it cream,add milk canola oil vanilla and coffee mixture dissolve in hot water<br/>4. mix and add the dry ingredients..then set aside<br>5. Whipped the egg whites cream of tartar and gradually add the sugar <br>6. whipped until soft peaks. Then add to batter mixture cut and fold direction only.<br/>7. Transfer into pan  with parchment paper 8*3 and bake for 160°c for 25 minutes.<br/>8. cool completely in cooling rack<br/><br/><b>For coffee frosting:</b><br/>1. Whipped the all purpose cream,cream cheese and the SWEET &FIT STEVIA POWDER.<br>2. WHIPPED UNTIL READY TO PIPE,then add the coffee mixture.<br/><br/>Ready to frost your cake and you can design what you want.<br/><br/>I used 1m piping tip<br/>Top with cherries Chocolates<br/><br/>Happy baking";
                ingredients.innerHTML = "<b>SPONGE CAKE</b><br/>1 cup all purpose flour<br/>1 tsp baking calumet<br/>1/2 tsp iodized salt<br/>1/3 cup White sugar<br/>1 tbsp glorious blend 7in1 coffee<br/>1 tbsp hot water<br/>1/4 cup canola oil<br/>1/4 cup fresh milk<br/>1 tsp vanilla<br/>4 egg yolks<br/><br/><b>meringue</b><br/>4 egg whites<br/>1/2 tsp cream of tartar<br/>Sugar 1/3 cup<br/><br/><b>Coffee cream cheese frosting:</b><br/>1 cup all purpose cream<br/>1 cup cream cheese<br/>4 grams SWEET & FIT STEVIA POWDER<br/>1 tbsp glorious Blend 7in1 coffee<br/>1 tbsp hot water";
                console.log('6');
                break;
            case 'viewRecipe7':
                detailsCon.style.display = "block";
                img.src = "img/nycake.png";
                instruction.innerText = "sample 7";
                ingredients.innerHTML = "<b>wet ingredients:</b><br/>5 eggyolks<br/>1/2 cup white sugar<br/>1/4 cup canola oil<br/>1 tsp vanilla<br/>1/4 cup pineapple juice<br/><br/><b>dry ingredients:</b><br/>1 1/4 cup cake flour<br/> 1/2 tsp baking powder<br/>1/2 tsp IODIZED SALT<br/>1 tbsp ube flavoring<br/><br/><b>meringue:</b><br/>5 egg whites<br/>1/2 tsp cream of tartar<br/>!/4 cup sugar<br/><br/><b>filling</b><br/>1 cup everwhipped<br/>1/4 cup confectioners sugar<br/>1 small can fruit cocktail<br/>edible candies<br/>fresh strawberries<br/>chocolate coins";
                console.log('7');
                break;
            case 'viewRecipe8':
                detailsCon.style.display = "block";
                img.src = "img/Ube cake.png";
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