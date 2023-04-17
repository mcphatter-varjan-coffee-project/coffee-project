// "use strict"

// displays individual coffees
function renderCoffee(coffee) {
    var html = '<div class="coffee w-50 d-flex flex-nowrap my-2">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 class=" text-nowrap mb-0 ">' + coffee.name + '</h4>';
    html += '<p class="ms-1 mt-1" style="color: slategray">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// displays all coffees
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// shows filtered coffees by input and roast
// var listener = function (event) {
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        } else if (selectedRoast === 'all') {
            tbody.innerHTML = renderCoffees(coffees);
        }

    });
}
    // document.getElementById('coffeeDisplay').addEventListener('input', updateCoffees);
// }

//Add coffees to list
function addCoffees(input) {
    input.preventDefault(); // don't submit the form, we just want to update the data
    var addID = coffees.length + 1;
    var addName = newCoffeeName.value.toString();
    var addRoast = newCoffeeRoastSelection.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    console.log(coffees);
    coffeeList.innerHTML = renderCoffees(coffees);
    console.log(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];

// tbody is the array of coffees
    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');
    var newCoffeeRoastSelection = document.querySelector('#roast-selection-2');
    var newCoffeeSubmitButton = document.querySelector('#add-coffee');
    var newCoffeeName = document.querySelector('.new-coffee-added');
//
    tbody.innerHTML = renderCoffees(coffees);
//
    submitButton.addEventListener('click', updateCoffees);
    roastSelection.addEventListener('input', updateCoffees);
    newCoffeeSubmitButton.addEventListener('click', addCoffees)

// //Export data to HTML doc
    var coffeeList = document.querySelector('#coffees');
// coffeeList.innerHTML = renderCoffees(coffees);

//Live search
    function searchCoffees() {
        var searchRoast = document.querySelector("#coffeeDisplay").value.toUpperCase();
        var filteredCoffees = [];
        console.log(searchRoast);
        coffees.forEach(function (coffee) {
            if (coffee.name.toUpperCase().includes(searchRoast)) {
                filteredCoffees.push(coffee);
                console.log(filteredCoffees);
            }
        });
        coffeeList.innerHTML = renderCoffees(filteredCoffees);
    }
document.getElementById('coffeeDisplay').addEventListener('keyup', searchCoffees);

console.log(renderCoffees(coffees));

// JS CODE FOR DARK MODE
    var bodyColor = document.getElementById('body-color');
    var modeSwitch = document.getElementById('flexSwitchCheckDefault');
    var modeText = document.getElementsByClassName('form-check-label');
    modeSwitch.addEventListener("click", function () {
        var onOff = modeSwitch.checked;
        if (onOff === true) {
            bodyColor.style.backgroundColor = 'black';
            bodyColor.style.color = 'white';
            modeText[0].innerText = 'Night '
        } else if (onOff === false) {
            bodyColor.style.backgroundColor = 'white';
            bodyColor.style.color = 'black';
            modeText[0].innerText = 'Day ';

        }
    })
// END OF JS CODE FOR DARK MODE