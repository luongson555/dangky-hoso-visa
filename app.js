const KEY='visa_demo_records_v1';
function records(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}}
function saveRecords(v){localStorage.setItem(KEY,JSON.stringify(v))}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
