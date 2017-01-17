
/*
  Please add all Javascript code to this file.
*/


$(document).ready(function(){

    //tested - not working
    // $(document).ajaxStart(function(){
    //     $("#popUp").css("display", "block");
    // });
    // $(document).ajaxComplete(function(){
    //     $("#popUp").css("display", "none");
    // });




// test to add loader? - not working
// $(document).ajaxStart(function(){
//     //$("#popUp").css("display", "block");
//     $("popUp.loader").show();
// });
//
// $(document).ajaxComplete(function(){
//     //$("#popUp").css("display", "none");
//     $("popUp.loader").hide();
// });


//global varabile to have value set in and accessed outside get api request?
var jsonresponse;


//ajax code maybe for adding loader?
// $.ajax({
//     url: "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fbreitbart",
//
//     // Tell YQL what we want and that we want JSON
//     data: {
//         // q: "select title,abstract,url from search.news where query=\"cat\"",
//         format: "json"
//     },
//
//     // Work with the response
//     success: function( r ) {
//         console.log( r ); // server response



      document.getElementById("breitbart").onclick = function() {
          console.log("breitbart clicked")
      }


//Brietbart feed
//$.get( 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fbreitbart', function( r ) {

//Fox News feed
//$.get( 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Fpolitics', function( r ) {

//NY Times feed
//$.get( 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=08d58f2f94b0426e856bb17cb5a7657b', function( r ) {
     // We get the data back from the request in the parameter we pass in the function
     //console.log(r);

//console.log(r)

     //console.log(r.items[0].title);
    //  for NY Times Feed
    //  console.log(r.articles[0].title);
    //  console.log(r.articles[1].title);
    //  console.log(r.articles[2].title);
    //  console.log(r.articles[3].title);


$.get("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Fpolitics", function(r){
  console.log(r);


  for (var i = 0; i < 10; i++) {

    //getting img url and compiling img string
    var $imgurl = r.items[i].thumbnail
    var $img = '<img src="' + $imgurl + '">'

    //getting title and compiling title link
    var $title = r.items[i].title
    var $titleLink = '<a href="#"><h3>' + $title + '</h3></a>'

    //appending img and title to DOM - needs styling
    $("#main").append('<article>' + $img + $titleLink + '</article>')

    //test appending as list
    //$("#main").append("<li>"+r.items.title+"</li>")

  }


//FOR MODAL

  //sets modal title
  document.getElementById('article1-title').innerHTML = r.items[0].title;
  //document.getElementById('article2-title').innerHTML = r.items[1].title;

  //sets modal desciption
  document.getElementById('article1-description').innerHTML = r.items[0].description;
  //document.getElementById('article2-description').innerHTML = r.items[1].description;

  //sets modal link
  $("#article1-a").attr("href",r.items[0].link);
  //$("#article2-a").attr("href",r.items[1].link);

})


//jsonresponse = r;


     //  for NY Times Feed - need
     //   document.getElementById('article1').innerHTML = r.articles[0].title;
     //   document.getElementById('article2').innerHTML = r.articles[1].title;
    //   document.getElementById('article3').innerHTML = r.articles[2].title;
    //   document.getElementById('article4').innerHTML = r.articles[3].title;


    //can delete lines below for titles
      //  document.getElementById('article1').innerHTML = r.items[0].title;
      //  document.getElementById('article2').innerHTML = r.items[1].title;

      //if not thumbnail, use line below
      //$("#article1-img").attr("src",r.feed.image);

      //can delete lines below for images
      // $("#article1-img").attr("src",r.items[0].thumbnail);
      // $("#article2-img").attr("src",r.items[1].thumbnail);




//from w3schools FOR modal

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var openModal = document.getElementById("article1");
//var openModal = document.getElementById("article1");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
openModal.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//tried using existing starter code to toggle modal below - not working

      // document.getElementById('article1').onclick = function() {
      //   console.log("article-1 clicked");
      //
      //   var $popup = $('popUp');
      //   $popup.toggle();

        //test not working...
        //$("popUp").dialog();
        //$('popUp').toggle('show');
        //$('main').append($'popUp');

      //$popup.removeClass("hidden")
      //document.getElementById('popUp').container.toggle('show');
      //$popup.classList.toggle('show');

      //console.log($popup);

    //tests...
        //document.getElementById('popUp').container.style.display = "block";

        //var main = $('.main')

        //var popup = document.getElementById('popUp');
        //popup.classList.toggle('show');

        //var $popUploader = $('popUp.loader')
        //main.append($popUploader)
      //}




//other tests

        // For Ny Times image and article opening
//      $("#article3-img").attr("src",r.articles[2].urlToImage);
//      $("#article4-img").attr("src",r.articles[3].urlToImage);

//      $("#article1-a").attr("href",r.articles[0].url);
//      $("#article2-a").click(function(){
//      }


//other popup tests
  //    $('a.popup').live('click', function(){
	// 	newwindow=window.open($(this).attr('href'),'','height=200,width=150');
	// 	if (window.focus) {newwindow.focus()}
	// 	return false;
	// });


//for handlebars tests

//      var articleTitles = {};
//
//  Compile element using handlebars
//  articleTitles.compileItem = function(item) {
//   var source = $('#to-do-template').html();
//   var template = Handlebars.compile(source);
//   return template(item);
// }
//}

 //});

});
