// U86364709
function main(){
    // d3 code goes here
    let error;
    d3.dsv(',','data/purchase_orders.csv').then(function(data){ // access csv file    
        var ul = d3.select('#purchaseOrders_storage'); // variable for ul. In order to access to append li's 

        ul.selectAll('ul')
            .data(data) // get data from csv file
            .enter()
            .append('li') // add li to ul
            .text(d=> {return (`Customer ${d.customerName} - Order #${d.orderId}: $${d.purchaseAmount}`)});
    }).catch(()=>alert('Sorry! There must be a error retrieving the data!'), error);
}