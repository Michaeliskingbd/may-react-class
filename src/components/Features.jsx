import Card from "./Card";
import image from "../assets/background1.jpg";

const Features = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-4">
      <Card
        imageUrl={image}
        discountInfo="20% OFF ON WINTER CLOTHINGS"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
      <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg "
        discountInfo="50% OFF ON SUMMER FASHION"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
      <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg "
        discountInfo="75% OFF ON HOLIDAY SALES"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum."
      />
    </section>
  );
};

export default Features;
