import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B5KAWsMa.mjs';
import 'clsx';
import { d as getInvitesByRole, c as getInvites } from '../chunks/backend_B55VZrsM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-pink-500 to-pink-100 text-white font-nunito p-[1em] flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out w-[14em] h-[20em] mt-20"> <div class="w-full h-[12em] overflow-hidden rounded-t-[1.3em] flex justify-center items-center"> <img${addAttribute(invite.imageUrl, "src")}${addAttribute(invite.nom, "alt")} class="w-full h-full object-contain"> </div> <h1 class="text-[1.2em] font-medium text-center mt-2 px-2"> ${invite.nom} ${invite.prenom} </h1> <p class="text-center text-sm px-2">${invite.profession}</p> <a${addAttribute(`/invite/${invite.id}`, "href")} class="text-red-500 underline mt-auto mb-2">Voir plus</a> </div>`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/CardInvite.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Role } = Astro2.url.searchParams;
  const selectedRole = Role || "";
  let invites = [];
  if (selectedRole) {
    invites = await getInvitesByRole(selectedRole);
  } else {
    invites = await getInvites();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 mb-10 flex flex-col items-center mt-15"> <h1 class="text-5xl font-sans text-center mb-8 uppercase">Nos Invités</h1> <form method="get" action="" class="mb-8"> <div class="w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]"> <legend class="text-xl font-semibold mb-3 select-none">Choisir un rôle</legend> <label for="animateur"${addAttribute(`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg ${selectedRole === "animateur" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""} select-none`, "class")}> <div class="w-5 fill-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 512 512"> <path d="M256 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zM256 464c-107 0-194-87-194-194s87-194 194-194 194 87 194 194-87 194-194 194z"></path> </svg> </div>
Animateur
<input type="radio" name="role" value="animateur" class="w-4 h-4 absolute accent-blue-500 right-3" id="animateur"${addAttribute(selectedRole === "animateur", "checked")} onchange="this.form.submit()"> </label> <label for="realisateur"${addAttribute(`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg ${selectedRole === "realisateur" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""} select-none`, "class")}> <div class="w-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 5h-14c-1.104 0-1.995.897-1.995 2l-.005 12c0 1.103.895 2 1.995 2h14c1.104 0 1.995-.897 1.995-2v-12c0-1.103-.895-2-1.995-2zM19 19h-14v-12h14v12zM7 15h10v2h-10zm0-4h10v2h-10z"></path> </svg> </div>
Réalisateur
<input type="radio" name="role" value="realisateur" class="w-4 h-4 absolute accent-blue-500 right-3" id="realisateur"${addAttribute(selectedRole === "realisateur", "checked")} onchange="this.form.submit()"> </label> <label for="acteur"${addAttribute(`font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg ${selectedRole === "acteur" ? "text-blue-500 bg-blue-50 ring-blue-300 ring-1" : ""} select-none`, "class")}> <div class="w-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"></path> </svg> </div>
Acteur
<input type="radio" name="role" value="acteur" class="w-4 h-4 absolute accent-blue-500 right-3" id="acteur"${addAttribute(selectedRole === "acteur", "checked")} onchange="this.form.submit()"> </label> ${selectedRole && renderTemplate`<div class="mt-2 text-center"> <a href="?" class="text-blue-500 hover:underline">Voir tous les invités</a> </div>`} </div> </form> <!-- Grille des invités filtrés --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"> ${invites && invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> ${invites.length === 0 && renderTemplate`<p class="text-center text-gray-500 mt-8">Aucun invité trouvé pour ce rôle.</p>`} </div> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/index.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
