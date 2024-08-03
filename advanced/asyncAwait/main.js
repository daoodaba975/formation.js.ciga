async function fetchData() {
  try {
    let response = await fetch("https://galsen.dev");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error);
  }
}

fetchData();
