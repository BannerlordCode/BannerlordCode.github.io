---
title: "DefaultSettlementEconomyModel"
description: "DefaultSettlementEconomyModel — class in TaleWorlds.CampaignSystem.GameComponents. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultSettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`  
**Base:** `SettlementEconomyModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`

## Overview

`DefaultSettlementEconomyModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends SettlementEconomyModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (6): `GetSupplyDemandForCategory`, `GetDailyDemandForCategory`, `GetTownGoldChange`, `CalculateDailySettlementBudgetForItemCategory`, `GetDemandChangeFromValue`, `GetEstimatedDemandForCategory`.
- **Extension points** (6): `GetSupplyDemandForCategory`, `GetDailyDemandForCategory`, `GetTownGoldChange`, `CalculateDailySettlementBudgetForItemCategory`, `GetDemandChangeFromValue`, `GetEstimatedDemandForCategory`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateDailySettlementBudgetForItemCategory` | method (override) | Overrides the base member. Takes 3 arguments: `Town town`, `float demand`, `ItemCategory category`. Returns `float`. |
| `GetDailyDemandForCategory` | method (override) | Overrides the base member. Takes 3 arguments: `Town town`, `ItemCategory category`, `int extraProsperity`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDemandChangeFromValue` | method (override) | Overrides the base member. Takes 1 argument: `float purchaseValue`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetEstimatedDemandForCategory` | method (override) | Overrides the base member. Takes 3 arguments: `Town town`, `ItemData itemData`, `ItemCategory category`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetSupplyDemandForCategory` | method (override) | Overrides the base member. Takes 6 arguments: `Town town`, `ItemCategory category`, `float dailySupply`, `float dailyDemand`, …. Returns `ValueTuple<float, float>`. Read path: prefer it over reaching for the backing store. |
| `GetTownGoldChange` | method (override) | Overrides the base member. Takes 1 argument: `Town town`. Returns `int`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
DefaultSettlementEconomyModel.GetSupplyDemandForCategory(town, category, dailySupply, dailyDemand, oldSupply, oldDemand);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
