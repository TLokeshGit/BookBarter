let token = null;
window.onload = () =>{
    token = sessionStorage.getItem("token");
    console.log(token);
    renderRequests();
}

// ...existing code...
async function renderRequests(){
    // ...existing code...
}

function renderRequestData(data){
    // ...existing code...
}
// ...existing code...

function renderRequestData(data){
    const adminRequestDetailsBody = document.getElementById('admin-request-details-body');
    adminRequestDetailsBody.innerHTML = ''; 
    data.forEach(item => {
        const row = document.createElement('tr');
        const columnsToRender = [
            'seq_num',
            'title',
            'borrower_name',
            'lender_name',
            'status'
        ];

        columnsToRender.forEach(column => {
            const td = document.createElement('td');
            td.textContent = item[column];
            row.appendChild(td);

            if (column === 'status') {
                td.textContent = item[column] === 'ShipmentReceived' ? 'Exchange Completed' : item[column];
            } else {
                td.textContent = item[column];
            }
            row.appendChild(td)
        });

        adminRequestDetailsBody.appendChild(row);
    });
}