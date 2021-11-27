const movieBlock = document.querySelector('.movie');
const smallTitles = document.querySelectorAll('.small-title');
const genresBlocks = document.querySelectorAll('.genre-block');
const rows = document.querySelectorAll('.row');

let isScrolling = false;

window.addEventListener('scroll', throttleScroll);

function throttleScroll(e){
    if (isScrolling === false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

function isVisible(elem) {
    let elementBoundary = elem.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

document.addEventListener('DOMContentLoaded', scrolling);

function scrolling(e){
    if(isVisible(movieBlock)){
        movieBlock.classList.add('active');
    }
    makeListItemActive(smallTitles);
    makeListItemActive(rows);
    makeListItemActive(genresBlocks);
}

function makeListItemActive(list){
    for(let i = 0; i < list.length; i++){
        if(isVisible(list[i])) {
            list[i].classList.remove('hidden');
            list[i].classList.add('active');
        }
    }
}