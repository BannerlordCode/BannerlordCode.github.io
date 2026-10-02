---
title: "MobilePartyAi"
description: "MobilePartyAi — class in TaleWorlds.CampaignSystem.Party. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# MobilePartyAi

**Namespace:** `TaleWorlds.CampaignSystem.Party`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MobilePartyAi`  
**Source:** `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs`

## Overview

`MobilePartyAi` is a named type in the TaleWorlds.CampaignSystem.Party namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (17): `IsDisabled`, `AvoidInitiative`, `AttackInitiative`, `AiBehaviorPartyBase`, `AiBehaviorInteractable`, `CacheAiBehaviorPartyBase`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AiBehaviorInteractable` | property | Instance entry point `IInteractablePoint` property. Read it for current state; a declared setter writes that state in place. |
| `AiBehaviorPartyBase` | property | Instance entry point `PartyBase` property. Read it for current state; a declared setter writes that state in place. |
| `AttackInitiative` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `AvoidInitiative` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CacheAiBehaviorPartyBase` | method | Instance entry point. Takes no arguments. |
| `CalculateFleePosition` | method | Instance entry point. Takes 3 arguments: `out CampaignVec2 fleeTargetPoint`, `MobileParty partyToFleeFrom`, `Vec2 averageEnemyVec`. |
| `CheckPartyNeedsUpdate` | method | Instance entry point. Takes no arguments. |
| `DisableAi` | method | Instance entry point. Takes no arguments. |
| `DisableForHours` | method | Instance entry point. Takes 1 argument: `int hours`. |
| `EnableAgainAtHourIsPast` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `EnableAi` | method | Instance entry point. Takes no arguments. |
| `FleeingData` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `GetNearbyPartyDataWhileDefendingSettlement` | method | Instance entry point. Takes 6 arguments: `Settlement targetSettlement`, `out bool shouldConsiderJoiningNearbyAllyParties`, `out bool shouldJoinLandSide`, `out bool shouldEngage`, …. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `IsDisabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetDoNotAttackMainParty` | method | Instance entry point. Takes 1 argument: `int hours`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoNotMakeNewDecisions` | method | Instance entry point. Takes 1 argument: `bool doNotMakeNewDecisions`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetInitiative` | method | Instance entry point. Takes 3 arguments: `float attackInitiative`, `float avoidInitiative`, `float hoursUntilReset`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// MobilePartyAi is read through its properties:
//   IsDisabled : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [IInteractablePoint](../IInteractablePoint/) — `TaleWorlds.CampaignSystem.Map`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [AiBehavior](../AiBehavior/) — `TaleWorlds.CampaignSystem.Party`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [LocatableSearchData](../LocatableSearchData/) — `TaleWorlds.CampaignSystem.Map`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [BanditDensityModel](../../campaign-ext/BanditDensityModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/campaign/](../) — the other types in this bucket.
