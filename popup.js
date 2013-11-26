var map = {};
map.audience 		='$("#audience")';


chrome.tabs.executeScript(null, { file : 'jquery.js' });
function click(e) {
  chrome.tabs.executeScript(null,
        {code:"if ("+e.target.checked+") { "+map[e.target.id]+".css('display', 'block');} else { "+map[e.target.id]+".remove();}"});
}

document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input');
  for (prop in map) {
    checkboxes[prop].addEventListener('click', click);
  }
});
