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

// Modifier un film par ID
export async function updateFilmById(id, data) {
    await pb.collection('Films').update(id, data);
}

// Modifier une activité par ID
export async function updateActivityById(id, data) {
    await pb.collection('activite').update(id, data);
}

// Modifier un invité par ID
export async function updateInviteById(id, data) {
    await pb.collection('Invites').update(id, data);
}

// Liste de tous les films avec leurs images
export async function getFilms() {
    try {
        let films = await pb.collection('Films').getFullList({
            sort: 'date_heure_publication',
        });

        console.log("Films récupérés :", films);

        const updatedFilms = films.map((film) => ({
            ...film,
            imageUrl: film.affiche_film 
                ? pb.files.getUrl(film, film.affiche_film, { thumb: "1024x1024" }) 
                : "/placeholder.svg",
        }));

        console.log("Films après transformation :", updatedFilms);

        return updatedFilms;
    } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
        return [];
    }
}



export async function getFilmById(id) {
    try {
        let film = await pb.collection('Films').getOne(id);

        if (!film) return null;

        return {
            ...film,
            imageUrl: film.affiche_film 
                ? pb.files.getUrl(film, film.affiche_film, { thumb: "1024x1024" }) 
                : "/placeholder.svg",
        };
    } catch (error) {
        console.error('Erreur lors de la récupération du film:', error);
        return null;
    }
}


export async function getActivities() {
    try {
        let activities = await pb.collection('activite').getFullList({
            sort: 'date_heure_activite',
            expand: 'invite_associe' // Récupérer les détails de l'invité associé
        });

        const updatedActivities = activities.map(activity => {
            const imageUrl = activity.image_activite 
                ? pb.files.getUrl(activity, activity.image_activite)
                : "/placeholder.svg";

            return { 
                ...activity, 
                imageUrl,
                invite: activity.expand?.invite_associe || null // Inclure l'invité associé
            };
        });

        console.log("Activités mises à jour :", updatedActivities);
        return updatedActivities;
    } catch (error) {
        console.error('Erreur lors de la récupération des activités:', error);
        return [];
    }
}


export async function getActivityById(id) {
    try {
        let activity = await pb.collection('activite').getOne(id);

        if (!activity) return null;

        return activity;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'activité:', error);
        return null;
    }
}

export async function getInvites() {
    try {
        let invites = await pb.collection('Invites').getFullList({
            sort: 'prenom',
        });

        const updatedInvites = invites.map((invite) => {
            const imageUrl = invite.photo_invites 
                ? pb.files.getUrl(invite, invite.photo_invites) 
                : "/placeholder.svg";

            console.log(`Image URL pour ${invite.prenom} ${invite.nom}:`, imageUrl);

            return { ...invite, imageUrl };
        });

        return updatedInvites;
    } catch (error) {
        console.error('Erreur lors de la récupération des invités:', error);
        return [];
    }
}




export async function getInviteById(id) {
    try {
        let invite = await pb.collection('Invites').getOne(id);

        if (!invite) return null;

        return {
            ...invite,
            imageUrl: invite.photo 
                ? pb.files.getUrl(invite, invite.photo, { thumb: "1024x1024" }) 
                : "/placeholder.svg",
        };
    } catch (error) {
        console.error('Erreur lors de la récupération de l’invité:', error);
        return null;
    }
}


export async function getInvitesByRole(role) {
    try {
        let invites = await pb.collection('Invites').getFullList({
            sort: 'prenom',
            filter: `role="${role}"`, // Filtrage par rôle
        });

        const updatedInvites = invites.map((invite) => {
            const imageUrl = invite.photo_invites 
                ? pb.files.getUrl(invite, invite.photo_invites) 
                : "/placeholder.svg";

            return { ...invite, imageUrl };
        });

        return updatedInvites;
    } catch (error) {
        console.error('Erreur lors de la récupération des invités par rôle:', error);
        return [];
    }
}
