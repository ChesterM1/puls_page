window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = ()=>{

        const tab = document.querySelectorAll('.catalog__tab');
        const tabContent = document.querySelectorAll('.catalog__content');

        tab.forEach( (item, i) =>{
            item.addEventListener('click', ()=>{

                tab.forEach(item => item.classList.remove('catalog__tab_active'));
                tabContent.forEach(item => item.classList.remove('catalog__content_active'));
                
                item.classList.add('catalog__tab_active');

                tabContent[i].classList.add('catalog__content_active');
                
            });
        });
    }

    tabs();

    const tabItemDescr = (selector)=>{

        const  button = document.querySelectorAll(selector),
            catalog = document.querySelectorAll('.catalog-item__content');
            
            button.forEach( element =>{

                element.addEventListener('click', (e)=>{
                    e.preventDefault();
                    catalog.forEach( (item, i) => {
                            if ( button[i] === element){
                            item.parentNode.classList.toggle('catalog-item__wrapper_active');
                            }
                        });
                });
            });
    }

    tabItemDescr('.catalog-item__link');
    tabItemDescr('.catalog-item__back');

});