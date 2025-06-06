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

function drawLine(xStart, yStart, xEnd, yEnd) {
  // Draw a line from start to end position xx
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke()
}

for (let i = 0; i < 2; i++) {
  drawLine(0+(i*50),0,canvasWidth,canvasHeight-(i*50));
}
