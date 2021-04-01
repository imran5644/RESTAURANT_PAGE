(()=>{"use strict";const e=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");return t.src="images/burger.jpg",t.alt="burger-image",e.appendChild(((e,t)=>{const n=document.createElement("div");n.classList.add("paraItem");const a=document.createElement("p");a.textContent=t;const d=document.createElement("p");return d.textContent=e,n.appendChild(a),n.appendChild(d),n})("Eat healthy and Natural Food","Discover your taste")),e.appendChild(t),e})())},t=(e,t)=>{const n=document.createElement("div");n.classList.add("menuItem");const a=document.createElement("h1");a.textContent=e;const d=document.createElement("p");d.textContent=t;const c=document.createElement("img");return c.src=`images/burgers/${e.toLowerCase()}.jpg`,c.alt=`${e}`,n.appendChild(a),n.appendChild(c),n.appendChild(d),n},n=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("contact"),e.appendChild(((e,t,n,a,d)=>{const c=document.createElement("div");c.classList.add("contactItems");const o=document.createElement("h1");o.textContent=e;const s=document.createElement("p");s.textContent=t;const r=document.createElement("p");r.textContent=n;const i=document.createElement("p");i.textContent=a;const l=document.createElement("p");return l.textContent=d,c.appendChild(o),c.appendChild(s),c.appendChild(r),c.appendChild(i),c.appendChild(l),c})("Contact Us","Address: 1011 Oakwood Ave NE, Massillon, OH 44646","Phone No: (999)-444-09090","Working Days: Mon-Fri","Time: 08:00am-09:00pm")),e})())},a=()=>{const a=document.createElement("nav");a.classList.add("navbar");const c=document.createElement("button");c.classList.add("navbar-btn"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(c),e())}));const o=document.createElement("button");o.classList.add("navbar-btn"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(d(o),(()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Barbecue Burger","Prepared with ground beef, mixed with onions and barbecue sauce, and then grilled.")),e.appendChild(t("Butter Burger","Burgers are often made with a buttered bun, butter as one of the ingredients of the patty or with a pat of butter on top of the burger patty")),e.appendChild(t("Cheese Burger","Hamburger accompanied with melted cheese. The cheese is usually sliced, then added a short time before the hamburger finishes cooking to allow it to melt. ")),e.appendChild(t("Kimchi Burger","A hamburger that includes kimchi in its preparation")),e.appendChild(t("Rice Burger","Style of hamburger in which the bun is a compressed cake of rice.")),e.appendChild(t("Veggie Burger","Textured vegetable protein, seitan (wheat gluten), Quorn, beans, grains or an assortment of vegetables, which are ground up and formed into patties.")),e})())})())}));const s=document.createElement("button");return s.classList.add("navbar-btn"),s.textContent="Contact",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(d(s),n())})),a.appendChild(c),a.appendChild(o),a.appendChild(s),a},d=e=>{document.querySelectorAll(".navbar-btn").forEach((e=>{void 0!==e&&e.classList.remove("active")})),e.classList.add("active")};(()=>{const t=document.getElementById("content");t.appendChild((()=>{const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("restaurant-name"),t.textContent="Special Burgers",e.appendChild(t),e.appendChild(a()),e})()),t.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e})()),t.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent="Developed with ♥ by Imran Yousaf";const n=document.createElement("a");n.href="https://github.com/imran5644";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e})()),d(document.querySelector(".navbar-btn")),e()})()})();