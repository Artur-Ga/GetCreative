
document.getElementById("bg").style.animation = 'fadeIn 3s both ease';
document.getElementById("logo").style.animation = 'fadeIn 3s both ease';

const minImages = 10; // Минимальное количество фотографий на веб-сайте
const maxImages = 10; // Количество фотографий в папке photos

let imageArray = [];
let showMoreImages = 0;

function lessImages() {
    document.getElementById("gallery-container").innerHTML = null;

    number = 0;

    while (number < (minImages)) { 
        number++;
        imageArray[number] = "photos/" + (number) + ".jpg";
        document.getElementById("gallery-container").innerHTML += '<img id"=gallery-window-'+number+'" class="gallery-img" src="'+imageArray[number]+'" onclick="openWindow('+number+')">';
    }
}

lessImages()

function openWindow(num){
    document.getElementById("gallery-window").innerHTML = null;
    document.getElementById("gallery-wrapper").style.animation = 'fadeIn 1.2s both ease';
    document.getElementById("gallery-window").style.animation = 'fadeIn 1.2s both ease';
    
    if ((num - 1) == 0) {  document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-left.png" class="arrow-left-disabled">'; }
    else { document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-left.png" class="arrow-left" onclick="prevImage('+num+')">'; }
    
    document.getElementById("gallery-window").innerHTML += '<img src="photos/'+num+'.jpg" class="gallery-window-img">';
    
    if (showMoreImages == 1) { 
        if ((num) == maxImages) { document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }
    else {
        if ((num) == minImages) { document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("gallery-window").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }

    document.getElementById("gallery-window").innerHTML += '<img src="images/close.png" alt="" class="window-close" onclick="closeWindow()">';
}

function nextImage(num){
    openWindow(num + 1);
}

function prevImage(num){
    openWindow(num - 1);
}

function moreImages() {
    if (showMoreImages == 0) { 
        document.getElementById("gallery-container").innerHTML = null;

        number = 0;
    
        while (number < (maxImages)) { 
            number++;
            imageArray[number] = "photos/" + (number) + ".jpg";
            document.getElementById("gallery-container").innerHTML += '<img id"=gallery-window-'+number+'" class="gallery-img" src="'+imageArray[number]+'" onclick="openWindow('+number+')">';
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
    document.getElementById("gallery-wrapper").style.animation = 'fadeOut 0.7s both ease';
    document.getElementById("gallery-window").style.animation = 'fadeOut 0.7s both ease';
}

document.addEventListener( "keydown" , (event) => {
    const key = event.key;
    if (key == "Escape") {
        closeWindow()
    }
});

