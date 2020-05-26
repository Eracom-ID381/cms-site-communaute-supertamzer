function setup() {
    createCanvas(100, 100, WEBGL);
}

function draw() {

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(30, 15);

}