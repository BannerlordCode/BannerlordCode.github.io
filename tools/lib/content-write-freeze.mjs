// tools/lib/content-write-freeze.mjs
//
// HARD PREMISE (boss, user-directed): every page under content/ must be written
// by hand. No script may emit any .md under content/, regardless of accuracy,
// labelling, or prior authorisation. Generated content is withdrawn, not improved.
//
// Import this at the top of any tool that used to write content pages. It exits
// non-zero unconditionally, so an accidental run cannot touch the tree.
//
// Scaffold/inventory/reporting tools that never write content/ do NOT need it.

console.error(
  'FROZEN: this tool writes generated pages under content/, which the HARD PREMISE forbids.\n' +
  '       Generated content is withdrawn, not improved. Handwritten pages are never overwritten.\n' +
  '       Keep scaffolding outside content/ (tools/_v153_inventory.json etc.).'
);
process.exit(1);
