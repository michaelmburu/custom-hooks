import logo from './logo.svg';
import './App.css';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';


// Use DataResource custom hook that takes a resource and appends to the resourceURL
function App() {
  return (
    <>
      <UserInfo userId="123" />
      <ProductInfo productId="1234" />
    </>
  );
}

export default App;
