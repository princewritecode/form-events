const input_value = document.getElementById('input_name');
const message_div = document.getElementById('message');
const para = document.createElement('p');
const submit_btn = document.getElementById('submit');
input_value.addEventListener('focus', (e) =>
{

    console.log('focus');
    input_value.style.backgroundColor = "rgb(217, 255, 169)";
    input_value.style.color = "black";

});
input_value.addEventListener('keydown', (e) =>
{
    console.log(e.target.value);
    para.innerText = `The value entered is: ${e.target.value}`;
    message_div.appendChild(para);
});
submit_btn.addEventListener('click', (e) =>
{
    e.preventDefault();
    para.innerText = ` Value submitted is ${input_value.value}`;
    message_div.appendChild(para);
});
