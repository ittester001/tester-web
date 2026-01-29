function normalize(s){ return (s||"").toLowerCase().trim(); }

const elCatalog = document.getElementById("catalog");
const elQ = document.getElementById("q");
const elCat = document.getElementById("cat");
const elCountCat = document.getElementById("countCat");
const elCountItem = document.getElementById("countItem");
const clearBtn = document.getElementById("clearBtn");

function renderCategoryOptions(){
  const options = [
    { value: "all", label: "ทั้งหมด" },
    ...CATALOG.map(c => ({ value: c.id, label: `${c.icon} ${c.title}` }))
  ];
  elCat.innerHTML = options.map(o => `<option value="${o.value}">${o.label}</option>`).join("");
}

function matchItem(q, item){
  if(!q) return true;
  const hay = normalize(item.name + " " + item.use);
  return hay.includes(q);
}

function render(){
  const q = normalize(elQ.value);
  const selected = elCat.value;

  const filtered = CATALOG
    .filter(cat => selected==="all" ? true : cat.id===selected)
    .map(cat => {
      const items = q ? cat.items.filter(it => matchItem(q,it)) : cat.items;
      return { ...cat, items };
    })
    .filter(cat => cat.items.length>0);

  elCountCat.textContent = filtered.length;
  elCountItem.textContent = filtered.reduce((s,c)=>s+c.items.length,0);

  elCatalog.innerHTML = filtered.map(cat => `
    <a class="card link-card" href="./category.html?id=${encodeURIComponent(cat.id)}">
      <p class="cat-title">${cat.icon} ${cat.title}</p>
      <p class="cat-desc">${cat.desc}</p>
      <div class="row" style="margin-top:10px;">
        <span class="badge">คลิกเพื่อดูหมวดนี้ →</span>
      </div>
    </a>
  `).join("") || `
    <section class="card">
      <p style="margin:0; font-weight:900;">ไม่พบข้อมูล 🥲</p>
      <p class="sub">ลองค้นหาคำอื่น เช่น “ท่อ” “พื้น” “หลังคา” “กันลื่น”</p>
    </section>
  `;
}

elQ.addEventListener("input", render);
elCat.addEventListener("change", render);
clearBtn.addEventListener("click", ()=>{
  elQ.value = "";
  elCat.value = "all";
  render();
  showToast("ล้างตัวกรองแล้ว ✅");
});

renderCategoryOptions();
render();
