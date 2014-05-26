console.log("Loaded!")

function flickr_api_url(search_term){
  var apiKey = '3e87ddb27992bc6e678135e97bc26082';
  return 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&tags=' + search_term + '&per_page=5&format=json&nojsoncallback=1'
}

function photo_link(photo){
  return "https://flickr.com/photos/" + photo.owner + "/" + photo.id;
}

function photo_image_url(photo){
  return 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg' 
}

function add_image(link){
  $("#images").append('<img src="' + link + '" />')
}

function process_response(data){
  d = data;
  console.log(data);

  link = photo_image_url(data.photos.photo[0])
  console.log(link);

  add_image(link);
}


url = flickr_api_url("sushi");
$.getJSON(url, process_response);
