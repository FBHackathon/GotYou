// This function finds the list of categories and push them into the drop down
// list
$(document).ready(_init);

function _init() {

  $("#FBLogin").click(function () {
    FB.login(function (response) {
    }, { scope: "read_friendlists, friends_photos, user_photos" });
  });

}
function getAccessToken(FB){
  FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {  // 程式有連結到 Facebook 帳號
      var uid = response.authResponse.userID; // 取得 UID
      var accessToken = response.authResponse.accessToken; // 取得 accessToken
      $("#uid").html("UID:" + uid);
      $("#accessToken").html("accessToken:" + accessToken);
      window.ACCESS_TOKEN = accessToken;
      getFriendList(uid, accessToken)
      getUserPhotos(uid, accessToken)
    } else if (response.status === 'not_authorized') {  // 帳號沒有連結到 Facebook 程式
      alert("Permission needed！");
      }
  });
}
function getFriendList(uid, accessToken){
  ajax_call(
    "https://graph.facebook.com/" + uid + "/friends?method=GET&format=json&suppress_http_code=1&access_token=" + accessToken ,
    null,
    function(result) {
      var selectArray = [];
      this.hashTable = new Object();
      var self = this;
      for(var i = 0; i < result.data.length; i++){
        selectArray.push(result.data[i].name);
        this.hashTable[result.data[i].name] = result.data[i].id;
      }
      $( "#tags" ).autocomplete({
        source: selectArray
        , select: function(event, ui){
          var idOfSelected = self.hashTable[$(ui)[0].item.value];
          getUserAlbums(idOfSelected);
        }
      });
     /* 
      var search_cat = $("#search_category");
      var post_cat = $("#post_category");
        search_cat.append($("<option></option>").append(result[i]));
        post_cat.append($("<option></option>").append(result[i]));
        */
    },
    function() {
      alert("Get friend list failed");
    }
  );

}
function getUserAlbums(id){
  ajax_call(
    "https://graph.facebook.com/" + id + "/albums?access_token=" + window.ACCESS_TOKEN ,
    null,
    function(result) {
      var Album_Json = [];
      for(var i = 0; i < result.data.length; i++){
        var new_obj = new Object();
        new_obj['title'] = result.data[i].name;
        new_obj['id'] = result.data[i].id;
        new_obj['number'] = result.data[i].count;

        if(typeof result.data[i].cover_photo =='undefined'){
          continue;
        }
        var request = new XMLHttpRequest();
        request.open('GET', 'https://graph.facebook.com/' + result.data[i].cover_photo +'?access_token=' + window.ACCESS_TOKEN, false);
        request.send(null);

        if (request.status === 200) {
          new_obj['photo'] = JSON.parse(request.response)['images'][6]['source'];
        }
        Album_Json.push(new_obj);
      }
      showAlbums(Album_Json);
    },
    function() {
      alert("Get user album list failed");
    }
  );

}
function showAlbums(data){
  var htmlStr = '<div name="album-element" id="album-element">'; 
  htmlStr+='<div class="row">';
  for (var i=0, len=data.length; i < len; i++) {
  htmlStr+='<div name="album-info">';
  htmlStr+= '<div class="row">';
  htmlStr+= '<div width=100px id="album-title" name="album-title"><b>'+data[i].title+'</b></div>';
  htmlStr+= '<div id="photo-number" align="right" name="album-title">'+data[i].number+'</div>';
  htmlStr+= '</div>';
  htmlStr+= '<div id="cover-photo"><img width=200px height=150px style="margin:5px" src="'+ data[i].photo +'"></div>';
  htmlStr+=  '</div><!--end album-info-->';
  htmlStr+='<button name="enter-album" onclick="getAlbum('+data[i].id+');"> Watch it!</button>';
  }
  htmlStr+='</div>';
  htmlStr+='</div>';
  $('#show-list').html(htmlStr);
}
function getAlbum(album_id){
  ajax_call(
    "https://graph.facebook.com/" + album_id +"/photos?access_token=" + window.ACCESS_TOKEN ,
    null,
    function(result) {/*
      var search_cat = $("#search_category");
      var post_cat = $("#post_category");
      for (var i=0; i<result.length; i++) {
        search_cat.append($("<option></option>").append(result[i]));
        post_cat.append($("<option></option>").append(result[i]));
      }*/
    $('#main-insert-position').empty();
    appendPhotos(result);

    },
    function() {
      alert("Get album photos failed");
    }
  );


}
function appendPhotos(result){
  for(var i = 0; i < result.data.length; i++){ 
    var new_append = new_div(new_image(result.data[i].images[0].source));
    if(typeof result.data[i].comments =='undefined'){
      $('#main-insert-position').append(new_append);
      continue;
    }
    for(j = 0; j < result.data[i].comments.data.length; j++){
      new_append.append(new_caption(result.data[i].comments.data[j].from.name +":" +result.data[i].comments.data[j].message));
    }
    $('#main-insert-position').append(new_append);
  }
  triggerSlide();
}
function getUserPhotos(uid, accessToken){
  ajax_call(
    "https://graph.facebook.com/536134540/albums?access_token=" + accessToken ,
    null,
    function(result) {/*
      var search_cat = $("#search_category");
      var post_cat = $("#post_category");
      for (var i=0; i<result.length; i++) {
        search_cat.append($("<option></option>").append(result[i]));
        post_cat.append($("<option></option>").append(result[i]));
      }*/
    },
    function() {
      alert("Get friend list failed");
    }
  );

}
function triggerSlide(){
    $('#slider2_container').jssorSlider({
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                    $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                    $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                    $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                    $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
                 },
                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                },

                $DirectionNavigatorOptions: {                       //[Optional] Options to specify and enable direction navigator or not
                    $Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
                    $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                },

                $NavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorNavigator$,                       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 4,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 4,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                }
            });

}
function new_button(content) {
  return $("<button></button>")
    .append(content);
}
function new_div(content) {
  return $("<div></div>")
    .append(content);
}
function new_image(src){
  return $("<img u=\"image\" src=\""+ src +"\" height=\"450\" width=\"600\"/>");
}
function new_caption(comment){
  var random_x = Math.random()*130;
  var random_y = Math.random()*530;
  return $("<div u=caption t=\"*\" class=\"captionOrange\"  style=\"position:absolute; left:"+random_x+"px; top: "+ random_y +"px; width:500px; height:30px; display: inline-block\">"+ comment +"</div>");
}

function new_link(content, id) {
  var link = $("<a></a>")
    .append(content)
    .css("cursor", "pointer");
  if (typeof link != "undefined") {
    return link.attr("id", id);
  }
  return link;
}
function ajax_call(url, data, successCallback, errorCallback, type) {
  if (typeof type === "undefined") {
    type = "get";
  }
  $.ajax({
    url: url,
    type: type,
    //dataType: 'json',
    data: data,
    success: successCallback,
    error: errorCallback
  });
}

