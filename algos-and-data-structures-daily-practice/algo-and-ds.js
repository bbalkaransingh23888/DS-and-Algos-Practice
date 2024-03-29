//Simple Array Sum - Hackerrank

function simpleArraySum(ar) {
    let sum = 0 // set sum to 0
    let i = 0
    for(i=0; i<ar.length; i++){
        sum += ar[i]
        // add all numbers of array
    } return sum
}
simpleArraySum(1,2,3)

//Compare the Triplets - Hackerrank

function compareTriplets(a, b) {
    let score = [0,0];
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            score[0]++;
        } else if (a[i] < b[i]) {
            score[1]++;
        }
    }
    return score
}

//Compare the Triplets - Hackerrank
function aVeryBigSum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum
}

//Diagonal Differnece - Hackerrank
     //My Solution (technically works, but took too long for Hackerrank -__-)
    //  function diagonalDifference(arr) {
    //      for(let i = 0; i < arr.length; i++){
    //          for(let j = 0; j < arr.length; j++){
    //              if(i === j){
    //                  let slash1 = 0
    //                  slash1 += arr[i][j]
    //              }
    //              if(i+j === arr.length-1){
    //                  let slash2 = 0
    //                  slash2 += arr[i][j]
    //              }
    //          }
    //      }
    //      return Math.abs(slash1 - slash2)
    //  }



     //Actual Solution
function diagonalDifference(arr) {
    let n = arr.length
    let diag1 = 0;
    let diag2 = 0;
    for(let i = 0; i<arr.length; i++){
         //let diag1 = 0
         diag1 += arr[i][i];
         //let diag2 = 0
         diag2 += arr[n -1 -i][i];
       }
    return Math.abs(diag1 - diag2)
 }

 //PlusMinus - Hackerrank 
 function plusMinus(arr) {
    const {pos, neg, zed} = arr.reduce((acc, value) =>{
        if(value>0){
            acc.pos++;
        }
        if(value<0){
            acc.neg++;
        }
        if(value===0){
            acc.zed++;
        }
        return acc;
    }, {
        pos: 0,
        neg: 0,
        zed: 0
    }); 
   console.log(pos/arr.length)
   console.log(neg/arr.length)
   console.log(zed/arr.length)
 }

 //Staircase - Hackerrank
 
 function staircase(n) {
    for(let i=1;i<=n;i++){
        let h = i;
        for(let j=1;j<=n-h;j++){
            process.stdout.write(' ');
        }
        for(let j=1;j<=h;j++){
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
    
    }

//Add Two Numbers - Leetcode

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let node = head
    let carryOver = 0
   
    while(l1 || l2){
       let l1Val = l1 ? l1.val : 0
       let l2Val = l2 ? l2.val : 0
       
       let twoSum = l1Val + l2Val + carryOver
       carryOver = 0
       let newVal = twoSum
       
       if(twoSum >= 10){
           newVal = twoSum % 10
           carryOver += 1
       }
       
       node.next = new ListNode(newVal)
       node = node.next
       
       if(l1){
           l1 = l1.next
       }
    
       if(l2){
           l2 = l2.next
       }
   } if(carryOver === 1){
       node.next = new ListNode(carryOver)
   }
    return head.next
};

// Longest SubString w/o Repeating Characters - Leetcode

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {return 0} // if there is no string, return 0
    let subSet = new Set()
    let i = 0
    let j = 0
    let max = 0
    
    while (j < s.length){
        //while j is less than the length of the array, 
        //or while we are still going through the array
        if(!subSet.has(s[j])){
            subSet.add(s[j])
            j++
            //if the subSet does not have the letter
            //represented by the j element of the s string,
            //add it to the subset and check the next one
        } else {
            subSet.delete(s[i])
            i++
            //if the subSet does have the letter, move on to the next
            //letter/element of the string without adding it to the subset
        }
        max = Math.max(max, subSet.size)
        //check the size of the subset using the Math.max method, which finds the
        //max number of its contents
    }
    return max
    //return the max, which should be the number of elements/letters in the subSet
};

//Longest Palindromic Substring - Leetcode (Not Complete, but passes initial example test case)

var longestPalindrome = function(s) {
    if(s.length < 1 || s === null) {return ''};
    
    let max = '';
    
    for(let i = 0;i<s.length;i++){
        let odd = expand(s, i, i);
        let even = expand(s, i-1, i);
        
        if (odd.length > max.length){
            max = odd;
        }
        
        if (even.length > max.length){
            max = even
        }
    }
    return max
    
};

function expand(s, left, right){
    let i = 0;
    while(s[left-i] && s[left-1] === s[right+i]){
        i++;
    }
    i--;
    return s.slice(left-i, right+i+i);
};

// 3Sum - Leetcode (not complete, took too long to test edgecases)

