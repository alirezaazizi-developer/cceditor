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
    var bold_ico = '<svg class="octicon octicon-bold" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path></svg>';
    var italic_ico = '<svg class="octicon octicon-italic" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"></path></svg>';
    var content = document.body.outerHTML;
    CCEditComponent({
        'el': 'div',
        'id': 'cceditor',
        'class': [],
        'parent': e.main.parent,
        'html': '<div id="cceditor-toolbar">' +
        '<div class="cceditor-btn"><button onclick="Bold()"><i>'+ bold_ico +'</i></button></div>' +
        '<div class="cceditor-btn"><button onclick="Italic()">'+ italic_ico +'</button></div>' +
        '<div class="cceditor-btn"><button onclick="AddImage()">Image</button></div>' +
        '<div class="cceditor-btn"><button onclick="AddLink()">link</button></div>' +
        '</div>' +
        '<div id="cceditor-textarea" contenteditable="true" spellcheck="false">'+ content +'</div>' +
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
    if (value != null){
        document.execCommand('insertImage' , false , value);
    }else{
        alert('path is empty');
    }
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
