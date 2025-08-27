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
    const starIcon = getEmelemtsFormID("star-counter").innerText;
    const starChange = Number(starIcon) - 20;
    if (starChange < 0) {
      return;
    }
    getEmelemtsFormID("star-counter").innerText = starChange;

    // taking id propeties
    const headingInfo = getEmelemtsFormID("heading-info").innerText;
    const numberInfo = getEmelemtsFormID("number-info").innerText;

    // create new div
    const callHistory = getEmelemtsFormID("call-history");
    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML = `
            <div
              class="flex bg-[#fafafa] justify-between p-7 mx-4 my-2 rounded-xl"
            >
              <div>
                <h2>${headingInfo}</h2>
                <p>${numberInfo}</p>
              </div>
              <div>Time of blaa</div>
            </div>
    `;
    callHistory.appendChild(newCallHistory);
  }
});
