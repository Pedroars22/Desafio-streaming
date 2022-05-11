import pg from "pg";

async function connect() {
    if(global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://sgaxlsbm:8SBadmj1PSu0uOrVEBz1gd33Nn82O-QO@motty.db.elephantsql.com/sgaxlsbm"
    });
    global.connection = pool;

    return pool.connect();
}

export {
    connect
}