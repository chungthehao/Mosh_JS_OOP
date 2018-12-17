// ES6 MODULES

import {Circle} from './circle'; 
// - Vấn đê 1
// tại vì brower ko coi index.js là module nên nó sẽ ko hiểu {Circle}
// Fix nhanh (ko khuyên dùng) thêm type="module" vô thẻ script ở index.html
// - Vấn đề 2
// Nó tìm ko thấy module circle
// Fix (tạm) thêm ".js" vô sau circle trong './circle'

const c = new Circle(9);

//console.log(_radius.get(c));

c.draw();