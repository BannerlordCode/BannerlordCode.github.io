---
title: "CustomBattleScoreContext"
description: "CustomBattleScoreContext — class in TaleWorlds.MountAndBlade.Missions.BattleScore. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleScoreContext

**Namespace:** `TaleWorlds.MountAndBlade.Missions.BattleScore`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class CustomBattleScoreContext : BattleScoreContext`  
**Base:** `BattleScoreContext`  
**Source:** `TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs`

## Overview

`CustomBattleScoreContext` is a named type in the TaleWorlds.MountAndBlade.Missions.BattleScore namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends BattleScoreContext, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomBattleScoreContext`.
- **Instance members** (3): `IsPowerComparisonRelevant`, `GetAttackerBanner`, `GetDefenderBanner`.
- **Extension points** (3): `IsPowerComparisonRelevant`, `GetAttackerBanner`, `GetDefenderBanner`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAttackerBanner` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner`. Read path: prefer it over reaching for the backing store. |
| `GetDefenderBanner` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner`. Read path: prefer it over reaching for the backing store. |
| `IsPowerComparisonRelevant` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CustomBattleScoreContext` | ctor | Instance entry point. Takes 1 argument: `Mission mission`. Returns ``. |

- Constructed as `public CustomBattleScoreContext(Mission mission)`.

## Usage Example

```csharp
var customBattleScoreContext = new CustomBattleScoreContext(mission);
customBattleScoreContext.GetAttackerBanner();
// Read current state through customBattleScoreContext.IsPowerComparisonRelevant.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Missions/BattleScore/CustomBattleScoreContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BattleScoreContext](../BattleScoreContext/) — `TaleWorlds.MountAndBlade.Missions.BattleScore`.

Section: [api/mission-ext/](../) — the other types in this bucket.
