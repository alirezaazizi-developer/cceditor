/* import modules */
import editor_event from "./changes";
import tool from "./tools";
import style from "./style"

/* create new object from editor event */
let event = new editor_event();

/* create new object from tools */
let tools = new tool();


/* function for add editor property */
function property(p) {
    /* under switch for use add editor feature */
    switch (p.option) {
        /* when is attribute bold is active */
        case "bold":
            tools.addProperty({"tag":"button", "id": "cceditor-bold", "func": "bold()", "icon": "b"});
            break;
        case "italic":
            tools.addProperty({"tag":"button" , "id": "cceditor-italic", "func": "italic()", "icon": "i"});
            break;
        case "underline":
            tools.addProperty({"tag":"button", "id": "cceditor-underline", "func": "underline()", "icon": "un"});
            break;
        case "link":
            tools.addProperty({"tag":"button" , "id": "cceditor-link", "func": "link()", "icon": "li"});
            break;
        case "bg":
            tools.addProperty({"tag":"button" , "id": "cceditor-bgcolor", "func": "backgroundColor()", "icon": "bg"});
            break;
        case "right":
            tools.addProperty({"tag":"button" , "id": "cceditor-justify-right", "func": "justify_right()", "icon": "right"});
            break;
        case "center":
            tools.addProperty({"tag":"button" , "id": "cceditor-justify-center", "func": "justify_center()", "icon": "center"});
            break;
        case "left":
            tools.addProperty({"tag":"button" , "id": "cceditor-justify-left", "func": "justify_left()", "icon": "left"});
            break;
        case "font-size":
            tools.addProperty({"tag":"button" , "id": "cceditor-font-size", "func": "font_size()", "icon": "size"});
            break;
        case "font-color":
            tools.addProperty({"tag":"button" , "id": "cceditor-font-color", "func": "color()", "icon": "color"});
            break;
        case "font-family":
            event.font_family(p.font);
            break;
        default:
            throw ("the property is invalid property to use error 202 please check your imported property");
    }
}

/* this function for run cceditor inline mode run */
function editorInline(e) {
    if (event.element('editor') == null) {
        event.element(e.parent).style.position = 'relative';
        let toolbar = document.createElement('div');
        toolbar.setAttribute('id', 'editor');
        toolbar.setAttribute('contenteditable', 'false');
        event.element(e.parent).appendChild(toolbar);
        e.property.forEach(function (pro) {
            property({"option":pro , "font":e.fonts});
        });
        let editorStyle = document.createElement('style');
        editorStyle.innerHTML = style;
        document.body.appendChild(editorStyle);
        event.editorValueGetter({"id":"editor" , "title":"link"});
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
    let value = event.element('text1').innerHTML;
    event.element('text-content').innerHTML = event.editorGetSpace(value);
}

