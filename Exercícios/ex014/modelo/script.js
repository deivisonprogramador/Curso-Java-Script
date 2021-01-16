

function carregar () {

    var msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();




    if (hora>= 0 && hora<12){
        //Bom dia.
        img.src= 'manha.png'
        document.body.style.background = '#F1E1BD '
        msg.innerHTML = `Bom dia, agora são ${hora} horas.` 
        
        
    } 


    else if (hora >=12 && hora < 18){
            //Boa tarde.
            img.src = 'tarde.png';
            document.body.style.background = '#A87469'
            msg.innerHTML = `Boa tarde, agora são ${hora} horas.` 

        
    }
        
        else {
        //Boa noite
        img.src = 'noite.png';
        document.body.style.background = '#2B2130'
        msg.innerHTML = `Boa noite, agora são ${hora} horas.` 
        }

}



