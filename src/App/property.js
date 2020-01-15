/* document */
export default class Property {
    addProperty(type){
        let element = document.createElement(type.tag);
        // element.setAttrib)
        document.getElementById("ccEditor").appendChild(element);
    }
    /* this function for use a switch for add Component property */
    addEditorProperty(property){
        switch (property.type) {
            case "bold":
                this.addProperty();
                break;
            case "italic":
                this.addProperty();
                break;
            default:
                throw ("property type is invalid property");
        }
    }
}