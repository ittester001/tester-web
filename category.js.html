function getParam(name){
  return new URL(window.location.href).searchParams.get(name);
}
function findCat(id){
  return CATALOG.find(c => c.id === id);
}

const catId = getParam("id");
const cat = findCat(catId);

const titleEl = document.getElementById("catTitle");
const descEl  = document.getElementById("catDesc");
const itemsEl = document.getElementById("items");

if(!cat){
  titleEl.textContent = "ไม่พบหมวดนี้ 🥲";
  descEl.textContent = "ลิงก์อาจผิด หรือยังไม่ได้ใส่หมวดนี้ใน catalog.js";
  itemsEl.innerHTML = `<a class="btn" href="./products.html">← กลับไปหน้า Products</a>`;
}else{
  titleEl.textContent = `${cat.icon} ${cat.title}`;
  descEl.textContent = cat.desc;
  itemsEl.innerHTML = cat.items.map(it => `
    <div class="item">
      <p class="name">${it.name}</p>
      <p class="use">${it.use}</p>
    </div>
  `).join("");
}
