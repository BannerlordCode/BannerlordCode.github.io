---
title: "Crafting"
description: "Crafting — class in TaleWorlds.Core. 35 public members (4 static)."
---

<!-- v147-skeleton -->
# Crafting

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class Crafting`  
**Source:** `TaleWorlds.Core/Crafting.cs`

## Overview

`Crafting` is a named type in the TaleWorlds.Core namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Crafting`.
- **Static entry points** (4): `GenerateItem`, `GetStatDatasFromTemplate`, `CreatePreCraftedWeaponOnDeserialize`, `InitializePreCraftedWeaponOnLoad`.
- **Instance members** (24): `CurrentCulture`, `CurrentCraftingTemplate`, `CurrentWeaponDesign`, `CurrentItemModifierGroup`, `CraftedWeaponName`, `SetCraftedWeaponName`, ….
- **Data and constants** (6): `WeightOfCrudeIron`, `WeightOfIron`, `WeightOfCompositeIron`, `WeightOfSteel`, `WeightOfRefinedSteel`, `WeightOfCalradianSteel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreatePreCraftedWeaponOnDeserialize` | method (static) | Static entry point. Takes 5 arguments: `ItemObject itemObject`, `WeaponDesignElement[] usedPieces`, `string templateId`, `TextObject craftedWeaponName`, …. Returns `ItemObject`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GenerateItem` | method (static) | Static entry point. Takes 6 arguments: `WeaponDesign weaponDesignTemplate`, `TextObject name`, `BasicCultureObject culture`, `ItemModifierGroup itemModifierGroup`, …. |
| `GetStatDatasFromTemplate` | method (static) | Static entry point. Takes 3 arguments: `int usageIndex`, `ItemObject craftedItemObject`, `CraftingTemplate template`. Returns `IEnumerable<CraftingStatData>`. Read path: prefer it over reaching for the backing store. |
| `InitializePreCraftedWeaponOnLoad` | method (static) | Static entry point. Takes 4 arguments: `ItemObject itemObject`, `WeaponDesign craftedData`, `TextObject itemName`, `BasicCultureObject culture`. Returns `ItemObject`. |
| `CraftedWeaponName` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentCraftingTemplate` | property | Instance entry point `CraftingTemplate` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentCulture` | property | Instance entry point `BasicCultureObject` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentItemModifierGroup` | property | Instance entry point `ItemModifierGroup` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentWeaponDesign` | property | Instance entry point `WeaponDesign` property. Read it for current state; a declared setter writes that state in place. |
| `GetCurrentCraftedItemObject` | method | Instance entry point. Takes 2 arguments: `bool forceReCreate`, `string customId`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetRandomCraftName` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetRandomPieceOfType` | method | Instance entry point. Takes 2 arguments: `CraftingPiece.PieceTypes pieceType`, `bool randomScale`. Returns `WeaponDesignElement`. Read path: prefer it over reaching for the backing store. |
| `GetStatDatas` | method | Instance entry point. Takes 1 argument: `int usageIndex`. Returns `IEnumerable<CraftingStatData>`. Read path: prefer it over reaching for the backing store. |
| `GetXmlCodeForCurrentItem` | method | Instance entry point. Takes 1 argument: `ItemObject item`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Init` | method | Instance entry point. Takes no arguments. |
| `Randomize` | method | Instance entry point. Takes no arguments. |
| `Redo` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `RefiningFormula` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `ReIndex` | method | Instance entry point. Takes 1 argument: `bool enforceReCreation`. |
| `ScaleThePiece` | method | Instance entry point. Takes 2 arguments: `CraftingPiece.PieceTypes scalingPieceType`, `int percentage`. |
| `SelectedPieces` | property | Instance entry point `WeaponDesignElement[]` property. Read it for current state; a declared setter writes that state in place. |
| `SetCraftedWeaponName` | method | Instance entry point. Takes 1 argument: `TextObject weaponName`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SwitchToCraftedItem` | method | Instance entry point. Takes 1 argument: `ItemObject item`. |
| `SwitchToPiece` | method | Instance entry point. Takes 1 argument: `WeaponDesignElement piece`. |

- Constructed as `public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)`.

11 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on Crafting:
Crafting.GenerateItem(weaponDesignTemplate, name, culture, itemModifierGroup, theTarget, customId);
Crafting.GetStatDatasFromTemplate(usageIndex, craftedItemObject, template);
Crafting.CreatePreCraftedWeaponOnDeserialize(itemObject, usedPieces, templateId, craftedWeaponName, itemModifierGroup);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Core/Crafting.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/core-extra/](../) — the other types in this bucket.
