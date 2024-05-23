const body = document.querySelector("body");
const headline = document.getElementById("headline");

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;
    const messageDiv = document.createElement("div");
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      module.exports= (data.accessToken);
      window.location.replace("index.html");
      displayCurrentInfo(token);
      if (response.status === 200) {
        messageDiv.innerHTML = `<div class="alert alert-success m-3">Login successful</div>`;
        body.insertBefore(messageDiv, headline);
        setTimeout(() => {
          messageDiv.remove();
        }, 2000);
      } else {
        messageDiv.innerHTML = `<div class="alert alert-danger m-3">Login failed: ${data.message}</div>`;
        body.insertBefore(messageDiv, headline);
        setTimeout(() => {
          messageDiv.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });

