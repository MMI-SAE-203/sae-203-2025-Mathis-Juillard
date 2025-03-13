import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout, p as pate } from '../chunks/Layout_Dr2rNooM.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const Chat = new Proxy({"src":"/_astro/chat.BTDCxBya.avif","width":751,"height":844,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/chat.avif";
							}
							
							return target[name];
						}
					});

const chatcine = new Proxy({"src":"/_astro/chatcine.Di7oZLrG.avif","width":684,"height":456,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/chatcine.avif";
							}
							
							return target[name];
						}
					});

const cinemacarou = new Proxy({"src":"/_astro/cinemacarou.B3PlBiI8.avif","width":623,"height":384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/cinemacarou.avif";
							}
							
							return target[name];
						}
					});

const enfantvr = new Proxy({"src":"/_astro/enfantsvr.w78KqOl7.avif","width":623,"height":384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/enfantsvr.avif";
							}
							
							return target[name];
						}
					});

const cinemadehors = new Proxy({"src":"/_astro/cinemadehors.DDGIelMs.avif","width":623,"height":384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/cinemadehors.avif";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Carrousel = createComponent(($$result, $$props, $$slots) => {
  const images = [cinemacarou.src, enfantvr.src, cinemadehors.src];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg"> <div id="carousel" class="flex transition-transform duration-500 ease-in-out"> ', ' </div> <button id="prev" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">\n\u25C0\n</button> <button id="next" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">\n\u25B6\n</button> <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2"> ', ' </div> </div> <script type="module">\n  const carousel = document.getElementById("carousel");\n  const images = document.querySelectorAll("#carousel img");\n  let currentIndex = 0;\n  const totalSlides = images.length;\n  const indicators = document.querySelectorAll(".indicator");\n\n  function updateCarousel() {\n    const slideWidth = carousel.clientWidth; \n    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;\n    \n    indicators.forEach((dot, i) => {\n      dot.classList.toggle("bg-white", i === currentIndex);\n      dot.classList.toggle("bg-gray-500", i !== currentIndex);\n    });\n  }\n\n  window.addEventListener("resize", updateCarousel); \n\n  document.getElementById("prev").addEventListener("click", () => {\n    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;\n    updateCarousel();\n  });\n\n  document.getElementById("next").addEventListener("click", () => {\n    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;\n    updateCarousel();\n  });\n\n  indicators.forEach(dot => {\n    dot.addEventListener("click", () => {\n      currentIndex = parseInt(dot.dataset.index);\n      updateCarousel();\n    });\n  });\n\n  updateCarousel();\n<\/script>'], ["", '<div class="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg"> <div id="carousel" class="flex transition-transform duration-500 ease-in-out"> ', ' </div> <button id="prev" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">\n\u25C0\n</button> <button id="next" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">\n\u25B6\n</button> <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2"> ', ' </div> </div> <script type="module">\n  const carousel = document.getElementById("carousel");\n  const images = document.querySelectorAll("#carousel img");\n  let currentIndex = 0;\n  const totalSlides = images.length;\n  const indicators = document.querySelectorAll(".indicator");\n\n  function updateCarousel() {\n    const slideWidth = carousel.clientWidth; \n    carousel.style.transform = \\`translateX(-\\${currentIndex * slideWidth}px)\\`;\n    \n    indicators.forEach((dot, i) => {\n      dot.classList.toggle("bg-white", i === currentIndex);\n      dot.classList.toggle("bg-gray-500", i !== currentIndex);\n    });\n  }\n\n  window.addEventListener("resize", updateCarousel); \n\n  document.getElementById("prev").addEventListener("click", () => {\n    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;\n    updateCarousel();\n  });\n\n  document.getElementById("next").addEventListener("click", () => {\n    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;\n    updateCarousel();\n  });\n\n  indicators.forEach(dot => {\n    dot.addEventListener("click", () => {\n      currentIndex = parseInt(dot.dataset.index);\n      updateCarousel();\n    });\n  });\n\n  updateCarousel();\n<\/script>'])), maybeRenderHead(), images.map((src, i) => renderTemplate`<img${addAttribute(src, "src")}${addAttribute(`Image ${i + 1}`, "alt")} class="w-full h-64 sm:h-80 md:h-[500px] object-cover flex-shrink-0">`), images.map((_, i) => renderTemplate`<button class="indicator w-3 h-3 rounded-full bg-gray-500"${addAttribute(i, "data-index")}></button>`));
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Carrousel.astro", void 0);

const dehors = new Proxy({"src":"/_astro/dehors.AV6PODP3.avif","width":639,"height":852,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/dehors.avif";
							}
							
							return target[name];
						}
					});

