import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../assest/slice/ContactSlice';
import Modal from '../../modal/Modal';
import EditContactForm from '../formComp/EditContactForm';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
interface item {
  id: number;
  firstName: string;
  secondName: string;
}

const ContactDisplay = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  const contacts = useSelector((state: any) => state?.contact?.contacts);

  const dispatch = useDispatch();

  console.log(contacts);

  const controlDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleModal = () => {
    if (!isEditOpen) {
      setIsEditOpen(true);
    }
  };

  const closeModal = () => {
    if (isEditOpen) {
      setIsEditOpen(false);
    }
  };

  return (
    <div className='lg:p-20 p-10'>
      {contacts?.length !== 0 ? (
        contacts?.map((item: any) => {
          return (
            <div
              className='shadow  h-fit p-3 rounded border-borderGrey flex flex-col gap-3 w-[215px]'
              key={item.id}
            >
              <div className='flex justify-between items-center'>
                <div
                  className={`${
                    item?.status == 'on' ? 'bg-green-500' : 'bg-borderGrey'
                  } w-3 h-3 rounded-full  `}
                ></div>
                <div className='flex justify-end items-center gap-1 px-2 '>
                  <button
                    type='button'
                    onClick={() => {
                      handleModal();
                    }}
                  >
                    <CiEdit className='text-lg text-sky' />
                  </button>
                  <button
                    type='button'
                    onClick={(id) => {
                      controlDelete(item.id);
                    }}
                  >
                    <MdDeleteOutline className='text-xl text-rose-500' />
                  </button>
                </div>
              </div>
              <div>
                <p className='font-bold'>
                  <strong className='text-blackSeventy font-medium'>
                    Name:
                  </strong>
                  <span className='capitalize'>
                    {' '}
                    {item?.firstName} {item?.secondName}
                  </span>
                </p>
              </div>

              <div>
                <Modal isOpen={isEditOpen}>
                  <EditContactForm item={item} closeModal={closeModal} />
                </Modal>
              </div>
            </div>
          );
        })
      ) : (
        <div className='flex justify-center items-center mt-24 w-full max-w-[580px]  min-h-[380px] p-4 relative border border-borderGrey mx-auto rounded-lg'>
          <p className='text-4xl font-semibold text-grey-600'>No data found</p>
        </div>
      )}
    </div>
  );
};

export default ContactDisplay;
