---
title: "SiegeEvent"
description: "SiegeEvent — class in TaleWorlds.CampaignSystem.Siege. 34 public members (0 static)."
---

<!-- v147-skeleton -->
# SiegeEvent

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SiegeEvent`  
**Source:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEvent` is a named type in the TaleWorlds.CampaignSystem.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SiegeEvent`.
- **Instance members** (33): `SiegeWallSeed`, `SiegePeopleSeed`, `IsPlayerSiegeEvent`, `BlockadeShouldBeActivated`, `IsBlockadeActive`, `ActivateBlockade`, ….
- **Extension points** (1): `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `ActivateBlockade` | method | Instance entry point. Takes no arguments. |
| `AdvanceStrategy` | method | Instance entry point. Takes 1 argument: `ISiegeEventSide siegeEventSide`. |
| `BlockadeShouldBeActivated` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `BombardTick` | method | Instance entry point. Takes 1 argument: `ISiegeEventSide siegeEventSide`. |
| `BreakSiegeEngine` | method | Instance entry point. Takes 2 arguments: `ISiegeEventSide siegeEventSide`, `SiegeEngineType siegeEngineType`. |
| `CanPartyJoinSide` | method | Instance entry point. Takes 2 arguments: `PartyBase party`, `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ConstructionTick` | method | Instance entry point. Takes 1 argument: `ISiegeEventSide siegeEventSide`. |
| `CreateSiegeObject` | method | Instance entry point. Takes 2 arguments: `SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress`, `ISiegeEventSide siegeSide`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DeactivateBlockade` | method | Instance entry point. Takes no arguments. |
| `DoSiegeAction` | method | Instance entry point. Takes 5 arguments: `ISiegeEventSide siegeEventSide`, `SiegeStrategyActionModel.SiegeAction siegeAction`, `SiegeEngineType siegeEngineType`, `int deploymentIndex`, …. |
| `FinalizeSiegeEvent` | method | Instance entry point. Takes no arguments. |
| `FindAttackableRangedEngineWithHighestPriority` | method | Instance entry point. Takes 4 arguments: `ISiegeEventSide siegeEventSide`, `int attackerSlotIndex`, `out int targetIndex`, `out float targetPriority`. Read path: prefer it over reaching for the backing store. |
| `GetCurrentBattleType` | method | Instance entry point. Takes no arguments. Returns `MapEvent.BattleTypes`. Read path: prefer it over reaching for the backing store. |
| `GetInvolvedPartiesForEventType` | method | Instance entry point. Takes 1 argument: `MapEvent.BattleTypes battleType`. Returns `List<PartyBase>`. Read path: prefer it over reaching for the backing store. |
| `GetPreparedAndActiveSiegeEngines` | method | Instance entry point. Takes 1 argument: `ISiegeEventSide siegeEventSide`. Returns `List<MissionSiegeWeapon>`. Read path: prefer it over reaching for the backing store. |
| `GetPreparedSiegeEnginesAsDictionary` | method | Instance entry point. Takes 1 argument: `ISiegeEventSide siegeEventSide`. Returns `Dictionary<SiegeEngineType, int>`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeEventSide` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `ISiegeEventSide`. Read path: prefer it over reaching for the backing store. |
| `IsBlockadeActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPartyInvolved` | method | Instance entry point. Takes 1 argument: `PartyBase party`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerSiegeEvent` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAfterLoad` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeSiegeEventEnd` | method | Instance entry point. Takes 2 arguments: `BattleState winnerSide`, `MapEvent.BattleTypes battleType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RangedSiegeEngine` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public SiegeEvent(Settlement settlement, MobileParty besiegerParty)`.

10 further public members follow the same patterns.
## Usage Example

```csharp
var siegeEvent = new SiegeEvent(settlement, besiegerParty);
siegeEvent.ActivateBlockade();
// Read current state through siegeEvent.SiegeWallSeed.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerSiege](../PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ISiegeEventSide](../ISiegeEventSide/) — `TaleWorlds.CampaignSystem.Siege`.
- [GameMenu](../GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [AiBehavior](../AiBehavior/) — `TaleWorlds.CampaignSystem.Party`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/campaign/](../) — the other types in this bucket.
