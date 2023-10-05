const classMore = '.movie__more-details';

document.addEventListener('DOMContentLoaded', () => {
    addingElementsInMovies();

    const btMores = document.querySelectorAll(classMore);
    // console.log(btMores);

    for (let i = 0; i < btMores.length; i++) {
        // console.log(btMores[i]);
        btMores[i].addEventListener('click', toggleOpenMore);
    }
});

function toggleOpenMore() {
    console.log('click more');
    const change = 'movie__more-details--is-open';
    this.classList.toggle(change);
}

function addingElementsInMovies() {
    const node = document.querySelector('.movies__container');
    for (let i = 0; i < 249; i++) { // adicionar 260 spans
        node.insertAdjacentHTML('beforebegin', '<span class="movies__spans"></span>');
    }
}