$( document ).ready(function() {
});
$(".buttons-eval button").click(function(event) {
  var id_element = $(this).attr("id");
  var class_element = $(this).attr("class");
  var series_name = "." + $(this).parents().attr("class");
  //alert(series_name);
  var clicked_element = $(this).attr("data-clickedvalue");
  if (clicked_element == "false" && (class_element == "like-button" || class_element == "dislike-button")) { // like not , dislike not
    if (class_element == "like-button") {
      var dislike_element = $(series_name + ' ' + '.dislike-button').attr("data-clickedvalue");
      //alert("dislike status" + dislike_element);
      if (dislike_element == "false") {
        //
      }
      else if(dislike_element == "true") {
        $(series_name + ' ' + '.dislike-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.dislike-button').css("color", "white");
      }
      else {
        //
      }
      $(this).css("color", "green");
      //alert("like not -> like");
      $(this).attr('data-clickedvalue',"true");
    }
    else if(class_element == "dislike-button") {
      var like_element = $(series_name + ' ' + '.like-button').attr("data-clickedvalue");
      //alert("like status" + like_element);
      if (like_element == "false") {
        //
      }
      else if(like_element == "true"){
        $(series_name + ' ' + '.like-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.like-button').css("color", "white");
      }
      $(this).css("color", "green");
      //alert("dislike not -> dislike");
      $(this).attr('data-clickedvalue',"true");
    }
    else {
      //
    }
  }
  else if (clicked_element == "true" && (class_element == "like-button" || class_element == "dislike-button")) { // like , dislike
    if (class_element == "like-button") {
      var dislike_element = $(series_name + ' ' + '.dislike-button').attr("data-clickedvalue");
      //alert("dislike status" + dislike_element);
      if (dislike_element == "false") {
        $(series_name + ' ' + '.dislike-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.dislike-button').css("color", "white");
      }
      else if(dislike_element == "true") {
        //
        $(series_name + ' ' + '.dislike-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.dislike-button').css("color", "white");
      }
      else {
        //
      }
      $(this).css("color", "white");
      //alert("like -> like not");
      $(this).attr('data-clickedvalue',"false");
    }
    else if(class_element == "dislike-button"){
      var like_element = $(series_name + ' ' + '.like-button').attr("data-clickedvalue");
      //alert("dislike status" + like_element);
      if (like_element == "false") {
        $(series_name + ' ' + '.like-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.like-button').css("color", "white");
      }
      else if(like_element =="true") {
        //
        $(series_name + ' ' + '.like-button').attr('data-clickedvalue',"false");
        $(series_name + ' ' + '.like-button').css("color", "white");
      }
      else {
        //
      }
      $(this).css("color", "white");
      //alert("dislike -> dislike not");
      $(this).attr('data-clickedvalue',"false");
    }
  }
  else if (clicked_element == "false" && class_element == "list-button")
  {
    $(this).attr('data-clickedvalue',"true");
    $(this).css("color", "green");
  }

  else if (clicked_element == "true" && class_element == "list-button")
  {
    $(this).attr('data-clickedvalue',"false");
    $(this).css("color", "white");
  }

  else
  {
    //
  }
  //alert(id_element + " " + class_element + " " + clicked_element);
});
