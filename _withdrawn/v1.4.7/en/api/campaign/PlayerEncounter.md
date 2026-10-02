---
title: "PlayerEncounter"
description: "PlayerEncounter — class in TaleWorlds.CampaignSystem.Encounters. 66 public members (45 static)."
---

<!-- v147-skeleton -->
# PlayerEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PlayerEncounter`  
**Source:** `TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs`

## Overview

`PlayerEncounter` is a named type in the TaleWorlds.CampaignSystem.Encounters namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (45): `Current`, `LocationEncounter`, `Battle`, `EncounteredParty`, `EncounteredMobileParty`, `EncounteredBattle`, ….
- **Instance members** (19): `EncounterState`, `RosterToReceiveLootItems`, `RosterToReceiveLootPrisoners`, `RosterToReceiveLootMembers`, `ReceivedLootShips`, `IsNavalEncounterFinishedWithDisengage`, ….
- **Data and constants** (2): `BattleSimulation`, `PlayerLootedFigurehead`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Battle` | property (static) | Static entry point `MapEvent` property. Read it for current state; a declared setter writes that state in place. |
| `BattleChallenge` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `BattleState` | property (static) | Static entry point `BattleState` property. Read it for current state; a declared setter writes that state in place. |
| `CampaignBattleResult` | property (static) | Static entry point `CampaignBattleResult` property. Read it for current state; a declared setter writes that state in place. |
| `CheckIfLeadingAvaliable` | method (static) | Static entry point. Takes no arguments. Returns `bool`. |
| `Current` | property (static) | Static entry point `PlayerEncounter` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentBattleSimulation` | property (static) | Static entry point `BattleSimulation` property. Read it for current state; a declared setter writes that state in place. |
| `DoMeeting` | method (static) | Static entry point. Takes no arguments. |
| `EncounteredBattle` | property (static) | Static entry point `MapEvent` property. Read it for current state; a declared setter writes that state in place. |
| `EncounteredMobileParty` | property (static) | Static entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `EncounteredParty` | property (static) | Static entry point `PartyBase` property. Read it for current state; a declared setter writes that state in place. |
| `EncounterSettlement` | property (static) | Static entry point `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `EndBattleByCheat` | method (static) | Static entry point. Takes 1 argument: `bool playerWon`. |
| `EnemySurrender` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `EnterSettlement` | method (static) | Static entry point. Takes no arguments. |
| `Finish` | method (static) | Static entry point. Takes 1 argument: `bool forcePlayerOutFromSettlement`. |
| `GetLeadingHero` | method (static) | Static entry point. Takes no arguments. Returns `Hero`. Read path: prefer it over reaching for the backing store. |
| `Init` | method (static) | Static entry point. Takes no arguments. |
| `InitSimulation` | method (static) | Static entry point. Takes 2 arguments: `FlattenedTroopRoster selectedTroopsForPlayerSide`, `FlattenedTroopRoster selectedTroopsForOtherSide`. |
| `InsideSettlement` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsActive` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNavalEncounter` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `JoinBattle` | method (static) | Static entry point. Takes 1 argument: `BattleSideEnum side`. |
| `LeaveBattle` | method (static) | Static entry point. Takes no arguments. |

42 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on PlayerEncounter:
PlayerEncounter.RestartPlayerEncounter(defenderParty, attackerParty, forcePlayerOutFromSettlement, isPlayerEncounterRestartedForRaid);
PlayerEncounter.Init();
PlayerEncounter.IsNavalEncounter();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [LocationEncounter](../LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [CampaignBattleResult](../CampaignBattleResult/) — `TaleWorlds.CampaignSystem.Encounters`.
- [PlayerEncounterState](../PlayerEncounterState/) — `TaleWorlds.CampaignSystem.Encounters`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/campaign/](../) — the other types in this bucket.
