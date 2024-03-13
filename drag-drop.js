const todoContainer = document.getElementById("TODO");
const containers = document.querySelectorAll(".container");

let draggingElement = null;

const onDragOver = (event) => {
  // Prevent Default should be condition, cannot be drop on same container
  if (draggingElement.parentNode.id === event.currentTarget.id) {
    // To avoid dropping in same container
    return;
  }
  event.preventDefault();
};

const onDrop = (event) => {
  // draggedElement should be placed inside the drop container
  event.currentTarget.appendChild(draggingElement);
};

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", onDragOver);
  containers[i].addEventListener("drop", onDrop);
}

function onDragStart(event) {
  draggingElement = event.currentTarget;
}
