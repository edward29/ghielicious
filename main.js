const loader = document.querySelector(".loader");
window.addEventListener('load', disapperIt);

function disapperIt() {
    loader.classList.add("disappear");
}



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
                    img.src = "img/img1.png";
                    instruction.innerHTML = "1. In a bowl..mix all canola oil ,eggs,sugar ,baking powder,baking soda,salt ,fresh milk<br/>2. mix all to combine <br/>3. Add flour  and walnuts fruit but<br/>4. Mix again but do not over mixed<br/>5. Bake 170°C<br/>6. Time 55 minutes<br/><br/><b>Peanut butter frosting</b><br/>1. Combine cream cheese peanut butter and sweet & fit stevia powder<br/><br/><br/>Design your cake and put edible carrots";
                    ingredients.innerHTML = "2 Cups all purpose flour<br/>1 1/2 baking soda<br/>1  1/2 baking calumet<br/>1 Tsp cinnamon<br/>1/2 Tsp salt<br/>1/2 Cups walnuts<br/>1 Cup muscavado sugar<br/>3 eggs<br/>2 cups carrots<br/>1/2 Cup fruit nuts<br/>1/3 Cups fresh milk<br/>1 Cup canola oil<br/>1/2 Cup pineapple tidbits<br/><br/><b>Peanut Butter Frosting:</b><br/>1 Cup cream cheese<br/>1 Cup  peanut butter<br/>3 Grams Sweet & Fit Stevia powder";
                    break;
                case 'viewRecipe2':
                    detailsCon.style.display = "block";
                    img.src = "img/img2.png";
                    instruction.innerHTML = "1. Put sugar and water into pan and cook in low to medium fire until melt it and put into prepare pan<br/>2. Put and mix egg yolks, condence milk, evap milk and vanilla into bowl and set aside<br/>3. In a bowl cream the egg yolks and sugar ..add milk,canola oil ,vanilla,mixed until I combine then sift the flour into the wet ingredients then set aside<br/>4. For meringue whipped until it's soft peak then add to batter mixture cut and fold direction <br/>5. transfer the mixture into prepare pan with caramel sauce<br/>6. Sift the flan<br/>7. Add the batter mixture<br/>8. Bake into pre -heated oven for 160C° for 30 to 40 minutes or until done <br/><br/>tips :always do the toothpick test when it comes out clean.";
                    ingredients.innerHTML = "<b>For the Caramel Sauce:</b><br/>1/2 Cup sugar<br/>1/4 Cup water<br/><br/><b>For the Flan</b><br/>4 Egg yolks <br/>1 can condensed milk<br/>1 1/2 Cup evaporated milk or fresh milk<br/>1 Tsp vanilla<br/><br/><b>For the Sponge Ccake:</b><br/>4 Egg yolks<br/>1/4 Cup sugar<br/>1/4 Cup vanilla<br/>1/4 Cup fresh milk or evaporated milk<br/>1/4 Cup canola oil<br/>1 Cup all purpose flour<br/>1 Tsp baking powder<br/>1/4 Tsp iodized salt<br/><br/><b>For the Meringue:</b><br/>4 Egg yolks <br/>1/2 Tsp cram of tartar<br/>1/3 Cup sugar";
                    break;
                case 'viewRecipe3':
                    detailsCon.style.display = "block";
                    img.src = "img/img3.png";
                    instruction.innerHTML = "1. Sift flour ,Salt ,Baking Powder, Baking soda and add Sugar.<br/>2. Mix and set aside<br/>3. In another bowl put milk, canola oil, egg and vanilla <br/>4. Mix again and add to dry ingredients<br/>5. Mix cocoa powder and coffee and hot water<br/>6. Stir and add to batter mixture.<br/>7. Miix and transfer to a pan with parchment paper .<br/>8. Bake inot pre heated oven with 160°C for 50 minutes.<br/>9. Cool completly to coolling rack.";
                    ingredients.innerHTML = "2 Cups all purpose flour<br/>2 Cups white sugar<br/>2 Tsp baking powder<br/>1 1/2 Tsp baking soda<br/>1/2 Tsp salt<br/>3/4 Cups cocoa powder<br/>1 Tsp coffee<br/>1 Cup milk (Fresh milk or evaporated milk)<br/>1 Tsp vanilla<br/>1/2 Cup canola oil<br/>1 Cup hot water<br/>2 Eggs";
                    break;
                case 'viewRecipe4':
                    detailsCon.style.display = "block";
                    img.src = "img/img4.png";
                    instruction.innerHTML = "1. Sift flour ,Salt ,Baking Powder, Baking soda and add Sugar.<br/>2. Mix and set aside<br/>3. In another bowl put milk, canola oil, egg and vanilla <br/>4. Mix again and add to dry ingredients<br/>5. Mix cocoa powder and coffee and hot water<br/>6. Stir and add to batter mixture.<br/>7. Miix and transfer to a pan with parchment paper .<br/>8. Bake inot pre heated oven with 160°C for 50 minutes.<br/>9. Cool completly to coolling rack.";
                    ingredients.innerHTML = "<b>For Choco Moist Chocolate Cake:</b><br/>2 Cups all purpose flour<br/>2 Cups sugar (washed or brown sugar)<br/>2 Tsp baking powder<br/>1 1/2 Tsp baking soda<br/>1/2 Tsp IODIZED SALT<br/>3/4 Cup cocoa powder<br/>1 Tsp coffee<br/>1 Cup fresh milk or evaporated milk<br/>1 Tsp vanilla <br/>1/2 Cup canola oil<br/>1 Cup hot water<br/>1/2 Cup canola oil<br/><br/><b>for frosting:</b><br/>1 Cup ever whipped<br/>1/2 Cup powdered sugar<br/><br/><b>For Chocolate Ganache:</b><br/>1 Can evaporated milk<br/>1 Cup sugar<br/>1/2 Cup cocoa powder<br/>2 Tbsp all purpose flour<br/>1 Tsp instant coffee<br/>1/4 Cup water<br/>4 Tbsp butter<br/><br/><b>For Design:</b><br/>Printable topper<br/>Sprinkles";
                    break;
                case 'viewRecipe5':
                    detailsCon.style.display = "block";
                    img.src = "img/img5.png";
                    instruction.innerHTML = "1. Combine dry ingredients cake flour, baking powder and salt. strain 3x<br/>2. Set Aside<br/>3. Combine wet ingredients egg yolks, sugar canola oil fresh milk.<br/>4. Mixed them together<br/>5. After mixed the dry and wet combine the two and set aside<br/>6. Whipped egg whites until soft peaks and combine the butter mixture .be carefull to over mixed. Cut and Fold procedure to combined it.<br/>7. Put into baking pan 8x3 <br/>8. Baked for  40 minutes <br/>9. Cool completly in cooling rack<br/><br/><b>Frosting:</b><br/>Whipped the ever whipped and powdered sugar. Do not over whiiped to make it stable<br/><br/>TIPS: MAXIMUM TO WHIPPED IS ONLY 5 MINUTES";
                    ingredients.innerHTML = "1 1/4 Cup cake flour<br/>1 1/4 Tsp baking powder<br/>1/2 Tsp salt <br/>5 Egg yolks<br/>1/4 Cup white sugar<br/>1/4 Cup canola oil<br/>1/4 Cup fresh milk<br/>1 Tsp ube flavor<br/><br/><b>MERINGUE:</b><br/>5 Egg thites<br/>1/2 Tsp C.O.T.<br/>1/2 Cup white sugar<br/><br/><b>Frosting:</b>1  Cup ever whipped<br/>1/4 Cup powdered sugar";
                    break;
                case 'viewRecipe6':
                    detailsCon.style.display = "block";
                    img.src = "img/img6.png";
                    instruction.innerHTML = "1. Sift the dry ingredients flour baking powder  salt in a bowl <br/>2. Put egg yolks sugar<br/>3. Mixed until it cream,add milk canola oil vanilla and coffee mixture dissolve in hot water<br/>4. Mix and add the dry ingredients..then set aside<br>5. Whipped the egg whites cream of tartar and gradually add the sugar <br>6. Whipped until soft peaks. Then add to batter mixture cut and fold direction only.<br/>7. Transfer into pan  with parchment paper 8*3 and bake for 160°c for 25 minutes.<br/>8. Cool completely in cooling rack<br/><br/><b>For Coffee Frosting:</b><br/>1. Whipped the all purpose cream,cream cheese and the SWEET & FIT STEVIA POWDER.<br>2. Whipped until ready to pipe,then add the coffee mixture.<br/><br/>Ready to frost your cake and you can design what you want.<br/><br/><br/>Happy baking";
                    ingredients.innerHTML = "<b>Sponge Cake</b><br/>1 Cup all purpose flour<br/>1 Tsp baking calumet<br/>1/2 Tsp iodized salt<br/>1/3 Cup White sugar<br/>1 Tbsp glorious blend 7in1 coffee<br/>1 Tbsp hot water<br/>1/4 cup canola oil<br/>1/4 Cup fresh milk<br/>1 Tsp vanilla<br/>4 Egg yolks<br/><br/><b>Meringue</b><br/>4 Egg whites<br/>1/2 Tsp cream of tartar<br/>Sugar 1/3 cup<br/><br/><b>Coffee Cream Cheese Frosting:</b><br/>1 Cup all purpose cream<br/>1 Cup cream cheese<br/>4 Grams Sweet & Fit Stevia Powder<br/>1 Tbsp glorious Blend 7in1 coffee<br/>1 Tbsp hot water";
                    break;
                case 'viewRecipe7':
                    detailsCon.style.display = "block";
                    img.src = "img/img7.png";
                    instruction.innerHTML = "1. Combine dry ingredients cake flour, baking powder and salt. strain 3x<br/>2. Set Aside<br/>3. Combine wet ingredients egg yolks, sugar canola oil fresh milk.<br/>4. Mixed them together<br/>5. After mixed the dry and wet combine the two and set aside<br/>6. Whipped egg whites until soft peaks and combine the butter mixture .be carefull to over mixed. Cut and Fold procedure to combined it.<br/>7. Put into baking pan 8x3 <br/>8. Baked for  40 minutes <br/>9. Cool completly in cooling rack<br/><br/><b>Frosting:</b><br/>Whipped the ever whipped and powdered sugar. Do not over whiiped to make it stable<br/><br/>Add the Small can fruit cocktail <br/><br/> TIPS: MAXIMUM TO WHIPPED IS ONLY 5 MINUTES";
                    ingredients.innerHTML = "<b>Wet Ingredients:</b><br/>5 Egg yolks<br/>1/2 Cup white sugar<br/>1/4 Cup canola oil<br/>1 Tsp vanilla<br/>1/4 Cup pineapple juice<br/><br/><b>Dry Ingredients:</b><br/>1 1/4 Cup cake flour<br/> 1/2 Tsp baking powder<br/>1/2 Tsp iodized salt<br/>1 Tbsp ube flavoring<br/><br/><b>Meringue:</b><br/>5 Egg whites<br/>1/2 Tsp cream of tartar<br/>!/4 cup sugar<br/><br/><b>Filling</b><br/>1 Cup everwhipped<br/>1/4 Cup confectioners sugar<br/>1 Small can fruit cocktail<br/>Edible candies<br/>Fresh strawberries<br/>Chocolate coins";
                    break;
                case 'viewRecipe8':
                    detailsCon.style.display = "block";
                    img.src = "img/img8.png";
                    instruction.innerHTML = "1. Combine dry ingredients cake flour, baking powder and salt. strain 3x<br/>2. Set Aside<br/>3. Combine wet ingredients egg yolks, sugar canola oil fresh milk ube flavor.<br/>4. Mixed them together<br/>5. After mixed the dry and wet combine the two and set aside<br/>6. Whipped egg whites until soft peaks and combine the butter mixture .be carefull to over mixed. Cut and Fold procedure to combined it.<br/>7. Put into baking pan 8x3 <br/>8. Baked for  40 minutes <br/>9. Cool completly in cooling rack<br/><br/><b>Frosting:</b><br/>Whipped the ever whipped and powdered sugar. Do not over whiiped to make it stable<br/><br/>TIPS: MAXIMUM TO WHIPPED IS ONLY 5 MINUTES";
                    ingredients.innerHTML = "1 1/4 Cup cake flour<br/>1 1/4 Tsp baking powder<br/>1/2 Tsp salt <br/>5 Egg yolks<br/>1/4 Cup white sugar<br/>1/4 Cup canola oil<br/>1/4 Cup fresh milk<br/>1 Tsp ube flavor<br/>4 Drops bakersfields flavorade ube<br/><br/><b>MERINGUE:</b><br/>5 Egg thites<br/>1/2 Tsp C.O.T.<br/>1/2 Cup white sugar<br/><br/><b>Frosting:</b>1  Cup ever whipped<br/>1/4 Cup powdered sugar";
                    break;
                default:
                    return false;
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
