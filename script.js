//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required to allow drop
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      // Swap innerHTML (or you could swap backgroundImage if using styles)
      const temp = draggedElement.innerHTML;
      draggedElement.innerHTML = e.target.innerHTML;
      e.target.innerHTML = temp;

      // Optional: Add smooth visual effect
      draggedElement.classList.add("swapped");
      e.target.classList.add("swapped");

      setTimeout(() => {
        draggedElement.classList.remove("swapped");
        e.target.classList.remove("swapped");
      }, 300);
    }
  });
});
