import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pb-sae-203.mathis-juillard.fr:443");

// Liste de tous les films avec leurs images
async function getFilms() {
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



async function getFilmById(id) {
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


async function getActivities() {
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

async function getInvites() {
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

export { getFilmById as a, getFilms as b, getInvites as c, getActivities as g };
