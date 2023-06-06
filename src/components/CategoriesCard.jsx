import Image from "../assets/images/Honeycm.jpg";

function CategoriesCard() {
  return (
    <div className="text-center">
      <div className="rounded-full overflow-hidden border-4 w-2/3 mx-auto border-green-900">
        <img
          className="w-full h-full object-cover"
          src={Image}
          alt="categories"
        />
      </div>
      <h3 className="font-bold mt-4 text-lg">Ghee</h3>
      <p className="text-gray-900 ">7 Products</p>
    </div>
  );
}

export default CategoriesCard;
