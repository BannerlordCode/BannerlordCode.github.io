---
title: "PartyGroupTroopSupplier"
description: "PartyGroupTroopSupplier — class in TaleWorlds.CampaignSystem.TroopSuppliers. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyGroupTroopSupplier

**Namespace:** `TaleWorlds.CampaignSystem.TroopSuppliers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`  
**Base:** `IMissionTroopSupplier`  
**Source:** `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs`

## Overview

`PartyGroupTroopSupplier` is a named type in the TaleWorlds.CampaignSystem.TroopSuppliers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IMissionTroopSupplier, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyGroupTroopSupplier`.
- **Instance members** (13): `SupplyTroops`, `SupplyOneTroop`, `GetAllTroops`, `GetGeneralCharacter`, `NumRemovedTroops`, `NumTroopsNotSupplied`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AnyTroopRemainsToBeSupplied` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `GetAllTroops` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<IAgentOriginBase>`. Read path: prefer it over reaching for the backing store. |
| `GetGeneralCharacter` | method | Instance entry point. Takes no arguments. Returns `BasicCharacterObject`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfPlayerControllableTroops` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetParty` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopDescriptor`. Returns `PartyBase`. Read path: prefer it over reaching for the backing store. |
| `NumRemovedTroops` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NumTroopsNotSupplied` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnTroopKilled` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopDescriptor`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopRouted` | method | Instance entry point. Takes 2 arguments: `UniqueTroopDescriptor troopDescriptor`, `bool isOrderRetreat`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopScoreHit` | method | Instance entry point. Takes 6 arguments: `UniqueTroopDescriptor descriptor`, `BasicCharacterObject attackedCharacter`, `int damage`, `bool isFatal`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopWounded` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopDescriptor`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SupplyOneTroop` | method | Instance entry point. Takes no arguments. Returns `IAgentOriginBase`. |
| `SupplyTroops` | method | Instance entry point. Takes 1 argument: `int numberToAllocate`. Returns `IEnumerable<IAgentOriginBase>`. |
| `PartyGroupTroopSupplier` | ctor | Instance entry point. Takes 6 arguments: `MapEvent mapEvent`, `BattleSideEnum side`, `FlattenedTroopRoster priorTroops`, `Func<UniqueTroopDescriptor`, …. Returns ``. |

- Constructed as `public PartyGroupTroopSupplier(MapEvent mapEvent, BattleSideEnum side, FlattenedTroopRoster priorTroops = null, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)`.

## Usage Example

```csharp
var partyGroupTroopSupplier = new PartyGroupTroopSupplier(mapEvent, side, priorTroops, theTarget, theTarget, customAllocationConditions);
partyGroupTroopSupplier.SupplyTroops(numberToAllocate);
// Read current state through partyGroupTroopSupplier.NumRemovedTroops.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FlattenedTroopRoster](../FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [PartyGroupAgentOrigin](../PartyGroupAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.

Section: [api/campaign/](../) — the other types in this bucket.
