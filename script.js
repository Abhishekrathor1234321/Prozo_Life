const target = document.getElementById("typewriter-text");
  const text = "Prozo-Life";
  let index = 0;
  let isDeleting = false;

  function typeWriterEffect() {
    if (!isDeleting) {
      target.innerHTML = text.substring(0, index + 1);
      index++;
      if (index === text.length) {
        isDeleting = true;
        setTimeout(typeWriterEffect, 1200); // pause after typing
        return;
      }
    } else {
      target.innerHTML = text.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeWriterEffect, isDeleting ? 80 : 150); // speed
  }

  typeWriterEffect();

