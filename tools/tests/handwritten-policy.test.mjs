import test from 'node:test';
import assert from 'node:assert/strict';

import {
  classifyPage,
  extractFamilyEntries,
  extractPageIdentity,
  makeTypeIdentity,
  resolveExplicitAlias,
  isR1TargetType,
} from '../lib/handwritten-policy.mjs';

const deepPage = ({ typeLabel = 'Type', typeName = 'Hero' } = {}) => `---
title: "${typeName}"
description: "A source-backed lifecycle and dependency guide for ${typeName}."
---

# ${typeName}

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**${typeLabel}:** class

## Overview

This object is the campaign-owned identity and state aggregate used by actions,
models, events, and save logic. Mod code reads it as a world entity and routes
state changes through the owning campaign services instead of replaying fields.

## Mental Model

The campaign creates and owns this object for the lifetime of a loaded game.
Behaviors observe it during campaign events, while actions coordinate mutations
and publish follow-up events. It is not a mission-scene object and it must not be
cached across game teardown or reconstructed as an unregistered standalone
instance. Use the current campaign lookup path, and release references when the
campaign ends.

## Dependencies

- [Campaign](../Campaign/) owns the world lifecycle.
- [KillCharacterAction](../KillCharacterAction/) coordinates a state change.

## Real Example

\`\`\`csharp
var campaign = Campaign.Current;
var hero = Hero.MainHero;
InformationManager.DisplayMessage(new InformationMessage(hero.Name.ToString()));
\`\`\`
`;

const familyPage = (purpose) => `---
title: "Hero lifecycle family"
description: "Campaign hero lifecycle entries with source-backed timing."
---

# Hero lifecycle family

## Mental Model

This family groups the campaign-owned identity records that are created during
game construction, referenced by actions and models, and observed through
campaign events. Entries state the normal read or mutation timing so a mod does
not confuse persistent campaign objects with mission-scene agents or create
unregistered replacements.

| Namespace | Type | Purpose | Typical timing |
|---|---|---|---|
| TaleWorlds.CampaignSystem | \`Hero\` | ${purpose} | Read during campaign events after a game is loaded. |
| TaleWorlds.CampaignSystem | \`Clan\` | Owns political membership, holdings, and leader state consumed by diplomacy models. | Read after campaign initialization and mutate through actions. |
| TaleWorlds.CampaignSystem | \`Kingdom\` | Aggregates clans and diplomacy state for campaign decisions and war actions. | Read in campaign behaviors after kingdom creation. |
`;

test('classifyPage marks a complete source-backed class page deep', () => {
  // Break caught: removing any mandatory deep-page signal must stop coverage credit.
  const result = classifyPage('content/v1.3.15/en/api/campaign/Hero.md', deepPage());
  assert.equal(result.status, 'deep_pass');
});

test('classifyPage keeps a boilerplate mental model as a stub', () => {
  // Break caught: boilerplate prose must never become deep coverage.
  const text = deepPage().replace(
    /## Mental Model[\s\S]*?## Dependencies/,
    '## Mental Model\n\nRead properties first to understand state and methods for actions.\n\n## Dependencies'
  );
  const result = classifyPage('content/v1.3.15/en/api/campaign/Hero.md', text);
  assert.equal(result.status, 'stub');
  assert.match(result.reasons.join(' '), /boilerplate|mental/i);
});

test('extractFamilyEntries returns a qualified handwritten purpose entry', () => {
  // Break caught: a real Namespace/Type/Purpose row must earn exactly one identity.
  const entries = extractFamilyEntries(
    'content/v1.3.15/en/api/campaign/heroes/_index.md',
    familyPage('Represents a persistent campaign person and routes world mutations through actions.')
  );
  const hero = entries.find((entry) => entry.typeName === 'Hero');
  assert.deepEqual(
    { namespace: hero.namespace, typeName: hero.typeName },
    { namespace: 'TaleWorlds.CampaignSystem', typeName: 'Hero' }
  );
  assert.match(hero.purposeSnippet, /persistent campaign person/);
});

test('extractFamilyEntries rejects a formulaic public-type purpose', () => {
  // Break caught: a signature-derived type restatement must not count as coverage.
  const entries = extractFamilyEntries(
    'content/v1.3.15/en/api/campaign/heroes/_index.md',
    familyPage('Hero is a public type under TaleWorlds.CampaignSystem.')
  );
  assert.equal(entries.some((entry) => entry.typeName === 'Hero'), false);
});

