import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Liste de tous les films triés par date de projection
export async function allFilmsSortedByProjectionDate() {
    const films = await pb.collection('Films').getFullList({
        sort: 'date_heure_publication',
    });
    return films;
}

// Liste de toutes les activités triées par date
export async function allActivitiesbydate() {
    const activities = await pb.collection('activite').getFullList({
        sort: 'date_heure_activite',
    });
    return activities;
}

// Liste de tous les acteurs/réalisateurs triés par ordre alphabétique
export async function allActorsDirectorsSorted() {
    const invites = await pb.collection('Invites').getFullList({
        sort: 'prenom',
    });
    return invites;
}

// Infos d'un film par ID
export async function getFilmById(id) {
    const film = await pb.collection('Films').getOne(id);
    return film;
}

// Infos d'une activité par ID
export async function getActivityById(id) {
    const activity = await pb.collection('activite').getOne(id);
    return activity;
}

// Infos d'un acteur/réalisateur par ID
export async function getInviteById(id) {
    const invite = await pb.collection('Invites').getOne(id);
    return invite;
}

// Liste des activités d’un animateur par ID
export async function getActivitiesByAnimatorId(InviteId) {
    const activities = await pb.collection('activite').getFullList({
        filter: `invite_associe = '${InviteId}'`,
    });
    return activities;
}

// Liste des activités d’un animateur par nom
export async function getActivitiesByAnimatorName(name) {
    const invite = await pb.collection('Invites').getFirstListItem(`nom = "${name}"`);
    return await getActivitiesByAnimatorId(invite.id);
}


// Ajouter un nouveau film
export async function addNewFilm(newFilm) {
    await pb.collection('Films').create(newFilm);
}

// Ajouter une nouvelle activité
export async function addNewActivity(newActivity) {
    await pb.collection('activite').create(newActivity);
}

// Ajouter un nouvel invité
export async function addNewInvite(newInvite) {
    await pb.collection('Invites').create(newInvite);
}

// Supprimer un film par ID
export async function deleteFilmById(id) {
    await pb.collection('Films').delete(id);
}

// Supprimer une activité par ID
export async function deleteActivityById(id) {
    await pb.collection('activite').delete(id);
}

// Supprimer un invité par ID
export async function deleteInviteById(id) {
    await pb.collection('Invites').delete(id);
}

// Suppression d'un film, activité ou invité
export async function deleteItemById(type, id) {
    await pb.collection(type).delete(id);
}
