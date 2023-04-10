import axios from "axios";
import React from "react";
import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://640afe6b81d8a32198d641d9.mockapi.io/orders/");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error in the orders");
        console.error(error);
      }
    })(); 
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My orders</h2>
      </div>
      <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(4)] : (orders)).map((item, index) => (
            <Card key={index}
            loading={isLoading}
            {...item} />
          ))}
        </div>
    </div>
  )
}

export default Orders;