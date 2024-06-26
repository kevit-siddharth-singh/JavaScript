// Axios Practice
const API_URL = "https://dummyapi.io/data/v1/user/"; //Base URL
const appId = "667a4d799e133752142431fd";
let loadedData = null;
// ! User List
// Sid Loading and Showing  Fetched  in the table
showUserList();
function showUserList() {
  //   console.log(`${API_URL}${id}`);
  var tableBody = document.getElementById("table-body");

  axios
    .get(`${API_URL}?page=1&limit=6`, {
      headers: { "app-id": appId },
    })
    .then((result) => {
      // console.log(result.data);
      console.log(result.data.data);
      loadedData = result.data.data;

      result.data.data.forEach((element) => {
        var tablerow = document.createElement("tr");
        tablerow.classList.add("rowdata");
        id = element.id;

        tablerow.innerHTML = `
            <td onclick="updateUserDisplay('${element.id}')"><img src=${
          element.picture
        } alt="" width="50" height="50"/> </td>
            <td onclick="updateUserDisplay('${
              element.id
            }')">${element.firstName.slice(0, 9)}</td>
            <td onclick="updateUserDisplay('${element.id}')">${
          element.lastName
        }</td>
            <td onclick="deleteFunction('${
              element.id
            }')"><button><i class="fa-solid fa-trash-can 2xl"></i></button></td>
            `;
        tableBody.append(tablerow);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Note: Get User Function
const getUserData = (id) => {
  //   console.log(`${API_URL}${id}`);
  axios
    .get(`${API_URL}${id}`, {
      headers: { "app-id": appId },
    })
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// getUserData("60d0fe4f5311236168a109fa");

// Note: Update Function

function updateUserData(id, firstname, lastname, avatar) {
  //   console.log(`${API_URL}${id}`);
  axios
    .put(
      `${API_URL}${id}`,
      {
        firstName: firstname,
        lastName: lastname,
        picture: avatar,
      },
      {
        headers: { "app-id": appId },
      }
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // Refresh the page
}

// updateUserData("","Kent1234","Brewer123");

// Note: Create Function

function createFunction(firstName, lastname, picture,email) {
  axios
    .post(
      `${API_URL}create`,
      {
        firstName: firstName,
        lastName: lastname,
        picture: picture,
        email: email,
      },
      {
        headers: { "app-id": appId },
      }
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// createFunction();

// Note : Delete Function

function deleteFunction(id) {
  axios
    .delete(
      `${API_URL}${id}`,

      {
        headers: { "app-id": appId },
      }
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// deleteFunction("667a72cc2a62d980400e564b");

// Sid : Displaying Update User section

function updateUserDisplay(id) {
  var updateForm = document.getElementById("update-user");
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var avatar = document.getElementById("avatar");
  var userId = document.getElementById("userId");
  var addUserForm = document.getElementById("add-user");


  if(addUserForm.style.display == "block") {
    addUserForm.style.display='none';
    loadedData.forEach((data) => {
      if (data.id === id) {
        firstname.value = data.firstName;
        lastname.value = data.lastName;
        avatar.value = data.picture;
        userId.value = id;
      }
    });
  
    if (updateForm.style.display == "block") {
      updateForm.style.display = "none";
      userId.value = "";
    } else {
      updateForm.style.display = "block";
    }
  }
  else {
    loadedData.forEach((data) => {
      if (data.id === id) {
        firstname.value = data.firstName;
        lastname.value = data.lastName;
        avatar.value = data.picture;
        userId.value = id;
      }
    });
  
    if (updateForm.style.display == "block") {
      updateForm.style.display = "none";
      userId.value = "";
    } else {
      updateForm.style.display = "block";
    }
  }

 












}

// Note: Update the user when Submit
function updateSubmit() {
  let userId = document.getElementById("userId");
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let avatar = document.getElementById("avatar");

  updateUserData(userId.value, firstname.value, lastname.value, avatar.value);
  // if (document.querySelectorA(){
  //   const tr = document.querySelectorAll(".rowdata");
  //   const tableBody = document.getElementById("table-body");
  //   tableBody.removeChild(tr);
  //   showUserList();

  // }
}

//Sid : Add User Logic

function showAddUser() {
  var toogleAdd = document.getElementById("toogle-add");
  var addUserForm = document.getElementById("add-user");
  var updateUserForm = document.getElementById("update-user");

  if (updateUserForm.style.display == "block") {
      updateUserForm.style.display = "none"
      if (toogleAdd.value == "0") {
        addUserForm.style.display = "block";
        toogleAdd.value = "1";
      } else if (toogleAdd.value == "1") {
        addUserForm.style.display = "none";
        toogleAdd.value = "0";
      }
     
  }else{
    if (toogleAdd.value == "0") {
      addUserForm.style.display = "block";
      toogleAdd.value = "1";
    } else if (toogleAdd.value == "1") {
      addUserForm.style.display = "none";
      toogleAdd.value = "0";
    }
  }


 
}

function addUser() {
  var addfirstname = document.getElementById("add-firstname");
  var addlastname = document.getElementById("add-lastname");
  var addavatar = document.getElementById("add-avatar");
  var addemail = document.getElementById("add-email");
  
  //! For Image .jpg Extension Validation 
  var pattern = /\.jpg$/i;  


if (addfirstname.value == "" && addlastname.value == "" && addemail.value=='' && addavatar.value=='') {
  alert('Please Fill All Details');
}
else if (addfirstname.value==''){
  alert('Please Fill First Name');

}
else if (addlastname.value==''){
  alert('Please Fill Last Name');

}
else if (addemail.value==''){
  alert('Please provide valid email ');

}
else if (!pattern.test(addavatar.value)){
  alert('Please enter valid image URL');

}
else{
  createFunction(addfirstname.value, addlastname.value,addavatar.value,addemail.value);

}



}

// TODO : Form Validation
// TODO : Delete Operation -- Done
// TODO : Create Validation
// TODO : Form Placement
// TODO : Add user Button dynamic behavior
