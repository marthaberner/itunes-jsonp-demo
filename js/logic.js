function getURL(artist) {
  var q = artist.replace(" ", "+");
  return "https://itunes.apple.com/search?term=" + q + "&callback=?";
};
