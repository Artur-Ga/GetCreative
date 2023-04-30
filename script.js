
document.getElementById("bg").style.animation = 'fadeIn 3s both ease';
document.getElementById("logo").style.animation = 'fadeIn 3s both ease';

const minImages = 12; // Минимальное количество фотографий на веб-сайте
const maxImages = 100; // Количество фотографий в папке photos

let imageArray = [];
let showMoreImages = 0;

function lessImages() {
    document.getElementById("img-container").innerHTML = "";

    number = 0;

    while (number < (minImages)) { 
        number++;
        imageArray[number] = "photos/" + (number) + ".jpg";
        document.getElementById("img-container").innerHTML += '<div class="small-container" id="gallery-window-'+number+'" onclick="openWindow('+number+')"><img src="'+imageArray[number]+'"></div>';
    }
}

lessImages()

function openWindow(num){
    document.getElementById("gallery-container").style.animation = 'fadeIn 1.2s both ease';

    document.getElementById("gallery-window").innerHTML = "";
    document.getElementById("left-container").innerHTML = "";
    document.getElementById("right-container").innerHTML = "";

    document.getElementById("gallery-window").innerHTML += '<img src="photos/'+num+'.jpg" class="gallery-window-img">';
    
    if ((num - 1) == 0) { document.getElementById("left-container").innerHTML += '<img src="images/arrow-left.png" class="arrow-left-disabled">'; }
    else { document.getElementById("left-container").innerHTML += '<img src="images/arrow-left.png" class="arrow-left" onclick="prevImage('+num+')">'; }

    if (showMoreImages == 1) { 
        if ((num) == maxImages) { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }
    else {
        if ((num) == minImages) { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }
}

function nextImage(num){
    openWindow(num + 1);
}

function prevImage(num){
    openWindow(num - 1);
}

function moreImages() {
    number = minImages

    if (showMoreImages == 0) { 
    
        while (number < (maxImages)) { 
            number++;
            imageArray[number] = "photos/" + (number) + ".jpg";
            document.getElementById("img-container").innerHTML += '<div class="small-container" id="gallery-window-'+number+'" onclick="openWindow('+number+')"><img src="'+imageArray[number]+'"></div>';
        }

        document.getElementById("gal-btn").innerHTML = 'Меньше фотографий';

        showMoreImages = 1;

        return
    }

    if (showMoreImages == 1) { 
        lessImages()

        document.getElementById("gal-btn").innerHTML = "Больше фотографий";

        showMoreImages = 0;
    }
}

function closeWindow() {
    document.getElementById("gallery-container").style.animation = 'fadeOut 0.7s both ease';
}

document.addEventListener( "keydown" , (event) => {
    const key = event.key;
    if (key == "Escape") {
        closeWindow()
    }
});

