
function verificar(){

    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res')

    if (fano.value.length==0 || Number(fano.value>ano)){
        window.alert('{ERRO] Ferifique os dados e tente novamente!')
    } 
    
    
    else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let gênero = '';
        let img = document.createElement('img');
        img.setAttribute('id','foto');

        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade>=0 && idade<10){
                //Crianca
                img.setAttribute('src', 'bebe-homem.png');

            } else if (idade<21){
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade<50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
         }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade>=0 && idade<10){
                //Crianca
                img.setAttribute('src', 'bebe-mulher.png')

            } else if (idade<21){
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png')

            } else if (idade<50){
                //Adulta
                img.setAttribute('src', 'mulher-adulta.png')
            } else{
                //Idosa
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }


        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img);
    }
         

}



