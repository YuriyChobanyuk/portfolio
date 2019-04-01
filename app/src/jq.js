$(document).ready(function(){
  var width = $(window).width();
  var $previewItems = document.querySelectorAll(".preview__item");
  [].forEach.call($previewItems, function(item){
    item.style.height = item.offsetWidth * 0.75 + "px";
  });
  $(window).on('resize', function(){
     if($(this).width() != width){
        width = $(this).width();
        let itemWidth = Math.ceil(document.querySelector(".preview__item").offsetWidth * 0.75);
        [].forEach.call($previewItems, function(item){
          item.style.height = itemWidth + "px";
        });
     };
  });
});
