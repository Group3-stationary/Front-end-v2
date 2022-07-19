import "./usersiderbar.scss"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";
const UserSidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{textDecoration:"none"}}>
          <span className="logo">Categories</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">PRODUCT</p>
            <li><ArrowRightIcon className="icon"/><span>View all products</span></li>
            <li><ArrowRightIcon className="icon"/><span>Create product</span></li>
          <p className="title">USERS</p>
            <li><ArrowRightIcon className="icon"/><span>View all users</span></li>
            <li><ArrowRightIcon className="icon"/><span>Create assistant</span></li>
          <p className="title">CATEGORY</p>
            <li><ArrowRightIcon className="icon"/><span>View all categories</span></li>
            <li><ArrowRightIcon className="icon"/><span>Create category</span></li>
          <p className="title">ORDER</p>
            <li><ArrowRightIcon className="icon"/><span>View all orders</span></li>
          
        </ul>
      </div>
    </div>
  )
}

export default UserSidebar