const plants = [
  {
    name: "สับปะรด (Pineapple)",
    sci: "Ananas comosus",
    desc: "สับปะรดเป็นพืชล้มลุก ผลหวานและมีกลิ่นหอม นิยมบริโภคสดหรือทำเป็นน้ำผลไม้และอาหารแปรรูป ลำต้นเตี้ย มีมงกุฎใบเรียงเป็นวงที่ยอด ใช้ขยายพันธุ์ด้วยหน่อหรือเมล็ด ต้องการแสงแดดจัดและอากาศร้อนชื้น ดินร่วนระบายน้ำดี ทนแล้งได้เล็กน้อย การดูแลไม่ยุ่งยากและเหมาะสำหรับปลูกในสวนครัวหรือสวนผลไม้ขนาดเล็ก",
    img: "pipa.jpg"
  },
  {
    name: "มะเขื้อ (Eggplant)",
    sci: "Solanum melongena",
    desc: "มะเขือเป็นพืชผักล้มลุก นิยมปลูกในสวนครัว มีหลายพันธุ์ เช่น มะเขือม่วง มะเขือเขียว มะเขือขาว ผลสามารถนำมาประกอบอาหารได้หลากหลาย เช่น แกง ผัด หรือย่าง ลำต้นสูงประมาณ 50–150 ซม. ใบใหญ่และหนา ต้องการแสงแดดจัดและน้ำสม่ำเสมอ ดินร่วนระบายน้ำดี ใส่ปุ๋ยเป็นประจำเพื่อให้ผลโตและมีคุณภาพ",
    img: "mak.jpg"
  }
];

// เก็บลง localStorage เพื่อ detail.html ดึง
localStorage.setItem('plants', JSON.stringify(plants));

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");

// แสดงการ์ดต้นไม้
function displayPlants(filter = "") {
  gallery.innerHTML = "";
  plants.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="card-content">
          <h3>${p.name}</h3>
          <p><i>${p.sci}</i></p>
        </div>`;
      card.addEventListener("click", () => {
        // ไป detail.html พร้อมชื่อ
        window.location.href = `detail.html?name=${encodeURIComponent(p.name)}`;
      });
      gallery.appendChild(card);
    });
}

// ค้นหาเรียลไทม์
search.addEventListener("input", e => displayPlants(e.target.value));

// แสดงตอนเริ่มต้น
displayPlants();
