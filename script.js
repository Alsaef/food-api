const loadFood=(scarch)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${scarch}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadData(data.meals))
    prossing(true)
}
function loadData(dataFood) {
    console.log(dataFood);
     const notFound=document.getElementById("no-found")
    if (dataFood===null) {
      notFound.classList.remove("d-none")
      prossing(false)
    }
    else{
      notFound.classList.add("d-none")
      prossing(false)
    } 
   
    const main=document.getElementById("main")
    main.innerHTML=``;
    
dataFood.forEach(data => {
  console.log(data)
  const divCard=document.createElement("div");
  divCard.innerHTML=`
  <div class="col">
  <div class="card h-100">
    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${data.strMeal}</h5>
      <p class="">"${data.strInstructions.slice(0,200)}"</p>
      <a href="${data.strYoutube}" class="btn btn-primary">Food Review</a>
    </div>
  </div>
</div>
  `;
  main.appendChild(divCard)
});
    prossing(false)
}

function scarch(){
  prossing(true)
    const inputFild=document.getElementById("search-fild");
    const inputValue=inputFild.value;
    loadFood(inputValue);
    
    inputFild.value=""
}
function prossing(isData) {
  const prossing=document.getElementById("prossing")
  if (isData) {
    prossing.classList.remove("d-none")
  } else {
    prossing.classList.add("d-none")
  }
}
loadFood("")