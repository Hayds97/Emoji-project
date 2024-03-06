// selecting the stars in the index.html using class selector setting them as constance. 
const starsEl = document.querySelectorAll(".fa-star"); 
// selecting emoji elements in the index and setting them as constance. 
const emojisEl = document.querySelectorAll(".far");

/* selecting array of stars 0-4 using forEach. Adding event(click) listener to each star. called the function updateRating, passing index to function. */
starsEl.forEach((starEl, index )=>{
    starEl.addEventListener("click", () => {
updateRating(index)
    });
});

//calling the function, passes the index. selecting stars with forEach. Passing the index with idx as index was already used. if the idx is less than the index+1 it will add the class active. classList.remove added so that it removes added stars as score selection changes. 
function updateRating(index){
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index + 1){
            starsEl.classList.add("active");
        } else {
            starsEl.classList.remove("active");
        }
        
    });
    //selecting each emoji. Then amending the transform styling to  X 50px the existing value of transform of the emojis relating to the index value. (0 X-50px = -0px, 1x-50px =-50px and so on.)
    emojisEl.forEach ((emojiEl)=> {
    emojiEl.style.transform = `translateX(-${index * 50}px)`; 
    });
}

