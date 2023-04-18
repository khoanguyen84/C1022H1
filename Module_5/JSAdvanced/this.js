let numbers = [4, 3, 3, 5, 6, 6]
let numbers_2 = [10, 20, 30];
if (Array.prototype.includes_2 == undefined) {
    Array.prototype.includes_2 = function (value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return true;
            }
        }

        return false;
    }
}
console.log(numbers.includes_2(5))
console.log(numbers_2.includes_2(3))