import { useState } from "react";

function Example() {
  const [openSections, setOpenSections] = useState({
    AboutEyeCare: false,
    ourStory: false,
    products: false,
  });

  // Event handler to toggle a section
  const toggleSection = (sectionName) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  return (
    <div>
      <button onClick={() => toggleSection("AboutEyeCare")}>
        About Eye Care
      </button>
      {openSections.AboutEyeCare && (
        <div className="AboutEyeCare">
          Content for About Eye Care section:
          <li>Your content video</li>
          <ol>
            <p>
              Food rotation is an important aspect of food safety that involves
              managing inventory to ensure that food products are used before
              they expire. It is crucial for maintaining the quality of food
              products and reducing the risk of foodborne illness. Here are some
              key points and paragraphs about food rotation:
            </p>
            <li>
              Importance of food rotation: Food rotation is important for
              several reasons. Firstly, it helps to prevent food waste by
              ensuring that food products are used before they expire. Secondly,
              it helps to maintain the quality of food products, as expired or
              spoiled food can lead to poor taste and texture, and potentially
              harmful bacteria. Thirdly, it helps to reduce the risk of
              foodborne illness, as expired or spoiled food can contain harmful
              bacteria that can make people sick.
            </li>
            <li>
              {" "}
              How to implement food rotation: Food rotation can be implemented
              in a number of ways, depending on the type of food establishment.
              In a restaurant, for example, food rotation may involve labeling
              and dating food products, and ensuring that older products are
              used first. In a grocery store, food rotation may involve checking
              expiration dates and rotating stock accordingly. In a home
              kitchen, food rotation may involve organizing the fridge and
              pantry to ensure that older products are used first.
            </li>
            <li>
              Benefits of food rotation: There are several benefits to
              implementing a food rotation system. Firstly, it can help to
              reduce food waste, which is not only environmentally responsible
              but can also save money. Secondly, it can help to maintain the
              quality of food products, which can improve customer satisfaction
              and potentially increase sales. Thirdly, it can help to reduce the
              risk of foodborne illness, which is not only important for public
              health but can also protect a business's reputation.
            </li>
            <li>
              Challenges of food rotation: While food rotation is an important
              aspect of food safety, it can also be challenging to implement.
              Some of the challenges include managing inventory, training staff,
              and ensuring compliance with food safety regulations. In addition,
              food rotation can be time-consuming and may require additional
              resources, such as labeling and dating equipment.
            </li>
            <p>
              In conclusion, food rotation is a crucial aspect of food safety
              that involves managing inventory to ensure that food products are
              used before they expire. It is important for reducing food waste,
              maintaining quality, and reducing the risk of foodborne illness.
              While there are challenges associated with implementing a food
              rotation system, the benefits make it a worthwhile investment for
              any food establishment.
            </p>
          </ol>
        </div>
      )}

      <button onClick={() => toggleSection("ourStory")}>Our Story</button>
      {openSections.ourStory && (
        <div className="ourStory">
          Content for Our Story section
          <li>Your content video</li>
          <ol>
            <p>
              Food rotation is an important aspect of food safety that involves
              managing inventory to ensure that food products are used before
              they expire. It is crucial for maintaining the quality of food
              products and reducing the risk of foodborne illness. Here are some
              key points and paragraphs about food rotation:
            </p>
            <li>
              Importance of food rotation: Food rotation is important for
              several reasons. Firstly, it helps to prevent food waste by
              ensuring that food products are used before they expire. Secondly,
              it helps to maintain the quality of food products, as expired or
              spoiled food can lead to poor taste and texture, and potentially
              harmful bacteria. Thirdly, it helps to reduce the risk of
              foodborne illness, as expired or spoiled food can contain harmful
              bacteria that can make people sick.
            </li>
            <li>
              {" "}
              How to implement food rotation: Food rotation can be implemented
              in a number of ways, depending on the type of food establishment.
              In a restaurant, for example, food rotation may involve labeling
              and dating food products, and ensuring that older products are
              used first. In a grocery store, food rotation may involve checking
              expiration dates and rotating stock accordingly. In a home
              kitchen, food rotation may involve organizing the fridge and
              pantry to ensure that older products are used first.
            </li>
            <li>
              Benefits of food rotation: There are several benefits to
              implementing a food rotation system. Firstly, it can help to
              reduce food waste, which is not only environmentally responsible
              but can also save money. Secondly, it can help to maintain the
              quality of food products, which can improve customer satisfaction
              and potentially increase sales. Thirdly, it can help to reduce the
              risk of foodborne illness, which is not only important for public
              health but can also protect a business's reputation.
            </li>
            <li>
              Challenges of food rotation: While food rotation is an important
              aspect of food safety, it can also be challenging to implement.
              Some of the challenges include managing inventory, training staff,
              and ensuring compliance with food safety regulations. In addition,
              food rotation can be time-consuming and may require additional
              resources, such as labeling and dating equipment.
            </li>
            <p>
              In conclusion, food rotation is a crucial aspect of food safety
              that involves managing inventory to ensure that food products are
              used before they expire. It is important for reducing food waste,
              maintaining quality, and reducing the risk of foodborne illness.
              While there are challenges associated with implementing a food
              rotation system, the benefits make it a worthwhile investment for
              any food establishment.
            </p>
          </ol>
        </div>
      )}

      <button onClick={() => toggleSection("products")}>Products</button>
      {openSections.products && (
        <div className="products">Content for Products section</div>
      )}
    </div>
  );
}
export default Example;
