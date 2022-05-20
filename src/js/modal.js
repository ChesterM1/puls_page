window.addEventListener('DOMContentLoaded', ()=>{

    const consultModal = ()=>{

        const buttonsCall = document.querySelectorAll('[data-button]'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelectorAll('.modal__close'),
            buttonsBuy = document.querySelectorAll('.button_mini'),
            buyItemName = document.querySelectorAll('.catalog-item__subtitle'),
            modal = document.querySelector('.modal');



        function viewModal(element){
            const modal =  document.querySelector(element);
            let opacity = 0.1;

            modal.style.opacity=`${opacity}`;
            overlay.style.display='block';
            modal.style.display='block';
            
            const intervalID = setInterval(()=>{
                if(opacity > 1){
                
                    clearInterval(intervalID);
                    return
                }
                modal.style.opacity=`${opacity}`;
                overlay.style.opacity=`${opacity}`;
                opacity+= 0.1;
        },30)
        };

        function closeModal(elem){
            let opacity = 1;

            const intervalID = setInterval(()=>{
                if(opacity > 0.1){
                    elem.style.opacity=`${opacity}`;
                    overlay.style.opacity=`${opacity}`;
                    opacity-= 0.1;
                }else if (opacity <= 0.1){
                    overlay.style.display='none';
                    elem.style.display='none';
                    clearInterval(intervalID);
                    return
                }
            },30);
        }

        buttonsCall.forEach( item =>{
            item.addEventListener('click', ()=>{
                viewModal('#consultation');
            });
        });

        close.forEach( item =>{
            item.addEventListener('click', ()=>{
                closeModal(item.parentNode);
            });
        });
        

        overlay.addEventListener('click', (e)=>{
            if( e.target === overlay){
                closeModal(overlay);
            }
        });
        
        buttonsBuy.forEach( (item, i)=>{
            item.addEventListener('click', ()=>{
                
                const itemName = document.querySelector('[data-buyItem]');
                itemName.textContent=`${buyItemName[i].textContent}`;
                viewModal('#order');
            });
        });
            
    }
    consultModal();
});