 document.querySelector('.lni-chevron-down').addEventListener('click',()=>{
  document.querySelector('.cont').classList.add('active');
  document.querySelector('.instructions').classList.add('active');
  document.querySelector('.description').classList.add('active');
  document.querySelector('.details').classList.add('active');
  document.querySelector('.recipe_name').classList.add('active');
  document.querySelector('.next').classList.add('active');
  document.querySelector('.previous_text').innerHTML = 'Back to recipes';
  const recipe = document.querySelector('.steps');
  recipe.classList.remove('invisible');
  recipe.innerHTML = `<p class="heading">Ingredients</p>
                       <p><i class="far fa-check-circle fa-1x" style="margin-right:10px"></i>1 cup butter</p>
                       <p class="mt-0"><i class="far fa-check-circle fa-1x" style="margin-right:10px"></i>1 teaspoon baking soda</p>
                       <p class="mt-0"><i class="far fa-check-circle fa-1x" style="margin-right:10px"></i>1 cup white sugar</p>
                       <p class="mt-0"><i class="far fa-check-circle fa-1x" style="margin-right:10px"></i>2 eggs</p>
                         </div> 
                                  `    
})

document.querySelector('.lni-arrow-left').addEventListener('click',()=>{
    document.querySelector('.cont').classList.remove('active');
    document.querySelector('.instructions').classList.remove('active');
    document.querySelector('.description').classList.remove('active');
    document.querySelector('.details').classList.remove('active');
    document.querySelector('.recipe_name').classList.remove('active');
    document.querySelector('.next').classList.remove('active');
    document.querySelector('.previous_text').innerHTML = 'Previous Recipe';
    const recipe = document.querySelector('.steps');
    recipe.innerHTML='';
})