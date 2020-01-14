/* Element finer */
function element(e  ) {
    return document.getElementById(e);
}
/* function selected text */
function selecet(el){
    let element = document.getElementById(el);
    // return window.getSelection();

}
/* function for exchange text status */

/* function bold */
function bold() {
    document.execCommand("bold");
}

/* function italic */
function italic() {
    document.execCommand('italic');
}

/* function underline */
function underline() {
    document.execCommand("underline");
}

/* function bgColor */
function backgroundColor() {
    /* is simple shape of bg color */
    let bgcolor = prompt("Please write a hex value in editor");
    document.execCommand("backColor", null, bgcolor);
}

/* function external link */
function link() {
    let addr = prompt("Please tell me a link");
    if (addr != null) {
        document.execCommand("createlink", null, addr);
    } else {
        console.log("please write any http address");
    }
}

/* function color */
function color() {
    let color = prompt("add your color ");
    document.execCommand("color" , null , color);
}

/* font size */
function font_size() {
    let font = prompt("Enter font size");
    document.execCommand("fontSize" , null , font);
}

/* function right */
function justify_right() {
    document.execCommand("justifyRight");
    alert(selecet('text1'));
}

/*function left */
function justify_left() {
    document.execCommand("justifyLeft");
}

/* function center */
function justify_center() {
    document.execCommand("justifyCenter");
}
/* font family function */
function font_family(p) {
    let select = document.createElement("select");
    select.innerHTML  = '<option>فونت</option>';

    if (p != null){
        p.forEach(function (fontValue) {
            select.innerHTML += "<option>"+fontValue+"</option>";
        });
    }

    element('editor').appendChild(select);
}
/*function for add property */
function addProperty(a) {
    var el = document.createElement(a.tag);
    el.setAttribute("id", a.id);
    if (a.tag === "button"){
        el.setAttribute("onclick", a.func);
        el.innerHTML = a.icon;
    }
    el.setAttribute("class", "editorOption");
    element('editor').appendChild(el);

}
/* get popup page for receive a value */
function editorValueGetter(setting) {
    let popup = document.createElement("div");
    popup.setAttribute("class" , "editor-popup");
    let popupStyle = "{width:200px;height:200px}";
    popup.setAttribute("style",popupStyle);
    let title = document.createElement("p");
    title.innerText = setting.title;
    let dataType = document.createElement("input");
    dataType.setAttribute("id","dataValue");
    popup.appendChild(title);
    popup.appendChild(dataType);
    element(setting.id).appendChild(popup);
}
/* under function for replace white space */
function editorGetSpace(data) {
    let pattern = /&nbsp/g;
    let result = data.replace(" " , "%%");
    return result;
}
/* function for add editor property */
function property(p) {
    switch (p.option) {
        /* when is attribute bold is active */
        case "bold":
            addProperty({"tag":"button", "id": "cceditor-bold", "func": "bold()", "icon": "b"});
            break;
        case "italic":
            addProperty({"tag":"button" , "id": "cceditor-italic", "func": "italic()", "icon": "i"});
            break;
        case "underline":
            addProperty({"tag":"button", "id": "cceditor-underline", "func": "underline()", "icon": "un"});
            break;
        case "link":
            addProperty({"tag":"button" , "id": "cceditor-link", "func": "link()", "icon": "li"});
            break;
        case "bg":
            addProperty({"tag":"button" , "id": "cceditor-bgcolor", "func": "backgroundColor()", "icon": "bg"});
            break;
        case "right":
            addProperty({"tag":"button" , "id": "cceditor-justify-right", "func": "justify_right()", "icon": "right"});
            break;
        case "center":
            addProperty({"tag":"button" , "id": "cceditor-justify-center", "func": "justify_center()", "icon": "center"});
            break;
        case "left":
            addProperty({"tag":"button" , "id": "cceditor-justify-left", "func": "justify_left()", "icon": "left"});
            break;
        case "font-size":
            addProperty({"tag":"button" , "id": "cceditor-font-size", "func": "font_size()", "icon": "size"});
            break;
        case "font-color":
            addProperty({"tag":"button" , "id": "cceditor-font-color", "func": "color()", "icon": "color"});
            break;
        case "font-family":
            font_family(p.font);
            break;
        default:
            throw ('property invalid property');
    }
}

/* style */
let style = '#editor{width:99%;height:auto;border:1px solid #f5f5f5;background-color:#f9f9f9;position:absolute;top:-30px;margin-right:auto;margin-left:auto}' +
    '.editorOption{padding:0;border:0 !important; background:#f5f5f5;width:40px;height:20px;margin-top:2px;margin-bottom:2px;margin-right:2px;display:inline-block;outline:none}';

/* this function for run cceditor inline mode run */
function editorInline(e) {
    if (element('editor') == null) {
        element(e.parent).style.position = 'relative';
        let toolbar = document.createElement('div');
        toolbar.setAttribute('id', 'editor');
        toolbar.setAttribute('contenteditable', 'false');
        element(e.parent).appendChild(toolbar);
        e.property.forEach(function (pro) {
            property({"option":pro , "font":e.fonts});
        });
        let editorStyle = document.createElement('style');
        editorStyle.innerHTML = style;
        document.body.appendChild(editorStyle);
    }
}

/* remove function
function CCEditorRemove(parent) {
    if (document.getElementById('CCEdit') != null) {
        document.getElementById(parent).removeChild('CCEdit');
    } else {
        throw ('CCEdit not defined yet');
    }
}
document.getElementById('text2').addEventListener('click', function () {
    element('text1').removeChild(element('editor'));
});
 */
function editorExport() {
    editorValueGetter({"id":"editor" , "title":"link"});
    let value = element('text1').innerHTML;
    element('text-content').innerHTML = editorGetSpace(value);
}
/* onclick event */
// function editorIsRun() {
//     if (element("editor") != null){
//
//     }
// }
