import { defineDb, defineTable, column } from 'astro:db';

const Bruker = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    fornavn: column.text(),
    etternavn: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {Bruker},
});