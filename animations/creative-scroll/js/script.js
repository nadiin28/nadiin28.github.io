gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.hero-section', {
        opacity: 1
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: 'top',
                scrub: true
            }
        })
    })




};


const body = document.querySelector('body')



body.addEventListener('mousemove', e => {

    mouseCoords(e)
    cursor.classList.remove('hidden')
    follower.classList.remove('hidden')

})

const cursor = document.getElementById('cursor'),
    follower = document.getElementById('aura'),
    links = document.getElementsByTagName('a')

mouseX = 0, mouseY = 0, posX = 0, posY = 0

function mouseCoords(e) {

    mouseX = e.pageX
    mouseY = e.pageY

}

gsap.to({}, .01, {

    repeat: -1,

    onRepeat: () => {

        posX += (mouseX - posX) / 5
        posY += (mouseY - posY) / 5

        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })

        gsap.set(follower, {
            css: {
                left: posX - 24,
                top: posY - 24
            }
        })

    }

})

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('mouseover', () => {
        cursor.classList.add('active')
        follower.classList.add('active')
    })

    links[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active')
        follower.classList.remove('active')
    })

}

body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden')
    follower.classList.add('hidden')
})