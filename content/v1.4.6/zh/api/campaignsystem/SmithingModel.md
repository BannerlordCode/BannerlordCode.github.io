---
title: "SmithingModel"
description: "SmithingModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SmithingModel>；公开成员 17 个（方法 17、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs。"
---
# SmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## 概述

SmithingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SmithingModel>，继承链为 SmithingModel → MBGameModel。public/protected 成员共 17 个：17 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SmithingModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SmithingModel → MBGameModel。成员构成以方法为主（方法 17/17，属性 0/17），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetCraftingPartDifficulty` | `public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece);` | 方法 |
| `CalculateWeaponDesignDifficulty` | `public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign);` | 方法 |
| `GetCraftedWeaponModifier` | `public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<Crafting.RefiningFormula>GetRefiningFormulas(Hero weaponsmith);` | 方法 |
| `GetCraftingMaterialItem` | `public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial);` | 方法 |
| `int[]GetSmeltingOutputForItem` | `public abstract int[]GetSmeltingOutputForItem(ItemObject item);` | 方法 |
| `GetSkillXpForRefining` | `public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula);` | 方法 |
| `GetSkillXpForSmelting` | `public abstract int GetSkillXpForSmelting(ItemObject item);` | 方法 |
| `GetSkillXpForSmithingInFreeBuildMode` | `public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item);` | 方法 |
| `GetSkillXpForSmithingInCraftingOrderMode` | `public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item);` | 方法 |
| `int[]GetSmithingCostsForWeaponDesign` | `public abstract int[]GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign);` | 方法 |
| `GetEnergyCostForRefining` | `public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero);` | 方法 |
| `GetEnergyCostForSmithing` | `public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero);` | 方法 |
| `GetEnergyCostForSmelting` | `public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero);` | 方法 |
| `ResearchPointsNeedForNewPart` | `public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount);` | 方法 |
| `GetPartResearchGainForSmeltingItem` | `public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero);` | 方法 |
| `GetPartResearchGainForSmithingItem` | `public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
