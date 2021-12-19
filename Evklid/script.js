window.addEventListener('DOMContentLoaded', function() {
    
    /* Burger Menu */
    document.getElementById('burger-menu-toggle').addEventListener('click', function(event){
        this.classList.toggle('burger-menu-open');
        document.querySelector('.header__nav').classList.toggle('header__mobile-menu-open');
    });
    

    /* Slider */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            // The parameter below is necessary because we use own classes
            clickable: true,
            // Assign own classes
            el: '.slider__items-nav',
            bulletClass: 'slider__items-nav-item',
            bulletActiveClass: 'slider__items-nav-item-active',
            bulletElement: 'li',
            modifierClass: 'slider-nav-'
        },
        
        scrollbar: {
            hide: true
        },
    });
   


    /* Tabs at section "How we work" */
    document.querySelectorAll('.how__carousel-nav-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){            
            // Navigation
            document.querySelectorAll('.how__carousel-nav-link').forEach(function(tabLink){
                tabLink.classList.remove('how__carousel-nav-link_active')
            });
            event.target.classList.add('how__carousel-nav-link_active');
            // Tabs
            const path = event.currentTarget.dataset.tab;
            document.querySelectorAll('.how__carousel-item').forEach(function(tabContent){
                tabContent.classList.remove('how__carousel-item-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('how__carousel-item-active');
            // Off default
            event.preventDefault();
        }) 
    });

});



/* Accordion at section "FAQ" (jQuery UI) */
$(function() {
    $('#faq-accordion').accordion({
        header: ".faq__accordion-item-title",
        /* The next option does not allow height of the blocks with the text to guid by the largest */
        heightStyle: 'content'
    });
});