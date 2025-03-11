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
export async function allInvites() {
    const invites = await pb.collection('Invites').getFullList({
        sort: 'nom',
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
    const activity = await pb.collection('Activites').getOne(id);
    return activity;
}

// Infos d'un acteur/réalisateur par ID
export async function getInviteById(id) {
    const invite = await pb.collection('Invites').getOne(id);
    return invite;
}

// Liste des activités d’un animateur par ID
export async function getActivitiesByAnimatorId(id) {
    const activities = await pb.collection('Activites').getFullList({
        filter: `animateurId = "${id}"`,
    });
    return activities;
}

// Liste des activités d’un animateur par nom
export async function getActivitiesByAnimatorName(name) {
    const invite = await pb.collection('Invites').getFirstListItem(`nom = "${name}"`);
    if (!invite) throw new Error("Animateur non trouvé");
    return await getActivitiesByAnimatorId(invite.id);
}

// Ajouter ou modifier un film, une activité ou un invité
export async function addOrUpdateItem(type, data) {
    const collection = pb.collection(type);

    if (data.id) {
        await collection.update(data.id, data);
    } else {
        await collection.create(data);
    }
}

// Suppression d'un film, activité ou invité
export async function deleteItemById(type, id) {
    await pb.collection(type).delete(id);
}
