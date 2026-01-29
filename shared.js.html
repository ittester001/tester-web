function $(id){ return document.getElementById(id); }

const toast = $("toast");
function showToast(msg){
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=>toast.classList.remove("show"), 2200);
}

const yearEl = $("year");
if(yearEl) yearEl.textContent = String(new Date().getFullYear());

// LINE popup (QR only)
const lineFab = $("lineFab");
const lineBackdrop = $("lineModalBackdrop");
const closeLineModal = $("closeLineModal");

function openLineModal(){
  if(!lineBackdrop) return;
  lineBackdrop.style.display = "flex";
  lineBackdrop.setAttribute("aria-hidden","false");
}
function hideLineModal(){
  if(!lineBackdrop) return;
  lineBackdrop.style.display = "none";
  lineBackdrop.setAttribute("aria-hidden","true");
}

lineFab?.addEventListener("click", openLineModal);
closeLineModal?.addEventListener("click", hideLineModal);
lineBackdrop?.addEventListener("click", (e)=>{ if(e.target===lineBackdrop) hideLineModal(); });
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") hideLineModal(); });
