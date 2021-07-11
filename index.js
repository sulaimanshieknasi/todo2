const addButton=document.querySelector('.ADD');
let input=document.querySelector('.searchbox');
const container=document.querySelector('.container')

class item{
    constructor(itemname){
        this.createDiv(itemname);
    }
    createDiv(itemname){
        const input=document.createElement("input");
        input.value=itemname;
        input.disabled=false;
        input.type="text";
        input.classList.add('searchbox');
        
        let itembox=document.createElement("div");
        itembox.classList.add('itembox1');

        let ebotton=document.createElement("button");
        ebotton.innerHTML="edit";
        ebotton.classList.add('edit-Button');

        let rbotton=document.createElement("button");
        rbotton.innerHTML="remove";
        rbotton.classList.add('remove-button');

        container.appendChild(itembox);

        itembox.appendChild(input);
        itembox.appendChild(ebutton);
        itembox.appendChild(rbutton);

        ebutton.addEventListener('click',() => this.edit(item));
        rbutton.addEventListener('click',() => this.remove(itembox));
    }
    edit(input){
        input.disabled= !input.disabled;
    }
    remove(itembox){
        container.remove(itembox)
    }
}
function check(){
    if(input.value != ""){
          new item(input.value);
          input.value="";
    }
}
addButton.addEventListener('click',check());
window.addEventListener('keydown',(e) =>{
    if(e.which==13){
        check();
    }
});