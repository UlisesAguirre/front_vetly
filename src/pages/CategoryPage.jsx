import CategoryPageContent from "../components/CategoryPageContent";

export default function CategoryPage({ category }) {
  return (
    <div className="categoryPageContainer">
      <section className='w-full'>
        <h2 className='text-center text-3xl font-bold py-10'>
          <span className='mr-3'>{category.icon}</span>
          {category.name}
        </h2>
      </section>

      <CategoryPageContent category={category} />
    </div>

  )
}
