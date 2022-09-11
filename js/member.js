const expand = document.querySelector('.aboutUs');
const bio = document.querySelectorAll('.bio');

expand.addEventListener('click', () => {
    console.log('hello')
    for (let i=0; i<=bio.length; ++i) {
        const content = bio[i].getAttribute("data-expand");

        if (content == "false"){
            bio[i].setAttribute('data-expand', true);
        }
        else {
            bio[i].setAttribute('data-expand', false);
        }
    }
});
