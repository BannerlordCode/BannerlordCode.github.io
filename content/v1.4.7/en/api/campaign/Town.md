---
title: "Town"
description: "Town — class in TaleWorlds.CampaignSystem.Settlements. 54 public members (3 static)."
---

<!-- v147-skeleton -->
# Town

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Town : Fief`  
**Base:** `Fief`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## Overview

`Town` is a named type in the TaleWorlds.CampaignSystem.Settlements namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Fief, so the members it does not redeclare are inherited from there. 35 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Town`.
- **Static entry points** (3): `AllFiefs`, `AllTowns`, `AllCastles`.
- **Instance members** (50): `Prosperity`, `GetDefenderParties`, `GetNextDefenderParty`, `Culture`, `ProsperityChange`, `ProsperityChangeExplanation`, ….
- **Extension points** (12): `IsTown`, `IsCastle`, `OnInit`, `OnSessionStart`, `PreAfterLoad`, `AfterLoad`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AllCastles` | property (static) | Static entry point `MBReadOnlyList<Town>` property. Read it for current state; a declared setter writes that state in place. |
| `AllFiefs` | property (static) | Static entry point `IEnumerable<Town>` property. Read it for current state; a declared setter writes that state in place. |
| `AllTowns` | property (static) | Static entry point `MBReadOnlyList<Town>` property. Read it for current state; a declared setter writes that state in place. |
| `Deserialize` | method (override) | Overrides the base member. Takes 2 arguments: `MBObjectManager objectManager`, `XmlNode node`. |
| `GetItemPrice` | method (override) | Overrides the base member. Takes 3 arguments: `ItemObject item`, `MobileParty tradingParty`, `bool isSelling`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetProsperityLevel` | method (override) | Overrides the base member. Takes no arguments. Returns `SettlementComponent.ProsperityLevel`. Read path: prefer it over reaching for the backing store. |
| `IsCastle` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTown` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MapFaction` | property (override) | Overrides the base member `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSessionStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `AfterLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `OnInventoryUpdated` | method (override) | Overrides the base member. Takes 2 arguments: `ItemRosterElement item`, `int count`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreAfterLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `AddEffectOfBuildings` | method | Instance entry point. Takes 2 arguments: `BuildingEffectEnum buildingEffect`, `ref ExplainedNumber result`. Adds to the collection or relation this type owns. |
| `AvailableShips` | property | Instance entry point `MBReadOnlyList<Ship>` property. Read it for current state; a declared setter writes that state in place. |
| `Construction` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ConstructionExplanation` | property | Instance entry point `ExplainedNumber` property. Read it for current state; a declared setter writes that state in place. |
| `Culture` | property | Instance entry point `CultureObject` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentBuilding` | property | Instance entry point `Building` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentDefaultBuilding` | property | Instance entry point `Building` property. Read it for current state; a declared setter writes that state in place. |
| `FoodChange` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FoodChangeExplanation` | property | Instance entry point `ExplainedNumber` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public Town()`.

30 further public members follow the same patterns.
## Usage Example

```csharp
var town = new Town();
town.GetDefenderParties(battleType);
// Read current state through town.Prosperity.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 12 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Town.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Fief](../Fief/) — `TaleWorlds.CampaignSystem.Settlements`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [ExplainedNumber](../ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [BuildingEffectEnum](../BuildingEffectEnum/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [Workshop](../Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [Building](../Building/) — `TaleWorlds.CampaignSystem.Settlements.Buildings`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/campaign/](../) — the other types in this bucket.
