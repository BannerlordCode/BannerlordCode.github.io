---
title: "MultiplayerClassDivisions"
description: "MultiplayerClassDivisions — class in TaleWorlds.MountAndBlade. 13 public members (12 static)."
---

<!-- v147-skeleton -->
# MultiplayerClassDivisions

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerClassDivisions`  
**Source:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## Overview

`MultiplayerClassDivisions` is a named type in the TaleWorlds.MountAndBlade namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (11): `MultiplayerHeroClassGroups`, `GetMPHeroClasses`, `GetMPHeroClasses`, `GetMPHeroClassForCharacter`, `GetAllPerksForHeroClass`, `GetMPHeroClassForPeer`, ….
- **Instance members** (1): `MPHeroClassGroup`.
- **Data and constants** (1): `AvailableCultures`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAllPerksForHeroClass` | method (static) | Static entry point. Takes 2 arguments: `MultiplayerClassDivisions.MPHeroClass heroClass`, `string forcedForGameMode`. Returns `List<List<IReadOnlyPerkObject>>`. Read path: prefer it over reaching for the backing store. |
| `GetAvailablePerksForPeer` | method (static) | Static entry point. Takes 1 argument: `MissionPeer missionPeer`. Returns `List<List<IReadOnlyPerkObject>>`. Read path: prefer it over reaching for the backing store. |
| `GetMinimumTroopCost` | method (static) | Static entry point. Takes 1 argument: `BasicCultureObject culture`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMPHeroClasses` | method (static) | Static entry point. Takes 1 argument: `BasicCultureObject culture`. Returns `IEnumerable<MultiplayerClassDivisions.MPHeroClass>`. Read path: prefer it over reaching for the backing store. |
| `GetMPHeroClasses` | method (static) | Static entry point. Takes no arguments. Returns `MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass>`. Read path: prefer it over reaching for the backing store. |
| `GetMPHeroClassForCharacter` | method (static) | Static entry point. Takes 1 argument: `BasicCharacterObject character`. Returns `MultiplayerClassDivisions.MPHeroClass`. Read path: prefer it over reaching for the backing store. |
| `GetMPHeroClassForFormation` | method (static) | Static entry point. Takes 1 argument: `Formation formation`. Returns `TargetIconType`. Read path: prefer it over reaching for the backing store. |
| `GetMPHeroClassForPeer` | method (static) | Static entry point. Takes 2 arguments: `MissionPeer peer`, `bool skipTeamCheck`. Returns `MultiplayerClassDivisions.MPHeroClass`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `MultiplayerHeroClassGroups` | property (static) | Static entry point `List<MultiplayerClassDivisions.MPHeroClassGroup>` property. Read it for current state; a declared setter writes that state in place. |
| `Release` | method (static) | Static entry point. Takes no arguments. |
| `AvailableCultures` | field (static) | Static entry point `IEnumerable<BasicCultureObject>` field — direct storage with no validation or notification. |
| `MPHeroClassGroup` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Static entry points on MultiplayerClassDivisions:
MultiplayerClassDivisions.GetMPHeroClasses(culture);
MultiplayerClassDivisions.GetMPHeroClasses();
MultiplayerClassDivisions.GetMPHeroClassForCharacter(character);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [MPPerkObject](../MPPerkObject/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
