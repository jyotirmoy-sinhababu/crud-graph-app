import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../assest/slice/ContactSlice';

const EditContactForm = ({ closeModal, item }: any) => {
  const [editedData, setEditedData] = useState<any>(item);

  const contacts = useSelector((state: any) => state?.contact?.contacts);
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    dispatch(
      addContact([
        ...contacts?.filter((contact: { id: number }) => contact?.id !== id),
        editedData,
      ])
    );
  };

  return (
    <div className='w-full max-w-[380px] p-4 relative border bg-white border-borderGrey mx-auto rounded-lg'>
      {' '}
      <form
        className='flex flex-col gap-4 pb-3 pt-5 px-1 '
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleEdit(item?.id);
        }}
      >
        <input
          className='border border-borderGrey rounded h-10 pl-1'
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='firstName'
          type='text'
          required
          placeholder='First Name'
          value={editedData.firstName}
        />
        <input
          className='border border-borderGrey rounded h-10 pl-1'
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Second Name'
          value={editedData.secondName}
        />

        <div className='flex items-center gap-1'>
          {' '}
          <input
            className='border border-borderGrey rounded h-4 '
            onChange={(e) => {
              setEditedData({ ...editedData, [e.target.name]: e.target.value });
            }}
            name='status'
            type='radio'
            value={editedData.status}
          />
          <label>Active</label>
        </div>
        <div className='flex items-center gap-1'>
          {' '}
          <input
            className='border border-borderGrey rounded h-4 '
            onChange={(e) => {
              setEditedData({ ...editedData, [e.target.name]: e.target.value });
            }}
            name='status'
            type='radio'
            value={editedData.status}
          />
          <label>Not active</label>
        </div>

        <div className='flex'>
          <button
            className='ml-auto text-sky-900 font-bold mt-4 block'
            type='submit'
          >
            Save
          </button>
          <button
            className='ml-auto text-sky-900 font-bold mt-4 block'
            type='button'
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
