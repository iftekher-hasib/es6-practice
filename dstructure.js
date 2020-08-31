// const person = {name: 'jack', Job:'facebook', phone: 0178954123, address:'kochukhet', gfName: 'kulsum', friends: ['sumon', 'rahiq', 'kolim']};


// const {phone, gfName, Job, friends} = person

// // const gfName = person.gfName;
// // const phone = person.phone;

// console.log(gfName, phone, Job);
// console.log(gfName, phone, friends);
// // console.log(gfName, phone, salary);
// console.log(gfName, phone);


const friends = ['salman', 'sumon', 'rakib', 'jamal','sabbir']
const [two, ...allOther] =friends;
console.log(allOther);