//blumen fotos
//https://pixabay.com/vectors/flower-tulip-spring-tulpenbluete-2923492/
//http://www.freestockphotos.biz/stockphoto/17177
//https://pixabay.com/vectors/flowers-yellow-daisy-beautiful-23924/
//https://pixabay.com/vectors/floral-flower-leaf-leafy-leaves-2028503/


class Flower {
    constructor(x, y, color_code) {
        this.x = x;
        this.y = y;
        this.flower_color = "red";
        this.flower_center_color = "red";
        this.random_size = random(0.7, 1.1);
        this.get_color(Math.floor(random(0, 5)));
    }

    get_foto(number) {
        switch (number) {
            case 0:
                this.photo1 = loadImage('assets/flower-1.png');
                break;
            case 1:
               this.photo1 = loadImage('assets/flower-2.png');
                break;
            case 2:
                this.photo1 = loadImage('assets/flower-3.png');
                break;
            case 3:
                this.photo1 = loadImage('assets/flower-4.png');
                break;
            default:
                this.photo1 = loadImage('assets/flower-1.png');
                break;
        }
    }
    get_color(number) {
        switch (number) {
            case 0:
                this.flower_color = "yellow";
                break;
            case 1:
                this.flower_color = "orange";
                this.flower_center_color = "red";
                break;
            case 2:
                this.flower_color = "purple";
                this.flower_center_color = "white";
                break;
            case 3:
                this.flower_color = "blue";
                this.flower_center_color = "yellow";
                break;
            default:
                this.flower_color = "red";
                this.flower_center_color = "white";
        }
    }

    display() {


        strokeWeight(2);

        noFill();
        stroke("green");
        beginShape();
        curveVertex(this.x, this.y);
        curveVertex(this.x, this.y);

        curveVertex(this.x - 4, this.y + 15);
        curveVertex(this.x, this.y + 30);
        curveVertex(this.x, this.y + 30);
        endShape();

        stroke("black");
        strokeWeight(1);

        fill(this.flower_color);
        ellipse(this.x - 8, this.y - 4, width / 100 * this.random_size, width / 100 * this.random_size);
        ellipse(this.x + 1, this.y - 8, width / 100 * this.random_size, width / 100 * this.random_size);
        ellipse(this.x + 8, this.y + 1, width / 100 * this.random_size, width / 100 * this.random_size);
        ellipse(this.x + 2, this.y + 8, width / 100 * this.random_size, width / 100 * this.random_size);
        ellipse(this.x - 6, this.y + 6, width / 100 * this.random_size, width / 100 * this.random_size);


        fill(this.flower_center_color);
        ellipse(this.x, this.y, width / 106 * this.random_size, width / 106 * this.random_size);
    }
}