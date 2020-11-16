import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
 return (
  <nav>
   <ul>
    <li> 
     <Link to='/'>Home</Link>
    </li>
    <li> 
     <Link to='/blog/'>Blog</Link>
    </li>
    <li> 
     <Link to='/products/'>products</Link>
    </li>
    <li> 
     <Link to='/examples/'>examples</Link>
    </li>
   </ul>
  </nav>
 )
}
