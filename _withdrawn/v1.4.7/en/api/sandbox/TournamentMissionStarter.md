---
title: "TournamentMissionStarter"
description: "TournamentMissionStarter — class in SandBox.Tournaments. No public members of its own."
---

<!-- v147-skeleton -->
# TournamentMissionStarter

**Namespace:** `SandBox.Tournaments`  
**Module:** `SandBox`  
**Type:** `public static class TournamentMissionStarter`  
**Source:** `SandBox/Tournaments/TournamentMissionStarter.cs`

## Overview

`TournamentMissionStarter` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on TournamentMissionStarter itself in `SandBox.Tournaments`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// TournamentMissionStarter declares no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `SandBox/Tournaments/TournamentMissionStarter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentGame](../../campaign/TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [TournamentArcheryMissionController](../TournamentArcheryMissionController/) — `SandBox.Tournaments.MissionLogics`.
- [CampaignMissionComponent](../CampaignMissionComponent/) — `SandBox.Missions.MissionLogics`.
- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic/) — `SandBox.Missions.MissionLogics.Arena`.
- [TournamentFightMissionController](../TournamentFightMissionController/) — `SandBox.Tournaments.MissionLogics`.
- [TownHorseRaceMissionController](../TownHorseRaceMissionController/) — `SandBox.Tournaments.MissionLogics`.
- [TournamentJoustingMissionController](../TournamentJoustingMissionController/) — `SandBox.Tournaments.MissionLogics`.

Section: [api/sandbox/](../) — the other types in this bucket.
