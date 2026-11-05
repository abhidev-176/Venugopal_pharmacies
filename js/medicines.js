// ---------- MEDICINES DATA (20 items) ----------
// Real Unsplash photos grouped by what the item actually looks like.
// (Exact per-brand product shots aren't realistically sourceable for a demo site —
// these are correct by category: tablets look like tablets, syrup like syrup, etc.)
const IMG = {
  tablets: "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?q=80&w=600&auto=format&fit=crop",
  syrup:   "https://images.unsplash.com/photo-1647572485946-fae868d8b587?q=80&w=600&auto=format&fit=crop",
  device:  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop",
};

const medicines = [
  { name: "Paracetamol 500mg", cat: "Fever & Pain", price: "₹22", rx: false, img: IMG.tablets },
  { name: "Azithromycin 250mg", cat: "Antibiotic", price: "₹85", rx: true, img: IMG.tablets },
  { name: "Cetirizine 10mg", cat: "Allergy", price: "₹18", rx: false, img: IMG.tablets },
  { name: "Amoxicillin 500mg", cat: "Antibiotic", price: "₹60", rx: true, img: IMG.tablets },
  { name: "Ibuprofen 400mg", cat: "Pain Relief", price: "₹28", rx: false, img: IMG.tablets },
  { name: "Omeprazole 20mg", cat: "Antacid", price: "₹45", rx: false, img: IMG.tablets },
  { name: "Metformin 500mg", cat: "Diabetes", price: "₹32", rx: true, img: IMG.tablets },
  { name: "Amlodipine 5mg", cat: "Blood Pressure", price: "₹38", rx: true, img: IMG.tablets },
  { name: "Vitamin C 500mg", cat: "Supplement", price: "₹120", rx: false, img: IMG.tablets },
  { name: "ORS Sachets (10)", cat: "Rehydration", price: "₹40", rx: false, img: IMG.device },
  { name: "Cough Syrup 100ml", cat: "Cold & Cough", price: "₹65", rx: false, img: IMG.syrup },
  { name: "Multivitamin Tablets", cat: "Supplement", price: "₹210", rx: false, img: IMG.tablets },
  { name: "Diclofenac Gel", cat: "Pain Relief", price: "₹95", rx: false, img: IMG.device },
  { name: "Insulin Pen", cat: "Diabetes", price: "₹640", rx: true, img: IMG.device },
  { name: "Antiseptic Liquid", cat: "First Aid", price: "₹55", rx: false, img: IMG.syrup },
  { name: "Digital Thermometer", cat: "Devices", price: "₹180", rx: false, img: IMG.device },
  { name: "BP Monitor", cat: "Devices", price: "₹1450", rx: false, img: IMG.device },
  { name: "N95 Face Mask (5)", cat: "Protection", price: "₹150", rx: false, img: IMG.device },
  { name: "Calcium + D3 Tablets", cat: "Supplement", price: "₹165", rx: false, img: IMG.tablets },
  { name: "Pantoprazole 40mg", cat: "Antacid", price: "₹50", rx: true, img: IMG.tablets },
];

const grid = document.getElementById('medGrid');
grid.innerHTML = medicines.map(m => `
  <div class="med-card">
    <img class="med-img" src="${m.img}" alt="${m.name}" loading="lazy">
    <div class="med-body">
      <span class="med-cat">${m.cat}</span>
      <span class="med-name">${m.name}</span>
      <div class="med-foot">
        <span class="med-price">${m.price}</span>
        ${m.rx ? '<span class="med-rx">Rx</span>' : '<button class="med-add">Add</button>'}
      </div>
    </div>
  </div>
`).join('');

