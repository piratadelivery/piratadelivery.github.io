$(document).ready(function () {
  setImage = function (img) {
    $('.carousel-background').css('background-image', "url('" + img[0].src + "')");
  }
  var img1 = $('.active img');
  setImage(img1);
  $('#carouselControls').on('slid.bs.carousel', function () {

    var img = $('.active img');
    console.log(img[0])
    setImage(img)
  })

   copiarNumero = () => {
    //O texto que será copiado
    const number = "87988736975";
    //Cria um elemento input (pode ser um textarea)
    let inputNumber = document.createElement("input");
    inputNumber.value = number;
    //Anexa o elemento ao body
    document.body.appendChild(inputNumber);
    //seleciona todo o texto do elemento
    inputNumber.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputNumber);
   
    
    if($('#btn-ligar').hasClass('clicado')) {
      $('#btn-ligar').removeClass('clicado');
    } else {
      $('#btn-ligar').addClass('clicado')
    }
    if($('#btn-ligar').hasClass('clicado')) {

       $('#btn-ligar')
        .removeClass('btn-primary')
        .addClass('btn-outline-primary')
        .text('Número copiado para área de transferencia') 
      } else { 

        $('#btn-ligar')
          .removeClass('btn-outline-primary')
          .addClass('btn-primary')
          .text('(87) 9 8877-6655');
    }
};

});
