
import $ from "jquery";
export default function Landing() {
   numberElements = 4;
  numberViewed = 4;
  currentPosition = 1;
  autoSlideInterval = 3000; // Set the interval in milliseconds (e.g., 3 seconds)

  let autoSlideTimer; // Variable to hold the auto-slide timer

  function countLi() {
      return jQuery("#galleries-list ul li").length;
  };

  function slideRight() {
      if (countLi() > numberViewed)
          if (currentPosition == (countLi() - (numberViewed - 1))) {
              jQuery("#galleries-list ul li").css("visibility", "hidden").css("transition", "none");
              setSliderPosition(numberViewed + 1, countLi());
              jQuery("#galleries-list ul li").css("transition", "left .75s ease-out").css("visibility", "visible");
              setSliderPosition(currentPosition + 1, countLi());
              return;
          } else return setSliderPosition(currentPosition + 1, countLi());
  };

  function slideLeft() {
      if (countLi() > numberViewed)
          if (currentPosition == 1) {
              jQuery("#galleries-list ul li").css("transition", "none");
              setSliderPosition(countLi() - (2 * numberViewed + 1), countLi()).css("transition", "left .75s ease-out");
              return setSliderPosition(currentPosition - 1, countLi());
          } else return setSliderPosition(currentPosition - 1, countLi());
  };

  function setSliderPosition(n1, count) {
      if (n1 < 1) {
          setSliderPosition((count - (numberViewed - 1)) + n1, count);
          return
      };
      n1 = (n1 - 1) % (count - (numberViewed - 1)) + 1;
      currentPosition = n1;
      return jQuery("#galleries-list ul li").css('left', function () {
          return -(n1 - 1) * jQuery("#galleries-list ul li").width();
      });
  };

  function initWidths() {
      jQuery("#galleries-list ul li").css('width', (100 / countLi()) + '%');
      jQuery("#galleries-list ul").css('width', (100 + (countLi() - numberViewed) * (100 / numberViewed)) + '%');
  };

  function initClones() {
      if (countLi() >= numberViewed) {
          for (i = 1; i < numberViewed + 1; i++) {
              jQuery("#galleries-list ul li:nth-child(" + i + ")").clone().insertAfter("#galleries-list ul li:last-child");
          }
          c = countLi();
          for (i = c - numberViewed + 1; i <= c; i++) {
              console.log(i);
              jQuery("#galleries-list ul li:nth-last-child(" + i + ")").clone().insertBefore("#galleries-list ul li:first-child");
          }
      }
  };

  function initSlider() {
      initClones();
      initResponsive();
      initWidths();
      startAutoSlide(); // Start auto-sliding when the page loads
  };

  function initPosition() {
      setSliderPosition(currentPosition, countLi());
  };

  function initResponsive() {
      if (jQuery(window).width() > 1000) {
          if (numberViewed != 4) {
              numberViewed = 4;
              initWidths();
          }
      } else if (jQuery(window).width() > 800) {
          if (numberViewed != 3) {
              numberViewed = 3;
              initWidths();
          }
      } else if (jQuery(window).width() > 600) {
          if (numberViewed != 2) {
              numberViewed = 2;
              initWidths();
          }
      } else if (numberViewed != 1) {
          numberViewed = 1;
          initWidths();
      };
      initPosition();
  };

  function startAutoSlide() {
      autoSlideTimer = setInterval(slideRight, autoSlideInterval);
  }

  function stopAutoSlide() {
      clearInterval(autoSlideTimer);
  }

  jQuery(document).ready(function () {
      initSlider();
      jQuery(window).resize(initResponsive);
      jQuery("#galleries-list .slide-left").click(slideLeft);
      jQuery("#galleries-list .slide-right").click(slideRight);

      // Pause auto-slide when the user interacts with the slider
      jQuery("#galleries-list .slide-left, #galleries-list .slide-right").hover(
          function () {
              stopAutoSlide();
          },
          function () {
              startAutoSlide();
          }
      );
  });


  return (
    <div id="galleries-list">
      <ul>
        <li>
          <div className="content">1</div>
        </li>
        <li>
          <div className="content">2</div>
        </li>
        <li>
          <div className="content">3</div>
        </li>
        <li>
          <div className="content">4</div>
        </li>
      </ul>
      <div className="slider-nav">
        <span className="slide-left"> &lt;&lt;&lt; </span>
        <span className="slide-right"> &gt;&gt;&gt; </span>
      </div>
    </div>
  );
}
