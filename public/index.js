const matchList = document.querySelector('#matchList');
const input = document.querySelector('#userInput');
const clearFileds = () =>{
    document.querySelector('#userInput').value = '';
}

const getInput = () =>{
    const userInput = document.querySelector('#userInput').value;
    if(userInput === ''){
      matchList.innerHTML = `<div class="mt-3"><p class="text-danger warning">Please type in a recipe</p></div>`
    }else{
        matchList.innerHTML = '';   
    console.log(userInput)
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${userInput}`,{
        headers:{
            "x-app-id": "d655ed73",
            "x-app-key": "65e4b65e02b64bfc381a2f07657b8238"
        }
    })
    .then(response=>{
        return response.json()
    }).then(data=>{
        const info = data.branded;
        info.forEach(names=>{
            const foodname = names.food_name;
            const brand_name = names.brand_name;
            const locale = names.locale;
            const calories = names.nf_calories;
        matchList.innerHTML = `<div class="mt-3">
                              <p class="warning">Name: ${foodname}</p>
                              <p class="warning">Brand: ${brand_name}</p>
                              <p class="warning">Locale: ${locale}</p>
                              <p class="warning">Calories: ${calories}</p>
        </div>`
            console.log(`foodname:${foodname}`)
            console.log(`Brand:${brand_name}`)
            console.log(`Locale:${locale}`)
            console.log(`Calories:${calories}`)
        })
    }).catch(err=>{
        console.log(`something went wrong: ${err}`);
        matchList.innerHTML = `<div class="mt-3"><p class="text-danger warning">Please check your connection</p></div>`
    })
    clearFileds();
}
}

/*const searchFood = async searchText =>{
    const res = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchText}`,{
        headers:{
            "x-app-id": "d655ed73",
            "x-app-key": "65e4b65e02b64bfc381a2f07657b8238"
        }
    });
    const foods = await res.json();
    //get matches to current text input
    let matches = foods.filter(food=>{
        const regex = new RegExp(`^${searchText}`,'gi')
        return food.food_name.match(regex) || food.brand_name.match(regex)
    });
    if(searchText.length===0){
    matches = []
    }
    outPutHtml(matches)
}
const outPutHtml = (matches) =>{
    if(matches.length > 0){
        const html = matches.map(match=>{
          return `<div class="card card-body mb-1">
            <h4>${match.food_name} <span class="text-primary">${match.nf_calories}</span></h4>
          </div>` 
        }).join('');
        matchList.innerHTML = html;
    }
 }*/
document.querySelector('.icon').addEventListener('click',getInput)
//input.addEventListener('input',()=>searchFood(input.value))