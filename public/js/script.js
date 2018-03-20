window.onload = function() {



var portfolio = [{
  "title": "Pretend Friend",
  "description": {},
  "image": "pretendfriend.png",
  "heroku": "https://pretend-friend.herokuapp.com/",
  "github": "https://github.com/jstudenski/pretendFriend"
},
{
  "title": "Next Toolbox",
  "description": {},
  "image": "nexttoolbox.png",
  "heroku": "http://next-toolbox.herokuapp.com/",
  "github": "https://github.com/jstudenski/NextToolbox"
},
{
  "title": "PokeMart",
  "description": {},
  "image": "pokemart.png",
  "github": "https://github.com/jstudenski/pokemart"
},
{
  "title": "FlixMix",
  "description": {},
  "image": "flixmix.png",
  "heroku": "https://jstudenski.github.io/FlixMix/",
  "github": "https://github.com/jstudenski/FlixMix"
},
{
  "title": "Train Time",
  "description": {},
  "image": "traintime.png",
  "heroku": "https://jstudenski.github.io/train-time/",
  "github": "https://github.com/jstudenski/train-time"
},
{
  "title": "Taco Time",
  "description": {},
  "image": "taco.png",
  "heroku": "https://taco--time.herokuapp.com/",
  "github": "https://github.com/jstudenski/TacoTime"
},
{
  "title": "Taco Time Sequelized",
  "description": {},
  "image": "taco-sequelized.png",
  "heroku": "https://taco-time-sequelize.herokuapp.com/",
  "github": "https://github.com/jstudenski/TacoTimeSequelized"
}



]


$.each(portfolio, function( index, value ) {

  item = portfolio[index];


  var div = $(div)

    var card = $("<div>");
    card.addClass("card");
    card.html("<h2>"+item.title+"</h2>");

    var link = $("<a />", {
        class : "btn github",
        href : item.github,
        text : "github",
        target : "_blank"
    });

    var portfolioItem = $("<div>");
    portfolioItem.addClass('portfolio-image');

    var img = $("<img>");
      img.attr('src', 'public/images/'+item.image);
     // img.addClass('portfolio-image');
      img.appendTo(portfolioItem);
       portfolioItem.appendTo(card);     

    if(item.heroku){
      var live = $("<a />", {
          class : "btn live",
          href : item.heroku,
          text : "live",
          target : "_blank"
      });

      live.appendTo(card);
    }

    link.appendTo(card);


   // var color = genres.genres[i].color;
   // btn.attr("color", color);
    // btn.css('box-shadow', '1px 1px 0px'+color+',2px 2px 0px'+color+',3px 3px 0px'+color);
    // btn.css('color', color);

    $(".portfolio").append(card);





 // $('.portfolio').append(item.title);


 //   console.log(item.title)


   // alert( index + ": " + value );
});




} // window.onload


$(function(){
  
  // init arrays of element positions
  var navEls = new Array();
  var bgPanels = new Array();
  
  // on resize, determine positions
  $(window).resize(function(){
    
    // nav elements
    navEls = new Array();
    var vPos = $(window).scrollTop();
    $('.nav-el').each(function(){
      var elMid = $(this).offset().top + ($(this).innerHeight() / 2) - vPos;
      navEls.push(new Array($(this), elMid));
    });
    
    // invert-nav background panels
    bgPanels = new Array();
    $('.invert-nav').each(function(){
      var elTop = $(this).offset().top;
      var elBottom = elTop + $(this).height();
      bgPanels.push(new Array(elTop, elBottom));
    });
    
    // once all positions calculated, trigger scroll event
    $(window).trigger('scroll');

  });
  
  // on scroll, check if nav elements are over invert-nav panels
  $(window).scroll(function(){
    var vPos = $(window).scrollTop();
    for(i = 0; i < navEls.length; i++) {
      navEls[i][0].removeClass('invert');
      for(p = 0; p < bgPanels.length; p++) {
        if(((bgPanels[p][0] - vPos) <= navEls[i][1]) && ((bgPanels[p][1] - vPos) > navEls[i][1])) {
          navEls[i][0].addClass('invert');
          break;
        }
      }
    }
  });
  
  // fire resize event on load
  $(window).trigger('resize');
  
});