const partenaire = new Proxy({"src":"/_astro/partenaire1.VmBXM4nL.avif","width":419,"height":258,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/partenaire1.avif";
							}
							
							return target[name];
						}
					});

const partenaire2 = new Proxy({"src":"/_astro/partenaire2.DxlLVM68.avif","width":331,"height":250,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/partenaire2.avif";
							}
							
							return target[name];
						}
					});

const partenaire3 = new Proxy({"src":"/_astro/partenaire3.CxllYQRP.avif","width":372,"height":372,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/partenaire3.avif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate` <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link href="/path-to-tailwind.css" rel="stylesheet"> ${maybeRenderHead()}<main class="p-4"> <section class="flex flex-col items-center"> <img${addAttribute(Chat.src, "src")} alt="Chat stylisé" class="w-40 h-auto"> <h1 class=" text-3xl font-sans text-center text-pink-100 font-bold mt-4">
Découvrez l’univers félin du cinéma !
</h1> <p class="font-mono text-center text-sm mt-2 text-black font-semibold bg-pink-100 w-full">
27 - 29 juin 2025 à Pontarlier.
</p> </section> <div class="flex justify-center mt-4 w-full"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2 rotate-45"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2 rotate-300"> </div> <section class="font-mono mt-6"> <p>
Le Festival Miaullywood célèbre le lien entre le cinéma et la cause animale, 
          en mettant à l’honneur nos compagnons félins à travers des projections, des ateliers et des 
          expériences immersives. Profitez d’un moment de partage unique, que vous soyez passionné de 
          cinéma ou amoureux des animaux !
</p> </section> <section class="mt-6"> <img${addAttribute(chatcine.src, "src")} alt="Chat au cinéma" class="w-1/2 h-auto mx-auto"> </section> <div class="flex justify-center mt-4"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2"> <img${addAttribute(pate.src, "src")} alt="pate" class="ww-20 h-16 mx-2"> </div> <section class="mt-6"> <h2 class="font-sans text-center text-pink-100 text-xl font-bold pb-10">
Les temps forts du festival
</h2> ${renderComponent($$result2, "Carrousel", $$Carrousel, {})} </section> <section class="font-sans p-4 mt-15"> <p>
Ne manquez pas les projections en plein air, les ateliers créatifs autour des chats et les conférences sur la protection animale, avec des films inédits pour toute la famille.
</p> <div class="flex justify-center mt-4"> <img${addAttribute(dehors.src, "src")} alt="Projection en plein air" class="w-1/2 h-auto mx-auto"> </div> <div class="flex justify-center mt-4"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2"> <img${addAttribute(pate.src, "src")} alt="pate" class="w-20 h-16 mx-2"> </div> </section> <section class="font-sans text-pink-100 mt-6"> <p class="text-center mb-10 text-2xl">Nos partenaires</p> <div class="flex flex-wrap justify-center gap-4 mt-4 mb-10"> <img${addAttribute(partenaire.src, "src")} alt="Partenaire 1" class="w-24 sm:w-32 md:w-40 h-auto"> <img${addAttribute(partenaire2.src, "src")} alt="Partenaire 2" class="w-24 sm:w-32 md:w-40 h-auto"> <img${addAttribute(partenaire3.src, "src")} alt="Partenaire 3" class="w-24 sm:w-32 md:w-40 h-auto"> </div> </section> <section class="font-sans mt-6 text-center"> <p class="mb-4 text-2xl mb-10">Achetez vos billets !</p> <button class="bg-pink-500 text-white font-bold rounded-lg px-4 py-2 mt-2">
BILLETTERIE
</button> </section> </main> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
