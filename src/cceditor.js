/* Element finer */
function element(e) {
    return document.getElementById(e);
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
function bgColor() {

}
/* function external link */
function link() {
    let address = prompt("Please tell me a link");
    document.execCommand("createlink" , null , address);
}
/* function color */
function color() {

}
/* function right */
function right() {

}
/*function left */
function left() {

}
/* function center */
function center() {

}
/*function for add property */
function addProperty(a) {
    var el = document.createElement("button");
    el.setAttribute("id", a.id);
    el.setAttribute("onclick", a.func);
    el.setAttribute("class" , "editorOption");
    element('editor').appendChild(el);
    el.innerHTML = a.icon;
}
/* function for add editor property */
function property(p) {
    switch (p) {
        /* when is attribute bold is active */
        case "bold":
            addProperty({"id": "cceditor-bold", "func": "bold()" , "icon":"b"});
            break;
        case "italic":
            addProperty({"id": "cceditor-italic", "func": "italic()" , "icon":"i"});
            break;
        case "underline":
            addProperty({"id":"cceditor-underline" , "func":"underline()" , "icon":"un"});
            break;
        case "link":
            addProperty({"id":"cceditor-link" , "func":"link" , "icon":"li"});
            break;
        default:
            throw ('property invalid property');
    }
}
/* style */
let style = '#editor{width:100%;height:auto;border:1px solid #f5f5f5;background-color:#f9f9f9;position:absolute;top:-25px;}' +
    '.editorOption{padding:0;border:1px solid #f5f5f5; background:#f5f5f5;width:30px;height:20px;margin-top:2px;margin-bottom:2px;margin-right:2px;dispaly:inline-block}';
/* this function for run cceditor inline mode run */
function editorInline(e) {
    if (element('editor') == null) {
        element(e.parent).style.position = 'relative';
        let toolbar = document.createElement('div');
        toolbar.setAttribute('id', 'editor');
        toolbar.setAttribute('contenteditable', 'false');
        element(e.parent).appendChild(toolbar);
        e.property.forEach(function (pro) {
            property(pro);
        });
        let editorStyle = document.createElement('style');
        editorStyle.innerHTML = style;
        document.body.appendChild(editorStyle);
    }
}
/* remove function */
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