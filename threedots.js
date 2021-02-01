const ages=[15,16,17,18,19,20];
const ages1=[20,19,15,27,25];
const ages2=[35,40,55,75]

const result=ages.concat(ages1).concat(ages2);
const result1=[...ages,...ages1,...ages2];

// console.log(result);
// console.log(result1);

 const business=450;
 const webDeveloper=500;
 const student=50;

 const maximum=Math.max(business,webDeveloper,student);
//  console.log(maximum);

const liveStream=[3000,5874,9879,7463,8762,3873]
const total=Math.max(...liveStream);
// console.log(total);

