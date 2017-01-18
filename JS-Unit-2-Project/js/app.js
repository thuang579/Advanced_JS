
/*
  Please add all Javascript code to this file.
*/

 //Compile elements using handlebars
  var source = $('#articleItemTemplate').html();
  var articleItemTemplate = Handlebars.compile(source);

  var popupsource = $('#popUpTemplate').html();
  var popUpTemplate = Handlebars.compile(popupsource);



$(document).ready(function(){


//global variable to have value set in and accessed outside get api request?
var jsonresponse;

var feedItems;

var breitbartUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fbreitbart';
var foxUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Fpolitics';
var nytUrl = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=08d58f2f94b0426e856bb17cb5a7657b'

//ajax code maybe for adding error?
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





//Brietbart feed
//$.get( 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fbreitbart', function( r ) {

//Fox News feed
//$.get( 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.foxnews.com%2Ffoxnews%2Fpolitics', function( r ) {

//NY Times feed
//$.get( 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=08d58f2f94b0426e856bb17cb5a7657b', function( r ) {

     // We get the data back from the request in the parameter we pass in the function
     //console.log(r)

     //console.log(r.items[0].title);
    //  for NY Times Feed
    //  console.log(r.articles[0].title);
    //  console.log(r.articles[1].title);
    //  console.log(r.articles[2].title);
    //  console.log(r.articles[3].title);


//expand search on click
$('#search').click(function(){
    console.log("search clicked")
    $('#search').toggleClass('active');

})


//load with new feed
function loadFeed(feedUrl){
  //add loader when getting data
  $('#popUp').removeClass('hidden');


  $.get(feedUrl, function(r){

  feedItems = r.items

  console.log("loadFeed called")


  //handlebars repopulating
  for (var i = 0; i < 10; i++) {

        var itemContent = {i: i, imageurl: feedItems[i].thumbnail, title: feedItems[i].title}
        var html = articleItemTemplate(itemContent)

        $("#main").append(html)
  }


  //remove loader when get data
  $('#popUp').addClass('hidden');


  //open popUp on click
    $('#main article').click(function(e){
      console.log("test")

      //open popUp
      $('#popUp').removeClass('hidden');

      //set popUp contents
      var i = $(e.currentTarget).data('i')
      var popupContent = {title: feedItems[i].title, description: feedItems[i].description, link: feedItems[i].link}

      //remove loader when get data
      $('#popUp').removeClass('loader');

      //populate template
      var html = popUpTemplate(popupContent)
      $('#popUp').html(html)

      //close popUp
      $('.closePopUp').click(function(){
        $('#popUp').addClass('hidden');
        console.log("x clicked")
      })
    })



  })
}



//to call loadFeed with selected source
$('.dropdown-feed').on('click',function(e){
  $('#main').empty()
  loadFeed($(e.currentTarget).data('feed-url'))
  console.log("dropdown-feed clicked")
})



//to call loadFeed with Fox from logo select
$('#logo').on('click',function(e){
  $('#main').empty()
  loadFeed($('#fox').data('feed-url'))
  console.log("logo clicked")
})



//initial call to loadFeed with Fox for now
$.get(foxUrl, function(r){
  console.log(r);

  feedItems = r.items;

  jsonresponse = r;


    for (var i = 0; i < 10; i++) {

          var itemContent = {i: i, imageurl: feedItems[i].thumbnail, title: feedItems[i].title}
          var html = articleItemTemplate(itemContent)

          $("#main").append(html)
    }


  //remove loader when get data
  $('#popUp').addClass('hidden');


  //open popUp on click
  $('#main article').click(function(e){
    console.log("test")

    //open popUp
    $('#popUp').removeClass('hidden');

    //set popUp contents
    var i = $(e.currentTarget).data('i')
    var popupContent = {title: feedItems[i].title, description: feedItems[i].description, link: feedItems[i].link}

    //remove loader when get data
    $('#popUp').removeClass('loader');

    //populate template
    var html = popUpTemplate(popupContent)
    $('#popUp').html(html)

    //close popUp
    $('.closePopUp').click(function(){
      $('#popUp').addClass('hidden');
      console.log("x clicked")
    })
  })


})

console.log(jsonresponse);


     //  for NY Times Feed - need
     //   document.getElementById('article1').innerHTML = r.articles[0].title;
     //   document.getElementById('article2').innerHTML = r.articles[1].title;
    //   document.getElementById('article3').innerHTML = r.articles[2].title;
    //   document.getElementById('article4').innerHTML = r.articles[3].title;



});
