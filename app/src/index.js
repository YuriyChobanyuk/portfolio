var showContact = document.querySelector('.show-contact');
var contacts = document.querySelector('.contacts');
var menuItems = $('.menu a');


showContact.addEventListener('click', function(){
  contacts.classList.toggle('is-shown');
});

var showMenu = document.querySelector('.menu-button');
var sidebar = document.querySelector('.sidebar');
showMenu.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});

var body = document.querySelector('body');

//checking if target is not one of nodelist elements
function check(nodelist, target){
  var result = [].every.call(nodelist, function(item){
    return item != target;
  });
  return result;
};

//hides the dropout elements on misclick event
body.onclick = function(e) {

    if(e.target != contacts && e.target != showContact &&
      check($('.show-contact *'), e.target)) {
        contacts.classList.remove('is-shown');
    };

    if(e.target != sidebar && check($('.sidebar *'), e.target) &&
    e.target != showMenu && check($('.menu-button *'), e.target)){
      sidebar.classList.remove('show-sidebar');
    };
}


//initialize smooth scrollbar and dynamic appearing to-top button
Scrollbar.init(document.querySelector('#my-scrollbar'));

var containerScroll = Scrollbar.init(document.querySelector('.container'));

containerScroll.addListener(function(){
    if(500 < containerScroll.scrollTop + 200){
      document.querySelector('.to-top-button').classList.add('to-top-visible');
    } else {
      document.querySelector('.to-top-button').classList.remove('to-top-visible');
    };
});

document.querySelector('.to-top-button i').addEventListener('click', function(){
  containerScroll.scrollTo(0, 0, 500);
});

//set is-active class to menu items
[].forEach.call(menuItems, function(item){
  var part = item.getAttribute('href').substring(2, item.getAttribute('href').length - 5);
  if(window.location.pathname.includes(part)){
    [].forEach.call(menuItems, function(elem){
      elem.classList.remove('menu-is-active');
    });
    item.classList.add('menu-is-active');
  }
});

$('.communication__header_button').on('click', function(){
  $('.communication').toggleClass("communication-is-shown");
  $('.second-span').toggleClass('invisible-span');
});



//runs slider on blog posts
function blogSlider(){
  var slider = document.querySelectorAll('.blog-post__gallery_slider');
  [].forEach.call(slider, function(item){
    var buttons = item.querySelectorAll('.blog-post__gallery_slider > div');
    var images = item.querySelectorAll('.blog-post__gallery_slider > img');
    [].forEach.call(buttons, function(elem, index){
      if(index == 0){
        elem.addEventListener('click', function(){
          var imgIndex = +item.querySelector('.slider-active').getAttribute('data-index') - 1;
          imgIndex--;
          if(imgIndex < 0){
            imgIndex = images.length - 1;
          };
          [].forEach.call(images, function(image){
            image.classList.remove('slider-active');
          });
          images[imgIndex].classList.add('slider-active')
        });
      } else {
        elem.addEventListener('click', function(){
          var imgIndex = +item.querySelector('.slider-active').getAttribute('data-index') - 1;
          imgIndex++;
          if(imgIndex == images.length){
            imgIndex = 0;
          };
          [].forEach.call(images, function(image){
            image.classList.remove('slider-active');
          });
          images[imgIndex].classList.add('slider-active')
        });
      }

    });
  });
}

blogSlider();

//runs slider on single work page
function workSlider(){

  //initialization slider buttons
  var workslider = document.querySelector('.work-preview__slider');
  var workImages = $('.work-preview__slider img');
  var buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  [].forEach.call(workImages, function(item, index){
    var tempElement = document.createElement('div');
    tempElement.classList.add('sliderButton');
    if(index == 0){
      tempElement.classList.add('slideButton-active');
      workImages[index].classList.add('active-img');
    }
    tempElement.setAttribute('data-index', index)
    buttonContainer.appendChild(tempElement);

    item.getAttribute('data-index')
  });
  workslider.appendChild(buttonContainer);


  //adding click on buttons
  var buttons = document.querySelectorAll('.sliderButton');
  [].forEach.call(buttons, function(item, index){
    item.addEventListener('click', function(){
      [].forEach.call(workImages, function(image, index, arr){
        image.classList.remove('active-img');
        buttons[index].classList.remove('slideButton-active');
      });
      item.classList.add('slideButton-active');
      workImages[index].classList.add('active-img');
    })
  })

  function nextSlide(){
    var currentIndex = +workslider.querySelector('.active-img').getAttribute('data-index') - 1;
    [].forEach.call(buttons, function(item, index){
      buttons[index].classList.remove('slideButton-active');
      workImages[index].classList.remove('active-img');
    });
    currentIndex++;
    if(currentIndex == buttons.length){
      currentIndex = 0;
    }
    buttons[currentIndex].classList.add('slideButton-active');
    workImages[currentIndex].classList.add('active-img');
  }
  var timeout = setTimeout(function run(){
    nextSlide();
    setTimeout(run, 6000)
    }, 6000);

}

workSlider();
