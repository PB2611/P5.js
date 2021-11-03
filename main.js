function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
    }
    function draw() {
    image(video, 230, 150, 220, 200)
  
    
    fill(0, 128, 0);
    stroke(0, 128, 6);
    rect(90, 40, 460, 20);
    circle(56, 46, 70, 80);
    rect(550, 15, 70, 70, 20); 
    rect(90, 40, 460, 20);

    fill(52, 235, 213);
    stroke(52, 235, 213);
    rect(90, 400, 460, 20);
    circle(56, 406, 70, 80);
    rect(550, 380, 70, 70, 20); 

fill(252, 3, 98);
stroke(252, 3, 98);
    rect(45, 80, 20, 291);
    rect(575, 80, 20, 300);
    
    }