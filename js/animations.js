const header = document.querySelector('.container.container-header')
const main = document.querySelector('main')
const big = document.querySelector('.big')
const about = document.querySelector('.about-img')
let info = document.querySelectorAll('.info')
let content = document.querySelectorAll('.content')
let container = document.querySelectorAll('.container-article')


big.style.transition = 'all 2s ease'
big.style.height = '35rem'
container.forEach(index => index.style.transform = 'scale(1)')

main.addEventListener('scroll', () => {
        if (main.scrollTop > 50){
                header.classList.add('active')
        }
        else {
                header.classList.remove('active')
        }


        if (main.scrollTop > 500){
                info.forEach(index => index.classList.add('scroll'))
                content.forEach(index => index.classList.add('scroll'))
                big.style.transition = 'all 1s ease'
                big.style.height = '1rem'
                container.forEach(index => index.style.transform = 'scale(.4)')
        }
        else {
                info.forEach(index => index.classList.remove('scroll'))
                content.forEach(index => index.classList.remove('scroll'))
                big.style.transition = 'all 1s ease'
                big.style.height = '35rem'
                container.forEach(index => index.style.transform = 'scale(1)')
        }

        if (main.scrollTop >= 1220){
                about.style.transition = 'height 1s ease'
                about.style.height = '35rem'
                container.forEach(index => index.style.transform = 'scale(1)')
        } else {
                about.style.transition = 'height 1s ease'
                about.style.height = '.5rem'
        }

        

})
