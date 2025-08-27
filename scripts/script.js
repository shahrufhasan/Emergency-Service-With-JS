// Functions for getting elements form id
function getEmelemtsFormID(id) {
  const element = document.getElementById(id);
  return element;
}

// heart counter funtionality
getEmelemtsFormID("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-counter")) {
    const heartBtn = e.target;

    const heartIcon = getEmelemtsFormID("heart-increase").innerText;
    const currentIcon = Number(heartIcon) + 1;
    getEmelemtsFormID("heart-increase").innerText = currentIcon;
  }
});

// Calling Functionality
getEmelemtsFormID("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-button")) {
    const callButton = e.target;

    const starIcon = getEmelemtsFormID("star-counter").innerText;
    const starChange = Number(starIcon) - 20;
    if (starChange < 0) {
      return;
    }

    getEmelemtsFormID("star-counter").innerText = starChange;

    // taking id propeties
    const headingInfo =
      callButton.parentNode.parentNode.children[1].children[0].innerText;

    const numberInfo =
      callButton.parentNode.parentNode.children[1].children[2].innerText;
    console.log(numberInfo);
    const subHeading =
      callButton.parentNode.parentNode.children[1].children[1].innerText;
    // Time showing
    const dateInfo = new Date().toLocaleTimeString();

    alert(`calling ${subHeading} ${numberInfo}`);

    // create new div
    const callHistory = getEmelemtsFormID("call-history");
    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML = `
            <div
              class="flex items-center bg-[#fafafa] justify-between p-7 mx-4 my-2 rounded-xl"
            >
              <div>
                <h2 class="text-[#111111]">${headingInfo}</h2>
                <p class="text-[#5c5c5c]">${numberInfo}</p>
              </div>
              <div class="text-[#111111]">${dateInfo}</div>
            </div>
    `;
    callHistory.appendChild(newCallHistory);
  }
});

// Copy Button
getEmelemtsFormID("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const copyInfo = getEmelemtsFormID("copy-counter").innerText;
    const copyCounter = Number(copyInfo) + 1;
    getEmelemtsFormID("copy-counter").innerText = copyCounter;

    // Copy the number
    const number = getEmelemtsFormID("number-info").innerText;
    navigator.clipboard.writeText(number);
  }
});

// Clear Button
getEmelemtsFormID("clear-btn").addEventListener("click", function () {
  const clearInfo = getEmelemtsFormID("call-history");
  clearInfo.innerHTML = "";
});
