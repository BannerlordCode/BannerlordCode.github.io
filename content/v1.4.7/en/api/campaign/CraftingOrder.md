---
title: "CraftingOrder"
description: "CraftingOrder — class in TaleWorlds.CampaignSystem.CraftingSystem. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# CraftingOrder

**Namespace:** `TaleWorlds.CampaignSystem.CraftingSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CraftingOrder : ITrackableCampaignObject, ITrackableBase`  
**Base:** `ITrackableCampaignObject, ITrackableBase`  
**Source:** `TaleWorlds.CampaignSystem/CraftingSystem/CraftingOrder.cs`

## Overview

`CraftingOrder` is a named type in the TaleWorlds.CampaignSystem.CraftingSystem namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ITrackableCampaignObject, ITrackableBase, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftingOrder`.
- **Instance members** (11): `IsLordOrder`, `IsReady`, `WeaponDesignTemplate`, `InitializeCraftingOrderOnLoad`, `IsPreCraftedWeaponDesignValid`, `GetStatWeapon`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanHeroCompleteOrder` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `ItemObject craftDesignItem`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CheckForBonusesAndPenalties` | method | Instance entry point. Takes 6 arguments: `ItemObject craftedItem`, `ItemModifier itemModifier`, `out float craftedStatsSum`, `out float requiredStatsSum`, …. |
| `GetOrderExperience` | method | Instance entry point. Takes 2 arguments: `ItemObject craftedItem`, `ItemModifier itemModifier`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetStatDataForItem` | method | Instance entry point. Takes 2 arguments: `ItemObject itemObject`, `out WeaponComponentData weapon`. Returns `List<CraftingStatData>`. Read path: prefer it over reaching for the backing store. |
| `GetStatWeapon` | method | Instance entry point. Takes no arguments. Returns `WeaponComponentData`. Read path: prefer it over reaching for the backing store. |
| `InitializeCraftingOrderOnLoad` | method | Instance entry point. Takes no arguments. |
| `IsLordOrder` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOrderAvailableForHero` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPreCraftedWeaponDesignValid` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReady` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `WeaponDesignTemplate` | property | Instance entry point `WeaponDesign` property. Read it for current state; a declared setter writes that state in place. |
| `CraftingOrder` | ctor | Instance entry point. Takes 6 arguments: `Hero orderOwner`, `float orderDifficulty`, `WeaponDesign weaponDesignTemplate`, `CraftingTemplate template`, …. Returns ``. |

- Constructed as `public CraftingOrder(Hero orderOwner, float orderDifficulty, WeaponDesign weaponDesignTemplate, CraftingTemplate template, int difficultyLevel = -1, string customId = null)`.

## Usage Example

```csharp
var craftingOrder = new CraftingOrder(orderOwner, orderDifficulty, weaponDesignTemplate, template, difficultyLevel, customId);
craftingOrder.InitializeCraftingOrderOnLoad();
// Read current state through craftingOrder.IsLordOrder.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CraftingSystem/CraftingOrder.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) — `TaleWorlds.CampaignSystem.CampaignBehaviors`.
- [IMapScene](../IMapScene/) — `TaleWorlds.CampaignSystem.Map`.

Section: [api/campaign/](../) — the other types in this bucket.
