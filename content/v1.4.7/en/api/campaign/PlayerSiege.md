---
title: "PlayerSiege"
description: "PlayerSiege — class in TaleWorlds.CampaignSystem.Siege. 9 public members (9 static)."
---

<!-- v147-skeleton -->
# PlayerSiege

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PlayerSiege`  
**Source:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`

## Overview

`PlayerSiege` is a named type in the TaleWorlds.CampaignSystem.Siege namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (9): `PlayerSiegeEvent`, `BesiegedSettlement`, `PlayerSide`, `IsRebellion`, `StartSiegePreparation`, `OnSiegeEventFinalized`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BesiegedSettlement` | property (static) | Static entry point `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `FinalizePlayerSiege` | method (static) | Static entry point. Takes no arguments. |
| `IsRebellion` | property (static) | Static entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnSiegeEventFinalized` | method (static) | Static entry point. Takes 1 argument: `bool besiegerPartyDefeated`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PlayerSide` | property (static) | Static entry point `BattleSideEnum` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerSiegeEvent` | property (static) | Static entry point `SiegeEvent` property. Read it for current state; a declared setter writes that state in place. |
| `StartPlayerSiege` | method (static) | Static entry point. Takes 3 arguments: `BattleSideEnum playerSide`, `bool isSimulation`, `Settlement settlement`. |
| `StartSiegeMission` | method (static) | Static entry point. Takes 1 argument: `Settlement settlement`. |
| `StartSiegePreparation` | method (static) | Static entry point. Takes no arguments. |

## Usage Example

```csharp
// Static entry points on PlayerSiege:
PlayerSiege.StartSiegePreparation();
PlayerSiege.OnSiegeEventFinalized(besiegerPartyDefeated);
PlayerSiege.StartPlayerSiege(playerSide, isSimulation, settlement);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [GameMenu](../GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [LocationComplex](../LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/campaign/](../) — the other types in this bucket.
