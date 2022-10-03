// main DIV container for three tables
var div = document.createElement('DIV');
div.setAttribute('id','container');

// names for three tables to create
var mainData = "start,func,end".split(',');

// forEach for mainData array to generate tables
mainData.forEach((v) => {
    var x = document.createElement("TABLE");
    x.setAttribute("id", v + "Table");
    div.appendChild(x);
    document.body.appendChild(div);
});

// lists of content going inside of mainData tables
var startList = "bread,milk,orange,tomato".split(',');
//console.log(startList);
var functionList = "Up,Add,Remove,Down".split(',');
//console.log(functionList);
var endList = [];
//console.log(endList);

// replacement function for 3 repetitive functions doing the same thing
function rendezo(list) {
    list.forEach((v) => {
        var z = document.createElement("TR");
        var t = document.createTextNode(v);
        if (v === "bread" || v === "milk" || v === "orange" || v === "tomato") {
            z.setAttribute("id", "start" + v);
            //console.log(z);
            z.appendChild(t);
            document.getElementById("startTable").appendChild(z);
        }
        if (v === "Up" || v === "Add" || v === "Remove" || v === "Down") {
            var x = document.createElement("INPUT");
            x.setAttribute("id", "func" + v);
            x.setAttribute("type", "button");
            x.value = v;
            document.getElementById("funcTable").appendChild(x);
            //console.log(z);
        }
        if (list === endList) {
            z.setAttribute("id", "end" + v);
            //console.log(z);
            z.appendChild(t);
            document.getElementById("endTable").appendChild(z);
        }
    });
}

rendezo(startList);
rendezo(functionList);
rendezo(endList);

var startTable = document.getElementById('startTable');
var funcTable = document.getElementById('funcTable');
var endTable = document.getElementById('endTable');



// isSelected string used for checking if one element is selected or not already
var isSelected = "";

// set default cursor style for elements within startTable
document.getElementById('startbread').style.cursor = "default";
document.getElementById('startmilk').style.cursor = "default";
document.getElementById('startorange').style.cursor = "default";
document.getElementById('starttomato').style.cursor = "default";

// eventlistener for startTable and startList
startTable.addEventListener('click', kivalaszto);

function kivalaszto(event) {
    // selected element gets `lightgray` backgroundColor
    // and `isSelected` variable gets the value of the selected element
    if (event.target && event.target.id === "startbread") {
        document.getElementById('startbread').style.backgroundColor = "lightgray";
        isSelected = "startbread";
        // console.log("selected",isSelected);
        // console.log("EVT = ",event.target);
        // console.log(startTable.children[0].id);
    } else if (event.target && event.target.id === 'startmilk') {
        document.getElementById('startmilk').style.backgroundColor = "lightgray";
        isSelected = "startmilk";
        // console.log("selected",isSelected);
        // console.log("EVT = ",event.target);
        // console.log(startTable.children[1].id);
    } else if (event.target && event.target.id === 'startorange') {
        document.getElementById('startorange').style.backgroundColor = "lightgray";
        isSelected = "startorange";
        // console.log("selected",isSelected);
        // console.log("EVT = ",event.target);
        // console.log(startTable.children[2].id);
    } else if (event.target && event.target.id === 'starttomato') {
        document.getElementById('starttomato').style.backgroundColor = "lightgray";
        isSelected = "starttomato";
        // console.log("selected",isSelected);
        // console.log("EVT = ",event.target);
        // console.log(startTable.children[3].id);
    }
    return isSelected;
}

funcTable.addEventListener('click', hozzaAdas);

function hozzaAdas() {
    
    if (isSelected == "startbread") {
        //console.log("selected = ",isSelected);

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(0,1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "milk") {
            isSelected = "startmilk";
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "orange") {
            isSelected = "startorange";
            document.getElementById('startorange').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "tomato") {
            isSelected = "starttomato";
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
        }

    }
    
    if (isSelected === "startmilk") {
        //console.log("selected = ",isSelected);

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(startList.indexOf(startList[1]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            isSelected = "startbread";
            document.getElementById('startbread').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "orange") {
            isSelected = "startorange";
            document.getElementById('startorange').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "tomato") {
            isSelected = "starttomato";
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
        }

    }
    
    if (isSelected === "startorange") {
        //console.log("selected = ",isSelected);

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(startList.indexOf(startList[2]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            isSelected = "startbread";
            document.getElementById('startbread').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "milk") {
            isSelected = "startmilk";
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "tomato") {
            isSelected = "starttomato";
            document.getElementById('starttomato').style.backgroundColor = "lightgray";
        }

    }
    
    if (isSelected === "starttomato") {
        //console.log("selected = ",isSelected);

        // create a newList variable from startList.splice configuration
        var removed = startList.splice(startList.indexOf(startList[3]),1);

        // set endList first element to startList first element
        endList[0] = removed;

        // console.log(newList);
        // console.log(startList);
        // console.log(endList);

        // delete all rows inside startTable for regeneration process
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);
        startTable.deleteRow(-1);

        //regenerate startTable with contents of newList variable
        rendezo(startList);

        // generate endTable with new content added from startTable and startList
        rendezo(endList);

        // highlight next element in startTable made from newList array
        if (startList[0] === "bread") {
            isSelected = "startbread";
            document.getElementById('startbread').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "milk") {
            isSelected = "startmilk";
            document.getElementById('startmilk').style.backgroundColor = "lightgray";
        }

        if (startList[0] === "orange") {
            isSelected = "startorange";
            document.getElementById('startorange').style.backgroundColor = "lightgray";
        }

    }
}
