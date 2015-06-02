var search = document.getElementsByTagName("button")[0];
var resultsDiv = document.createElement("div");
var box = document.getElementsByClassName("box")[0];

search.addEventListener("click", function() {
  resultsDiv.innerHTML = null;
  var artist = document.getElementsByTagName("input")[0].value;
  var url = getURL(artist);
  $.getJSON(url, function(response){
    response.results.forEach(function(result) {
      getResult(result);
    });
  });

  event.preventDefault();

  function getResult(result) {
    var div = resultsContainer();
    var img = getImage(result.artworkUrl100);
    var name = addInfo(result.artistName);
    var collection = addInfo(result.collectionName);
    var song = addInfo(result.trackName);
    var audio = addAudio(result.previewUrl);
    appendResult(div, img, name, collection, song, audio);
  };

  function appendResult(div, img, name, collection, song, audio) {
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(collection);
    div.appendChild(song);
    div.appendChild(audio);
    resultsDiv.appendChild(div);
    box.appendChild(resultsDiv);
  };

  function addInfo(info){
    var p = document.createElement("p");
    var attr = document.createAttribute("class");
    attr.value = "info";
    p.setAttributeNode(attr);
    p.innerHTML = info;
    return p;
  };

  function resultsContainer() {
    var div = document.createElement("div");
    var attrD = document.createAttribute("class");
    attrD.value = "results";
    div.setAttributeNode(attrD);
    return div;
  };

  function getImage(image) {
    var img = document.createElement("img");
    img.src = image;
    return img;
  };

  function addAudio(url) {
    var a = document.createElement("audio");
    var attr = document.createAttribute("class");
    attr.value = "info";
    a.setAttributeNode(attr);
    var controls = document.createAttribute("controls");
    controls.value = "controls";
    a.setAttributeNode(controls);
    var source = document.createElement("source");
    source.src = url;
    source.type = "audio/mp4";
    a.appendChild(source);
    return a;
  };
});
