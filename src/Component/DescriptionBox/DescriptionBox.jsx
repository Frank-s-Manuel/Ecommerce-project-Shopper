import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (120)</div>
      </div>
      <div className="descriptionbox-description">
        <p>When surfing on an e-commerce site, remember that users have two main aims: purchase or research. To satisfy both these aims, you can’t afford to give half-baked product information.
If you’re selling a bag, only its price and picture isn’t enough, even if the picture speaks a thousand words. In any case your picture doesn’t speak a thousand words because your customer is eternally highly curious.
He needs to know the dimensions, materials, colors available and much more. Also you’re killing chances of your site not showing up in the top words of the search engine query due to lacking product description</p>
      </div>
    </div>
  )
}

export default DescriptionBox
