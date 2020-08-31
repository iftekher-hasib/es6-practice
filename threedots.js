const ages = [13,14,17]
const ages2 = [15,33,56]
const allAges = [...ages, ...ages2];
const maximum = Math.max(...allAges)
console.log(maximum);
