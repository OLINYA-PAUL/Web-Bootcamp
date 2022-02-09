
const menuToggle = document.getElementById('menuToggle');
const  toggleTitleBox = document.getElementById('toggle-title-box');
const  displayToggleTitleBox = document.getElementById('display-toggle-title-box');
const  removeFormToggle = document.getElementById('remove-form-toggle');
const  toggleFrequetlyQuestionBox = document.getElementById('toggle-frequetly-question-box');
const  toggleFrequetlyQuestionBoxOff = document.getElementById('toggle-frequetly-question-box-off');
// const  boxRemoveToggle = document.getElementById('box-remove-toggle');

function addMenu(){
    menuToggle.style.right = '0px'
}
function removeMenu(){
    menuToggle.style.right = '-300px'
}



displayToggleTitleBox.onclick = fun = () => {
    toggleTitleBox.classList.toggle('remove-toggle-box')
} 

toggleFrequetlyQuestionBox.onclick = fun = () => {
    toggleFrequetlyQuestionBoxOff.classList.toggle('remove-toggle-Frequetly-QuestionBox-Off')
} 
// toggleFrequetlyQuestionBox.forEach(element => {
//     toggleFrequetlyQuestionBox.onclick = fun = () => {
//         toggleFrequetlyQuestionBoxOff.classList.toggle('remove-toggle-Frequetly-QuestionBox-Off')
//     } 
    
// });
// fun()
// removeFormToggle.onclick = fun = () => {
//     toggleTitleBox.classList.remove('remove-toggle-box')
// } 
console.log( toggleFrequetlyQuestionBoxOff)