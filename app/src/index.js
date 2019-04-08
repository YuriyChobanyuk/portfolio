var showContact = document.querySelector('.show-contact');
var contacts = document.querySelector('.contacts');
showContact.addEventListener('click', function(){
  contacts.classList.toggle('is-shown')
});

var showMenu = document.querySelector('.menu-button');
var sidebar = document.querySelector('.sidebar');
showMenu.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});


Scrollbar.init(document.querySelector('#my-scrollbar'));
var containerScroll = Scrollbar.init(document.querySelector('.container'));

containerScroll.addListener(function(){
    if((containerScroll.getSize().content.height / 2) < containerScroll.scrollTop + 200){
      document.querySelector('.to-top-button').classList.add('to-top-visible');
    } else {
      document.querySelector('.to-top-button').classList.remove('to-top-visible');
    };
});

document.querySelector('.to-top-button i').addEventListener('click', function(){
  containerScroll.scrollTo(0, 0, 500);
})
