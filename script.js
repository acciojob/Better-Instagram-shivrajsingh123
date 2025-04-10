let draggedElement = null;

document.querySelectorAll('[id^="drag"]').forEach(div => {
  div.addEventListener('dragstart', () => {
    draggedElement = div;
    div.classList.add('selected');
  });

  div.addEventListener('dragend', () => {
    div.classList.remove('selected');
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('drop', () => {
    if (draggedElement && draggedElement !== div) {
      const temp = div.style.backgroundImage;
      div.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = temp;
    }
  });
});
