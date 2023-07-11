$(document).ready(function () {
    
    $('#done').hide();

    var i = 0;
    var datas = [];
  
    eng1 = {
        id: 1,
        info: "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !",
        enigme: "",
        dora: "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS",
        reponse: "r1",
        indice: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent ? "
    } 
  
    eng2 = {
        id: 2,
        info: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        enigme: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        dora: "",
        reponse: "r2",
        indice: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?"
    } 
  
    eng3 = {
        id: 3,
        info: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        enigme: "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
        dora: "",
        reponse: "r3",
        indice: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    } 
  
    datas = [ eng1, eng2, eng3 ];
  
    var msg = '', status = '';
  
    var indice = '',
    id = 0,
    enigme = '',
    dora = '',
    info ='',
    reponse = '';
  
    // console.log(datas[0]);
    
    
    
    //close popup
    $('#close2').click(function (e) { 
        e.preventDefault();
      
      $('.popup').css('display', 'none');
      $('.pop').css('display', 'none');
    //   $('#next').hide();

    });
  
    var element = datas[i];
    
    id = element.id; 
    enigme = element.enigme; 
    indice = element.indice; 
    dora = element.dora; 
    info = element.info; 
    reponse = element.reponse;
    
    $('#id').text(id);
    $('#indice').text(indice);
    $('#enigme').text(enigme);
    $('#dora').text(dora);
    $('#info').text(info);
    
    
    function questions(i, datas) {  
      
        alert(i)
        console.log(i);

        var element = datas[i];
            
        id = element.id; 
        enigme = element.enigme; 
        indice = element.indice; 
        dora = element.dora; 
        info = element.info; 
        reponse = element.reponse;
        
        $('#id').text(id);
        $('#indice').text(indice);
        $('#enigme').text(enigme);
        $('#dora').text(dora);
        $('#info').text(info);

        return reponse

    }
    

    $('#send').click(function (e) { 
        e.preventDefault();
      
        var rep = document.forms["form"]["reponse"].value;
  
        if (rep == reponse) {

            // if (i = 3) {
            //     $('.done').show();
            //     i = 0;
            // } else {
            // }
            
            
            if (i == 2) {
                $('.done').show();
                alert('din');
                i = 0;
            } else {
                
                $('.pop').css('display', 'flex');
                $('#next').css('display', 'flex');
                
                msg = "Tu as trouvé la réponse.<br>Es tu prêt pour l'énigme suivante ?";
                status = "Bravo !";
    
                document.getElementById('message').innerHTML = msg;
                document.getElementById('status').innerHTML = status; 


                i++;
                questions(i, datas);
            }

        } else {

            msg = 'Essayez encore';
            status = "Mauvaise réponse";

            $('.pop').css('display', 'flex');
            $('#next').css('display', 'none');
            
            document.getElementById('message').innerHTML = msg;
            document.getElementById('status').innerHTML = status; 
        }
  
    });
  
  
  });