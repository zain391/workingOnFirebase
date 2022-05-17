import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item"> <Link to="/">Home</Link> </li>
                <li className="list-group-item"> <Link to="/delete">Delete</Link> </li>
                <li className="list-group-item"> <Link to="/fetch">Fetch</Link> </li>
                <li className="list-group-item"> <Link to="/update">Update</Link> </li>

                {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li> */}
            </ul>
        </div>
    )
}

export default Header