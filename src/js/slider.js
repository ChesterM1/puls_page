window.addEventListener('DOMContentLoaded', ()=>{
    
    function slider(){

        const prevArrow = document.querySelector('.prev_arrow'),
            nextArrow = document.querySelector('.next_arrow'),
            sliderImg = document.querySelectorAll('.slider_img'),
            sliderBox = document.querySelector('.slider__inner'),
            // imgWidth = sliderBox.clientWidth / sliderImg.length;
            imgWidth = document.querySelector('.slider_img').width;
            let slidePosition = 1;
            let slideTransform = 0;

            sliderBox.style.width = `${imgWidth*sliderImg.length}px`;

       
            const prevSlide = ()=>{

                slidePosition--;

                if( slidePosition  === 0 ){
                    slideTransform = imgWidth - sliderBox.clientWidth;
                    slidePosition = sliderImg.length;
                }else{
                    slideTransform += imgWidth;
                }
                sliderBox.style.transform = `translateX(${slideTransform}px)`;
            }

            const  nextSlide = ()=>{

                slidePosition++;

                if( slidePosition > sliderImg.length  ){
                    
                    slideTransform = imgWidth * (slidePosition-1) - sliderBox.clientWidth;
                    slidePosition = 1;
                }else{
                    slideTransform -= imgWidth;
                }
                sliderBox.style.transform = `translateX(${slideTransform}px)`;
            }
            
            prevArrow.addEventListener('click', ()=>{
                prevSlide();
            });

            nextArrow.addEventListener('click', ()=>{
                nextSlide();
            });

        const touchSwipe = ()=>{
            let touchStartX = null;
            let touchMoveX = null;
            let touchEndX = null;


            sliderBox.addEventListener('touchstart', (e)=>{
                touchStartX =  e.changedTouches[0].clientX;
             });

            sliderBox.addEventListener('touchmove', (e)=>{
                touchMoveX = e.changedTouches[0].clientX;
                let translateView = touchMoveX -  slidePosition * imgWidth;
                sliderBox.style.transform = `translateX(${translateView}px)`;
                
            });

            sliderBox.addEventListener('touchend', (e)=>{
                touchEndX = e.changedTouches[0].clientX;
                    chengeTouchSlide();
            });

            function chengeTouchSlide (){
                if ( touchStartX > touchEndX ){  
                    nextSlide();
                }
                else if(touchStartX < touchEndX ){
                    prevSlide();
                }
            }
            
            
        }
            
        touchSwipe();
    }
    
    slider();



});