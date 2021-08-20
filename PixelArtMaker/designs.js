const getVal = document.querySelector('#sizePicker');

const chooseColor = document.querySelector('#colorPicker');

getVal.addEventListener('submit', function (event) {

    var Height = document.querySelector('#inputHeight').value;
    var Width = document.querySelector('#inputWidth').value;

    event.preventDefault();
    makeGrid(Number(Height),Number(Width));
})

function makeGrid(row,column){

    const parent = document.querySelector('#pixelCanvas'); //Find the Canvas to draw table

    for (var i=1; i<=row; i++){

        const newRow = document.createElement('tr');      //New Row
        parent.appendChild(newRow);                      //Add Row to DOM

        for (var j=1; j<=column; j++){
            const newCol = document.createElement('td');   //New Column

            newCol.addEventListener('click',function (){  //Add Event
                newCol.style.backgroundColor = chooseColor.value;
            });

            newRow.appendChild(newCol);          //Add Column to DOM (inside the latest Row)
        }
    }
}