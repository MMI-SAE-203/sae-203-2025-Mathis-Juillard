import {allFilmsSortedByProjectionDate} from './backend.mjs';
try {
    const films = await allFilmsSortedByProjectionDate();
    console.table(JSON.stringify(films, null, 2));
} catch (e) {
    console.error(e);
}


// try {
//     const oneRecord = await oneID('398qs928q9er13u');
//     console.table(oneRecord);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonF = await allMaisonsFavori();
//     console.table(maisonF);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonsSorted = await allMaisonsSorted();
//     console.table(maisonsSorted);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonsBySurface = await bySurface(100);
//     console.table(maisonsBySurface);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonsSurfaceOrPrice = await surfaceORprice(100, 100000);
//     console.table(maisonsSurfaceOrPrice);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const agent = await agentById('43kpge23iv49tlr');
//     console.table(agent);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonsAgents = await allMaisonsAgents();
//     console.log(JSON.stringify(maisonsAgents, null, 2));
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maison = await allMaisonsByAgentId('43kpge23iv49tlr');
//     console.table(maison);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maison = await allMaisonsByAgentName('ludwig');
//     console.table(maison);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const maisonsSortedAgent = await allMaisonsSortedAgent();
//     console.table(maisonsSortedAgent);
// } catch (e) {
//     console.error(e);
// }


// try {
//     const maisonsBySurfaceAgent = await bySurfaceAgent(100, 'l05mdtj0055939n');
//     console.table(maisonsBySurfaceAgent);
// } catch (e) {
//     console.error(e);
// }


// try {
//     const maisonFavori = await maisonFavoriAgent("jvgy483dclpctk8");
//     console.table(maisonFavori);
// } catch (e) {
//     console.error(e);
// }


// try {
//     const newMaison = {
//         "nom_maison": "MaisonMMI",
//         "Adresse": "Rue test Montbéliard",
//         "superficie": 150,
//         "Prix": 100000,
//         "favori": true,
//         "Nombre_chambre": 5,
//         "Nombre_sdb": 2,
//         "Agent": "43kpge23iv49tlr"
//     };
//     // await addNewMaison(newMaison);
//     console.log("Maison ajoutée");
// } catch (e) {
//     console.error(e);
// }


// try {
//     const newAgent = {
//         "nom": "AgentMMI",
//         "prenom": "Mathis",
//         "email": "agentmmi@example.com",
//     };
//     // await addNewAgent(newAgent);
//     console.log("Agent ajouté");
// } catch (e) {
//     console.error(e);
// }


// try {
//     const recordId = 'z67kmw3bohv0hy3';
//     // await deleteMaisonById(recordId);
//     console.log("Maison supprimée");
// } catch (e) {
//     console.error(e);
// }


// try {
//     const agentId = '0oln692yb60c7fy';
//     // await deleteAgentById(agentId);
//     console.log("Agent supprimé");
// } catch (e) {
//     console.error(e);
// }


// try {
//     const data = {
//         "nom_maison": "test",
//         "superficie": 120,
//         "favori": true
//     };
//     const recordId = 'e03l1n30067j3z2';
//     // await updateMaisonById(recordId, data);
//     console.log("Maison mise à jour");
// } catch (e) {
//     console.error(e);
// }


// try {
//     const data = {
//         "nom": "test",
//         "prenom": "test",
//         "email": "test@test.com"
//     };
//     const recordId = 'w28ha9dwwd8u6bk';
//     // await updateAgentById(recordId, data);
//     console.log("Agent mis à jour");
// } catch (e) {
//     console.error(e);
// }

// // Authentification SuperUser
// try {
//     const login = 'mathisjuillard@icloud.com';
//     const mdp = 'Mathisjuillard23';
//     const auth = await superUserauth(login, mdp);
//     console.log("SuperUser connecté");
//     // superUserLogout();
// } catch (e) {
//     console.error(e);
// }

// // Récupération des événements
// try {
//     const events = await allEvenement();
//     console.table(events);
// } catch (e) {
//     console.error(e);
// }

// // Ajouter un utilisateur
// try {
//     const newUser = {
//         "name": "newUser",
//         "email": "newuser@example.com",
//         "password": "securepassword",
//         "passwordConfirm": "securepassword"
//     };
//     // await addNewUser(newUser);
//     console.log("Utilisateur ajouté");
// } catch (e) {
//     console.error(e);
// }

// // Authentification Utilisateur
// try {
//     const login = 'usertwo@example.com';
//     const mdp = 'password2';
//     const auth = await Userauth(login, mdp);
//     console.log("Utilisateur connecté");
//     UserLogout();
// } catch (e) {
//     console.error(e);
// }
