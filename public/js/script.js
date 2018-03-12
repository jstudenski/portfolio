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