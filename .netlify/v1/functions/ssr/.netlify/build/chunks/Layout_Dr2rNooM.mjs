import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, j as renderScript, r as renderTemplate, i as renderComponent, k as renderSlot, l as renderHead } from './astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const logo = new Proxy({"src":"/_astro/logo3.BY7Q0QvH.svg","width":64,"height":64,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/logo3.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="top-0 left-0 w-full flex items-center justify-between px-4 gap-8 border-b-2 border-b-gray-200 h-20 bg-white"> <img${addAttribute(logo.src, "src")} alt="Logo" class="w-12 h-12"> <a href="/" class="flex items-center"> <div class="text-xl font-bold text-pink-600"> <span class="block">Festival</span> <span class="block">Miaullywood</span> </div> </a> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="no-scroll font-sans flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-blue-400 transition-opacity duration-300 
  opacity-0 invisible lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:opacity-100 lg:visible overflow-x-hidden" aria-hidden="true"> <ul class="items-center flex flex-col gap-4 lg:flex-row"> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/">Accueil</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/films">Programme</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/activite">Activités</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/invite">Invités</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/apropos">À Propos</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/contact">Contact/FAQ</a> </li> <li> <a class="block p-4 rounded-lg text-rose-700 hover:text-pink-600" href="/infopratique">Info Pratique</a> </li> </ul> </nav></header> ${renderScript($$result, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Header.astro", void 0);

const facebook = new Proxy({"src":"/_astro/facebook.BrsiaxEM.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/facebook.svg";
							}
							
							return target[name];
						}
					});

const instagram = new Proxy({"src":"/_astro/instagram.D6woyrtq.svg","width":28,"height":28,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/instagram.svg";
							}
							
							return target[name];
						}
					});

const twitter = new Proxy({"src":"/_astro/twitter.BG_9kG7c.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/twitter.svg";
							}
							
							return target[name];
						}
					});

const youtube = new Proxy({"src":"/_astro/youtube.BBgajs0B.svg","width":34,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/youtube.svg";
							}
							
							return target[name];
						}
					});

const pate = new Proxy({"src":"/_astro/patechat.CequafsH.svg","width":191,"height":166,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/patechat.svg";
							}
							
							return target[name];
						}
					});

const chatfooter = new Proxy({"src":"/_astro/chatfooter2.B6k5jaNf.svg","width":394,"height":317,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/chatfooter2.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative  text-white overflow-hidden flex flex-col gap-0"> <div class="w-full max-w-lg z-20 justify-center mx-auto"> <img${addAttribute(chatfooter.src, "src")} alt="Chat Miaullywood" class="w-full relative justify-center"> </div> <div class="relative z-10 bg-[#2D2926]"> <div class="flex items-center"> <img${addAttribute(logo.src, "src")} alt="Logo" class="w-12 h-12"> <h2 class="text-xl font-semibold text-[#E08FB5]">Festival Miaullywood</h2> </div> <nav class="text-sm text-white text-center mb-6"> <h3 class="text-lg font-bold mb-2">Menu</h3> <ul class="space-y-2"> <li><a href="/mentions-legales" class="hover:text-[#E08FB5]">MENTIONS LÉGALES</a></li> <li><a href="/contacts" class="hover:text-[#E08FB5]">CONTACTS & ACCÈS</a></li> </ul> </nav> <p class="text-xs text-gray-400 text-center mb-6">
© 2024 Lionimation Festival - Tous droits réservés
<br> <a href="/mentions-legales" class="hover:text-[#E08FB5]">Mentions légales</a> |
<a href="/confidentialite" class="hover:text-[#E08FB5]">Politique de confidentialité</a> |
<a href="/conditions" class="hover:text-[#E08FB5]">Conditions générales</a> </p> <div class="text-center mb-6"> <h3 class="text-lg font-bold">Contact</h3> <p class="text-sm mt-2">
Cinéma Olympia-Pontarlier
<br>2 Rue Louis Pergaud
<br>03 84 54 27 27
<br><a href="mailto:miaullywood@gmail.com" class="hover:text-[#E08FB5]">miaullywood@gmail.com</a> </p> </div> <div class="text-center mb-6"> <h3 class="text-lg font-bold">Nous suivre</h3> <div class="flex justify-center space-x-6 mt-2"> <img${addAttribute(instagram.src, "src")} alt="Instagram" class="w-6 h-6"> <img${addAttribute(facebook.src, "src")} alt="Facebook" class="w-6 h-6"> <img${addAttribute(twitter.src, "src")} alt="Twitter" class="w-6 h-6"> <img${addAttribute(youtube.src, "src")} alt="YouTube" class="w-6 h-6"> </div> </div> </div> <div class="absolute bottom-10 left-10"> <img${addAttribute(pate.src, "src")} alt="Patte de chat" class="w-6 h-6"> </div> <div class="absolute bottom-5 right-10"> <img${addAttribute(pate.src, "src")} alt="Patte de chat" class="w-8 h-8"> </div> <div class="absolute top-1/2 left-1/4"> <img${addAttribute(pate.src, "src")} alt="Patte de chat" class="w-10 h-10"> </div> </footer>`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="/path-to-tailwind.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script>', "</head> <body> ", " <main> ", " </main> ", " </body></html>"])), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/layouts/Layout.astro", void 0);

export { $$Layout as $, pate as p };
