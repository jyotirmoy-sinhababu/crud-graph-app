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
      <div className='flex justify-between pe-20 px-20'>
        <div>
          <p className='text-xl font-semibold text-grey-600'>Contact Page</p>
        </div>
        <div>
          <button
            className='flex justify-around items-center gap-4 text-xl font-semibold '
            type='button'
            onClick={handleModal}
          >
            Create Contacts <GrAdd />{' '}
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
