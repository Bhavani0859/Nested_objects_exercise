//given code
/*let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }*/

 
  let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  };
  a=nestedData.innerData.numberData
  //1 Using a for loop, console.log all of the numbers in the primeNumbers array.
  console.log("***primeNumbers***")
  for(i=0;i<a.primeNumbers.length;i++){
    console.log(a.primeNumbers[i])
  }
  //2 Using a for loop, console.log all of the even Fibonnaci numbers.
  console.log("***fibonnaci***")
  for(i=0;i<a.fibonnaci.length;i++){
    console.log(a.fibonnaci[i])
  }
  //3 Console.log the value "second" inside the order array.
  console.log("accessing value inside order array")
  console.log(nestedData.innerData.order[1])
  //4 Invoke the addSnack function and add the snack "chocolate".
  nestedData.innerData.addSnack("chocolate")
  console.log("***snacks list after adding chocolate to it***")
  for(i=0;i<nestedData.innerData.snacks.length;i++){
    console.log(nestedData.innerData.snacks[i])
  }
  //5 Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
    //  here 'this' keyword refers to parent of snacks that is nesteData.innerData
