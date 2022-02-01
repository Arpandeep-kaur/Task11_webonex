// Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
const employee = {
    name: "xyz",
    email: "xyz@gmail.com",
    age: 32,
    address: "123 Lane suhi nagar",
    phoneNumber: "9387478592",
    gender: "Female",
    isMarried: true,
  };
  
  try {
    throw employee.age / null;
  } 
  catch (error) {
    console.log(employee.age / 2);
  }
  // Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function
const printTimeout = (m, n) => {
    for (let i = m; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 100);
    }
  };
  
  printTimeout(1, 32);