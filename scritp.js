function valueSetters()
{
    gsap.set("#nav a",{y : "-100%",opacity : 0});
    gsap.set("#center .reveal .parent .child",{y : "100%"})
    gsap.set(".centertopleft .reveal .parent .child",{y : "200%"})

}

function animateHomePage()
{
    let tl = gsap.timeline();
    tl.to("#nav a",
    {
        y : "100%",
        opacity : 1,
        ease : Expo.easeInOut,
        stagger : .1
    })
    .to("#center .reveal .parent .child",{y : "0%",stagger: .1})
    .to(".centertopleft .reveal .parent .child",{y : "0%", stagger : .1})
}

function revealToSpan()
{
    document.querySelectorAll(".reveal")
    .forEach(function(elem)
    {
        let spanChild = document.createElement("span");
        let spanParent = document.createElement("span");
        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.innerHTML = elem.innerHTML;

        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}

function animationLoader()
{
    var tl1 = gsap.timeline();
    tl1.from("#fs h1 .child span",
    {
        x : "40px",
        duration : 1,
        stagger: .2,
        ease : Power3.easeInOut,
    })
    .to("#fs .reveal .parent .child",
    {
        y : "-100%",
        duration : 1.5,
        ease : Circ.easeInOut,
    })
    .to("#fs",{
        height : 0,
        duration : 2,
        ease : Expo.easeInOut,
    })
    .to("#green",{
        height : "100%",
        duration : 1,
        delay : -2,
        ease : Expo.easeInOut,
    })
    .to("#green",{
        height : "0%",
        top : "0%",
        duration : 1.3,
        delay : -1.3,
        ease : Expo.easeInOut,
        onComplete : function(){
            animateSvg();
            animateHomePage();
        },
    })
}

function animateSvg()
{
    document.querySelectorAll("#Visual>g")
    .forEach(function(elem){
        var character = elem.childNodes[0].childNodes[0];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })

    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",
    {
        strokeDashoffset : 0,
        duration : 2,
        ease : Expo.easeInOut,
        delay : 1
    })
}
revealToSpan();
valueSetters();
animationLoader();