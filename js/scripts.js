document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.project-item');

  items.forEach(function (item) {
    const preview = item.querySelector('.project-preview');
    if (!preview) return;

    item.addEventListener('mousemove', function (e) {
      preview.style.left = e.clientX + 'px';
      preview.style.top = e.clientY + 'px';
    });
  });
});
