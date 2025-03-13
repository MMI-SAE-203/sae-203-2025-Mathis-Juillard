import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dr2rNooM.mjs';
export { renderers } from '../renderers.mjs';

const $$Infopratique = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Infos Pratiques" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-5xl font-bold text-center mb-8 uppercase">Infos Pratiques</h1> <section class="mb-8 flex flex-col items-center"> <h2 class="text-3xl font-bold mb-4">Tarifs</h2> <p>Billet individuel : 10€</p> <p>Réductions pour étudiants et enfants</p> </section> <section class="mb-8 flex flex-col items-center"> <h2 class="text-3xl font-bold mb-4">Lieux</h2> <p><strong>Cinéma Olimpyia</strong></p> <p><strong>Square Leclerc</strong> : Projection plein air</p> </section> <section class="mb-8 flex flex-col items-center"> <h2 class="text-3xl font-bold mb-4">Transport</h2> <p>Train : Gare de Pontarlier, accessible en 10 min</p> <p>Parking : Gratuit sur place</p> </section> <section class="mb-8 flex flex-col items-center"> <h2 class="text-3xl font-bold mb-4">Hébergement</h2> <p>Suggestions d’hôtels ou campings proches</p> </section> </div> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/infopratique.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/infopratique.astro";
const $$url = "/infopratique";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Infopratique,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
