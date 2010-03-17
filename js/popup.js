function init()
{
    var req = chrome.extension.getBackgroundPage().Request.request;
    req.nameE = document.getElementById("header_name");
    req.valueE = document.getElementById("header_value");
    document.getElementById("url").value = req.url;
    var list = document.getElementById("header_list");
    list.innerHTML = renderHeaders()
}

function renderHeaders()
{
    var req = chrome.extension.getBackgroundPage().Request.request;
    var html = "<table border=1>";
    html += "<tr><th>name</th><th>value</th></tr>";
    for (var i in req.headers) {
	html += "<tr><td align=\"left\">" + i + "</td><td align=\"right\">" + req.headers[i] + "</td></tr>";
    }
    html += "</table>"
    return html;
}

function onAddChangeHeader()
{
    var req = chrome.extension.getBackgroundPage().Request.request;
    var name = req.nameE.value;
    if (!name) {
        return;
    }
    var value = req.valueE.value;
    if (value == "##") {
	delete req.headers[name];
    } else {
	req.headers[name] = value;
    }
    req.nameE.value = req.valueE.value = "";
    var list = document.getElementById("header_list");
    list.innerHTML = renderHeaders()
}

function doRequest(method)
{
    var req = chrome.extension.getBackgroundPage().Request.request;
    req.method = method;
    req.url = document.getElementById("url").value;
    if (req.method == "POST" || req.method == "PUT") {
	req.body = document.getElementById("content_body").value;
    }

    var xhr = new XMLHttpRequest();
    xhr.open(
        req.method,
        req.url,
        false);

    console.log(method + " " + req.url);
    for (var i in req.headers) {
	xhr.setRequestHeader(i, req.headers[i]);
	console.log(i + " " + req.headers[i]);
    }

    xhr.onload = function() {
	var result = "status: " + xhr.status + " " + xhr.statusText + "<br />";
	var header = xhr.getAllResponseHeaders();
	var all = header.split("\r\n");
	for (var i = 0; i < all.length; i++) {
	    if (all[i] != "")
		result += ("<li>" + all[i] + "</li>");
	}

	document.getElementById("response_header").innerHTML = result;
	document.getElementById("response_body").innerText = xhr.responseText;
    }
    xhr.send(req.body);
}
