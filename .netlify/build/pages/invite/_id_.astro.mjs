import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { c as getInvites } from '../../chunks/backend_Dny1jRj-.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dr2rNooM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invites = await getInvites();
  const invite = invites.find((inv) => inv.id === id);
  if (!invite) {
    return Astro2.redirect("/invite");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center py-10 relative bg-gray-900/80"${addAttribute(`background: url('${invite.imageUrl || "/placeholder.jpg"}') center/cover no-repeat; backdrop-filter: blur(10px);`, "style")}> <div class="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full relative z-10"> <div class="md:flex"> <div class="min-h-screen flex flex-col items-center py-10"> <div class="relative w-80 max-w-6xl mx-auto"> <img${addAttribute(invite.imageUrl || "/placeholder.jpg", "src")}${addAttribute(`Photo de ${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-[500px] object-cover rounded-lg shadow-lg"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 rounded-lg"> <h1 class="text-4xl font-bold text-white">${invite.prenom} ${invite.nom}</h1> <p class="text-white text-lg mt-2">${invite.Role}</p> </div> </div> <div class="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6 w-full"> <div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Biographie</h2> <div class="prose prose-invert text-black text-xl font-mono"> <p>${unescapeHTML(invite.biographie || "Aucune biographie disponible.")}</p> </div> </div> <div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Informations</h2> <div class="prose prose-invert text-black text-xl font-mono"> <ul class="space-y-2 text-gray-700"> <li><span class="font-medium">Rôle :</span> ${invite.Role}</li> ${invite.company && renderTemplate`<li><span class="font-medium">Société :</span> ${invite.company}</li>`} ${invite.expertise && renderTemplate`<li><span class="font-medium">Expertise :</span> ${invite.expertise}</li>`} </ul> </div> </div> <div class="mt-6 flex justify-center"> <a href="/invite" class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
Retour aux invités
</a> </div> </div> </div> </div></div></div>` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/[id].astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