var threeSum = function(nums) {
    let sumArr = [];
    let newSumArr = [];
    nums.sort((a,b)=> a-b)
    let l = 0;
     let r = nums.length - 1
     
     for(let i=0;i<nums.length;i++){
         if(i>0 && nums[i] === nums[i-1]) continue
         
         l = i+1
         r = nums.length - 1
         let targetSum = 0;
         
         while(l+r){
             targetSum=nums[i]+nums[l]+nums[r];
             if(targetSum===0){
                 sumArr.push([nums[i], nums[l], nums[r]]);
                 l++;
                 r--;
                 
                 while(l<r && nums[l]===nums[l-1])l++;
                 while(l<r && nums[r]===nums[r+1])r--;
             }else if (targetSum>0){
                 r--
             }else{
                 l++
             }
         }
     }
     return sumArr
 };

 // MiniMaxSum - Hackerrank

 function miniMaxSum(arr) {
    let sum = arr.reduce((a,b) => {
        return a + b;
    }); // This adds up all numbers in a given array
    const minSum = sum - Math.max(...arr); // Iterates over 
    // the array to find the highest number of array, then
    // subtracts that number from the sum to get the minSum
    const maxSum = sum - Math.min(...arr); // Iterates over
    // the array to find the lowest number of array, then
    // subtracts that number from the sum to get the maxSum
    console.log(minSum + " " + maxSum);
 }
 
 //Birthday Cake Candles - Hackerrank
 function birthdayCakeCandles(candles) {
    let howMany = 0;
    let highNbr = 0;
    // create variable to represent the tallest candle (highNbr)
    // create variable to represent how many instances of tallest candle (howMany)
    candles.forEach(item => {
        if(i>highNbr){
            highNbr = i;
            howMany = 1;
            //for each element in array, if an element is higher than the current highNbr,
            //set highNbr equal to item, set howMany equal to 1
        }
        else if(i === highNbr){
            howMany++;
            //if any array element is equal to the highNbr, increment howMany
        }
    });
    return howMany;
    //return howMany to finish problem;
}

//Time Conversion - Hackerrank

function timeConversion(s) {
    const timeArr = s.slice(0,8).split(':');
    //split the string, turn it into array to isolate AM/PM
    timeArr[0] = (s.indexOf('PM') > -1) ?
             (timeArr[0] == 12 ? '12' : Number(timeArr[0]) + 12) :
             (timeArr[0] == 12 ? '00' : timeArr[0]);

    //This is saying that if PM exists in the array/split string,
    //add 12 to the hour number to put it into military time. Else,
    //if it is AM, it should give the number as stated, except if
    //it says 12 in which case the hour should say 00. 
             
     return timeArr.join(':');
 }
 
 //Alternating Characters - Hackerrank
 function alternatingCharacters(s) {
    let delLetters = 0; // This initializes a variable to represent
    //the repeated/deleted letters to be incremented and returned
    //once the code runs
    for (let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            delLetters++;
            //if the current letter is the same as the next letter
            //increment delLetters variable to represent the deleted letters.
        }else {
            continue;
            //if the letter is different from the next letter, continue
            //running the code
        }
    }return delLetters;
    //return the delLetters counter to get the desired output
}

//Beautiful Binary String - Hackerrank
function beautifulBinaryString(b) {
    let str = b.split("");
    //should turn the input string into an array
    let count = 0;
    //initializes a variable to represent the amount of times
    //the '010' substring is changed to '011'
    
    for(let i = 0;i<str.length;i++){
       if(str[i] === 0 && str[i+1] === 1 && str[i+2] === 0){
           count++;
           str[i+2]+=1;
           //For the length of the string, compare a group of three 
           //elements. If they are '0', '1', '0' in that order, change 
           //the second '0' to a '1' and increment count.
       }
   } return count;
   //return the amount of times the '010' substring had to be changed
}
//Note - this solution works for 4/12 test cases...and solutions
//that use similar logic in different languages work for all test cases
//not sure what the problem is

// Two Sum - Leetcode
var twoSum = function(nums, target) {
    let addUp = [];
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]===target){
                addUp.push(i);
                addUp.push(j);
            }
        }
    }return addUp
};
// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3],6));
// console.log(twoSum([3,2,1],7));

//Reverse Integer - Leetcode (most test cases passed, but submission not accepted)

var reverse = function(x) {
    let min = Math.pow(-2^31); //calculates minimum amount and sets it to min
    let max = Math.pow(2^32)-1; //calculates maximum amount and sets it to max
    let ifNeg = x < 0 ? true : false; //checks if x is a positive or negative number
    
    //if x is a negative number
    if(ifNeg){
        x = -x
    }
    let rev = 0
    //this reverses the digits that make up x by dividing the number repeatedly by 10
    while(x > 0){
        rev = rev*10+x%10
        x = parseInt(x/10)
    }
    //if a number is outside the desired range, return 0 
    if(rev>=max || rev<=min){
        return 0;
    }
    //if the number is negative, make it negative per ifNeg
    return ifNeg ? -rev : rev
};

reverse(123);
reverse(-123);
reverse(120);
reverse(0);