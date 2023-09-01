import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <NavLink to={'/contact'}>Contacts</NavLink>
      <NavLink to={{}}>Charts and Maps</NavLink>
    </div>
  );
};

export default SideBar;
