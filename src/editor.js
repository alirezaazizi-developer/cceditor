/* this script wrote with Alireza Azizi*/
/* at first step should be create Component */
function CCEditComponent(p) {
    var el = document.createElement(p.el);
    el.setAttribute("id", p.id);
    if (p.class != null) {
        p.class.forEach(function (className) {
            el.classList.add(className);
        });
    }
    document.querySelector(p.parent).appendChild(el);
    if (p.html != null) {
        document.getElementById(p.id).innerHTML = p.html;
    }
}
/* remove CCEditor */
function CCEditorRemove(parent) {
    if (document.getElementById('CCEdit') != null) {
        document.getElementById(parent).removeChild('CCEdit');
    } else {
        throw ('CCEdit not defined yet');
    }
}
/* the under function for send response to server  with post method */
function CCEditorSave() {
    var data = document.getElementById('cceditor-textarea');
    var http = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    http.onreadystatechange  = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('sent');
            // document.getElementById("demo").innerHTML = this.responseText;
        }else{
            throw('CCEditor send to save change is fail');
        }
    }
    http.open('POST','https://google.com/search' , true);
    http.send(d.data);
}
/**/
/* under code is main function for run CCEdit main mode */
function CCEditRunMainMode(e) {
    /* at first run an editor basic */
    CCEditComponent({
        'el': 'div',
        'id': 'cceditor',
        'class': [],
        'parent': e.main.parent,
        'html': '<div id="cceditor-toolbar">' +
        '<div class="cceditor-btn"><a onclick="alert(`hello owlrd`)">bold</a></div>' +
        '<div class="cceditor-btn"><a onclick="alert(`hello owlrd`)">italic</a></div>' +
        '<div class="cceditor-btn"><a onclick="alert(`hello owlrd`)"></a></div>' +
        '<div class="cceditor-btn"><a onclick="alert(`hello owlrd`)">bold</a></div>' +
        '</div>' +
        '<div id="cceditor-textarea" contenteditable="true" spellcheck="false"><p>hello world</p></div>' +
        '<div id="cceditor-controller">' +
        '<div id="cceditor-controller-btn">' +
        '<button id="cceditor-save">Save btn</button>'
        + '</div>'
        + '</div>'
    });
}
/* under code is main function for inline mode */
function  CCEditRunInlineMode(e) {

}