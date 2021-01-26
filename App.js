// // With Vanila JS
// let value_1 = document.getElementById("value1").value;
// let value_2 = document.getElementById("value2").value;
// let Decimal = document.getElementById("Decimal");
// let Binary = document.getElementById("Binary");
// let Octal = document.getElementById("Octal");
// let Hexadecimal = document.getElementById("Hexadecimal");
// const btn_submit = document.getElementById("btn-submit");

// btn_submit.addEventListener("click", function () {
//   RandomizePColors();
//   Calculate();
// });

// document.getElementById("btn-input-randamize").addEventListener('Click', function () {
//     value_1 = Math.floor(Math.random()*1000000);
//     value_2= Math.floor(Math.random()*1000000);

//     document.getElementById("value1").innerHTML = value_1;
//     document.getElementById("value2").value = value_2;
// });
// function RandomizePColors() {
//     document
//         .getElementById("Container")
//         .getElementsByTagName("P")[0].style.backgroundColor = getBackgoundColor();
//     document
//         .getElementById("Container")
//         .getElementsByTagName("P")[1].style.backgroundColor = getBackgoundColor();
//     document
//         .getElementById("Container")
//         .getElementsByTagName("P")[2].style.backgroundColor = getBackgoundColor();
//     document
//         .getElementById("Container")
//         .getElementsByTagName("P")[3].style.backgroundColor = getBackgoundColor();
// }

// function getBackgoundColor() {
//   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//   let backgroundColor = "#";
//   function randomNumber(arr) {
//     return Math.floor(Math.random() * arr.length);
//   }
//   for (let i = 0; i < 6; i++) {
//     backgroundColor += hex[randomNumber(hex)];
//     if(backgroundColor === "#000000"){
// backgroundColor ="#FDFEFE";
//     }
//   }
//   return backgroundColor;
// }

// function Calculate() {
//         Decimal.innerHTML = "000000000";
//         Binary.textContent = toString(value_1 * value_2);
//         Octal.innerHTML = "1234567890";
//         Hexadecimal.textContent = "1234567890";
// }

// Using Jquery

$(document).ready(() => {
  // Functions
  // 1.Sum
  function Sum() {
    let sum = parseInt($("#value1").val()) + parseInt($("#value2").val());


    // 1.1 To <p>
    $("#Decimal").empty().append(sum);
    $("#Binary").empty().append(getBinary(sum));
    $("#Octal").empty().append(getOctal(sum));
    $("#Hexadecimal").empty().append(getHex(sum));

    // 1.2 to <input>
    $("#Decimal_1").empty().val(sum);
    $("#Binary_1").empty().val(getBinary(sum));
    $("#Octal_1").empty().val(getOctal(sum));
    $("#Hexadecimal_1").empty().val(getHex(sum));
  }
  // 2. RandomizePColors
  function RandomizePColors() {
    $("#Binary").css("background-color", getBackgoundColor());
    $("#Octal").css("background-color", getBackgoundColor());
    $("#Hexadecimal").css("background-color", getBackgoundColor());
    $("#Decimal").css("background-color", getBackgoundColor());
  }
  // 3. getBackgoundColor()
  function getBackgoundColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let backgroundColor = "#";
    function randomNumber(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    for (let i = 0; i < 6; i++) {
      backgroundColor += hex[randomNumber(hex)];
      if (backgroundColor === "#000000") {
        backgroundColor = "#FDFEFE";
      }
    }
    return backgroundColor;
  }

  //4. GetRandomValue()
  function GetRandomValue() {
    return Math.floor(Math.random() * 1000);
  }

  // 5. getBinary()
  function getBinary(num) {
    let binary = "";
    while (num > 0) {
      let rem = num % 2;
      binary = binary.concat(rem.toString());
      num = (num / 2) - rem;
    };
    // return binary.split("").reverse().join("");
    return "Under Costruction";

  }

  // getOctal(num)

  function getOctal(num) {
    let octal = "";
    while (num > 8) {
      let rem = (num % 8);
      octal = octal.concat(rem.toString());
      num = (num / 16) - rem;
    }
    // return octal.split("").reverse().join("");
    return "Under Costruction";
  }

  // GetHex()
  function getHex(num) {
    let hex = "";
    while (num > 16) {
      let rem = (num % 16);
      switch (rem) {
        case 15:
          hex = hex.concat("F");
          break;
        case 14:
          hex = hex.concat("E");
          break;
        case 13:
          hex = hex.concat("D");
          break;
        case 12:
          hex = hex.concat("C");
          break;
        case 11:
          hex = hex.concat("B");
          break;
        case 10:
          hex = hex.concat("A");
          break;
        default:
          hex = hex.concat(rem.toString());
          break;
      }
      num = (num / 16 )- rem;
    }
    // return hex.split("").reverse().join("");
    return "Under Costruction";

  }

  $("#btn-submit").click(function (e) {
    e.preventDefault();
    Sum();
    RandomizePColors();
  });

  $("#btn-input-randamize").click(function (e) {
    e.preventDefault();
    $("#value1").val(GetRandomValue());
    $("#value2").val(GetRandomValue());
    RandomizePColors();
  });

  $("#clear").click(function (e) {
    e.preventDefault();
    $("#value1").val("");
    $("#value2").val("");

    $("#Binary").empty();
    $("#Octal").empty();
    $("#Hexadecimal").empty();
    $("#Decimal").empty();

    $("#Binary_1").val("");
    $("#Octal_1").val("");
    $("#Hexadecimal_1").val("");
    $("#Decimal_1").val("");
  });
});
