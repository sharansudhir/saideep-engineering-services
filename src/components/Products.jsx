import { useState } from 'react'
import content from '../content/en-IN.json'
import './Products.css'

const { products: productsContent } = content

export default function Products() {
  const [imgErrors, setImgErrors] = useState({})

  const handleImgError = (id) => {
    setImgErrors(e => ({ ...e, [id]: true }))
  }

  return (
    <section id="products" className="products" aria-labelledby="products-heading">
      <h2 id="products-heading" className="section-title">{productsContent.heading}</h2>
      <span className="underline" aria-hidden="true" />
      <p className="section-subtitle">{productsContent.subheading}</p>
      <div className="products-grid">
        {productsContent.items.map(p => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrap">
              {imgErrors[p.id] ? (
                <div className="product-img-fallback" aria-hidden="true">🔩</div>
              ) : (
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  onError={() => handleImgError(p.id)}
                />
              )}
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
