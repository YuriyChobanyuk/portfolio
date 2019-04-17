$(document).ready(function(){

  var filterLinks = $('.filter__list a');

  //listening url field and makes it sensetive on hash changes
  function setSelectedHashes(){
    [].forEach.call(filterLinks, function(item, index){
      var $temp = filterLinks[index].getAttribute("href").substring(1);

      if(window.location.hash.substring(1) == $temp && $temp != "allworks"){
        $('[data-anchor]').addClass('is-hidden');
        $('[data-anchor=' + $temp + "]").removeClass('is-hidden');
        $('.filter__list a').removeClass('active-filter');
        item.classList.add('active-filter');
      };

    });
  };

  setSelectedHashes();

  $(window).on('hashchange', function(){
    setSelectedHashes();
  });

  //makes filter items clickabel and shows tagged items
  var $previewItems = document.querySelectorAll(".preview__item");
  var $filteItems = $('.filter__list a').on("click", function(){
    $('[data-anchor]').addClass('is-hidden');
    var hash = $(this).attr('href');
    window.location.hash = hash;
    $('[data-anchor=' + hash.substring(1) + "]").removeClass('is-hidden');
    $('.filter__list a').removeClass('active-filter');
    $(this).addClass('active-filter');
  });

  $('[href="#allworks"]').on('click', function(){
    $('[data-anchor]').removeClass('is-hidden');
  });

  


});
