  const pc = "MjUxMjY3"; 
  const pc2 = "MTIxMTI1";
  const pc3 = "NDMyMTIy";
  const realpc = "dW5sb2NrZWQuaHRtbA=="; 
  const realpc2 = "dHJ5YWdhaW4uaHRtbA=="

  let input = "";

  function updateDisplay() {
    document.getElementById("display").textContent =
      input.padEnd(6, "_");
  }

  function pressKey(num) {
    if (input.length < 6) {
      input += num;
    }

    updateDisplay();

    if (input.length === 6) {
      checkCode();
    }
  }

  function clearPin() {
    input = "";
    updateDisplay();
  }

  function checkCode() {
    if (input === atob(pc2) || atob(pc3)) {
      window.location.href = atob(realpc2);
    } else if(input === atob(pc)) {
      window.location.href = atob(realpc);
    } else {
      alert("Incorrect code. Try again!");
      clearPin();
    }
  }