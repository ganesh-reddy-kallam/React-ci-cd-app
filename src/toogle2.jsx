import { useState, useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const AboutEyeCare = document.getElementById("AboutEyeCare");
    const ourStory = document.getElementById("ourStory");
    const products = document.getElementById("products");

    const handleAboutEyeCareClick = () => {
      const aboutEyeCareContent = document.querySelector(".AboutEyeCare");
      aboutEyeCareContent.classList.toggle("show");
    };

    const handleOurStoryClick = () => {
      const ourStoryContent = document.querySelector(".ourStory");
      ourStoryContent.classList.toggle("show");
    };

    const handleProductsClick = () => {
      const productsContent = document.querySelector(".products");
      productsContent.classList.toggle("show");
    };

    AboutEyeCare.addEventListener("click", handleAboutEyeCareClick);
    ourStory.addEventListener("click", handleOurStoryClick);
    products.addEventListener("click", handleProductsClick);

    return () => {
      AboutEyeCare.removeEventListener("click", handleAboutEyeCareClick);
      ourStory.removeEventListener("click", handleOurStoryClick);
      products.removeEventListener("click", handleProductsClick);
    };
  }, []);

  return (
    <div className="about-content">
      <div id="AboutEyeCare">
        <h1>About Eye Care Private Ltd.</h1>
        <div className="AboutEyeCare">
          <p>
            Eyecare is reframing the eyewear game, one pair of glasses at a
            time. Take a look around, we think you'll like what you see!The Way
            It Works You Shop Order your favorite eyewear online.No Middleman
            You Receive Open with a smile and put em on!
          </p>
        </div>
      </div>

      <div id="ourStory">
        <h1>Our Story</h1>
        <div className="ourStory">
          <p>
            Eye care is established in 2018 in toronto. and started selling
            products in retail and later in 2021 introduced online service for
            customer flexibility.
          </p>
        </div>
      </div>

      <div id="products">
        <h1>Why to buy Eye Care Products</h1>
        <div className="products">
          <ol>
            <li>Choose Wisely</li>
            <p>
              High Definition Optics® (HDO) lenses allow for a clearer, sharper
              image. This technology also prevents dust or moisture from
              sticking to the lens.
            </p>
            <li>Diversity</li>
            <p>
              Elegant and fashionable with a wide choice of cuts and styles to
              suit anyones taste. The universal style of Eyecare glasses makes
              them look good on both men and women.
            </p>
            <li>Sports glasses</li>
            <p>
              Eye care Optics® extends clarity across lens contours that open
              peripheral vision and improve side protection against sun, wind,
              and impact in sports such as skiing and target shooting.
            </p>
            <li>anti-light rays</li>
            <p>
              All lenses block 100% of harmful UVA, UVB, UVC and blue light. In
              fact, this protection is filtered through the lens rather than
              being offered as just a coating that may be ruined over time.
            </p>
            <li>Our guarantee</li>
            <p>
              A 90-day Lens Satisfaction Guarantee; 2-year protection against
              accidental breakage not covered by the Standard Online Purchase
              Warranty spring hinges, temples, coating peeling, deep scratches,
              wear and tear, etc.;
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default MyComponent;
