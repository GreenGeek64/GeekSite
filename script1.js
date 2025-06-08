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
}

// width="700" height="450" by default. Draw isometric grid
for (let i = -9; i < 9; i++) {
  drawLine(0+(75*i),0,canvasWidth,canvasHeight-(50*i));
  drawLine(0+(75*i),canvasHeight,canvasWidth,50*i);
}
