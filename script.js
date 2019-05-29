var video;
var x = 0;
var y = 0;
var canvas;
var w = 700,
    h = 500;
var vScale = 2


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(100, 100);
    pixelDensity(1);
    video = createCapture(VIDEO);
    //video.size(w/vScale, h/vScale);
    video.hide();
    //colorMode(HSB, 100);
    background(255);
    //frameRate(30);

}


function draw() {

    //    filter(GRAY);
    filter(POSTERIZE, 50);

    var w = video.width;
    var h = video.height;

    video.loadPixels();
    //  loadPixels();


    if (random(100) > 95) {

        for (var y = 0; y <= video.height; y++) {
            for (var x = 0; x <= video.width; x++) {
                // var index = (video.width - x + 1 + (y * video.width))*4;
                var index = (x + y * video.width) * 4;
                let r = video.pixels[index];
                let g = video.pixels[index + 1];
                let b = video.pixels[index + 2];
                let bright = (r + g + b) / 3;
                let threshold = 100;

                if (bright > threshold) {
                    fill(random(255), random(255), random(255))
                } else {
                    noFill();
                }


                noStroke()
                rectMode(CENTER);
                //      rect(x*vScale, y*vScale, vScale, vScale); 
                rect(x, y, 2, 2);

            }
        }
    }


    var randomX = random(w);
    var randomY = random(h);
    var scale = random(5);
    copy(video, randomX, randomY, randomX + scale, randomY + scale, randomX + scale, randomY + scale, randomX + scale, randomY + scale);



}
