import { useState } from "react";

function ExpandableDivs() {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setIsExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div className="expandable-div">
        <h2 onClick={() => toggleExpand(0)}>Heading 1</h2>
        <div
          className={`expandable-content ${
            isExpanded[0] ? "expanded" : "collapsed"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu
            faucibus, dignissim augue vel, sagittis purus. Donec vitae risus sed
            lorem feugiat euismod. Morbi quis euismod ante.
          </p>
        </div>
      </div>
      <div className="expandable-div">
        <h2 onClick={() => toggleExpand(1)}>Heading 2</h2>
        <div
          className={`expandable-content ${
            isExpanded[1] ? "expanded" : "collapsed"
          }`}
        >
          <p>
            Ut sagittis, purus ac venenatis convallis, sapien libero fringilla
            dolor, vitae imperdiet sapien magna quis turpis. Nam rhoncus
            ultricies odio, id fringilla neque fringilla ac. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
        </div>
      </div>
      <div className="expandable-div">
        <h2 onClick={() => toggleExpand(2)}>Heading 3</h2>
        <div
          className={`expandable-content ${
            isExpanded[2] ? "expanded" : "collapsed"
          }`}
        >
          <p>
            Fusce vel ligula sem. Maecenas quis enim nec magna bibendum varius
            ut vitae felis. Sed efficitur justo quis nunc tincidunt, vel
            porttitor ex molestie. Nunc sit amet quam ut tortor imperdiet
            efficitur. In maximus volutpat ex, vitae auctor lectus tincidunt ac.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpandableDivs;
