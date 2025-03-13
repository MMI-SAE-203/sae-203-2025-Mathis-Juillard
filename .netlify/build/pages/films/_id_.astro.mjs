import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { a as getFilmById } from '../../chunks/backend_B55VZrsM.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B5KAWsMa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await getFilmById(id);
  if (!film) {
    return Astro2.redirect("/films");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center py-10 relative bg-gray-900/80"${addAttribute(`background: url('${film.imageUrl || "/placeholder.jpg"}') center/cover no-repeat; backdrop-filter: blur(10px);`, "style")}> <div class="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full relative z-10"> <div class="md:flex"> <div class="min-h-screen flex flex-col items-center py-10"> <div class="relative w-80 max-w-6xl mx-auto"> <img${addAttribute(film.imageUrl, "src")}${addAttribute(`Affiche de ${film.titre_film}`, "alt")} class="w-full h-[500px] object-cover rounded-lg shadow-lg"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 rounded-lg"> <h1 class="text-4xl font-bold text-white">${film.titre_film}</h1> <p class="text-white text-lg mt-2">${film.duree_film} min • ${film.langue}</p> </div> </div> <div class="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6 w-full"> <div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Synopsis</h2> <div class="prose prose-invert text-black text-xl font-mono"> <p>${unescapeHTML(film.synopsis_film)}</p> </div> </div> <div class="mb-6"> <h2 class="text-2xl font-semibold mb-2 font-sans">Informations</h2> <div class="prose prose-invert text-black text-xl font-mono"> <ul class="space-y-2 text-gray-700"> <li><span class="font-medium">Réalisateur :</span> ${film.realisateur}</li> <li><span class="font-medium">Acteurs :</span> ${film.list_acteur}</li> <li><span class="font-medium">Production :</span> ${film.production}</li> </ul> </div> </div> <h2 class="text-2xl font-semibold mb-2 font-sans">Bande-annonce</h2> <div class="mb-6 justify-self-center"> ${film.trailer_film ? renderTemplate`<div class="relative w-full h-0" style="padding-bottom: 56.25%;"> <iframe width="560" height="315"${addAttribute(film.trailer_film, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>` : renderTemplate`<p class="text-gray-700">Pas de bande-annonce disponible</p>`} </div> <div class="mt-6 flex justify-center"> <a href="/films" class="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
Retour aux films
</a> </div> </div> </div> </div></div></div>` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/films/[id].astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
