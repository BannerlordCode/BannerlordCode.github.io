---
title: "Crafting"
description: "Crafting: a public class in TaleWorlds.Core; 36 exposed members (20 methods, 8 properties, 6 fields). Source: TaleWorlds.Core/Crafting.cs."
---
# Crafting

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Crafting`
**File:** `TaleWorlds.Core/Crafting.cs`

## Overview

Crafting lives in the TaleWorlds.Core module, source file TaleWorlds.Core/Crafting.cs. It is a public class; the inheritance chain is Crafting. It exposes 36 public/protected members: 20 methods, 8 properties, 6 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Crafting is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain Crafting. The surface is method-led (methods 20/36, properties 8/36), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/Crafting.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Crafting` | `public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)` | constructor |
| `CurrentCulture` | `public BasicCultureObject CurrentCulture` | property |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate` | property |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign` | property |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup` | property |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName` | property |
| `SetCraftedWeaponName` | `public void SetCraftedWeaponName(TextObject weaponName)` | method |
| `Init` | `public void Init()` | method |
| `List` | `public List<WeaponDesignElement>[]UsablePiecesList` | property |
| `WeaponDesignElement[]SelectedPieces` | `public WeaponDesignElement[]SelectedPieces` | property |
| `GetRandomPieceOfType` | `public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)` | method |
| `SwitchToCraftedItem` | `public void SwitchToCraftedItem(ItemObject item)` | method |
| `Randomize` | `public void Randomize()` | method |
| `SwitchToPiece` | `public void SwitchToPiece(WeaponDesignElement piece)` | method |
| `ScaleThePiece` | `public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)` | method |
| `ReIndex` | `public void ReIndex(bool enforceReCreation = false)` | method |
| `Undo` | `public bool Undo()` | method |
| `Redo` | `public bool Redo()` | method |
| `UpdateHistory` | `public void UpdateHistory()` | method |
| `GetRandomCraftName` | `public TextObject GetRandomCraftName()` | method |
| `GenerateItem` | `public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)` | method |
| `GetCurrentCraftedItemObject` | `public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)` | method |
| `IEnumerable` | `public static IEnumerable<CraftingStatData>GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)` | method |
| `IEnumerable` | `public IEnumerable<CraftingStatData>GetStatDatas(int usageIndex)` | method |
| `GetXmlCodeForCurrentItem` | `public string GetXmlCodeForCurrentItem(ItemObject item)` | method |
| `TryGetWeaponPropertiesFromXmlCode` | `public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int>[]pieces)` | method |
| `CreatePreCraftedWeaponOnDeserialize` | `public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement[]usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)` | method |
| `InitializePreCraftedWeaponOnLoad` | `public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)` | method |
| `WeightOfCrudeIron` | `public const int WeightOfCrudeIron` | field |
| `WeightOfIron` | `public const int WeightOfIron` | field |
| `WeightOfCompositeIron` | `public const int WeightOfCompositeIron` | field |
| `WeightOfSteel` | `public const int WeightOfSteel` | field |
| `WeightOfRefinedSteel` | `public const int WeightOfRefinedSteel` | field |
| `WeightOfCalradianSteel` | `public const int WeightOfCalradianSteel` | field |
| `RefiningFormula` | `public class RefiningFormula` | property |
| `RefiningFormula` | `public class RefiningFormula` | nested type |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
