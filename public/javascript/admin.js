if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        editProd();
        //delProd();
    });
}

function editProd() {
    editProd = document.querySelectorAll('.editProduct');
    editProductPanel = document.querySelectorAll('.editProductPanel');
    for (let i = 0; i < editProd.length; i++) {
        editProd[i].addEventListener('click', function () {
            console.log()
        })
    }
}