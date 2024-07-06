console.log('hello')
document.addEventListener('DOMContentLoaded',()=>{

    // burger
    const burgerButton = document.querySelector('.header__burger'),
        navList = document.querySelector('.header__nav');

        burgerButton.addEventListener('click', ()=>{
            console.log('click')
            burgerButton.classList.toggle('burger-menu-active')
            navList.classList.toggle('header__nav-active')
            if(burgerButton.classList.contains('burger-menu-active')){
                document.body.style.overflow = 'hidden'
            }else{
                document.body.style.overflow = ''
            }
        })
        // tab
    const processPlusButtons = document.querySelectorAll('.process__item button'),
        processItem = document.querySelectorAll('.process__item');
        
        processPlusButtons.forEach((button,i)=>{
            button.addEventListener('click',()=>{
                processItem.forEach((item,j)=>{
                    if(i == j){
                        item.classList.toggle('process__item-active')
                    }
                })
            })
        })

        // team
        const teamButton = document.querySelector('.team__button'),
            teamItem = document.querySelectorAll('.team__item')
        teamButton.addEventListener('click', ()=>{
            teamItem.forEach(item=>{
                item.style.display = 'block';
                teamButton.style.display = 'none'
            })
        })

        // slider
        $(".single-item").slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          });

          const sliderDotButton = document.querySelector('.slick-dots li:last-child button');
          if(window.innerWidth > 425){
            sliderDotButton.setAttribute('disabled', true);
          }
})