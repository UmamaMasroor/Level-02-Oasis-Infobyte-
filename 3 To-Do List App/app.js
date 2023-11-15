// const text = document.querySelector('input');
// const btn = document.querySelector('.addTask > button');

// btn.addEventListener('click', addList);
// input.addEventListener('keyup', (e)=>{
//     (e.keyCode === 13 ? addList(e) : null);
// })
// function addList(e){
//     const incomplete = document.querySelector('.notComplete');

//     const complete = document.querySelector('.Complete');

//     const newTask = document.createElement('li ');

//     const rightBtn = document.createElement('button');

//     const delBtn = document.createElement('button');

//     rightBtn.innerHTML= '<ion-icon name="checkmark-done-outline"></ion-icon>';
//     delBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

//     if(input.value !==''){
//         newTask.textContent = input.value;
//         input.value = '';
//         incomplete.appendChild(newTask);
//         newTask.appendChild(rightBtn);
//         newTask.appendChild(delBtn);
//     }

//     rightBtn.addEventListener('click', function(){
//         const parent = this.parentNode;
//         parent.remove();
//         complete.appendChild(parent);
//         rightBtn.style.display = 'none';
//     });

//     delBtn.addEventListener('click', function(){
//         const parent = this.parentNode;
//         parent.remove();
//     });
// }


















document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('taskInput');
    const btn = document.getElementById('addBtn');
    btn.addEventListener('click', addList);
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            addList(e);
        }
    });

    function addList(e) {
        const incomplete = document.querySelector('.notComplete');
        const complete = document.querySelector('.Complete');
        const newTask = document.createElement('li');
        const rightBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        rightBtn.innerHTML = '<ion-icon name="checkmark-done-outline"></ion-icon>';
        delBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

        if (input.value !== '') {
            newTask.textContent = input.value;
            input.value = '';
            incomplete.appendChild(newTask);
            newTask.appendChild(rightBtn);
            newTask.appendChild(delBtn);

            rightBtn.addEventListener('click', function () {
                const parent = this.parentNode;
                parent.remove();
                complete.appendChild(parent);
                rightBtn.style.display = 'none';
            });

            delBtn.addEventListener('click', function () {
                const parent = this.parentNode;
                parent.remove();
            });
        }
    }
});