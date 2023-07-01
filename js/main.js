const modalBtnsActive = document.querySelectorAll('.modal__btn-active')

modalBtnsActive.forEach(btn=>{
    btn.addEventListener('click',()=>{
       const btnAttr = btn.getAttribute('data-modal-active');
       const modal = document.querySelector(`.modal__wrapper[data-modal=${btnAttr}]`);
        const modalBtnClose = modal.querySelector('.modal__btn-close');

       console.log(modalBtnClose)

       

       modal.classList.add('active');
       document.querySelector('body').classList.add('lock')

       modalBtnClose.addEventListener('click',()=>{
        modal.classList.remove('active');
       document.querySelector('body').classList.remove('lock')

       })

    })
})