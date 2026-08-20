/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    name: {
      type: "varchar(100)",
      notNull: true,
    },
    email: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },
    password_hash: {
      type: "text",
      notNull: true,
    },
    codeforces_handle: {
      type: "varchar(100)",
    },
    created_at: {
      type: "timestamp",
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: "timestamp",
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("problems", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    name: {
      type: "varchar(255)",
      notNull: true,
    },
    rating: {
      type: "integer",
      notNull: true,
    },
    tags: {
      type: "text[]",
      notNull: true,
    },
    codeforces_id: {
      type: "integer",
      unique: true,
    },
  });

  pgm.createTable("submissions", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    user_id: {
      type: "integer",
      notNull: true,
      references: "users(id)",
    },
    problem_id: {
      type: "integer",
      notNull: true,
      references: "problems(id)",
    },
    verdict: {
      type: "varchar(50)",
      notNull: true,
    },
    language: {
      type: "varchar(100)",
    },
    submitted_at: {
      type: "timestamp",
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
    codeforces_submission_id: {
      type: "bigint",
      unique: true,
    },
    time_consumed: {
      type: "integer",
    },
    memory_consumed: {
      type: "integer",
    },
  });

  pgm.createTable("contests", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    contest_id: {
      type: "integer",
      notNull: true,
      unique: true,
    },
    name: {
      type: "varchar(255)",
      notNull: true,
    },
    contest_type: {
      type: "varchar(100)",
    },
    start_time: {
      type: "timestamp",
    },
    created_at: {
      type: "timestamp",
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("contest_participations", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    user_id: {
      type: "integer",
      notNull: true,
      references: "users(id)",
    },
    contest_id: {
      type: "integer",
      notNull: true,
      references: "contests(id)",
    },
    rank: {
      type: "integer",
    },
    old_rating: {
      type: "integer",
    },
    new_rating: {
      type: "integer",
    },
    rating_change: {
      type: "integer",
    },
    participated_at: {
      type: "timestamp",
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable("contest_participations");
  pgm.dropTable("submissions");
  pgm.dropTable("contests");
  pgm.dropTable("problems");
  pgm.dropTable("users");
};
