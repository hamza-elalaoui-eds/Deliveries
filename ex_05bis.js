function getBasketContent(nbFruits){
	const allFruits = [
  	'strawberry','strawberry','strawberry',
    'apple','apple',
    'lime','lime',
    'peach',
    'pear','pear'
   ];
   const totalFruits = allFruits.length;
   
   if(nbFruits > totalFruits){
   	console.log("Too many fruit(s) selected");
    return [];
   }
   
   const selectedFruits = allFruits.slice(0, nbFruits);
   
   console.log(`${selectedFruits.length} fruit(s) selected`);
   
   return selectedFruits;
}