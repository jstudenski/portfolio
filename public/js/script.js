window.onload = function() {



var portfolio = [{
  "title": "Hello",
  "description": {},
  "image": {},
  "heroku": {},
  "github": "http://www.google.com/"
},
{
  "title": "World",
  "description": {},
  "image": {},
  "heroku": {},
  "github": "http://www.digg.com/"
}


]


$.each(portfolio, function( index, value ) {

  item = portfolio[index];


  var div = $(div)

    var card = $("<div>");
    card.addClass("card");
    //btn.attr("genre-id", genres.genres[i].id);
    //btn.attr("genre-name", genres.genres[i].name);
    // a.attr("src", genres.genres[i].emoji);
    card.html("<h2>"+item.title+"</h2>");

    var link = $("<a />", {
        // id : "id5",
        class : "btn github",
        // name : "link",
        href : item.github,
        text : "Github",
        target : "_blank"
    });

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