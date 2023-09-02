import { useSelector } from 'react-redux';

interface item {
  id: number;
  firstName: string;
  secondName: string;
}

const ContactDisplay = () => {
  const contacts = useSelector((state: any) => state?.contact);
  return (
    <div>
      {contacts ? (
        contacts.map((item: item) => {
          return (
            <div key={item.id}>
              <p>
                <strong>Name:</strong>
                {item.firstName + item.secondName}
              </p>
            </div>
          );
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default ContactDisplay;
