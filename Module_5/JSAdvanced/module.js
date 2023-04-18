// nhạp vào = import
// xuất ra = export
//  có default => khi import dùng lại tên đã export
//  ko có default => khi import dùng destructuring


// import sum, * as myMath from "./library.js";
import sum, { times, subtract, jobs } from "./library.js";

console.log(sum(4, 3, 4, 9, 5, 6, 76, 3, 7, 3, 3, 10));
console.log(times(4, 3, 4, 9, 5, 6, 76, 3, 7, 3, 3, 10));
console.log(subtract(4, 3, 4, 9, 5, 6, 76, 3, 7, 3, 3, 10));

console.log(jobs);