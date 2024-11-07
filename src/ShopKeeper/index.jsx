import items from "./items"

//Create a Table row component

function ShopKeeperApp(){
    return <div>
        <table>
            <thead>
                <th>no</th>
                <th>Name</th>
                <th>unit_price</th>
                <th>qty</th>
            </thead>
            <tbody>
                {items.map((item)=>{
                    return <td></td>
                })}
            </tbody>
        </table>
    </div>
}


export default ShopKeeperApp