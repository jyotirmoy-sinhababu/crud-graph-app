import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../assest/slice/ContactSlice';

interface item {
  id: number;
  firstName: string;
  secondName: string;
}

const ContactDisplay = () => {
  const contacts = useSelector((state: any) => state?.contact?.contacts);

  const dispatch = useDispatch();

  console.log(contacts);

  const controlDelete = (id: number) => {
    dispatch(deleteContact(id));
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
                <button>Edit</button>
                <button
                  type='button'
                  onClick={(id) => {
                    controlDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>hi</p>
      )}
    </div>
  );
};

export default ContactDisplay;
