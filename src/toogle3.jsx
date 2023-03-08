import { useState } from "react";

function App1() {
  const [showAbout, setShowAbout] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const toggleAbout = () => setShowAbout(!showAbout);
  const toggleStory = () => setShowStory(!showStory);
  const toggleProducts = () => setShowProducts(!showProducts);

  return (
    <div className="about-content">
      <div id="AboutEyeCare" onClick={toggleAbout}>
        <h1>About Eye Care Private Ltd.</h1>
        <div className={showAbout ? "AboutEyeCare" : "AboutEyeCare hidden"}>
          <p>
            Eyecare is reframing the eyewear game, one pair of glasses at a
            time. Take a look around, we think youll like what you see!The Way
            It Works You Shop Order your favorite eyewear online.No Middleman
            You Receive Open with a smile and put em on!
          </p>
        </div>
      </div>

      <div id="ourStory" onClick={toggleStory}>
        <h1>Our Story</h1>
        <div className={showStory ? "ourStory" : "ourStory hidden"}>
          <p>
            Eye care is established in 2018 in toronto. and started selling
            products in retail and later in 2021 introduced online service for
            customer flexibility.
          </p>
        </div>
      </div>

      <div id="products" onClick={toggleProducts}>
        <h1>Why to buy Eye Care Products</h1>
        <div className={showProducts ? "products" : "products hidden"}>
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
              Warranty (spring hinges, temples, coating peeling, deep scratches,
              wear and tear, etc.;
            </p>
            <li>Anti-dust glasess</li>
            <p>
              Some models offer a hydrophobic coating that prevents rain and
              sweat buildup on the lens. This coating also helps maintain a
              smudge-resistant barrier against skin oils, lotions, and
              sunscreens, and it even repels dust.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default App1;
