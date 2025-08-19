import Button from "./utils/Button";

const Card = ({ discountInfo, body, imageUrl }) => {
  return (
    <article
      className=" relative flex items-end justify-center    bg-cover bg-center h-[400px] w-[400px] "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="w-[80%] mb-4 space-y-3 z-10 ">
        <h1 className="text-white text-2xl font-bold">{discountInfo}</h1>
        <p className="text-white text-md">{body}</p>
        <Button />
      </div>
    </article>
  );
};

export default Card;
