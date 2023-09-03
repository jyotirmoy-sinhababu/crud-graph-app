import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../assest/slice/ContactSlice';
import Modal from '../../modal/Modal';
import EditContactForm from '../formComp/EditContactForm';

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
    <div>
      {contacts?.length !== 0 ? (
        contacts?.map((item: any) => {
          return (
            <div key={item.id}>
              <div>
                <p>
                  <strong>Name:</strong>
                  {item?.firstName} {item?.secondName}
                </p>
                <p>
                  <strong>Statue:</strong>
                  {item?.status == 'on' ? 'active' : 'not-active'}
                </p>
              </div>
              <div>
                <button
                  type='button'
                  onClick={() => {
                    handleModal();
                  }}
                >
                  Edit
                </button>
                <button
                  type='button'
                  onClick={(id) => {
                    controlDelete(item.id);
                  }}
                >
                  Delete
                </button>
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
