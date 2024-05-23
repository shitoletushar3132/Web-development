const body = document.querySelector("body");
const headline = document.getElementById("headline");

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;
    const username = document.getElementById("InputText").value;
    const messageDiv = document.createElement("div");
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const user = await response.json();

      if (response.status === 201) {
        console.log("create successful:", user);
        messageDiv.innerHTML = `<div class="alert alert-success m-3">Create Account Successfully</div>`;
        body.insertBefore(messageDiv, headline);
        setTimeout(() => {
          messageDiv.remove();
          window.location.replace("index.html");
        }, 2000);
      } else {
        console.log(user);
        messageDiv.innerHTML = `<div class="alert alert-danger m-3">${user.message} </div>`;
        body.insertBefore(messageDiv, headline);
        setTimeout(() => {
          messageDiv.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });
