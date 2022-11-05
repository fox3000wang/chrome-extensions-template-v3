function getUrlList() {
  //
}

function getInfo() {
  chrome.runtime.sendMessage({});
}

document.getElementById('sampleMinute1').addEventListener('click', getUrlList);
document.getElementById('sampleMinute2').addEventListener('click', getInfo);
