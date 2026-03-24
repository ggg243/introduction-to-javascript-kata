import { useState } from 'react';
import CustomerForm from './CustomerForm';
import ShowCustomer from './CustomerList';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  return (
    <>
      <CustomerForm setCustomers={setCustomers} />
      <ShowCustomer customers={customers} />
    </>
  )
};

export default CustomerManagement;
