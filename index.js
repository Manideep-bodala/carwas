
gsap .to( ".imageconainer ", {
    ease: Expo.easeInOut,
    width : "100%" ,
    duration :2 ,
    stagger: 2

})

gsap .to(".text h1 ",{
    delay : 2,
    ease: Expo.easeInOut, 
    stagger: 2,
    top: "0"
 })

 gsap .to(".text h1 ",{
    delay : 2,
    ease: Expo.easeInOut, 
    stagger: 2,
    top: "-100"
 })


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
});
// Add a smooth scroll effect for the navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Services section interactivity
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});
