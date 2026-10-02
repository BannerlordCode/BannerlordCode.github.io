---
title: "FlagDominationMissionRepresentative"
description: "FlagDominationMissionRepresentative — class in TaleWorlds.MountAndBlade.MissionRepresentatives. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# FlagDominationMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`  
**Base:** `MissionRepresentativeBase`  
**Source:** `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs`

## Overview

`FlagDominationMissionRepresentative` is a named type in the TaleWorlds.MountAndBlade.MissionRepresentatives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionRepresentativeBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (6): `GetGoldAmountForVisual`, `UpdateSelectedClassServer`, `CheckIfSurvivedLastRoundAndReset`, `GetGoldGainsFromKillData`, `GetGoldGainFromKillDataAndUpdateFlags`, `GetGoldGainsFromAllyDeathReward`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CheckIfSurvivedLastRoundAndReset` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `GetGoldAmountForVisual` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetGoldGainFromKillDataAndUpdateFlags` | method | Instance entry point. Takes 2 arguments: `MultiplayerClassDivisions.MPHeroClass victimClass`, `bool isAssist`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetGoldGainsFromAllyDeathReward` | method | Instance entry point. Takes 1 argument: `int baseAmount`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetGoldGainsFromKillData` | method | Instance entry point. Takes 5 arguments: `MPPerkObject.MPPerkHandler killerPerkHandler`, `MPPerkObject.MPPerkHandler assistingHitterPerkHandler`, `MultiplayerClassDivisions.MPHeroClass victimClass`, `bool isAssist`, …. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `UpdateSelectedClassServer` | method | Instance entry point. Takes 1 argument: `Agent agent`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// FlagDominationMissionRepresentative exposes no public members in TaleWorlds.MountAndBlade.MissionRepresentatives.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MPPerkObject](../MPPerkObject/) — `TaleWorlds.MountAndBlade`.
- [MultiplayerClassDivisions](../MultiplayerClassDivisions/) — `TaleWorlds.MountAndBlade`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
