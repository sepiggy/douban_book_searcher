var csdnURL = "https://download.csdn.net/psearch/0/10/0/2/1/"
var bookName = document.getElementsByTagName("h1")[0].childNodes[1].firstChild.nodeValue;
var info = document.getElementById("info");

var downloadSpan = document.createElement("span")
downloadSpan.setAttribute("class", "pl");
var downloadSpanText = document.createTextNode("下载: ");
downloadSpan.appendChild(downloadSpanText);
info.appendChild(downloadSpan);

var link = document.createElement("a");
link.setAttribute("href", csdnURL + bookName);

var linkText = document.createTextNode("csdn");
link.appendChild(linkText);
insertAfter(link, downloadSpan);

function insertSpaceBefore(targetElement) {
    var space = document.createTextNode("&nbsp;");
    targetElement.parentNode.insertBefore(space, targetElement);
}

function insertSpaceAfter(targetElement) {
    var space = document.createTextNode("&nbsp;");
    insertAfter(space, targetElement);
}

function insertAfter(newElement, targetElement) {
    var parentElement = targetElement.parentNode;
    if (parentElement.lastChild == targetElement) {
        parentElement.appendChild(newElement);
    } else {
        parentElement.insertBefore(newElement, targetElement.nextSibling);
    }
}