---
title: "ChangeRomanticStateLogEntry"
description: "ChangeRomanticStateLogEntry — class in TaleWorlds.CampaignSystem.LogEntries. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ChangeRomanticStateLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ChangeRomanticStateLogEntry : LogEntry`  
**Base:** `LogEntry`  
**Source:** `TaleWorlds.CampaignSystem/LogEntries/ChangeRomanticStateLogEntry.cs`

## Overview

`ChangeRomanticStateLogEntry` is a named type in the TaleWorlds.CampaignSystem.LogEntries namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LogEntry, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ChangeRomanticStateLogEntry`.
- **Instance members** (3): `ToString`, `GetImportanceForClan`, `GetConversationScoreAndComment`.
- **Extension points** (3): `ToString`, `GetImportanceForClan`, `GetConversationScoreAndComment`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetConversationScoreAndComment` | method (override) | Overrides the base member. Takes 4 arguments: `Hero talkTroop`, `bool findString`, `out string comment`, `out ImportanceEnum score`. Read path: prefer it over reaching for the backing store. |
| `GetImportanceForClan` | method (override) | Overrides the base member. Takes 1 argument: `Clan clan`. Returns `ImportanceEnum`. Read path: prefer it over reaching for the backing store. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `ChangeRomanticStateLogEntry` | ctor | Instance entry point. Takes 3 arguments: `Hero hero1`, `Hero hero2`, `Romance.RomanceLevelEnum level`. Returns ``. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public ChangeRomanticStateLogEntry(Hero hero1, Hero hero2, Romance.RomanceLevelEnum level)`.

## Usage Example

```csharp
var changeRomanticStateLogEntry = new ChangeRomanticStateLogEntry(hero1, hero2, level);
changeRomanticStateLogEntry.ToString();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/LogEntries/ChangeRomanticStateLogEntry.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Romance](../Romance/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
