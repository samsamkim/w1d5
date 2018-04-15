

var check = function(accountNumber){
  var luhnNumber = [];
  var string = accountNumber.toString();

// for all the numbers in the account number starting from the right

  for(var i = string.length - 2; i >= 0; i--){
    var indexlength = string.length - 1;

// if the number is not the

    if ( ((indexlength % 2 === 0) && (i % 2 !== 0)) || ((indexlength % 2 !== 0) && (i % 2 === 0)) ){
      if(Number(string[i]) < 5){
        luhnNumber.push(Number(string[i]) * 2);
      }else if(Number(string[i]) > 5){
        luhnNumber.push(Number(string[i]) * 2 - 9)
      }
    }else{
      luhnNumber.push(Number(string[i]));
    }



  }

// checking if the sum of the above times 9 module 10 is equal to the check number (string[string.length])

  return ((luhnNumber.reduce((a, b) => a + b, 0) * 9) % 10) == (string[string.length - 1]);


}

console.log(check(79927398713));




  //  if(i % 2 === 0){
  //    if(Number(string[i]) < 5){
  //     luhnNumber.push(Number(string[i]) * 2);
  //    }else if(Number(string[i]) > 5){
  //      string[i] = (string[i] * 2) - 9;
  //      luhnNumber.push(Number(string[i]) * 2 - 9);
  //    }
  //  }
  //  else{
  //   luhnNumber.push(string[i]);
  //  }
  // }