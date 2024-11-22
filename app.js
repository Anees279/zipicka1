$(document).ready(function(){
  $('.autoslide').slick({
      slidesToShow: 1,         // Show only one slide at a time
      slidesToScroll: 1,       // Scroll one slide at a time
      autoplay: true,          // Enable autoplay
      autoplaySpeed: 2000,     // Set the speed of autoplay (in ms)
      infinite: true,          // Enable infinite loop
      centerMode: false,       // Disable center mode to prevent partial slides
      arrows: true,            // Enable arrows for navigation
      dots: true,              // Enable dots for navigation
      focusOnSelect: true,     // Enable clicking to select slides
      
  });
});
// slickslider
$(document).ready(function () {
  function initSlider() {
      if ($(window).width() < 768) {
          if (!$('.autoplay').hasClass('slick-initialized')) {
              $('.autoplay').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 2000,
                  infinite: true,
                  arrows: true,
                  dots: true,
              }).on('setPosition', function () {
                  $('.slick-slide img').css('display', 'inline'); // Set display to inline
              });
          }
      } else {
          if ($('.autoplay').hasClass('slick-initialized')) {
              $('.autoplay').slick('unslick');
          }
      }
  }

  initSlider();
  $(window).resize(function () {
      initSlider();
  });
});

// for faq
function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  
  // Toggle display of answer
  if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
  } else {
      answer.style.display = "none";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
  }
}

// footer
fetch('footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch footer.html: ${response.statusText}`);
    }
    return response.text();
  })
  .then(data => {
    
    // Insert the fetched footer content into the container
    document.getElementById('footer-container').innerHTML = data;

    // Perform any additional setup if necessary
    const footer = document.querySelector('.footer');
    if (footer) {
      console.log('Footer loaded successfully!');
    }
  })
  .catch(error => console.error('Error loading footer:', error));







