//resume
const btnList=document.querySelectorAll("#exp-btn-list > .btn")
function manageExpBtn(){
console.log(btnList)
    btnList.forEach(btn=>{
        btn.addEventListener("click",function(event){
            resetBtn()
        btn.classList.add("active")
        displayExpList(this.dataset.id)
        })
    })
}
manageExpBtn()

function resetBtn() {
    btnList.forEach(btn=>{
        btn.classList.remove("active")
    })  
}

function displayExpList(id) {
    resetExpList()
  document.getElementById(id).classList.add("active")
}
function resetExpList(){
    document.querySelectorAll(".exp-list").forEach(list=>{
        list.classList.remove("active")
    })
}