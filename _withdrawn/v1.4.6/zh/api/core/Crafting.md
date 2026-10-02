---
title: "Crafting"
description: "Crafting：TaleWorlds.Core 的 public 类；公开成员 36 个（方法 20、属性 8、字段 6）。源文件 TaleWorlds.Core/Crafting.cs。"
---
# Crafting

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Crafting`
**File:** `TaleWorlds.Core/Crafting.cs`

## 概述

Crafting 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/Crafting.cs。它是一个 public 类，继承链为 Crafting。public/protected 成员共 36 个：20 方法、8 属性、6 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Crafting 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 Crafting。成员构成以方法为主（方法 20/36，属性 8/36），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/Crafting.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Crafting` | `public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)` | 构造函数 |
| `CurrentCulture` | `public BasicCultureObject CurrentCulture` | 属性 |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate` | 属性 |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign` | 属性 |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup` | 属性 |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName` | 属性 |
| `SetCraftedWeaponName` | `public void SetCraftedWeaponName(TextObject weaponName)` | 方法 |
| `Init` | `public void Init()` | 方法 |
| `List` | `public List<WeaponDesignElement>[]UsablePiecesList` | 属性 |
| `WeaponDesignElement[]SelectedPieces` | `public WeaponDesignElement[]SelectedPieces` | 属性 |
| `GetRandomPieceOfType` | `public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)` | 方法 |
| `SwitchToCraftedItem` | `public void SwitchToCraftedItem(ItemObject item)` | 方法 |
| `Randomize` | `public void Randomize()` | 方法 |
| `SwitchToPiece` | `public void SwitchToPiece(WeaponDesignElement piece)` | 方法 |
| `ScaleThePiece` | `public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)` | 方法 |
| `ReIndex` | `public void ReIndex(bool enforceReCreation = false)` | 方法 |
| `Undo` | `public bool Undo()` | 方法 |
| `Redo` | `public bool Redo()` | 方法 |
| `UpdateHistory` | `public void UpdateHistory()` | 方法 |
| `GetRandomCraftName` | `public TextObject GetRandomCraftName()` | 方法 |
| `GenerateItem` | `public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)` | 方法 |
| `GetCurrentCraftedItemObject` | `public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)` | 方法 |
| `IEnumerable` | `public static IEnumerable<CraftingStatData>GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)` | 方法 |
| `IEnumerable` | `public IEnumerable<CraftingStatData>GetStatDatas(int usageIndex)` | 方法 |
| `GetXmlCodeForCurrentItem` | `public string GetXmlCodeForCurrentItem(ItemObject item)` | 方法 |
| `TryGetWeaponPropertiesFromXmlCode` | `public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int>[]pieces)` | 方法 |
| `CreatePreCraftedWeaponOnDeserialize` | `public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement[]usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)` | 方法 |
| `InitializePreCraftedWeaponOnLoad` | `public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)` | 方法 |
| `WeightOfCrudeIron` | `public const int WeightOfCrudeIron` | 字段 |
| `WeightOfIron` | `public const int WeightOfIron` | 字段 |
| `WeightOfCompositeIron` | `public const int WeightOfCompositeIron` | 字段 |
| `WeightOfSteel` | `public const int WeightOfSteel` | 字段 |
| `WeightOfRefinedSteel` | `public const int WeightOfRefinedSteel` | 字段 |
| `WeightOfCalradianSteel` | `public const int WeightOfCalradianSteel` | 字段 |
| `RefiningFormula` | `public class RefiningFormula` | 属性 |
| `RefiningFormula` | `public class RefiningFormula` | 嵌套类型 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
