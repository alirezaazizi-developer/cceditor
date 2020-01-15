export default class tool{
    constructor() {
        console.log("tools added");
    }
    /* Element finer */
    element(e) {
        return document.getElementById(e);
    }

    /* function selected text */
    selecet(el) {
        let element = document.getElementById(el);
        // return window.getSelection();

    }

    /*function for add property */
    addProperty(a) {
        var el = document.createElement(a.tag);
        el.setAttribute("id", a.id);
        if (a.tag === "button") {
            el.setAttribute("onclick", a.func);
            el.innerHTML = a.icon;
        }
        el.setAttribute("class", "editorOption");
        element('editor').appendChild(el);

    }
    /* get popup page for receive a value */
    editorValueGetter(setting) {
        let popup = document.createElement("div");
        popup.setAttribute("class", "editor-popup");
        let popupStyle = "{width:200px;height:200px}";
        popup.setAttribute("style", popupStyle);
        let title = document.createElement("p");
        title.innerText = setting.title;
        let dataType = document.createElement("input");
        dataType.setAttribute("id", "dataValue");
        popup.appendChild(title);
        popup.appendChild(dataType);
        element(setting.id).appendChild(popup);
    }

    /* under function for replace white space */
    editorGetSpace(data) {
        let pattern = /&nbsp/g;
        let result = data.replace(" ", "%%");
        return result;
    }
}