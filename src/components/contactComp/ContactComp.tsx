import { useState } from 'react';

import { GrAdd } from 'react-icons/gr';
import Modal from '../../modal/Modal';
import CreateContactForm from '../formComp/CreateContactForm';

const ContactComp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className='pt-6'>
      <div className='flex justify-between lg:pe-20 lg:px-20 px-8'>
        <div>
          <p className='lg:text-xl text-base font-semibold text-grey-600'>
            Contact Page
          </p>
        </div>
        <div>
          <button
            className='flex justify-around items-center gap-4 lg:text-xl text-base font-semibold '
            type='button'
            onClick={handleModal}
          >
            <span className='lg:inline-block hidden'> Create Contacts </span>{' '}
            <GrAdd className='lg:text-lg text-xl' />{' '}
          </button>
        </div>
      </div>

      <div>
        <Modal isOpen={isOpen}>
          <CreateContactForm closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default ContactComp;
