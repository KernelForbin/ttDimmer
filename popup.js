var map = new Object();
map['top-panel'] = '$("#top-panel")';
map['room'] = '$(\'.roomView > div:nth-child(2)\')';
map['playlist'] = '$("#playlist")';
map['chat'] = '$(".chat-container")';
map['pmWindows'] = '$("#pmWindows")';

chrome.tabs.executeScript(null, { file : 'jquery.js' });
function click(e) {
  chrome.tabs.executeScript(null,
        {code:"if ("+e.target.checked+") { "+map[e.target.id]+".css('display', 'block');} else { "+map[e.target.id]+".css('display', 'none');}"});
}

document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('input');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', click);
  }
});
