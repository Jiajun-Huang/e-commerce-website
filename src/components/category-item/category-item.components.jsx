import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <article className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </section>
    </article>
  );
};

export default CategoryItem;
