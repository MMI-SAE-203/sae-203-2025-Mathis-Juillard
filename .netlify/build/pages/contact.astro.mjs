import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DDD3AwPw.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dr2rNooM.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-sans text-center mb-6">Contactez-nous</h1> <p class="text-xl font-mono text-center mb-10">Une question ? Une demande particulière ? Envoyez-nous un message et notre équipe vous répondra dans les plus brefs délais.</p> <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mb-15"> <form class="space-y-4"> <div> <label class="block font-sans mb-1">Nom/Prénom</label> <input type="text" placeholder="Entrez votre Nom" class="w-full p-3 font-mono border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"> </div> <div> <label class="block font-sans mb-1">Email</label> <input type="email" placeholder="Entrez votre adresse Email" class="w-full p-3  font-mono border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"> </div> <div> <label class="block font-sans mb-1">Message</label> <textarea rows="4" placeholder="Entrez votre message" class="w-full p-3 font-mono border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"></textarea> </div> <button type="submit" class="w-full bg-purple-950 text-white font-bold py-3 rounded-lg hover:bg-pink-500 transition">
Envoyer mon message
</button> </form> </div> <div> <h1 class="text-3xl text-center font-sans mb-20">Comment venir au festival ?</h1> <p class="font-mono text-center text-xl mb-35">Le Festival Miaullywood se tient à Pontarlier, au cinéma Olympia.
    Découvrez les options de transport, les horaires, et les informations sur l’accessibilité ici</p> </div> <div class="flex justify-center max-w-xl jusitfy-self-center items-center mx-auto mb-30"> <a href="/infopratique" class="bg-pink-300 text-white font-bold py-3 rounded-lg hover:bg-pink-500 transition flex justify-center">Voir les informations pratiques</a> </div> <div> <h1 class="text-3xl text-center font-sans mb-20">Vos questions, nos réponses</h1> <p class="font-mono text-center text-xl mb-35">Puis-je venir avec mon animal ?

        Non, seuls les animaux participants aux ateliers ou projections sont autorisés, sauf exceptions liées à l’accessibilité.
        
        Comment accéder aux projections en réalité virtuelle ?
        
        Vous pouvez profiter de l’expérience immersive en vous inscrivant à nos sessions spéciales VR.</p> </div> ` })}`;
}, "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/contact.astro", void 0);

const $$file = "/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
