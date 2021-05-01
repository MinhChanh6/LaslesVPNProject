$('.burger').on('click', function(){
    $('.navbar__bar').slideToggle('300');
})

const str = ScrollReveal(
    {
        distance: '30px',
        duration: 1800,
        reset:true,
    }
);

str.reveal(`.navbar`,{
    origin:'top',
    interval:200,
})
str.reveal(`.content__left`,{
    origin:'right',
    interval:300,
})
str.reveal(`.content__right`,{
    origin:'left',
    interval:300,
})
str.reveal(`.info__test`,{
    origin:'bottom',
    interval:500,
})
str.reveal(`.left`,{
    origin:'right',
    interval:300,
})
str.reveal(`.right`,{
    origin:'left',
    interval:300,
})
str.reveal(`.package__items`,{
    origin:'top',
    interval:200,
})
str.reveal(`.footer__content`,{
    origin:'bottom',
    interval:200,
})

// const scroll = new SmoothSroll('.navbar [href*="#"]',{
//     speed:700
// });


