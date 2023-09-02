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
    <div>
      {' '}
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          handleEdit(item?.id);
        }}
      >
        <input
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
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Second Name'
          value={editedData.secondName}
        />
        <input
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='status'
          type='radio'
          value={editedData.status}
        />
        <label>Active</label>
        <input
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='status'
          type='radio'
          value={editedData.status}
        />
        <label>Not active</label>
        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
