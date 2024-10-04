/*If we list all the natural numbers below 10 that are multiples
of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

1. Find the sum of all the multiples of 3 or 5 below 1000.

2. Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

3. Allow the user to enter the parameters via text box(es)
and alert them to the output
*/

// Find the sum of all the multiples of 3 or 5 below 1000.

  A = 3, B = 5, n = 1000, sum = 0;
  for (let i = 1; i < n; i++) {
      if (i % A == 0 || i % B == 0) {
          sum += i;
      }
  }
  alert("The sum of all the multiples of 3 or 5 below 1000 is " + sum);

  // Create a function to find the sum of all the multiples of a or b below n. (a,b,n) are function parameters

  sumOfNum = (A, B, n) => {
      sum = 0;
      for (let i = 1; i < n; i++) {
          if (i % A == 0 || i % B == 0) {
              sum += i;
          }
      }
      return sum;
  }

  alert("This is function... " + sumOfNum(3, 5, 1000));

  //Allow the user to enter the parameters via text boxes and alert them to the output

  doIt = () => {
      let A = document.getElementById('val1').value;
      let B = document.getElementById('val2').value;
      let n = document.getElementById('val3').value;
      sum = 0;
      for (let i = 1; i < Number(n); i++) {
          if (i % Number(A) == 0 || i % Number(B) == 0) {
              sum += i;
          }
      }
      alert("Results " + sum);
  }

  /* Demonstrate some DOM manipulation in the Exercise.
  For example changing the value of a result div, hiding inputs once the button is clicked...

  */

//   Array
//  1. Create a function which takes parameters a,b,l
// l is a list of integers, Find the sum of all the multiples of a or b in l.

// 2.Create a function which takes parameters a,l
// a is a list of two integers
// l is a list of integers
// Find the sum of all the multiples of a or b in l.

// 3.Create a function which takes parameters a,l
// a is a list of integers
// l is a list of integers
// Find the sum of all the multiples of a or b in l.