---
title: "BlockadeBattleMapEvent"
description: "BlockadeBattleMapEvent — class in TaleWorlds.CampaignSystem.MapEvents. 5 public members (1 static)."
---

<!-- v147-skeleton -->
# BlockadeBattleMapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BlockadeBattleMapEvent : MapEventComponent`  
**Base:** `MapEventComponent`  
**Source:** `TaleWorlds.CampaignSystem/MapEvents/BlockadeBattleMapEvent.cs`

## Overview

`BlockadeBattleMapEvent` is a named type in the TaleWorlds.CampaignSystem.MapEvents namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MapEventComponent, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BlockadeBattleMapEvent`.
- **Static entry points** (1): `CreateBlockadeBattleMapEvent`.
- **Instance members** (3): `SimulationContext`, `OnInitialize`, `OnFinalize`.
- **Extension points** (3): `SimulationContext`, `OnInitialize`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateBlockadeBattleMapEvent` | method (static) | Static entry point. Takes 3 arguments: `PartyBase attackerParty`, `PartyBase besiegerParty`, `bool isSallyOut`. Returns `BlockadeBattleMapEvent`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `SimulationContext` | property (override) | Overrides the base member `MapEvent.PowerCalculationContext` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BlockadeBattleMapEvent` | ctor | Protected — for subclasses only. Takes 1 argument: `MapEvent mapEvent`. Returns ``. |

- Constructed as `protected BlockadeBattleMapEvent(MapEvent mapEvent)`.

## Usage Example

```csharp
// Static entry points on BlockadeBattleMapEvent:
BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, besiegerParty, isSallyOut);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/MapEvents/BlockadeBattleMapEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [GameMenu](../GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/campaign/](../) — the other types in this bucket.
