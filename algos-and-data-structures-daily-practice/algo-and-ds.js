//Simple Array Sum - Hackerrank

function simpleArraySum(ar) {
    let sum = 0
    let i = 0
    for(i=0; i<ar.length; i++){
        sum += ar[i]
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
    if (s.length === 0) {return 0}
    let subSet = new Set()
    let i = 0
    let j = 0
    let max = 0
    
    while (j < s.length){
        if(!subSet.has(s[j])){
            subSet.add(s[j])
            j++
        } else {
            subSet.delete(s[i])
            i++
        }
        max = Math.max(max, subSet.size)
    }
    return max
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
    });
    const minSum = sum - Math.max(...arr);
    const maxSum = sum - Math.min(...arr);
    console.log(minSum + " " + maxSum);
 }
 