function select(val){
    return document.querySelector(val);
}
const listContainer = select(".contacts");

const searchBar = select(".searchbar");

const names = [
"John Doe",
"Jane Smith",
"Michael Johnson",
"Emily Davis",
"Christopher Brown",
"Amanda Miller",
"Joshua Wilson",
"Jessica Moore",
"Daniel Taylor",
"Sarah Anderson",
"David Thomas",
"Ashley Jackson",
"James White",
"Megan Harris",
"Matthew Martin",
"Sophia Thompson",
"Andrew Garcia",
"Isabella Martinez",
"Ryan Robinson",
"Olivia Clark",
"Tyler Rodriguez",
"Ava Lewis",
"Brandon Lee",
"Mia Walker",
"Alexander Hall",
"Idemudia Esohe"
];

let searchedList = names;

function listAll(){
for(i = 0; i < searchedList.length; i++){
    // var listItem = document.createElement("li");
    // listItem.innerHTML = names[i];
    // listContainer.append(listItem);

    var listItem = `<li class="p-2 my-2 hover:bg-[#cde] cursor-pointer flex items-center">
        <span class="mr-[5px]">
            <span class="profile bg-[#dcdcdc] flex font-bold w-[30px] h-[30px] items-center justify-center rounded-full text-xs">
                ${searchedList[i].split(" ")[0][0] + searchedList[i].split(" ")[1][0]}
            </span>
        </span>        
        <span>${searchedList[i]}</span>
        </li>`;
    listContainer.innerHTML += listItem;
}
}


searchBar.oninput = () =>{
if(searchBar.value !== ""){
    listContainer.innerHTML = "";
    searchedList = names.filter(name => name.toLowerCase().includes(searchBar.value.toLowerCase()));
    console.log(searchedList, searchBar.value);
    if(searchedList.length < 1){
        listContainer.innerHTML = "<p class='p-[30px] text-center bg-[#cdcdcd] mt-2'>Nothing found</p>";
    }else{
        listAll();
    }
}else{
    listContainer.innerHTML = "";
    searchedList = names;
    listAll();        
}

}

listAll();




