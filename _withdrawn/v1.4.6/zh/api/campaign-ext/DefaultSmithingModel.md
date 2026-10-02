---
title: "DefaultSmithingModel"
description: "DefaultSmithingModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 SmithingModel；公开成员 17 个（方法 17、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSmithingModel : SmithingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultSmithingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs。它是一个 public 类，实现/继承 SmithingModel，继承链为 DefaultSmithingModel → SmithingModel → MBGameModel → GameModel。public/protected 成员共 17 个：17 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSmithingModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultSmithingModel → SmithingModel → MBGameModel → GameModel。成员构成以方法为主（方法 17/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetCraftingPartDifficulty` | `public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)` | 方法 |
| `CalculateWeaponDesignDifficulty` | `public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)` | 方法 |
| `GetCraftedWeaponModifier` | `public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)` | 方法 |
| `IEnumerable` | `public override IEnumerable<Crafting.RefiningFormula>GetRefiningFormulas(Hero weaponsmith)` | 方法 |
| `GetSkillXpForRefining` | `public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)` | 方法 |
| `GetSkillXpForSmelting` | `public override int GetSkillXpForSmelting(ItemObject item)` | 方法 |
| `GetSkillXpForSmithingInFreeBuildMode` | `public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)` | 方法 |
| `GetSkillXpForSmithingInCraftingOrderMode` | `public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)` | 方法 |
| `GetEnergyCostForRefining` | `public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)` | 方法 |
| `GetEnergyCostForSmithing` | `public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)` | 方法 |
| `GetEnergyCostForSmelting` | `public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)` | 方法 |
| `GetCraftingMaterialItem` | `public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)` | 方法 |
| `int[]GetSmeltingOutputForItem` | `public override int[]GetSmeltingOutputForItem(ItemObject item)` | 方法 |
| `int[]GetSmithingCostsForWeaponDesign` | `public override int[]GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)` | 方法 |
| `ResearchPointsNeedForNewPart` | `public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)` | 方法 |
| `GetPartResearchGainForSmeltingItem` | `public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)` | 方法 |
| `GetPartResearchGainForSmithingItem` | `public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SmithingModel](../SmithingModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
