let computerNum = randomNum();

const randomNum = () => {
  let numbers = {};
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.join("");
};
