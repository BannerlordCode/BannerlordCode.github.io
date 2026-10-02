---
title: "DefaultVillageTypes"
description: "DefaultVillageTypes — class in TaleWorlds.CampaignSystem.Settlements. 23 public members (21 static)."
---

<!-- v147-skeleton -->
# DefaultVillageTypes

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultVillageTypes`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/DefaultVillageTypes.cs`

## Overview

`DefaultVillageTypes` is a named type in the TaleWorlds.CampaignSystem.Settlements namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DefaultVillageTypes`.
- **Static entry points** (21): `EuropeHorseRanch`, `BattanianHorseRanch`, `SturgianHorseRanch`, `VlandianHorseRanch`, `SteppeHorseRanch`, `DesertHorseRanch`, ….
- **Instance members** (1): `ConsumableRawItems`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BattanianHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `CattleRange` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `ClayMine` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `DateFarm` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `DesertHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `EuropeHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `Fisherman` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `FlaxPlant` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `HogFarm` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `IronMine` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `Lumberjack` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `OliveTrees` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SaltMine` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SheepFarm` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SilkPlant` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SilverMine` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SteppeHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `SturgianHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `VineYard` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `VlandianHorseRanch` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `WheatFarm` | property (static) | Static entry point `VillageType` property. Read it for current state; a declared setter writes that state in place. |
| `ConsumableRawItems` | property | Instance entry point `IList<ItemObject>` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultVillageTypes` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DefaultVillageTypes()`.

## Usage Example

```csharp
var defaultVillageTypes = new DefaultVillageTypes();
// Read current state through defaultVillageTypes.ConsumableRawItems.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/DefaultVillageTypes.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
