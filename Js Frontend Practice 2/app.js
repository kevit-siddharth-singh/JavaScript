// Axios Practice
API_URL = "https://dummyapi.io/data/v1/user/"; //Base URL
appId = "667a4d799e133752142431fd";

// Note: Get USer Function
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

function updateUserData(id) {
  //   console.log(`${API_URL}${id}`);
  axios
    .put(
      `${API_URL}${id}`,
      {
        firstName: "Sid",
        lastName: "Singh",
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

// updateUserData("60d0fe4f5311236168a109ca");

// Note: Create Function

function createFunction(id) {
  axios
    .post(
      `${API_URL}create`,
      {
        id: id,
        firstName: "Sid",
        lastName: "Singh",
        email: "bossbay@mail.com",
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

// createFunction("60d0fe4f5311236168a109d6");

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
// deleteFunction("60d0fe4f5311236168a109ca");


