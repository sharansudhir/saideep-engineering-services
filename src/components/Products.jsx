import { useState } from 'react'
import './Products.css'

const products = [
  {
    name: 'Tail Door Locking System (Horizontal)',
    desc: 'Horizontal type locking mechanism for tipper rear doors — durable and easy to operate.',
    img: 'https://tiimg.tistatic.com/fp/3/703/tipper-body-tail-door-locking-system-horizontal-type-650.jpg',
  },
  {
    name: 'Tail Door Locking System (Chain Type)',
    desc: 'Chain type tail door locking system for commercial tipper bodies.',
    img: 'https://tiimg.tistatic.com/fp/5/703/tipper-body-tail-door-locking-system-chain-type-638.jpg',
  },
  {
    name: 'Tail Door Locking System (Vertical Hook)',
    desc: 'Vertical hook tail door locking mechanism assembly for secure rear door closure.',
    img: 'https://tiimg.tistatic.com/fp/1/703/tail-door-locking-mechanism-assembly-vertical-hook-642.jpg',
  },
  {
    name: 'Hyfix Body Lock Assembly',
    desc: 'Hyfix body lock assemblies with lock bracket engineered for heavy-duty tipper use.',
    img: 'https://tiimg.tistatic.com/fp/4/703/tipper-body-lock-hyfix-assembly-636.jpg',
  },
  {
    name: 'Rear Hinge Bracket Assembly',
    desc: 'Precision-fabricated hinge brackets ensuring secure articulation of tipper bodies.',
    img: 'https://cpimg.tistatic.com/00391247/b/5/Rear-Hinge-Bracket-Assembly.jpg',
  },
  {
    name: 'Profile Cut Components',
    desc: 'Custom profile-cut steel components manufactured to exact specifications.',
    img: 'https://tiimg.tistatic.com/fp/2/703/profile-cut-components-645.jpg',
  },
  {
    name: 'Tipper Cylinder Mounting Bracket',
    desc: 'Cradle assembly and mounting brackets for tipper hydraulic cylinders.',
    img: 'https://tiimg.tistatic.com/fp/2/703/tipper-cylinder-mounting-bracket-cradle-assembly-639.jpg',
  },
  {
    name: 'Tyre / Spare Wheel Lifting Winch',
    desc: 'Robust winches for carrying and deploying spare tyres on commercial trucks.',
    img: 'https://cpimg.tistatic.com/08957990/b/4/Tyre-Spare-Wheel-Lifting-Winch.jpg',
  },
  {
    name: 'Standard Tipper Body Components',
    desc: 'Complete range of tipper body parts and sub-assemblies for major OEMs across India.',
    img: 'https://tiimg.tistatic.com/fp/3/703/standard-tipper-body-components-637.jpg',
  },
]

export default function Products() {
  const [imgErrors, setImgErrors] = useState({})

  const handleImgError = (name) => {
    setImgErrors(e => ({ ...e, [name]: true }))
  }

  return (
    <section id="products" className="products">
      <h2 className="section-title">Our Products</h2>
      <span className="underline" />
      <p className="section-subtitle">
        Engineered components trusted by commercial vehicle manufacturers across India
      </p>
      <div className="products-grid">
        {products.map(p => (
          <div className="product-card" key={p.name}>
            <div className="product-img-wrap">
              {imgErrors[p.name] ? (
                <div className="product-img-fallback">🔩</div>
              ) : (
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  onError={() => handleImgError(p.name)}
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
