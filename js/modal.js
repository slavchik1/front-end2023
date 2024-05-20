(() => {
    const refs = {
        openModalBTN: document.querySelector("[data-modal-open]"),
        closeModalBTN: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]")
    };
    
    refs.openModalBTN.addEventListener("click", toggleModal);
    refs.closeModalBTN.addEventListener("click", toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle("is-hiden")
    };
})();
