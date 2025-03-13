import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B5KAWsMa.mjs';
export { renderers } from '../renderers.mjs';

const pleineaire = new Proxy({"src":"/_astro/pleineaire.quGDI5I_.avif","width":627,"height":400,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/pleineaire.avif";
							}
							
							return target[name];
						}
					});

const chienhomme = new Proxy({"src":"/_astro/chienhomme.DphKfiOT.avif","width":623,"height":384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/chienhomme.avif";
							}
							
							return target[name];
						}
					});

const camera = new Proxy({"src":"/_astro/camera.6mp5MRTq.avif","width":623,"height":384,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/assets/camera.avif";
							}
							
							return target[name];
						}
					});

const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "\xC0 propos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-12 px-6"> <div class="container mx-auto max-w-4xl"> <h1 class="text-4xl font-bold text-gray-900 text-center mb-6">À propos</h1> <section class="mb-12"> <h2 class="text-2xl font-bold mb-2">Historique</h2> <p class="text-gray-800 leading-relaxed">
Un festival unique mêlant cinéma et amour des animaux.
</p> <p class="text-gray-800 leading-relaxed mt-4 font-mono">
Le Festival Miaullywood a été créé en 2025 avec une vision simple : 
                    combiner la passion du cinéma avec la sensibilisation à la cause animale, 
                    tout en mettant en avant les chats, ces compagnons qui inspirent tendresse et fascination.
</p> <div class="mt-6"> <img${addAttribute(pleineaire.src, "src")} alt="Festival en plein air" class="w-full rounded-lg shadow-md"> </div> <p class="text-gray-800 leading-relaxed mt-4 font-mono">
L'objectif du festival est de proposer un espace inclusif, immersif et ludique, 
                    où le cinéma devient un outil pour éduquer et divertir, tout en célébrant la beauté et la complexité du lien entre humains et animaux.
</p> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-2">Équipe</h2> <p class="text-gray-800 leading-relaxed">
Des passionnés à l'œuvre.
</p> <p class="text-gray-800 leading-relaxed mt-2 font-mono"> <strong>Organisateurs :</strong>
L'équipe est dirigée par [Nom du directeur ou de l'association organisatrice], 
                    un groupe de passionnés de cinéma et de défense des droits des animaux.
</p> <p class="text-gray-800 leading-relaxed mt-2 font-mono"> <strong>Équipe technique :</strong>
Des experts en événementiel, des techniciens audiovisuels et des bénévoles engagés 
                    travaillent main dans la main pour garantir une expérience inoubliable.
</p> <div class="grid grid-cols-2 gap-4 mt-6"> <img${addAttribute(chienhomme.src, "src")} alt="Membre de l'équipe avec un chien" class="w-full rounded-lg shadow-md"> <img${addAttribute(camera.src, "src")} alt="Tournage en plein air" class="w-full rounded-lg shadow-md"> </div> </section> <section class="mb-12"> <h2 class="text-2xl font-bold mb-2">Charte</h2> <p class="text-gray-800 leading-relaxed mb-4">
Nos valeurs et notre thématique pour cette édition.
</p> <ul class="list-decimal list-inside space-y-4 text-gray-800 font-mono"> <li> <strong>Amour des chats et des animaux :</strong>
Chaque activité et projection vise à sensibiliser à la protection des animaux, 
                        notamment les chats, tout en célébrant leur présence dans nos vies.
</li> <li> <strong>Accessibilité et convivialité :</strong>
Le festival est ouvert à tous, avec des tarifs adaptés, 
                        des installations inclusives pour les personnes à mobilité réduite 
                        et des espaces accueillants pour toutes les tranches d’âge.
</li> <li> <strong>Innovation et immersion :</strong>
Cette édition met en avant des expériences immersives grâce à la réalité virtuelle, 
                        des projections en plein air et des ateliers interactifs.
</li> <li> <strong>Engagement écologique :</strong>
Mise en place de pratiques éco-responsables en limitant les déchets, 
                        en utilisant des matériaux recyclés et en collaborant avec des acteurs locaux.
</li> </ul> </section> <div class="text-center mt-8"> <a href="/films" class="bg-pink-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-pink-600 transition">
→ PROGRAMME
</a> </div> </div> </div> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/apropos.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/apropos.astro";
const $$url = "/apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Apropos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
