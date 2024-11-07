import items from "./items"

//Create a Table row component

import "./index.css"


const TableRow = ({ item, index }) => {
    const { name, unit_cost, qty } = item;
    const totalCost = (unit_cost * qty).toLocaleString();

    
    
  
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>KSH {unit_cost.toLocaleString()}</td>
        <td>{qty}</td>
        <td>KSH {totalCost}</td>
      </tr>
    );
  };

function ShopKeeperApp(){
    return <div>
        <table>
            <thead>
                <th>no</th>
                <th>Name</th>
                <th>unit_price</th>
                <th>qty</th>
                <th>total</th>

            </thead>
            <tbody>
            {items.map((item, index) => (
            <TableRow key={index} item={item} index={index} />
        ))}
            </tbody>
        </table>
    </div>
}


export default ShopKeeperApp