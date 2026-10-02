---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel — class in SandBox.GameComponents. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`  
**Module:** `SandBox`  
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`  
**Base:** `BattleSpawnModel`  
**Source:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## Overview

`SandboxBattleSpawnModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends BattleSpawnModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (2): `OnMissionStart`, `OnMissionEnd`.
- **Extension points** (2): `OnMissionStart`, `OnMissionEnd`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
SandboxBattleSpawnModel.OnMissionStart();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/GameComponents/SandboxBattleSpawnModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
