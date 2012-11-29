var map = {};
map.header 		='$("#header")';
map.room 		='$("#scene")';
map.sidebar 	='$(".floating-panel-tabs")';
map.pmWindows 	= '$("#pmWindows")';
map.chatAvatars 	= '$(".message .avatar")';

chrome.tabs.executeScript(null, { file : 'jquery.js' });
function click(e) {
  chrome.tabs.executeScript(null,
        {code:"if ("+e.target.checked+") { "+map[e.target.id]+".css('display', 'block');} else { "+map[e.target.id]+".css('display', 'none');}"});
}

document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input');
  for (prop in map) {
    checkboxes[prop].addEventListener('click', click);
  }
});
