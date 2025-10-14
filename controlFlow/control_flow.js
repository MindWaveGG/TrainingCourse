let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

function getMembership(e) {
    let userType = e;
    let userCategory;
  
    switch (userType) {
      case "employee":
        userCategory = "Employee";
        break;
      case "enrolled member":
        userCategory = "Enrolled Member";
        break;
      case "subscriber":
        userCategory = "Subscriber";
        break;
      default:
        userCategory = "Non-Subscriber";
    }
  
    let feedOutput;
  
    if (userCategory === "Employee") {
      feedOutput = `${userCategory}: Dietary Services.`;
    } else if (userCategory === "Enrolled Member") {
      feedOutput = `${userCategory}: Dietary services and one-on-one interaction with a dietician.`;
    } else if (userCategory === "Subscriber") {
      feedOutput = `${userCategory}: Partial access to facilitate Dietary Services.`;
    } else if (userCategory === "Non-Subscriber") {
      feedOutput = "You must enroll or subscribe first to have access to our services.";
    } else if (
      !userCategory ||
      userCategory == null ||
      userCategory === "" ||
      userCategory === 0 ||
      userCategory === false
    ) {
      feedOutput = "You must enroll or subscribe first to have access to our services.";
    }
  
    return feedOutput;
  }
  
  let MyMembership1 = getMembership("employee");
  
  console.log("Your membership status is:", MyMembership1);
  
  let MyMembership2 = getMembership("enrolled member");
  
  console.log("Your membership status is:", MyMembership2);
  
  let MyMembership3 = getMembership("subscriber");
  
  console.log("Your membership status is:", MyMembership3);
  
  let MyMembership4 = getMembership("non-subscriber");
  
  console.log("Your membership status is:", MyMembership4);
  
  let MyMembership5 = getMembership("");
  
  console.log("Your membership status is:", MyMembership5);
  