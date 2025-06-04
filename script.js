import { pokemons } from "./pokemons.js";

const select = document.getElementById("select");
const sortselect = document.getElementById("sort-select");
const input = document.getElementById("input");
const ota = document.getElementById("ota");

function kopiya(malumot) {
  ota.innerHTML = "";
  malumot.map(p => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h2>${p.name}</h2>
      <img src=${p.img} /> <br />
      <button>${p.type}</button>
      <h3>Candy count: ${p.candy_count || 0}</h3>
      <h4>${p.weight}</h4>
      <span>${p.weakenesses}</span>
      <p class="id">${p.num}</p>
      <p class="time">${p.spawn_time}</p>
    `;
    ota.appendChild(div);
  });
}

kopiya(pokemons);

input.addEventListener("input", () => {
  const yangiArray = pokemons.filter(p => 
    p.name.toLowerCase().includes(input.value.toLowerCase())
  );
  kopiya(yangiArray);
});
select.addEventListener("change", () => {
  const tanlanganType = select.value.toLowerCase();
  const inputValue = input.value.toLowerCase();

  const filteredPokemons = pokemons.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(inputValue);
    const typeMatch = tanlanganType === "all" || p.type.some(t => t.toLowerCase() === tanlanganType);
    return nameMatch && typeMatch;
  });

  kopiya(filteredPokemons);
});



select.addEventListener("change",() =>{
if (select.value == "All") {
  kopiya(pokemons);

} else {
  const a =pokemons.filter((p) => p.weaknesses.includes(select.value));
  kopiya(a)
}

  

});


sortselect.addEventListener("change",()=>{
  if(sortselect.value=="A-Z"){
    const a = pokemons.sort((p1,p2) => p1.name.localeCompare(p2.name));
    kopiya(a);
  }else{
    const a = pokemons.sort((p1, p2) => p2.name.localeCompare(p2.name));
    kopiya(a);
  }
});
