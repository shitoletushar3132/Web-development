const btn = document.querySelector("#btn");
const body = document.querySelector("body");

btn.addEventListener("click", async () => {
  const load = document.createElement("h2");
  load.innerText = "loading data";

  body.appendChild(load);

  try {
    let response = await fetch("http://localhost:8080");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json(); // Assuming the response is JSON
    setTimeout(() => {
      load.innerText = data;
    }, 2000);
  } catch (error) {
    console.error("Error fetching data: ", error);
    load.innerText = "Failed to load data";
  }
});
