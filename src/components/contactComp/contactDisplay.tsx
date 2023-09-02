import { useSelector } from 'react-redux';

interface item {
  id: number;
  firstName: string;
  secondName: string;
}

const ContactDisplay = () => {
  const contacts = useSelector((state: any) => state?.contact?.contacts);

  console.log(contacts);
  return (
    <div>
      {contacts?.length !== 0 ? (
        contacts?.map((item: any) => {
          return (
            <div key={item.id}>
              <p>
                <strong>Name:</strong>
                {item?.firstName} {item?.secondName}
              </p>
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
