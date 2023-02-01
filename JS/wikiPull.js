//get today's date - old version does not work on # < 10

/*
var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var output = d.getFullYear() + '/' + month + '/' + day;
*/


//Get today's date v2
var MyDate = new Date();
var MyDateString;

MyDate.setDate(MyDate.getDate());

MyDateString = MyDate.getFullYear() + '/' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + "/" + ('0' + MyDate.getDate()).slice(-2)





//add todays date to API url

// let theAPIurl = "https://api.wikimedia.org/feed/v1/wikipedia/en/featured/" + MyDateString;
let theAPIurl = "https://en.wikipedia.org/api/rest_v1/feed/featured/" + MyDateString;
console.log(theAPIurl)



//extracting data from json object which is relevant to the featured article.
$.getJSON(theAPIurl, function (data) {
    //setting variables to store specific values
    featuredArticleText = (data["tfa"]["extract"]);
    featuredArticleLink = (data["tfa"]["content_urls"]["desktop"]["page"]);

    //putting extracted data into place.
    $("#tfa__text").text(featuredArticleText);
    $("#tfa__link").attr("href", featuredArticleLink)

    //if statement checking if featured article has an image
    if ((data["tfa"]).hasOwnProperty('thumbnail')) {
        //console.log("has image")
        featuredArticleImage = (data["tfa"]["thumbnail"]["source"]);
        featuredArticleImageFull = (data["tfa"]["originalimage"]["source"]);
        $("#featuredAImage").css('background-image', 'url(' + featuredArticleImage + ')');
        $("#fta__image__full").attr("href", featuredArticleImageFull)
    } else {
        //console.log("No image")
        searchResultsImage = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        $("#fta__image__full").attr("href", "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg");
    }






});





//extracting data from json object which is relevant to the featured picture.
$.getJSON(theAPIurl, function (data) {
    //get image description
    featuredImageText = (data['image']['description']['text']);
    //get image thumbnail
    featuredImage = (data['image']['thumbnail']['source']);
/*
    getMeta(featuredImage);
    function getMeta(imgUrl) {
        const img = new Image();
        img.addEventListener("load", function () {
            imgWidth = this.naturalWidth;
            imgHeight = this.naturalHeight;

            console.log(imgWidth);
            if (imgHeight > 400){

               
                
                 $("#featuredPic").height(imgHeight);
                $("#featuredPic").width(imgWidth);
                
            }
        

        });
        img.src = imgUrl;
    }
*/


    //getting full image version
    featuredImageFull = (data['image']['image']['source']);

    //if image has a artist
    if((data['image']).hasOwnProperty('artist')){
        //get artist name and publisher name
        featuredImageArtist = (data['image']['artist']['text']);
        featuredImageCredit = (data['image']['credit']['text']);
        $("#featuredPartist").text(featuredImageArtist);
        $("#featuredPcredit").text(featuredImageCredit);

        //if the artist is unknown print unknown author.
        if (featuredImageArtist == "Unknown authorUnknown author") {
            featuredImageArtist = "Unknown Author";
        }
    }
    //if no artist key found
    else{
        featuredImageArtist = "Unknown Author";
        $("#featuredPcredit").text("Unknown Publisher")
        $("#featuredPartist").text(featuredImageArtist);
    }

    //putting extracted data into place.
    $("#featuredPtext").text(featuredImageText);
    $("#featuredPic").css('background-image', 'url(' + featuredImage + ')');
    $("#fp__image__full").attr("href", featuredImageFull);
   
});







//extracting data from json object which is relevant to the featured news.
$.getJSON(theAPIurl, function (data) {
    featuredNewsHL = (data['news'][0]['links'][0]['titles']['normalized']);
    featuredNewsText = (data['news'][0]['links'][0]['extract']);
    featuredNewsLink = (data['news'][0]['links'][0]["content_urls"]["desktop"]["page"]);

    //putting extracted data into place.
    $("#newsHl").text(featuredNewsHL);
    $("#NewsText").text(featuredNewsText);
    $("#NewsLink").attr("href", featuredNewsLink);

    if ((data['news'][0]['links'][0]).hasOwnProperty('thumbnail')) {
        featuredNewsImage = (data['news'][0]['links'][0]['thumbnail']['source']);
        featuredNewsImageFull = (data['news'][0]['links'][0]['originalimage']['source']);
        $("#NewsPic").css('background-image', 'url(' + featuredNewsImage + ')');
        $("#news__image__full").attr("href", featuredNewsImageFull);
       
    } else {
     
    console.log("no news image")
       
    }



});








//extracting data from json object which is relevant to the featured news.
$.getJSON(theAPIurl, function (data) {
  let  x = 1;

    while (x < 3) {
        featuredNewsHL = (data['news'][x]['links'][x]['titles']['normalized']);
        featuredNewsText = (data['news'][x]['links'][x]['extract']);
        featuredNewsLink = (data['news'][x]['links'][x]["content_urls"]["desktop"]["page"]);
        x++;

        $("#newsHl" + x).text(featuredNewsHL);
        $("#NewsText" + x).text(featuredNewsText);
        $("#NewsLink" + x).attr("href", featuredNewsLink);
        

        console.log(featuredNewsHL);
        console.log(featuredNewsText);
        console.log(featuredNewsLink);
      }
 



    

   


});



{/* <div class="swiper-slide text-start">
<div class="col p-4 d-flex flex-column position-static surface facts__widget">
    <strong class="d-inline-block mb-2 text-primary">In the News</strong>
    <h3 class="mb-0 d-block d-xl-none" id="">In the news</h3>
    <h3 class="mb-0 d-none d-xl-block" id="newsHl">In the news</h3>
    <div class="mb-1 text-muted" id=""></div>
    <p class="card-text mb-auto widget__overflow2" id="NewsText">Annie Thérèse Blanche
        Ernaux is a
        French writer, professor of
        literature and Nobel laureate. Ernaux was awarded the 2022 Nobel Prize in Literature
        "for
        the courage and clinical acuity with which she uncovers the roots, estrangements and
        collective <span class="d-none d-lg-block">restraints of personal memory".</span>
    </p>
    <a href="#" id="NewsLink" class="stretched-link">Continue reading</a>
</div>
</div> */}



//extracting data from json object which is relevant to the featured "on this day"
$.getJSON(theAPIurl, function (data) {

    //While loop to print 3 "on this days"
    let i = 0;
    while (i < 3) {

        featuredOTDText = (data["onthisday"][i]["text"]);
        featuredOTDTitle = (data["onthisday"][i]["pages"][i]["titles"]['normalized']);
        /*
            featuredOTDPicture = (data["onthisday"][i]["pages"][i]["thumbnail"]['source']);
              $("#OTDPicture").css('background-image', 'url(' + featuredOTDPicture + ')');
        */
        featuredODTLink = (data["onthisday"][i]["pages"][i]["content_urls"]["desktop"]["page"]);


        //putting extracted data into place.

        $("#OTDtitle" + i).text(featuredOTDTitle);

        $("#OTDtext" + i).text(featuredOTDText);

        $("#OTDLink" + i).attr("href", featuredODTLink);


        /*
        console.log(featuredOTDTitle);
        console.log(featuredOTDText);
        console.log(featuredODTLink);
        console.log(i);
        */
        i++;
    }



});