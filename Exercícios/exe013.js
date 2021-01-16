

let agora = new Date();
let dia = agora.getDate();

    //Acessando dia da semana do sistema.
let dia_sem = agora.getDay();
let dias_em_str = ['Domingo, ','Segunda-Feira, ','Terça-Feira, ','Quarta-Feira, ','Quinta-Feira, ',
'Sexta-Feira, ','Sábado, '];

    //mostra ano com 4 dígitos.
let ano4 = agora.getFullYear();

    //acessando o mês do sistema
let mes = agora.getMonth();
//

        //Primeira forma de criar um Array
   
    /*let mes_str = new Array('Janeiro ', 'Fevereiro ', 'Março ', 'Abril ', 'Maio ' , 'Junho ',
        'Julho ',  'Agosto ', 'Setembro ' , 'Outubro ' , 'Novembro ' ,   'Dezembro ');*/


        // Segunda forma de criar um Array (Indicada)
 let mes_str = ['Janeiro ', 'Fevereiro ', 'Março ', 'Abril ', 'Maio ' , 'Junho ',
 'Julho ',  'Agosto ', 'Setembro ' , 'Outubro ' , 'Novembro ' ,   'Dezembro '];


console.log('Hoje é ' + dias_em_str[dia_sem]+ dia + ' de ' + mes_str[mes] + 'de '+ ano4 + '.' );








