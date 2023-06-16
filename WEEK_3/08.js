// 1
const a = 1;
const outer = () => {
  const inner = () => {
    console.log(a);
    const a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);
