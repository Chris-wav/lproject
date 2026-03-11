import CategoryCard from "./CategoryCard";
import { Link } from "@tanstack/react-router";
import { categories } from "../data/content";
const Categories = () => {
  return (
    <div className="flex flex-col gap-4 mt-6 px-4 pb-5">
      <div className="flex justify-between items-center px-2">
        <span className="font-[710] font-display text-2xl py-2 ">
          Categories
        </span>{" "}
        <a href="">See all</a>
      </div>
      {categories.map((category) => (
        <Link key={category.id} to="/category/$id" params={{ id: category.id }}>
          <CategoryCard
            category={category.title}
            icon={category.icon}
            lessons={Math.floor(Math.random() * 20) + 1}
            progress={Math.floor(Math.random() * 100) + 1}
            id={category.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
