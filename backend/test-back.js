// Liste de tous les films triés par date de projection
// import {allFilmsSortedByProjectionDate} from './backend.mjs';
// try {
//     const films = await allFilmsSortedByProjectionDate();
//     console.table(JSON.stringify(films, null, 2));
// } catch (e) {
//     console.error(e);
// }


// Liste de toutes les activités triées par date
// import {allActivitiesbydate} from './backend.mjs';
// try {
//     const activities = await allActivitiesbydate();
//     console.table(activities);
// } catch (e) {
//     console.error(e);
// }


// Liste de tous les acteurs/réalisateurs triés par ordre alphabétique
// import { allActorsDirectorsSorted } from './backend.mjs';
// try {
//     const actorsDirectors = await allActorsDirectorsSorted();
//     console.table(actorsDirectors);
// } catch (e) {
//     console.error(e);
// }


// Infos d'un film par ID
// import { getFilmById } from './backend.mjs';
// try {
//     const film = await getFilmById('ul1mk6ngru02nwg');
//     console.table(film);
// } catch (e) {
//     console.error(e);
// }


// Infos d'une activité par ID
// import { getActivityById } from './backend.mjs';
// try {
//     const activity = await getActivityById('a9j2hb9p2yaq02u');
//     console.table(activity);
// } catch (e) {
//     console.error(e);
// }


// Infos d'un acteur/réalisateur par ID
// import { getInviteById } from './backend.mjs';
// try {
//     const invite = await getInviteById('zy9n3t9j3uo870y');
//     console.table(invite);
// } catch (e) {
//     console.error(e);
// }


// Liste des activités d’un animateur par ID
// import { getActivitiesByAnimatorId } from './backend.mjs';
// try {
//     const activities = await getActivitiesByAnimatorId('240lskfok4p8n3d');
//     console.table(activities);
// } catch (e) {
//     console.error(e);
// }

// Liste des activités d’un animateur par nom
// import { getActivitiesByAnimatorName } from './backend.mjs';
// try {
//     const activities = await getActivitiesByAnimatorName('Dupont');
//     console.table(activities);
// } catch (e) {
//     console.error(e);
// }


// Ajouter un nouveau film
// import { addNewFilm } from './backend.mjs';
// try {
//     const newFilm = {
//         "titre_film": "test Film",
//         "synopsis_film": "test de synopsis",
//         "duree_film": '1heure50',
//         "list_acteur": 'test1,test2,test3',
//         "realisateur": 'Monsieur test',
//         "langue": 'Francais',
//         "production": 'oui oui'
//     };
//     await addNewFilm(newFilm);
//     console.log("Film ajoutée");
// } catch (e) {
//     console.error(e);
// }


// Ajouter une nouvelle activité
// import { addNewActivity } from './backend.mjs';
// try {
//     const newActivite = {
//         "nom_activite": "Test",
//         "description_activite": "Theatre",
//     };
//     await addNewActivity(newActivite);
//     console.log("Activite ajouté");
// } catch (e) {
//     console.error(e);
// }


// Ajouter un nouvel invité
// import { addNewInvite } from './backend.mjs';
// try {
//     const newInvite = {
//         "nom": "Test",
//         "prenom": "Activite",
//         "Biographie": "Nee en 1999",
//     };
//     await addNewInvite(newInvite);
//     console.log("Invite ajouté");
// } catch (e) {
//     console.error(e);
// }


// Supprimer un film par ID
// import { deleteFilmById } from './backend.mjs';
// try {
//     const recordId = 'dva8eyqne72hj64';
//     await deleteFilmById(recordId);
//     console.log("Film supprimée");
// } catch (e) {
//     console.error(e);
// }


// Supprimer une activité par ID
// import { deleteActivityById } from './backend.mjs';
// try {
//     const agentId = '0xv4t059ksv0nkg';
//     await deleteActivityById(agentId);
//     console.log("Activité supprimé");
// } catch (e) {
//     console.error(e);
// }


// Supprimer un invité par ID
// import { deleteInviteById } from './backend.mjs';
// try {
//     const recordId ='46xo41694p0uv6e';
//     await deleteInviteById(recordId);
//     console.log("Invité supprimé");
// }
// catch (e) {
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
