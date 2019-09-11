const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

/**====================  .get ======================= */

// resolves to an array of users
function find() {
    return db('schemes')
}

// resolves to an array containing a single user
// or an empty array

function findById(id) {
    return db('schemes').where({ id })
}

// resolves an array containing step objects
function findSteps(id) {
    /* 
      select * from posts as p
      join users as u on u.id = p.user_id
      where u.id = 123
    */
    return db('schemes as s') // remember to return the call to db()
        .join('steps as p', 's.id', 'p.scheme_id')
        .where({ scheme_id: id })
        .select('p.id', 'p.instructions', 's.scheme_name')
        .then(steps => {
            return steps;
        });
}

/**====================  .post ======================= */

function add(data) {
    return db('schemes').insert(data)
}

function addStep(data) {
    return db('steps').insert(data)
}

function update(post, id) {
    return db('schemes').where('id', Number(id)).update(post)

}
function remove(id) {
    return db('schemes').where('id', Number(id)).del()
}