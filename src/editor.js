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
/* CCEdit add style */
function CCEditStyleMode(s) {
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        /* for IE browser */
        style.styleSheet.cssText = s;
    } else {
        /* for another browser */
        style.innerHTML = s;
    }
    document.getElementById('cceditor').appendChild(style);
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
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('sent');
            // document.getElementById("demo").innerHTML = this.responseText;
        } else {
            throw('CCEditor send to save change is fail');
        }
    }
    http.open('POST', 'https://google.com/search', true);
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
        '<div class="cceditor-btn"><button onclick="Bold()">bold</button></div>' +
        '<div class="cceditor-btn"><button onclick="Italic()">italic</button></div>' +
        '<div class="cceditor-btn"><button onclick="AddImage()">Image</button></div>' +
        '<div class="cceditor-btn"><button onclick="AddLink()">link</button></div>' +
        '</div>' +
        '<div id="cceditor-textarea" contenteditable="true" spellcheck="false"><p>hello world come on boy</p></div>' +
        '<div id="cceditor-controller">' +
        '<div id="cceditor-controller-btn">' +
        '<button id="cceditor-save">Save btn</button>'
        + '</div>'
        + '</div>'
    });
}
/* under code is main function for inline mode */
function CCEditRunInlineMode(e) {

}

/* Event bold */
function Bold() {
    document.execCommand('bold');
}
/* Event Italic */
function AddImage() {
    var value = prompt('Please write picture source in http path : ');
    document.execCommand('insertImage' , false , value);
}
/* function Italic */
function Italic() {
    document.execCommand('italic');
}
/* function font size */
function FontSize() {
}
/* function color */
function Color() {

}
/* function font family */
function FontFamily() {

}
/* function add link */
function AddLink(){
    var link = prompt('Please write a hyper link : ');
    document.execCommand('createLink' , false , link);
}
/* the under function for use check tagole*/
