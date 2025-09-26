const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
  ];

  // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}; 
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  };
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
};
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 };

 function displayEmployeesSpecialization() {
    // Filter employees by specialization (case-sensitive)
    const specializationEmployees = employees.filter(employee => employee.specialization === "JavaScript");

    // Map to HTML
    const specializationEmployeesDisplay = specializationEmployees
        .map(employee => `<button onclick="displayEmployeeJohnDoe()">1: John Doe - IT - JavaScript</button>`)
        .join('');

    // Display in the container
    document.getElementById('employeesDetails').innerHTML = specializationEmployeesDisplay || 'No employees found with this specialization';
}


  // Function to display employee John Doe
  function displayEmployeeJohnDoe() {
    const JohnDoeEmployee = employees.filter(employee => employee.name === 'John Doe');
    const JohnDoeEmployeesDisplay = JohnDoeEmployee
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = JohnDoeEmployeesDisplay || 'Employee not found';
}
