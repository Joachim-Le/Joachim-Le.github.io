document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    let interval = null;
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove('prev', 'active', 'next');
        // if (i === index) {
        //   img.classList.add('active');
        // }
      });
    
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      const nextIndex = (currentIndex + 1) % images.length;
      
      //images[prevIndex].classList.add('prev');
      images[currentIndex].classList.add('active');
      //images[nextIndex].classList.add('next');
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
    
    const btnPrev = document.querySelector('.carousel-prev');
    const btnNext = document.querySelector('.carousel-next');
  
    btnPrev.addEventListener('click', () => {
      prevImage();
      restartAutoScroll();
    });
  
    btnNext.addEventListener('click', () => {
      nextImage();
      restartAutoScroll();
    });
  
    function startAutoScroll() {
      interval = setInterval(() => {
        nextImage();
      }, 3000);
    }
  
    function stopAutoScroll() {
      clearInterval(interval);
    }
  
    function restartAutoScroll() {
      stopAutoScroll();
      startAutoScroll();
    }
  
    showImage(currentIndex);
    startAutoScroll();
  });