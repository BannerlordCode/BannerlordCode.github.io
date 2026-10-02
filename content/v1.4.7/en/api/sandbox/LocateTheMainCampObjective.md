---
title: "LocateTheMainCampObjective"
description: "LocateTheMainCampObjective — class in SandBox.Missions.MissionLogics.Hideout.Objectives. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# LocateTheMainCampObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`  
**Module:** `SandBox`  
**Type:** `public class LocateTheMainCampObjective : MissionObjective`  
**Base:** `MissionObjective`  
**Source:** `SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs`

## Overview

`LocateTheMainCampObjective` is a named type in the SandBox.Missions.MissionLogics.Hideout.Objectives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionObjective, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LocateTheMainCampObjective`.
- **Instance members** (3): `UniqueId`, `Name`, `Description`.
- **Extension points** (3): `UniqueId`, `Name`, `Description`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Description` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `UniqueId` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `LocateTheMainCampObjective` | ctor | Instance entry point. Takes 1 argument: `Mission mission`. Returns ``. |

- Constructed as `public LocateTheMainCampObjective(Mission mission)`.

## Usage Example

```csharp
var locateTheMainCampObjective = new LocateTheMainCampObjective(mission);
// Read current state through locateTheMainCampObjective.UniqueId.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionObjective](../../mission-ext/MissionObjective/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.
- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/sandbox/](../) — the other types in this bucket.
