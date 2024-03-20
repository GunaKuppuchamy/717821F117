import logo from './logo.svg';
import './App.css';




import { useState, useEffect } from 'react';
const App = () => {
  const [register, setRegister] = useState([]);
  useEffect(() => {
    fetch('https://20.244.56.144/products/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxprice=1000')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRegister(data);
      });
  }, []);
  return (
    <div>
      
      {register.map((register) => (
       <p>{register.productName} {register.price} {register.rating}{register.discount}{register.availability}</p>
      ))}
    </div>
  );
};
export default App;