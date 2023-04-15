const fragments = $('#fragments')[0];
const base_logo = $('#base-logo')[0];

const title_container = $('#title-container')[0]; 

export function animate_portrait() {
    base_logo.classList.add('slide-in');
    fragments.classList.add('slide-in');
}
fragments.addEventListener('animationend', ({target}) => {
    if (target.classList.contains('slide-in')) {

        fragments.classList.add('float');
        base_logo.classList.add('float');
        
        fragments.classList.remove('slide-in');
        base_logo.classList.remove('slide-in');
    }
});

fragments.addEventListener('animationend', ({target}) => {
    if ( target.classList.contains('float') ) {
        title_container.classList.add('showing');
    }
});