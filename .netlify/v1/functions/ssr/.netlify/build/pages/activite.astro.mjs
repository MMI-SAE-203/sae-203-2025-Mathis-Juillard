import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dr2rNooM.mjs';
import 'clsx';
import { g as getActivities } from '../chunks/backend_Dny1jRj-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardactivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardactivite;
  const { ...activity } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-pink-500 to-pink-100 text-white font-nunito p-[1em] flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out w-[14em] h-[20em]"> <div class="w-full h-[12em] overflow-hidden rounded-t-lg flex justify-center items-center"> <img${addAttribute(activity.imageUrl, "src")}${addAttribute(`Image de l'activit\xE9 ${activity.nom_activite}`, "alt")} class="w-full h-full object-contain"> </div> <div class="text-center mt-3 px-2"> <h1 class="text-[1.2em] font-semibold">${activity.nom_activite}</h1> <p class="text-gray-500 text-sm">${new Date(activity.date_heure_activite).toLocaleString()}</p> </div> <a${addAttribute(`/activite/${activity.id}`, "href")} class="text-blue-600 underline mt-auto mb-2">Voir plus</a> </div>`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Cardactivite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activities = await getActivities();
  console.log("Donn\xE9es des activit\xE9s:", activities);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Activit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 mb-10  flex flex-col items-center "> <h1 class="text-5xl font-sans text-center mb-8 uppercase">Nos Activités</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"> ${activities && activities.map((activity) => renderTemplate`${renderComponent($$result2, "CardActivite", $$Cardactivite, { ...activity })}`)} </div> </div> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/index.astro";
const $$url = "/activite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