test('extractFamilyEntries expands a qualified group of at most five types', () => {
  const entries = extractFamilyEntries(
    'content/v1.3.15/en/api/campaign-ext/models/_index.md',
    familyPage('These closely related model contracts answer one bounded campaign calculation and are read during the same model phase.')
      .replace('`Hero`', '`Hero; Clan; Kingdom; Settlement; Town`')
  );
  assert.deepEqual(entries.filter((entry) => ['Hero', 'Clan', 'Kingdom', 'Settlement', 'Town'].includes(entry.typeName)).map((entry) => entry.typeName), [
    'Hero', 'Clan', 'Kingdom', 'Settlement', 'Town',
  ]);
});

test('extractFamilyEntries rejects groups larger than five types', () => {
  const text = familyPage('These entries share one bounded model calculation during the same campaign phase.')
    .replace('`Hero`', '`Hero; Clan; Kingdom; Settlement; Town; Village`');
  assert.equal(extractFamilyEntries('content/v1.3.15/en/api/campaign-ext/models/_index.md', text).some((entry) => entry.typeName === 'Village'), false);
});

test('extractFamilyEntries accepts an inventory type with a lowercase identifier', () => {
  const text = familyPage('This row documents the serialized runtime values consumed by the library during setup and stream operations.')
    .replace('`Hero`', '`bin`');
  const entries = extractFamilyEntries('content/v1.3.15/en/api/core-extra/platform-tail/_index.md', text);
  assert.equal(entries.some((entry) => entry.typeName === 'bin'), true);
});

test('resolveExplicitAlias maps only names declared by alias data', () => {
  // Break caught: heuristic suffixing must not silently alias unrelated type names.
  const aliases = {
    SaveableField: 'SaveableFieldAttribute',
    SaveableProperty: 'SaveablePropertyAttribute',
  };
  assert.equal(resolveExplicitAlias('SaveableField', aliases), 'SaveableFieldAttribute');
  assert.equal(resolveExplicitAlias('Hero', aliases), 'Hero');
});

test('makeTypeIdentity separates duplicate simple names by namespace', () => {
  // Break caught: one simple-name page must not cover two namespace collisions.
  const left = makeTypeIdentity({
    version: '1.3.15', language: 'zh', namespace: 'A.One', typeName: 'Options',
  });
  const right = makeTypeIdentity({
    version: '1.3.15', language: 'zh', namespace: 'B.Two', typeName: 'Options',
  });
  assert.notEqual(left, right);
});

test('classifyPage recognizes Chinese type metadata', () => {
  // Break caught: Chinese primary pages must not become noise because metadata is localized.
  const result = classifyPage(
    'content/v1.3.15/zh/api/campaign/Hero.md',
    deepPage({ typeLabel: '类型', typeName: 'Hero' })
  );
  assert.equal(result.status, 'deep_pass');
});

test('classifyPage accepts a direct file path without directory-walk state', () => {
  // Break caught: file-scoped quality/coverage callers must classify the supplied file.
  const result = classifyPage('C:/tmp/direct/Hero.md', deepPage());
  assert.equal(result.status, 'deep_pass');
});

test('extractPageIdentity uses declared namespace when the inventory route is a duplicate stub', () => {
  // Break caught: a handwritten page at a parallel route must still cover its declared qualified type.
  const identity = extractPageIdentity(
    'content/v1.3.15/zh/api/campaign/MapEvent.md',
    `---\ntitle: "MapEvent"\ndescription: "A real page."\n---\n\n# MapEvent\n\n**Namespace:** TaleWorlds.CampaignSystem.MapEvents\n**Type:** public sealed class MapEvent : MBObjectBase\n`,
    { version: '1.3.15', language: 'zh' },
  );
  assert.deepEqual(identity, {
    version: '1.3.15',
    language: 'zh',
    namespace: 'TaleWorlds.CampaignSystem.MapEvents',
    typeName: 'MapEvent',
  });
});

test('isR1TargetType excludes declared platform noise but retains campaign types', () => {
  // Break caught: broad noise rules must not erase core campaign gameplay namespaces.
  assert.equal(isR1TargetType({ namespace: 'TaleWorlds.CampaignSystem', typeName: 'Hero' }), true);
  assert.equal(isR1TargetType({ namespace: 'TaleWorlds.PlatformService', typeName: 'LoginService' }), false);
  assert.equal(isR1TargetType({ namespace: 'NetworkMessages.FromServer', typeName: 'SyncMessage' }), false);
  assert.equal(isR1TargetType({ namespace: 'TaleWorlds.MountAndBlade', typeName: 'Lobby' }), false);
});
