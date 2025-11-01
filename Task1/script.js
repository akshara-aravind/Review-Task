const inputName = document.querySelector('.name')
const nameBtn = document.querySelector('.nameBtn')
const inputAge = document.querySelector('.age')
const ageBtn = document.querySelector('.ageBtn')
const inputAdderss = document.querySelector('.address')
const addressBtn = document.querySelector('.addressBtn')
const maleBtn = document.querySelector('.male')
const femaleBtn = document.querySelector('.female')
const yesBtn = document.querySelector('.yes')
const noBtn = document.querySelector('.no')
const sub1 = document.querySelector('.sub1')
const sub2 = document.querySelector('.sub2')
const sub3 = document.querySelector('.sub3')
const sub4 = document.querySelector('.sub4')
const resultName = document.querySelector('.resultName')
const resultAge = document.querySelector('.resultAge')
const resultAddress = document.querySelector('.resultAddress')
const resultGender = document.querySelector('.resultGender')
const resultPassed = document.querySelector('.resultPassed')
const resultFailed = document.querySelector('.resultFailed')
const clear = document.querySelector('.clear')

nameBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultName.textContent ='Name:  '+ inputName.value
})
ageBtn.addEventListener('click', ()=>{
    resultAge.textContent = 'Age: ' + inputAge.value 
    clear.style.display = 'block'
})
addressBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultAddress.textContent = 'Address:  ' + inputAdderss.value
})
maleBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultGender.textContent = 'Gender:  Male'
    femaleBtn.removeEventListener()
})
femaleBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultGender.textContent = 'Gender:  Female'
})
yesBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultPassed.textContent = 'Has passed previous exam: Yes'
    noBtn.removeEventListener()
})
noBtn.addEventListener('click', () => {
    clear.style.display = 'block'
    resultPassed.textContent = 'Has passed previous exam: No'
})
sub1.addEventListener('click',() => {
    sub1.style.textDecoration = 'line-through'
    clear.style.display = 'block'
})
sub2.addEventListener('click',() => {
    sub2.style.textDecoration = 'line-through'

})
sub3.addEventListener('click',() => {
    sub3.style.textDecoration = 'line-through'
})
sub4.addEventListener('click',() => {
    sub4.style.textDecoration = 'line-through'
})
clear.addEventListener('click', () => [
    resultName.style.display = 'none',
    resultAge.style.display = 'none',
    resultAddress.style.display = 'none',
    resultGender.style.display = 'none',
    resultPassed.style.display = 'none',
    resultPassed.style.display = 'none',
    sub1.style.textDecoration = 'none',
    sub2.style.textDecoration = 'none',
    sub3.style.textDecoration = 'none',
    sub4.style.textDecoration = 'none',
    inputName.value = '',
    inputAdderss.value = '',
    inputAge.value=''
])