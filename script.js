function createCarousel(images) { // reusable function to render a set 

    var currentImage = 0;

    function showImage(n) { // all images hidden and all dots inactive
        images.forEach(function showImgs(image) {
            image.style.display = "none"
            
        })
        images[n].style.display = "flex" // after that position passed into  function is made active
    }
    document.addEventListener("load", showImage(currentImage))//  function called when page first loaded



    function next() { // when last slide reached, position changed to 0
        if (currentImage >= images.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        showImage(currentImage)
    }

    function prev() { // when first slide reached, position changed to last
        if (currentImage <= 0) {
            currentImage = images.length - 1;
        } else {
            currentImage--;
        }
        showImage(currentImage)
    }


    // linking functions to next and prev classes
    document.querySelector("#next").addEventListener('click', next)
    document.querySelector("#prev").addEventListener('click', prev)
}


// rendering first set 
const items1 = document.querySelectorAll(".image1") // store images and dots in an array

createCarousel(items1);

// second set
const items2 = document.querySelectorAll(".image2") 

createCarousel(items2);


// third set
const items3 = document.querySelectorAll(".image3") 

createCarousel(items3);

// cycle between story sets
function showStory(storyName) { // stores each set as array element and changes display attribute
    var i;
    var set = document.getElementsByClassName("story");
    for (i = 0; i < set.length; i++) {                  
        set[i].style.display = "none";
    }
    document.getElementById(storyName).style.display = "block";
}
