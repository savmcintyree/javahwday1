//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for(let dog of dog_names){
        let checker = dog_string.toUpperCase().includes(dog.toUpperCase())
        if (checker = true){
            console.log(`Matched ${dog_names}`)
        }
        else
            console.log("No Match")
    }
}
console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array){
    for(i = 0; i < array.length; i++){
        if (i % 2 == 0){
            console.log(array[i] = 'even index') 
        }
    }
    return(array)
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]