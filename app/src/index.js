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

function initMap() {

  var myPoint = {lat: 48.929580, lng: 24.708661};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: myPoint});

  var marker = new google.maps.Marker({position: myPoint, map: map});
}

initMap();
