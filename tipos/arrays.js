"use strict";
(() => {
    const numbers = [16, 17, '18', 19, 20];
    numbers.push(true);
    console.log(numbers);
    const fruits = ['Manzana', 'Sandía', 'Pera'];
    fruits.push('Mandarina');
    console.log(fruits);
    const villian = ['Dormammu', 'Thanos', 'Kang el Conquistador'];
    villian.forEach(v => console.log(v.toUpperCase()));
})();
