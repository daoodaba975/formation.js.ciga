let funcTwo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Test de Promise");
    }, 1000);
  });
};

let funcOne = async () => {
  console.log("OK!");
  let txt = await funcTwo();
  return txt;
};

funcOne().then((txt) => console.log(txt));
