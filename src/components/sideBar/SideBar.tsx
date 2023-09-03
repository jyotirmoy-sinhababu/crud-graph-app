import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex gap-56 justify-end py-12 px-24'>
      <NavLink
        className=' font-semibold text-2xl active:text-violet-400 focus:outline-none focus:ring focus:ring-violet-300'
        to={'/contact'}
      >
        Contacts
      </NavLink>
      <NavLink
        className=' font-semibold text-2xl active:text-violet-400 focus:outline-none focus:ring focus:ring-black-300'
        to={'/charts'}
      >
        Charts and Maps
      </NavLink>
    </div>
  );
};

export default SideBar;
