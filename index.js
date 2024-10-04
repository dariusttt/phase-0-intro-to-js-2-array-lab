// Write your solution here!
const cats =["Milo", "Otis" , "Garfield"]
cats.length = 3

   function  destructivelyAppendCat(name){
    cats.push(name)
 }

   function destructivelyPrependCat(name){
    cats.unshift(name)
   } 
   function destructivelyRemoveLastCat(){
    cats.pop()
  }
    function destructivelyRemoveFirstCat(){
    cats.shift()
    }

// leaving the arrays unchanged
   function appendCat(name){
    return [...cats , name]
   }
   function prependCat(name){
    return [name , ...cats]
   }
   function removeLastCat(){
    return cats.slice(0 , -1)
   }
   function removeFirstCat(){
    return cats.slice(1)
   }
   
    function appendCat(name){
    return [...cats, name];
   }

    function prependCat(name){
    return[name, ...cats];

  }

