import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { g as getActivities } from '../../chunks/backend_Dny1jRj-.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dr2rNooM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activities = await getActivities();
  const activity = activities.find((act) => act.id === id);
  if (!activity) {
    return Astro2.redirect("/activites");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center py-10 relative bg-gray-900/80"${addAttribute(`background: url('${activity.imageUrl || "/placeholder.jpg"}') center/cover no-repeat; backdrop-filter: blur(10px);`, "style")}> <div class="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full relative z-10"> <div class="md:flex"> <div class="min-h-screen flex flex-col items-center py-10"> <div class="relative w-80 max-w-6xl mx-auto"> <img${addAttribute(activity.imageUrl || "/placeholder.jpg", "src")}${addAttribute(`Image de ${activity.nom_activite}`, "alt")} class="w-full h-[500px] object-cover rounded-lg shadow-lg"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 rounded-lg"> <h1 class="text-4xl font-bold text-white">${activity.nom_activite}</h1> <p class="text-white text-lg mt-2">${new Date(activity.date_heure_activite).toLocaleString()}</p> </div> </div> <div class="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6 w-full"> <div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Description</h2> <div class="prose prose-invert text-black text-xl font-mono"> <p>${unescapeHTML(activity.description_activite || "Aucune description disponible.")}</p> </div> </div> ${activity.invite && renderTemplate`<div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Invité associé</h2> <div class="prose prose-invert text-black text-xl font-mono"> <ul class="space-y-2 text-gray-700"> <li><span class="font-medium">Nom :</span> ${activity.invite.prenom} ${activity.invite.nom}</li> ${activity.invite.Role && renderTemplate`<li><span class="font-medium">Rôle :</span> ${activity.invite.Role}</li>`} </ul> </div> </div>`} <div class="mt-6 flex justify-center"> <a href="/activite" class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
Retour aux activités
</a> </div> </div> </div> </div> </div></div>` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/[id].astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/[id].astro";
const $$url = "/activite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
