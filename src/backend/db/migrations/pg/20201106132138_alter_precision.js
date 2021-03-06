export function up(knex) {
  return knex.schema.alterTable('submissions', table => {
    table.decimal('c2sRate', null).alter();
    table.decimal('s2cRate', null).alter();
    table.decimal('MinRTT', null).alter();
    table.decimal('MaxRTT', null).alter();
    table.decimal('latitude', null).alter();
    table.decimal('longitude', null).alter();
    table.string('address', null).alter();
    table.string('ClientIP', null).alter();
    table.string('FullResults', null).alter();
  });
}

export async function down(knex) {
  return knex.schema.alterTable('submissions', table => {
    table.decimal('c2sRate').alter();
    table.decimal('s2cRate').alter();
    table.decimal('MinRTT').alter();
    table.decimal('MaxRTT').alter();
    table.decimal('latitude').alter();
    table.decimal('longitude').alter();
    table.string('address').alter();
    table.string('ClientIP').alter();
    table.string('FullResults').alter();
  });
}
