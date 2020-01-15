import ccEditorInline from "./run";

function contentEdit(id){
    let component = document.getElementById(id);
    let attribute = document.createAttribute("contenteditable");
    attribute.value = "true";
    component.setAttributeNode(attribute);
}


document.querySelector("#editable").addEventListener("click" , function () {
    let component = document.getElementById("main");
    let attribute = document.createAttribute("contenteditable");
    attribute.value = "true";
    component.setAttributeNode(attribute);
    ccEditorInline({
        "editComponent":"" ,
        "feature":[
            "bold" ,
        ]
    });
});

function exportContent(id) {
    let exportContentEdited = document.getElementById(id).innerHTML;
    console.log(exportContentEdited);
}
exportContent("main");