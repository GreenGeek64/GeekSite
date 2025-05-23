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

function drawLine() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);
  console.log("hi")

  // Draw the Path
  ctx.stroke();
}



