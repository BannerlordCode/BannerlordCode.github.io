---
title: "BesiegerCamp"
description: "BesiegerCamp — class in TaleWorlds.CampaignSystem.Siege. 23 public members (0 static)."
---

<!-- v147-skeleton -->
# BesiegerCamp

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BesiegerCamp : ISiegeEventSide`  
**Base:** `ISiegeEventSide`  
**Source:** `TaleWorlds.CampaignSystem/Siege/BesiegerCamp.cs`

## Overview

`BesiegerCamp` is a named type in the TaleWorlds.CampaignSystem.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ISiegeEventSide, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BesiegerCamp`.
- **Instance members** (22): `LeaderParty`, `MapFaction`, `GetInvolvedPartiesForEventType`, `GetNextInvolvedPartyForEventType`, `HasInvolvedPartyForEventType`, `BattleSide`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddSiegeEngineMissile` | method | Instance entry point. Takes 1 argument: `SiegeEvent.SiegeEngineMissile missile`. Adds to the collection or relation this type owns. |
| `BattleSide` | property | Instance entry point `BattleSideEnum` property. Read it for current state; a declared setter writes that state in place. |
| `BombardHitWalls` | method | Instance entry point. Takes 2 arguments: `SiegeEngineType attackerEngineType`, `int wallIndex`. |
| `CheckBesiegerPartiesAndMakeThemLeave` | method | Instance entry point. Takes no arguments. |
| `FinalizeSiegeEvent` | method | Instance entry point. Takes no arguments. |
| `GetAttackTarget` | method | Instance entry point. Takes 5 arguments: `ISiegeEventSide siegeEventSide`, `SiegeEngineType siegeEngine`, `int siegeEngineSlot`, `out SiegeBombardTargets targetType`, …. Read path: prefer it over reaching for the backing store. |
| `GetInvolvedPartiesForEventType` | method | Instance entry point. Takes 1 argument: `MapEvent.BattleTypes mapEventType`. Returns `IEnumerable<PartyBase>`. Read path: prefer it over reaching for the backing store. |
| `GetNextInvolvedPartyForEventType` | method | Instance entry point. Takes 2 arguments: `ref int partyIndex`, `MapEvent.BattleTypes mapEventType`. Returns `PartyBase`. Read path: prefer it over reaching for the backing store. |
| `HasInvolvedPartyForEventType` | method | Instance entry point. Takes 2 arguments: `PartyBase party`, `MapEvent.BattleTypes mapEventType`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializeSiegeEventSide` | method | Instance entry point. Takes no arguments. |
| `IsBesiegerSideParty` | method | Instance entry point. Takes 1 argument: `MobileParty mobileParty`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPreparationComplete` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReadyToBesiege` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LeaderParty` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `MapFaction` | property | Instance entry point `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `OnAfterLoad` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopsKilledOnSide` | method | Instance entry point. Takes 1 argument: `int killCount`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveAllSiegeParties` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `RemoveDeprecatedMissiles` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetPositionAfterMapChange` | method | Instance entry point. Takes 1 argument: `CampaignVec2 newPosition`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSiegeStrategy` | method | Instance entry point. Takes 1 argument: `SiegeStrategy strategy`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SiegeEngineMissiles` | property | Instance entry point `MBReadOnlyList<SiegeEvent.SiegeEngineMissile>` property. Read it for current state; a declared setter writes that state in place. |
| `BesiegerCamp` | ctor | Instance entry point. Takes 2 arguments: `SiegeEvent siegeEvent`, `IFaction besiegerFaction`. Returns ``. |

- Constructed as `public BesiegerCamp(SiegeEvent siegeEvent, IFaction besiegerFaction)`.

## Usage Example

```csharp
var besiegerCamp = new BesiegerCamp(siegeEvent, besiegerFaction);
besiegerCamp.GetInvolvedPartiesForEventType(mapEventType);
// Read current state through besiegerCamp.LeaderParty.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Siege/BesiegerCamp.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ISiegeEventSide](../ISiegeEventSide/) — `TaleWorlds.CampaignSystem.Siege`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [DefaultSiegeStrategies](../DefaultSiegeStrategies/) — `TaleWorlds.CampaignSystem.Siege`.
- [AiBehavior](../AiBehavior/) — `TaleWorlds.CampaignSystem.Party`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [PlayerSiege](../PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/campaign/](../) — the other types in this bucket.
