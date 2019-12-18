
const eventHub = document.querySelector(".container")
const Dialogs =()=>{
  

  eventHub.addEventListener("click", clickEvent=>{
if(clickEvent.target.classList.contains("button--close")){
  const theDialog = clickEvent.target.parentNode
  theDialog.close();
}

if(clickEvent.target.id.startsWith("dialog--")){

  const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`
             const theDialog = document.querySelector(dialogSiblingSelector)
             theDialog.showModal()
         }

  })
   
}
export default Dialogs