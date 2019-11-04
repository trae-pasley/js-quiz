// 1 create an alert that says "hello world"

// 2 create a prompt which asks for your favorite number
    // 2a display the response in the console with "user's favorite nunber is: (display input)"

// 3 create a variable which selects the h1
    // 3a add inner text to the header selector
    var header = document.querySelector("h1");
    header.innerHTML = "hi heading"
    // 3b add a border around the h1 that is 1px, solid, and black. use "cssText" to add this
        header.style.cssText = "border: 1px solid black";

// 4 console.log a variable tht holds an array of the alphabet
    // 4a use "slice" to remove the vowels, including "y"
    // 4b console.log the remaining array of consonants, label the console log with a string
    // 4c  console.log the length of this array, label it with a string

// 5 create a variable of an array of numbers 1-5
    // 5a create a "const" which uses "map" to multiply each number with itself
    // 5b console.log the results of the mapped array, label the console log with string
    // 5c use the "forEach" method on the mapped array to console log the remainder when divided by 2

// 6 create an variable holding an object of each person with the properties "name, age, jobTitle, laptopType, isStudent" the data can/is fictional
    // 6a create a for loop to dynamically create a sentence describing each "person"
    // 6b inject these sentences in "p" elements in the html div

// 7 create two "const" variables of strings. console log the combined result using "concat"

// 8 create an array of strings made up of words of a quote or nursery rhyme.
    // 8a use the "filter" method on the array variable to gather the words with length greater than 3
    // 8b console log those words
    // 8c use "join" to create a sentence outputted in a console log

