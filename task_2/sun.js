class Sun {
    constructor() {

        this.position = createVector(width / 2, 0);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 2;
    }

    update() {
        var mouse = createVector(mouseX, mouseY);
        if (mouseY >= height / 2) {
            var mouse_under = true;
            mouse.y = height / 2;
        }
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);


        if (mouseX > Math.floor(this.position.x - 3) &&
                mouseX < Math.floor(this.position.x + 3) &&
                mouseY > Math.floor(this.position.y - 3) &&
                mouseY < Math.floor(this.position.y + 3) ||
                (mouse_under && Math.floor(this.position.y) > (height / 2 - 10))) {
            var no_velo = createVector(0, 0)
            this.position.add(no_velo);
        } else {
            this.position.add(this.velocity);
        }

    }

    display() {
//        Sonne
        stroke("yellow");
        strokeWeight(2);
        fill("yellow");
        ellipse(this.position.x, this.position.y, width / 4.5, width / 4.5);

//        Sonnenstrahlen
        for (var i = 0; i <= 30; i++) {
            var number = i;
            if (i % 2 == 0) {
                number = (number * -1)
            }
            var number2 = 0;
            if (i % 3 == 0) {
                number2 = 1
            }
            strokeWeight(random(4, 5));
            stroke("yellow");
            line(this.position.x, this.position.y, width / 2 + (number * 50), height * number2);
        }
        for (var i = 0; i <= 30; i++) {
            var number = i;
            if (i % 2 == 0) {
                number = (number * -1)
            }
            var number2 = 0;
            if (i % 3 == 0) {
                number2 = 1
            }
            strokeWeight(random(10, 18));
            stroke("yellow");
            line(this.position.x, this.position.y, width * number2, height / 2 + (number * 50));
        }
    }
}