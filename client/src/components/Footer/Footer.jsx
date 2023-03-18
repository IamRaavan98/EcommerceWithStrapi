import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
         <div className="categories">
          <h3>Categories</h3>
          <div className="item">
                <Link className = "link" >Women</Link>
          </div>
          <div className="item">
               <Link className = "link" >Men</Link>
          </div>
          <div className="item">
               <Link className = "link" >Shoes</Link>
          </div>
          <div className="item">
               <Link className = "link" >Accessories</Link>
          </div>
          <div className="item">
               <Link className = "link" >New Arrivals</Link>
          </div>
         </div>

         <div className="Links">
         <h3>Links</h3>
          <div className="item">
               <Link className = "link" >FaQ</Link>
          </div>
          <div className="item">
               <Link className = "link" >Pages</Link>
          </div>
          <div className="item">
               <Link className = "link" >Stores</Link>
          </div>
          <div className="item">
               <Link className = "link" >Compare</Link>
          </div>
          <div className="item">
               <Link className = "link" >Cookies</Link>
          </div>
         </div>
         <div className="About">
         <h3>About</h3>
           <div className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos excepturi facere explicabo laboriosam iusto earum voluptas aperiam ab mollitia, qui at sed temporibus sit ad optio accusantium saepe obcaecati.

          </div>
         </div>
         <div className="Contact">
         <h3>Contact</h3>
            <div className="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta perspiciatis cumque ab adipisci aperiam, officiis ipsam quisquam vitae numquam culpa provident eius odio. Tenetur in aspernatur deleniti a unde?
            </div>
         </div>
         
      </div>
      <div className="bottom">

      </div>
    </div>
  )
}
