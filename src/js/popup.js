
'use strict';
require("../img/unpinterested.png");
let toggleOnOffBtn = document.getElementById("toggleOnOffBtn");
let descriptionDiv = document.getElementById("description");

chrome.storage.sync.get("isDisabled", function (data) {
  toggleOnOffBtn.checked = !data.isDisabled;
  setDescriptionText(data.isDisabled);

})


toggleOnOffBtn.onclick = function toggleOnOff(btn) {
  let isDisabled = !document.getElementById('toggleOnOffBtn').checked;
  setDescriptionText(isDisabled);

  chrome.storage.sync.set({isDisabled: isDisabled})
};

function setDescriptionText(isDisabled) {
  if (isDisabled) {
    descriptionDiv.innerHTML = "Not excluding pinterest results";
  } else {
    descriptionDiv.innerHTML = "Excluding pinterest results";
  }
}