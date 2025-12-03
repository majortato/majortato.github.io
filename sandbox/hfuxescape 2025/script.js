// --- PIN PAD LOGIC ---
const dots = document.querySelectorAll('.dot');
let code = '';
  const pc = "MjUxMjY3"; 
  const pc2 = "MTIxMTI1";
  const pc3 = "NDMyMTIy";
  const pc4 = "NDMyMTAy";
  const realpc = "dW5sb2NrZWQuaHRtbA=="; 
  const realpc2 = "dHJ5YWdhaW4uaHRtbA=="

function renderDots(){ dots.forEach((d,i)=> d.classList.toggle('filled', i < code.length)); }

function checkCode() {
    if (code === atob(pc2) || code === atob(pc3) || code === atob(pc4)) {
      window.location.href = atob(realpc2);
    } else if(code === atob(pc)) {
      window.location.href = atob(realpc);
    } else {
      alert("Incorrect code. Try again!");
      clearPin();
    }
  }

function clearPin() {
    code = "";
    renderDots();
  }

