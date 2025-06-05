let employees = [];
let nextId = 1;
const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeTableBody');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    if (employeeId) {
        const employee = employees.find(emp => emp.id === parseInt(employeeId));
        if (employee){
            employee.name = name;
            employee.designation = designation;
        }
    } else {
        employees.push({id: nextId++, name, designation});
    }
    renderTable();
    form.reset();
});

function renderTable(){
    tableBody.innerHTML = '';
    employees.forEach(employee => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = employee.id;
        row.insertCell().textContent = employee.name;
        row.insertCell().textContent = employee.designation;
        const actionCell = row.insertCell();
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editEmployee(employee.id);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEmployee(employee.id);
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

function editEmployee(id){
    const employee = employees.find(emp => emp.id === id);
    if(employee){
        document.getElementById('employeeId').value = employee.id;
        document.getElementById('name').value = employee.name;
        document.getElementById('designation').value = employee.designation;
    }
}

function deleteEmployee(id){
    employees = employees.filter(emp => emp.id !== id);
    renderTable();
}
