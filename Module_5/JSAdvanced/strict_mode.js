// strict mode = chế độ nghiêm ngặt

// vị trí 1: dòng đầu tiên của file
// vị trí 2: dòng dầu tiên của thân hàm

'use strict';

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
for (let i = 0; i < 10; i++) {
    console.log(i);
}

function loop() {
    // 'use strict';
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
}

loop();