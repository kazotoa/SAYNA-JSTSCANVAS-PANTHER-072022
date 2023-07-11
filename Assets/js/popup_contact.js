$(document).ready(function () {

    
    // var test = $('.forminput').val(value);
    
    $('#send').click(function (e) { 
        e.preventDefault();
   

        // alert('yes');
        var msg = 'Bienvenue au wakanda'; // variable contenant le message  
        // var input = document.getElementsByClassName('forminput'); // variable contenant les données des inputs

        // console.log(input.length);


        var nom = document.forms["contact"]["nom"].value;
        var email = document.forms["contact"]["mail"].value;
        var message = document.forms["contact"]["msg"].value;


        // Popup function
        // function showPopUp () {  
        //     $('.popup').css('display', 'flex');
        //     document.getElementById('message').innerHTML = msg;
        // }
        
        // window.setTimeout(showPopUp, 500);
        
        //teste du contenu des champs
        if (nom !== '') {
                
            if (email !== '') {
                
                if (message !== '') {
                    $('.popup').css('display', 'flex');
                    document.getElementById('message').innerHTML = msg;
                } else {
                    $('#msg').css('border', '1px solid red');
                }
            } else {
                $('#mail').css('border', '1px solid red');
            }
        } else {
            $('#nom').css('border', '1px solid red');
        }          
        
        // $('.popup').css('display', 'flex');
        

        // Popup launch time limits

        // Close Popup
        $('#close').click(function (e) { 
            e.preventDefault();
            
            $('.popup').css('display', 'none');
        });
    });
    

    // console.log(typeof(test));
});