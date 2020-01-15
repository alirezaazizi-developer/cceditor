import property from "./property";
/* under function find element with id */
function elementIdFinder(element) {
    return document.getElementById(element);
}


/* under function is main part of editor */
export default function ccEditorInline(property) {
    let editor = document.createElement("div");
    editor.setAttribute("id" , "ccEditor");
    /*
    *
    * some code
    *
    */
    property.feature.forEach(function (features) {

    });
    document.body.appendChild(editor);
}