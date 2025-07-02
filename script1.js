// Define a box/frame for the tonnetz graph
// Clear current frame probably
// Draw an isometric graph
// Draw notes at each node 

// Drawing function - when clicking on a node, a line
// extrudes from that node to the next, snapping to nodes
// When PLAY pressed, any highlighed nodes will play the note 
// Arpeggio / Chord mode

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.getAttribute("width");
const canvasHeight = canvas.getAttribute("height");

// Define drawline function from start-end (x,y-x,y)
function drawLine(xStart, yStart, xEnd, yEnd) {
  // Draw a line from start to end position xx
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke()
  ctx.closePath()
}

// Create a circle class with 4 parameters
class Circle {
  constructor(xpoint, ypoint, radius, color) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.radius = radius;
    this.color = color;
  }

  // draw on ctx
  draw(ctx) {
    // Begin path for drawing, draw an arc x,y,r, no start angle, full circumference, clockwise
    ctx.beginPath();
    ctx.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);

    // Some style 
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.fill();

    // Draw + closepath
    ctx.stroke();
    ctx.closePath();
  }

  // Use pythag to determine if click is within circle
  clickCircle(xmouse, ymouse) {
    const distance = 
    Math.sqrt(
    ( ( xmouse - this.xpoint ) ** 2 )
     + 
    ( ( ymouse - this.ypoint ) ** 2 )
    );

    if (distance < this.radius) {
      return true;
    } else {
      return false;
    }
    
  }
}

// width="700" height="450" by default. Draw isometric grid

for (let i = -9; i < 9; i++) {
  drawLine(0+(75*i),0,canvasWidth,canvasHeight-(50*i));
  drawLine(0+(75*i),canvasHeight,canvasWidth,50*i);
}

let circle = new Circle(200,200,50,'lavender');
circle.draw(ctx);

// Whenver the screen is clicked, check if a circle is clicked within the canvas frame
// NEXT: draw a line from the midpoint of the circle to the mouse. Repeat until click again, snap onto new circle
var lineToCursor = false;

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (circle.clickCircle(x, y)) {
    lineToCursor = true;
    drawLine(x+,y,rect.left,rect.top);
  }
} );
