---
title: "MPPerkObject"
description: "MPPerkObject — class in TaleWorlds.MountAndBlade. 28 public members (8 static)."
---

<!-- v147-skeleton -->
# MPPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`  
**Base:** `IReadOnlyPerkObject`  
**Source:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPPerkObject` is a named type in the TaleWorlds.MountAndBlade namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IReadOnlyPerkObject, so the members it does not redeclare are inherited from there. 13 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MPPerkObject`.
- **Static entry points** (8): `GetTroopCount`, `Deserialize`, `GetPerkHandler`, `GetCombatPerkHandler`, `GetOnSpawnPerkHandler`, `RaiseEventForAllPeers`, ….
- **Instance members** (19): `Name`, `Description`, `HasBannerBearer`, `GameModes`, `PerkListIndex`, `IconId`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Deserialize` | method (static) | Static entry point. Takes 1 argument: `XmlNode node`. Returns `IReadOnlyPerkObject`. |
| `GetCombatPerkHandler` | method (static) | Static entry point. Takes 2 arguments: `Agent attacker`, `Agent defender`. Returns `MPPerkObject.MPCombatPerkHandler`. Read path: prefer it over reaching for the backing store. |
| `GetOnSpawnPerkHandler` | method (static) | Static entry point. Takes 1 argument: `MissionPeer peer`. Returns `MPPerkObject.MPOnSpawnPerkHandler`. Read path: prefer it over reaching for the backing store. |
| `GetPerkHandler` | method (static) | Static entry point. Takes 1 argument: `Agent agent`. Returns `MPPerkObject.MPPerkHandler`. Read path: prefer it over reaching for the backing store. |
| `GetTroopCount` | method (static) | Static entry point. Takes 3 arguments: `MultiplayerClassDivisions.MPHeroClass heroClass`, `int botsPerFormation`, `MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `RaiseEventForAllPeers` | method (static) | Static entry point. Takes 1 argument: `MPPerkCondition.PerkEventFlags flags`. |
| `RaiseEventForAllPeersOnTeam` | method (static) | Static entry point. Takes 2 arguments: `Team side`, `MPPerkCondition.PerkEventFlags flags`. |
| `TickAllPeerPerks` | method (static) | Static entry point. Takes 1 argument: `int tickCount`. Called from the owner’s update loop — do not assume a frame boundary. |
| `Clone` | method | Instance entry point. Takes 1 argument: `MissionPeer peer`. Returns `MPPerkObject`. |
| `Description` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GameModes` | property | Instance entry point `List<string>` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlternativeEquipments` | method | Instance entry point. Takes 5 arguments: `bool isWarmup`, `bool isPlayer`, `List<ValueTuple<EquipmentIndex`, `EquipmentElement>> alternativeEquipments`, …. Returns `List<ValueTuple<EquipmentIndex, EquipmentElement>>`. Read path: prefer it over reaching for the backing store. |
| `GetDrivenPropertyBonusOnSpawn` | method | Instance entry point. Takes 4 arguments: `bool isWarmup`, `bool isPlayer`, `DrivenProperty drivenProperty`, `float baseValue`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetExtraTroopCount` | method | Instance entry point. Takes 1 argument: `bool isWarmup`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetHitpoints` | method | Instance entry point. Takes 2 arguments: `bool isWarmup`, `bool isPlayer`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `HasBannerBearer` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HeroIdleAnimOverride` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `HeroMountIdleAnimOverride` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IconId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MPCombatPerkHandler` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `MPOnSpawnPerkHandler` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `MPPerkHandler` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PerkListIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public MPPerkObject(MissionPeer peer, string name, string description, List<string> gameModes, int perkListIndex, string iconId, IEnumerable<MPConditionalEffect> conditionalEffects, IEnumerable<MPPerkEffectBase> effects, string heroIdleAnimOverride, string heroMountIdleAnimOverride, string troopIdleAnimOverride, string troopMountIdleAnimOverride)`.

4 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on MPPerkObject:
MPPerkObject.GetTroopCount(heroClass, botsPerFormation, onSpawnPerkHandler);
MPPerkObject.Deserialize(node);
MPPerkObject.GetPerkHandler(agent);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/MPPerkObject.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerBearerCondition](../BannerBearerCondition/) — `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [MultiplayerClassDivisions](../MultiplayerClassDivisions/) — `TaleWorlds.MountAndBlade`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [CommandLineFunctionality](../../core-extra/CommandLineFunctionality/) — `TaleWorlds.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
