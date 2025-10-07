import React from 'react'
import {Link,NavLink} from "react-router-dom"

// here we use <a> and <Link> tag also but the some limitations are there 
// 1.when we use <a> then all page reload
// 2.when we use <Link> then it ok but it does not give additional functions;
// so thats way we use <NavLink> tag this provides addtional functionalities and page also not reload.
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive})=>isActive?"active-link":""}>home</NavLink>
            </li>
            <li>
                <NavLink to='/about'  className={({isActive})=>isActive?"active-link":""}>about</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'  className={({isActive})=>isActive?"active-link":""}>dashboard</NavLink>
            </li>

        </ul>
    </div>
  )
}

export default Navbar