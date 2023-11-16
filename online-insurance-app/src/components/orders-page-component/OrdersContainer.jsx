import React, { useState } from 'react'
import OrdersTable from './OrdersTable'
import { orderData } from '../../testData/orderDataItems'

export default function OrdersContainer() {
    const [allOrderDetails, setAllOrderDetails] = useState(orderData);

    // useEffect to fetch order from DB

    const TABLE_HEADER = ["Order Id", "Policy List", "Total Amount Paid", "Payment Status", "Provide Feedback"];
    const TABLE_ROWS = allOrderDetails;

  return (
    <div className='container mx-auto p-4'>
        <OrdersTable tableHeadings={TABLE_HEADER} tableRows={TABLE_ROWS}/>
    </div>
  )
}
