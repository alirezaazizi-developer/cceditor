/* under class for handle editor event */
export default class Events {
    /* func for bold */
    bold(){
        document.execCommand("bold");
    }
    /* func for italic */
    italic(){
        document.execCommand("italic");
    }
    /* func for external link */
    createLink(value){
        document.execCommand("createLink" , null , value);
    }
    /* function for justifies */
    justifyRight(){
        document.execCommand("justifyRight");
    }
    justifyLeft(){
        document.execCommand("justifyLeft");
    }
    justifyCenter(){
        document.execCommand("justifyCenter");
    }
    /* font family */
    /* function underline */
    underline(){
        document.execCommand("underline");
    }
    /* function unlink */
    unlink(){
        document.execCommand("unlink");
    }
    /* func background color */
    backgroundColor(value){
        document.execCommand("backColor" , null , value);
    }
    /* function content color */
    color(value){
        document.execCommand("foreColor" , null , value);
    }
    /* function for heading */
    heading(value){
        document.execCommand("heading" , null , value);
    }
    newLine(){

    }
}