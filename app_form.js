const input_value = document.querySelector('input[type="text"]');
console.log(input_value);
// const message_div = document.getElementById('message');
// const para = document.createElement('p');
// const submit_btn = document.getElementById('submit');
const output = document.getElementById('output');

// input_value.addEventListener('focus', (e) =>
// {

//     console.log('focus');
//     input_value.style.backgroundColor = "rgb(217, 255, 169)";
//     input_value.style.color = "black";

// });
// input_value.addEventListener('keydown', (e) =>
// {
//     console.log(e.target.value);
//     para.innerText = `The value entered is: ${e.target.value}`;
//     message_div.appendChild(para);
// });
// submit_btn.addEventListener('click', (e) =>
// {
//     e.preventDefault();
//     para.innerText = ` Value submitted is ${input_value.value}`;
//     message_div.appendChild(para);
// });

input_value.addEventListener('input', (e) =>
{

    output.textContent = `The value entered is
    ${input_value.value}`;

});

document.querySelector('form').addEventListener('submit', (e) =>
{
    e.preventDefault();
    output.textContent = `A submit event has been fired at
${e.timeStamp}`;
});

input_value.addEventListener('focus', (e) =>
{
    e.target.style.background = 'lightblue';
    e.target.style.color = "black";
});

input_value.addEventListener('copy', () =>
{
    alert('input text is copied');
});