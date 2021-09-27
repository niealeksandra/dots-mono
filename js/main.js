

function changeStyle(a) {
    if (a.id == 'regularButton') {
        a.classList.add('active');
        document.getElementById('italicButton').classList.remove('active');
        document.getElementById('letters').classList.remove('italic');
    } else {
        a.classList.add('active');
        document.getElementById('regularButton').classList.remove('active');
        document.getElementById('letters').classList.add('italic');
    }

}

function changeStyle2(a) {
    if (a.id == 'regularButton2') {
        a.classList.add('active');
        document.getElementById('italicButton2').classList.remove('active');
        // document.getElementById('letters').classList.remove('italic');
        var y = document.getElementsByClassName('diacritics_letters');
        var j;
        for (j = 0; j < y.length; j++) {
        y[j].classList.remove('italic');
        }
    } else {
        a.classList.add('active');
        document.getElementById('regularButton2').classList.remove('active');
        var x = document.getElementsByClassName('diacritics_letters');
        var i;
        for (i = 0; i < x.length; i++) {
        x[i].classList.add('italic');
        }

    }

}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(function() {
    navBg();
});

$(window).scroll(function() {
    navBg();
});

function navBg() {
    var navHeight = $('#header1').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= navHeight) {
        $('#fridayp').removeClass('opacity_fridayp');
    } else {
        $('#fridayp').addClass('opacity_fridayp');
    }
}

