// some-every exercise
// function allEvens that accepts a single array of numbers
// if array contains all even #s, return true or return false


const allEvens = (arr) => {
    return arr.every((x) => {
        return x % 2 === 0;
    })
}
console.log(allEvens([2,4,6,8]))
console.log(allEvens([1,4,5,8]))
console.log(allEvens([2,4,56,8]))
