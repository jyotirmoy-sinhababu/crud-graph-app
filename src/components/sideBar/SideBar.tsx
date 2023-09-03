import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex gap-24 justify-end pt-12 pb-6 px-20 border-b-4'>
      <NavLink
        className=' font-semibold text-2xl border-l-4 p-1 '
        to={'/contact'}
      >
        Contacts
      </NavLink>
      <NavLink
        className=' font-semibold text-2xl border-l-4 p-1'
        to={'/charts'}
      >
        Charts and Maps
      </NavLink>
    </div>
  );
};

export default SideBar;
