var image; // create global var image

function upload() {
  var imgcanvas1 = document.getElementById("can1");
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  image = new SimpleImage(fileinput); // make this variable Global. SimpleImage library is from dukelearntoprogram.com
  image.drawTo(imgcanvas1); // included in SimpleImage Library
}

function makeGray() {
  // for each pixel in image
  for (var pixel of image.values()) {
    // 1. get pixel's RGB values
    var R = pixel.getRed();
    var G = pixel.getGreen();
    var B = pixel.getBlue();
    // 2. calc avg of RGB
    var avgValue = (R + G + B) / 3;
    // 3. set RGB values to avg
    pixel.setRed(avgValue);
    pixel.setGreen(avgValue);
    pixel.setBlue(avgValue);
  }
  // display final img
  var imgcanvas2 = document.getElementById("can2");
  imgcanvas2.getContext("2d").clearRect(0, 0, imgcanvas2.width, imgcanvas2.height); // Clear the canvas
  image.drawTo(imgcanvas2);
}
