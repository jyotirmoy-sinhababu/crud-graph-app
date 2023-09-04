import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex gap-24 justify-end items-center py-3 lg:px-20 px-8 border-b'>
      <NavLink
        className=' font-semibold lg:text-2xl text-lg border-b-2 p-1 pb-2 '
        to={'/contact'}
      >
        Contacts
      </NavLink>
      <NavLink
        className=' font-semibold lg:text-2xl text-lg border-b-2 p-1 pb-2'
        to={'/charts'}
      >
        Charts and Maps
      </NavLink>
    </div>
  );
};

export default SideBar;
