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

$(document).ready(function () {
    // Functions
    // 1.Sum
    function Sum() {
      let sum1 = parseInt($("#value1").val()) + parseInt($("#value2").val());
      let sum = sum1.toString();
  
      //  To <p>
      $("#Decimal").empty().append(Number.parseInt(sum, 10));
      $("#Binary").empty().append(Number.parseInt(sum, 2));
      $("#Octal").empty().append(Number.parseInt(sum, 8));
      $("#Hexadecimal").empty().append(Number.parseInt(sum, 16));
  
      // to <input>
      $("#Decimal_1").empty().val(Number.parseInt(sum, 10));
      $("#Binary_1").empty().val(Number.parseInt(sum, 2));
      $("#Octal_1").empty().val(Number.parseInt(sum, 8));
      $("#Hexadecimal_1").empty().val(Number.parseInt(sum, 16));
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
      return Math.floor(Math.random() * 10000);
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
      $("#value1").empty();
      $("#value2").empty();
      
      $("#Binary").empty();
      $("#Octal").empty();
      $("#Hexadecimal").empty();
      $("#Decimal").empty();
  
      $("#Binary_1").value("");
      $("#Octal_1").value("");
      $("#Hexadecimal_1").value("");
      $("#Decimal_1").value("");
    });
  });