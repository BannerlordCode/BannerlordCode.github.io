---
title: "DefaultSmithingModel"
description: "DefaultSmithingModel 的自动生成类参考。"
---
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel `
**Base:** SmithingModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs

## 概述

`DefaultSmithingModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece) `

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign) `

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign,Hero hero) `

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith) `

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula) `

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item) `

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item) `

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item) `

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula,Hero hero) `

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item,Hero hero) `

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item,Hero hero) `

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial) `

### GetSmeltingOutputForItem
`public override int[] GetSmeltingOutputForItem(ItemObject item) `

### GetSmithingCostsForWeaponDesign
`public override int[] GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign) `

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount,int openedPartCount) `

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item,Hero hero) `

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item,Hero hero,bool isFreeBuild) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
