// Function -- callstack- uur func dotr duudah;  callback- parametriin orond orj ireh func;  recursion- uuruu uuriiguu dotroo duudah
// function ex5(too) {
//     return too.toString().length;
// }
// function sayHi(num) {
//     if (num === 1) {
//         return num
//     }
//     return num + sayHi(num - 1);
// }
// // rest operator --
// var arr = [5, 6, 7, 8, 9]
// var newArray = [...arr];
// var obj = {
//     a: 56,
//     b: 23
// }
// var jj = {
//     ...obj,
//     c: 213
// }

// //REST PARAMETER--
// function getParams(...arg) {
//     console.log(arg)
// }
//ex-2
function tri(num, num2) {
  return (num * num2) / 2;
}
//ex-3
function countTrue(arr) {
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      counter++;
    }
  }
  return counter;
}
//ex-4
function keyAndVal(obj) {
  var keys = [];
  var vals = [];
  for (key in obj) {
    keys.push(key);
    vals.push(obj[key]);
    return [keys, vals];
  }
}
// ex - 5
function createArr(n, n2) {
  var mass = [];
  for (var i = 1; i <= n2; i++) {
    mass.push(n * i);
  }
  return mass;
}
//ex-6
function totalVolume(...boxes) {
  var sum = 0;
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].length === 3) {
      var volume = 1;
      for (var j = 0; j < boxes[i].length; j++) {
        volume *= boxes[i][j];
      }
      sum += volume;
    }
  }
  return sum;
}
//ex7
function ex7(array) {
  var result = 0;
  for (i = 0; i < array.length; i++) {
    var value = array[i];
    result += value * i;
  }
  return result;
}
//ex8
function ex8(array) {
  array = [2, 7, 4, 9, 6, 1, 6, 1];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && i % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
// for (j = 0; j < array[i].length; j++) {
//   if (array[i] % 2 === 0 && array[i][j] % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// if (array[i] % 2 == 0) {
//   even.push(i);
// } else {
//   odd.push(i);
// }
//   }
// }
// ex9
function addAll(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }
  return total;
}
//ex10
function lastArr(arr) {
  // var arr = ["rsq", "6hi", "g", "rsq6hig"];
  var sum = [];
  var last = "rsq6hig";
  for (var i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
    if (sum === last) {
      return true;
    } else {
      return false
    }
  }
}
// ex11
