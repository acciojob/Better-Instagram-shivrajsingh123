let draggedElement = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', () => {
    draggedElement = div;
    div.classList.add('selected');
  });

  div.addEventListener('dragend', () => {
    div.classList.remove('selected');
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Needed to allow drop
  });

  div.addEventListener('drop', () => {
    if (draggedElement && draggedElement !== div) {
      const temp = div.style.backgroundImage;
      div.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = temp;
    }
  });
});
