/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


// Filteren Form Micro interactie
var filteren = document.querySelector("form label.filteren");

// Filteren form kun je uit en in klappen bij scherm kleiner dan 976
filteren.addEventListener("click", function () {
    if (window.innerWidth < 976) {
        this.classList.toggle("active");
    }
});

// Filteren form wordt bij RESIZE van scherm opengeklapt
window.addEventListener("resize", function () {
    if (window.innerWidth > 976) {
        filteren.classList.add("active");
    }
});

//Filteren form wordt automatisch opengeklapt als het scherm groter is dan 976
if (window.innerWidth > 976) {
    filteren.classList.add("active");
}

////////////////////////////////////////////////////////////////////////////////////////////////

// Download button + Notificatie Micro Interactie
var dlButtons = document.querySelectorAll('.dlButton');
var nNoti = 0;
var i;
var el;

for (i = 0; i < dlButtons.length; i++) {
    el = dlButtons[i].addEventListener('click', dlStory);
}

// Als het download icoon is aangeklikt wordt deze functie uitgevoerd
function dlStory() {
    var notification = document.querySelector('.notification');

    notification.classList.add('aan');

    if (this.querySelector('i').classList.contains('fa-download')) {
        this.querySelector('i').classList.remove('fa-download');
        this.querySelector('i').classList.add('fa-check');

        nNoti += 1;
        notification.textContent = nNoti;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

// Er verschijnt een popup in het scherm als je een verhaal hebt toegevoegt aan 'MIJN LIJST' (extra)

var popup = document.getElementById('popup'),
    enablePopup = document.querySelectorAll('.togglePopup');

for (i = 0; i < enablePopup.length; i++) {
    el = enablePopup[i];

    el.addEventListener('click', getPopup);
}

function getPopup() {
    popup.classList.toggle('hidden');
}

// Geholpen door Maikel Sleebos
