const expand = document.querySelector('.expand');
const bio = document.querySelectorAll('.bio');

expand.addEventListener('click', () => {
    console.log('hello')
    const content = bio.getAttribute("data-expand");

    if (content == "false"){
        bio.setAttribute('data-expand', true);
    }
    else {
        bio.setAttribute('data-expand', false);
    }
});
