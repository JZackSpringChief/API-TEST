fetch("https://mimo.org/user").then((response) => {
  console.log("API Request successfully sent!", response);
});

fetch("https://mimo.org/user", {
  method: "POST",
  body: "name=tester&username=testUser",
}).then((response) => response.json());
