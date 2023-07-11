$(document).ready(function () {
    
    window.addEventListener("scroll", function () {

        var scrollPosition = $(window).scrollTop(),
            viewportHeight = $(window).height();
    
        $('.fadein').each(function(){
    
            if ($(this).offset().top > scrollPosition && $(this).offset().top < scrollPosition + viewportHeight) {
                

                // let id = null;
                // const elem = this;
                // // const elem = document.getElementById("animate");
                // let pos = 300;
                // clearInterval(id);
                // // id = setInterval(frame, 5);
                // // id = setTimeout(frame, 500);
                // function frame() {
                //     if (pos == 0) {
                //     clearInterval(id);
                //     } else {
                //     pos--; 
                //     elem.style.right = pos + "px";
                //     }
                // }

                function donne () {  
                    // $('.container').css('display', 'flex');
                    $('.fadein').fadeIn('slow');
                }
                // setTimeout(donne, 1000)
            }
            
        });
    })
});
