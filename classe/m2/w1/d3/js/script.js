document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
 
        let rotazione = button.getAttribute('data-rotate')
 
        console.log(rotazione);
 
        let container = document.querySelector('#container');
 
        let angle = parseInt(container.getAttribute('data-angle'));
 
        console.log(angle);
 
        switch (rotazione) {
 
            case 'l':
                angle -= 90;
                break;
 
            case 'r':
                angle += 90;
                break;
        }
 
        rotate(angle);
        container.setAttribute('data-angle', angle);
 
    });
 
});
 
 
function rotate(angle) {
 
    console.log(angle);
 
    let container = document.querySelector('#container');
 
    container.style.transform = `rotateY(${angle}deg)`;
 
}
