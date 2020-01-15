import Events from "./events";

/* create new object from Events */
let event = new Events();

/* document */
export default class Property {
    addProperty(type){
        let element = document.createElement(type.tag);
        element.setAttribute("class" , "editorOption");
        element.setAttribute("onclick" , type.function);
        document.getElementById("ccEditor").appendChild(element);
    }
    /* this function for use a switch for add Component property */
    addEditorProperty(property){
        switch (property.type) {
            case "bold":
                this.addProperty({"tag":"button" , "function": event.bold()});
                break;
            case "italic":
                this.addProperty();
                break;
            default:
                throw ("property type is invalid property");
        }
    }
}