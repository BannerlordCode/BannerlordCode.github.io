import test from 'node:test';
import assert from 'node:assert/strict';

import {
  classifyPage,
  extractFamilyEntries,
  extractPageIdentity,
  makeTypeIdentity,
  resolveExplicitAlias,
  stripMdNoise,
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

// ---------------------------------------------------------------------------
// Overview family table: does every entry actually FIRE?
// ---------------------------------------------------------------------------
// A family regex that cannot match is the most dangerous defect in this module: the
// gate still reports confident numbers, it just reports nonsense. The trap is concrete
// and has already been hit once on this file — stripMdNoise() rewrites '-' to a space,
// so a family written as /view-layer/ can NEVER match the "view layer" text it is
// meant to detect, and it silently contributes 0 while looking perfectly present.
// Every family is therefore asserted POSITIVELY: a page carrying that family's wording
// must stop being deep_pass. A dead regex fails here immediately.
const OVERVIEW_FAMILY_SAMPLES = [
  ['f01', 'This type lives in and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members, and is read after the owning manager initializes it.'],
  ['f02', 'This is a siege widget and a parent element used in the battle screen, so mod code must obtain it from the current screen instance rather than constructing its own.'],
  ['f03', 'This is a rule model that usually defines how a subsystem should compute a bounded settlement value from its inputs, and is consulted once per model tick during settlement updates.'],
  ['f04', 'This object behaves like a data carrier for the mission side information set, holding plain values that the owning mission logic reads and writes during agent spawning operations.'],
  ['f05', 'This object represents a view layer object bound to a widget tree for the mission screen, so mod code reads it only after the screen is created and releases it when the mission ends.'],
  ['f06', 'This is a handler used to run agreed response logic when the mission triggers a delegated order, and it is invoked by the mission side logic rather than called directly by mod code.'],
  ['f07', 'This is a manager: it owns a subsystem of mission agents and their flags, so mod code asks it for state rather than keeping its own copy of the agent list.'],
  ['f08', 'This is a component style object that carries the tunable layout values for a mission screen widget tree, so mod code replaces the whole object when it needs a different look.'],
  ['f09', 'This is a controller whose job is less about storing mission state and more about routing input events from the mission screen into the agent behavior layer that consumes them.'],
  ['f10', 'This sits closer to the behavior layer than to the data layer, so mod code should read it when it needs to know what the mission agent will do next on the following tick.'],
  ['f11', 'This is a helper class that usually provides static logic for reading mission spawn settings, so mod code calls the static method rather than constructing an instance of its own.'],
  ['f12', 'This is an exception type used to signal a mission side failure to the caller, so mod code should catch it at the mission boundary rather than letting it escape into the engine loop.'],
  ['f13', 'This is the data binding bridge between the mission view model and the widget tree, so mod code updates the view model and the bound widgets follow without manual refresh calls.'],
  ['f14', 'This is an attribute used to tag a type or member so the mission registration pass picks it up at load time, which is why mod code must place it on the declaration itself.'],
];

test('classifyPage keeps a hand-written overview page as deep_pass (control)', () => {
  // Break caught: if this control ever stops being deep_pass, every family assertion
  // below is passing for the wrong reason and proves nothing.
  assert.equal(classifyPage('content/v1.3.15/en/api/campaign/Hero.md', deepPage()).status, 'deep_pass');
});

test('every Overview template family actually fires on its own wording', () => {
  // Break caught: a family regex that never matches reports a confident, meaningless 0.
  for (const [id, sample] of OVERVIEW_FAMILY_SAMPLES) {
    // Precondition: a sample at or under the length gate would make overviewReal false for
    // the wrong reason, and the assertion below would pass vacuously.
    const normalised = stripMdNoise(sample);
    assert.ok(normalised.length > 60,
      `family ${id} sample normalises to ${normalised.length} chars; it must exceed the 60-char gate or this test proves nothing`);
    const text = deepPage().replace(
      /## Overview\n\n[\s\S]*?\n\n## Mental Model/,
      `## Overview\n\n${sample}\n\n## Mental Model`
    );
    const result = classifyPage('content/v1.3.15/en/api/campaign/Hero.md', text);
    assert.equal(result.status, 'stub', `family ${id} did not fire: status stayed ${result.status}`);
  }
});

test('hyphens in source text are erased, so a hyphenated PATTERN would be dead', () => {
  // Break caught: this is the exact regression the family table is vulnerable to.
  // stripMdNoise() rewrites '-' to a space, and family patterns are matched against the
  // NORMALISED text. Consequences, both asserted here because both are counter-intuitive:
  //   - a hyphen in the WRITER's text is harmless: it normalises to a space and the
  //     spaced pattern still catches it;
  //   - a hyphen in the PATTERN is fatal: /view-layer/ can never match, so the family
  //     silently contributes 0 while looking perfectly present in the source.
  const normalised = stripMdNoise('represents a view-layer object');
  assert.equal(normalised, 'represents a view layer object');
  assert.equal(/view-layer/.test(normalised), false, 'a hyphenated pattern must be impossible to match');
  assert.equal(/view layer/.test(normalised), true, 'the spaced pattern must match');

  const overview = (spelling) => deepPage().replace(
    /## Overview\n\n[\s\S]*?\n\n## Mental Model/,
    `## Overview\n\nThis object represents a ${spelling} object bound to a widget tree for the mission screen, so mod code reads it only after the screen is created and released when the mission ends.\n\n## Mental Model`
  );
  assert.equal(
    classifyPage('content/v1.3.15/en/api/campaign/Hero.md', overview('view layer')).status,
    'stub',
    'the spaced spelling MUST be caught'
  );
  assert.equal(
    classifyPage('content/v1.3.15/en/api/campaign/Hero.md', overview('view-layer')).status,
    'stub',
    'a hyphen in the writer text is normalised away, so this must also be caught'
  );
});

// ---------------------------------------------------------------------------
// Mental boilerplate table: same question, opposite direction.
// ---------------------------------------------------------------------------
const MENTAL_BOILERPLATE_SAMPLES = [
  ['阅读时先通过属性了解状态', '阅读时先通过属性了解状态，再逐个查看它的公开方法来确认调用时机，最后在合适的生命周期回调里使用它，而不是自己长期缓存一份副本再指望它自动刷新，否则两份状态很快就会不一致。'],
  ['Read properties', 'Read properties first to understand state and methods for actions, then call the owning service at the right point in the mission tick instead of caching the value yourself.'],
  ['先从命名空间', '先从命名空间 TaleWorlds.CampaignSystem 入手，先找到真正持有它的那一个管理器，再顺着它的调用链一路往下读，最后才回到这一页列出的方法上判断调用时机与顺序。'],
  ['^Start from namespace', 'Start from namespace TaleWorlds.CampaignSystem, then follow the owning manager down to the behavior that mutates this value during a campaign tick, and only then decide where to hook.'],
  ['入口或数据节点', '它是入口或数据节点，模组代码从这里进入整条链路，拿到它之后要顺着调用方继续往下读，而不是自己再造一份等价的数据结构出来，否则两份状态迟早会不一致，而且很难排查到底是哪一份先跑偏的。'],
  ['entry point or data node', 'It is an entry point or data node in the flow, so mod code enters the chain here and follows the callers instead of building its own equivalent state and hoping they stay in sync.'],
  ['extension point: first identify', 'Treat this as an extension point: first identify who creates it, who owns it, and who calls it, then decide whether to inherit from it or compose it in your own module layer.'],
  ['型扩展点来理解', '把 X 当作一个 Widget 型扩展点来理解：先确认是谁创建了它、谁一直持有它、谁在运行时会调用它，再决定是继承、组合还是只读使用它，不要自己再造一份等价对象出来长期维护两份状态，否则迟早会对不上。'],
];

test('every Mental boilerplate entry actually fires on its own wording', () => {
  // Break caught: a Mental entry that never matches leaves template pages looking written.
  for (const [label, sample] of MENTAL_BOILERPLATE_SAMPLES) {
    // Precondition, and this is the trap that already produced two vacuous assertions:
    // mentalReal requires >80 normalised chars, so a short sample would be rejected by the
    // LENGTH gate and the assertion would pass whether or not the pattern fires. Two zh
    // samples sat at 72-73 chars and hid a deleted pattern completely.
    const normalised = stripMdNoise(sample);
    assert.ok(normalised.length > 80,
      `mental entry "${label}" sample normalises to ${normalised.length} chars; it must exceed the 80-char gate or this test proves nothing`);
    const text = deepPage().replace(
      /## Mental Model\n\n[\s\S]*?\n\n## Dependencies/,
      `## Mental Model\n\n${sample}\n\n## Dependencies`
    );
    const result = classifyPage('content/v1.3.15/en/api/campaign/Hero.md', text);
    assert.equal(result.status, 'stub', `mental entry "${label}" did not fire: status stayed ${result.status}`);
    // Deliberately NOT accepting 'weak-mental' here: weak-mental is the length gate, which is
    // exactly the wrong-reason outcome this test exists to rule out.
    assert.match(result.reasons.join(' '), /boilerplate-mental-model/,
      `mental entry "${label}" fired for the wrong reason: ${JSON.stringify(result.reasons)}`);
  }
});
