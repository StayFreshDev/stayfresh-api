require('dotenv').config();

const mariadb = require('mariadb');
const faker = require('@faker-js/faker');

// Configuration de la connexion à la base de données
const pool = mariadb.createPool({
    host: process.env.APP_HOST,
    user: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DB,
    connectionLimit: 20
});

// Fonction d'exécution de requête SQL
async function executeQuery(query) {
    let conn;
    console.log('conn')
    try {
        conn = await pool.getConnection();
        const result = await conn.query(query);
        return result;
    } catch (error) {
        console.error('Erreur lors de l\'exécution de la requête :', error);
        throw error;
    } finally {
        if (conn) {
            conn.release(); // Libérer la connexion dans le pool
        }
    }
}

// Génération des fausses données pour la table "adresses"
async function generateAdresses() {
    const adresses = [];
    for (let i = 1; i <= 71; i++) {
        const streetNumber = faker.random.number();
        const streetName = faker.address.streetName();
        const description = faker.lorem.sentence();
        const postalCode = faker.address.zipCode();
        const city = faker.address.city();

        const query = `INSERT INTO adresses (id, street_number, street_name, description, postal_code, city)
                   VALUES (${i}, ${streetNumber}, '${streetName}', '${description}', '${postalCode}', '${city}')`;

        await executeQuery(query);
        adresses.push({ id: i, streetNumber, streetName, description, postalCode, city });
    }
    return adresses;
}

// Génération des fausses données pour la table "establishements"
async function generateEstablishments(adresses) {
    const establishments = [];
    for (let i = 1; i <= 30; i++) {
        const siret = faker.random.number({ min: 10000000000000, max: 99999999999999 });
        const name = faker.company.companyName();
        const description = faker.lorem.sentence();
        const addressId = faker.random.arrayElement(adresses).id;

        const query = `INSERT INTO establishements (id, siret, name, description, adress_id)
                   VALUES (${i}, ${siret}, '${name}', '${description}', ${addressId})`;

        await executeQuery(query);
        establishments.push({ id: i, siret, name, description, addressId });
    }
    return establishments;
}

// Génération des fausses données pour la table "users"
async function generateUsers() {
    const users = [];
    for (let i = 1; i <= 86; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const roleId = faker.random.number({ min: 1, max: 3 });
        const phone = faker.phone.phoneNumber();

        const query = `INSERT INTO users (id, firstname, lastname, mail, password, role_id, phone)
                   VALUES (${i}, '${firstName}', '${lastName}', '${email}', '${password}', ${roleId}, '${phone}')`;

        await executeQuery(query);
        users.push({ id: i, firstName, lastName, email, password, roleId, phone });
    }
    return users;
}

// Génération des fausses données pour la table "services"
async function generateServices() {
    const services = [
        { name: 'Coiffure', description: 'Se faire couper les cheveux', salaryCount: 0 },
        { name: 'Esthétique', description: 'Rendez-vous frais', salaryCount: 0 },
    ];

    for (let i = 0; i < services.length; i++) {
        const { name, description, salaryCount } = services[i];

        const query = `INSERT INTO services (id, name, description, salary_count)
                   VALUES (${i + 1}, '${name}', '${description}', ${salaryCount})`;

        await executeQuery(query);
    }
}

// Génération des fausses données pour la table "appointments"
async function generateAppointments(users) {
    const appointments = [];
    for (let i = 1; i <= 100; i++) {
        const date = faker.date.between('2022-01-01', '2022-12-31');
        const duration = faker.random.number({ min: 30, max: 120 });
        const userId = faker.random.arrayElement(users).id;
        const serviceId = faker.random.number({ min: 1, max: 2 });

        const query = `INSERT INTO appointments (id, date, duration, user_id, service_id)
                   VALUES (${i}, '${date.toISOString()}', ${duration}, ${userId}, ${serviceId})`;

        await executeQuery(query);
        appointments.push({ id: i, date, duration, userId, serviceId });
    }
    return appointments;
}

// Génération des fausses données pour la table "notes"
async function generateNotes(users, establishments) {
    const notes = [];
    for (let i = 1; i <= 50; i++) {
        const note = faker.random.number({ min: 1, max: 5 });
        const comment = faker.lorem.paragraph();
        const userId = faker.random.arrayElement(users).id;
        const establishmentId = faker.random.arrayElement(establishments).id;

        const query = `INSERT INTO notes (id, note, comment, user_id, establishment_id)
                   VALUES (${i}, ${note}, '${comment}', ${userId}, ${establishmentId})`;

        await executeQuery(query);
        notes.push({ id: i, note, comment, userId, establishmentId });
    }
    return notes;
}

// Exécution de la génération des données
(async () => {
    try {
        // Génération des adresses
        const adresses = await generateAdresses();
        console.log('Adresses générées avec succès.');

        // Génération des établissements
        const establishments = await generateEstablishments(adresses);
        console.log('Établissements générés avec succès.');

        // Génération des utilisateurs
        const users = await generateUsers();
        console.log('Utilisateurs générés avec succès.');

        // Génération des services
        await generateServices();
        console.log('Services générés avec succès.');

        // Génération des rendez-vous
        const appointments = await generateAppointments(users);
        console.log('Rendez-vous générés avec succès.');

        // Génération des notes
        const notes = await generateNotes(users, establishments);
        console.log('Notes générées avec succès.');

        console.log('Génération de données fictives terminée.');

        // Affichage des données générées (facultatif)
        console.log('Adresses:', adresses);
        console.log('Établissements:', establishments);
        console.log('Utilisateurs:', users);
        console.log('Rendez-vous:', appointments);
        console.log('Notes:',notes)
    }catch(e){
        console.error('Une erreur s\'est produite lors de la génération des données')
    }
})