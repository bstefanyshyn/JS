var myModalForEmpty = document.getElementById('myModalForEmpty');
var myModalForLastLI = document.getElementById('myModalForLastLI');
var spanModalForEmpty = document.getElementsByClassName('closeModalForEmpty')[0];
var spanModalForLastLI = document.getElementsByClassName('closeModalForLastLI')[0];
var newtaskInput = document.querySelector('#newtask input');
let counter = 0;

document.querySelector('#push').onclick = function () {
    var currentTasks = document.querySelectorAll('.delete');
    if (newtaskInput.value.length == 0) {
        myModalForEmpty.style.display = 'block';
    }
    else if (currentTasks.length < 7) {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <input type=checkbox class="delete">
                <span class="taskname">
                    ${newtaskInput.value}
                </span>
            </div>
        `;
        counter++;
    }

    spanModalForEmpty.onclick = function () {
        myModalForEmpty.style.display = 'none'
    }

    newtaskInput.value = '';

    for (var i = 0; i < document.querySelectorAll('.delete').length; i++) {
        document.querySelectorAll('.delete')[i].onclick = function () {
            if (counter > 1) {
                this.parentNode.remove();
                counter--;
            }
            else if (counter == 1) {
                myModalForLastLI.style.display = 'block';
            }
        }

        spanModalForLastLI.onclick = function () {
            myModalForLastLI.style.display = 'none';
        }
    }
}