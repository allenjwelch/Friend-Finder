let friendsData = [
  {
    name: "allen",
    email: 'allen@gmail.com',
    photo: "image.png",
    surveyData: [1, 1, 1, 1, 1]
  },
  {
    name: "susan",
    email: 'susan@gmail.com',
    photo: "image.png",
    surveyData: [1, 2, 3, 4, 5]
  },
  {
    name: "eddie",
    email: 'eddie@gmail.com',
    photo: "image.png",
    surveyData: [1, 2, 3, 4, 5]
  },
];


// Friend Finder Logic =========================================
let newUser = friendsData[friendsData.length -1].surveyData; 
console.log(newUser); 
let matchTotals = [];
let bestMatch = ''; 

for (let i = 0; i < friendsData.length - 1; i++) {
  let match =[];
  let totals = 0;
  for (let x =0; x < 5; x++) { 
    match.push(Math.abs(newUser[x] - friendsData[i].surveyData[x])); 
  }

  match.forEach(score => {
    totals += score; 
  })

  let tempArr = []; 
  tempArr.push(i, totals); 
  matchTotals.push(tempArr); 

  bestMatch = matchTotals.sort(function(a, b){
    return b[1] > a[1] ? -1 : 1; 
  });
  
  console.log(bestMatch[0][0]); 
  let bestMatchIndex = parseFloat(bestMatch[0][0]);
  console.log(friendsData[bestMatchIndex].name); 
}





module.exports = friendsData; 