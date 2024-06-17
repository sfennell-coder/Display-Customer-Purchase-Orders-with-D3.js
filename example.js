// U86364709
function main(){
    // d3 code goes here

    d3.dsv(',','data/purchase_orders').then(function(data){ // access csv file
        var ul = d3.select('#purchaseOrders_storage'); // variable for ul. In order to access to append li's

        ul.selectAll('li')
            .data(data) // get data from csv file
            .enter()
            .append('li') // add li to ul
            .text(d=> {return `Customer ${d.customerName} - Order #${d.orderID}: $${d.purchaseAmount}`})

    })
}