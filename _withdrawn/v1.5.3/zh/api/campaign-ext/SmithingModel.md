---
title: "SmithingModel"
description: "SmithingModel 的自动生成类参考。"
---
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel> `
**Base:** MBGameModel<SmithingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs

## 概述

`SmithingModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetCraftingPartDifficulty
`public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

### CalculateWeaponDesignDifficulty
`public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

### GetCraftedWeaponModifier
`public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign,Hero weaponsmith)`

### GetRefiningFormulas
`public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

### GetCraftingMaterialItem
`public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

### GetSmeltingOutputForItem
`public abstract int[] GetSmeltingOutputForItem(ItemObject item)`

### GetSkillXpForRefining
`public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

### GetSkillXpForSmelting
`public abstract int GetSkillXpForSmelting(ItemObject item)`

### GetSkillXpForSmithingInFreeBuildMode
`public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

### GetSkillXpForSmithingInCraftingOrderMode
`public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

### GetSmithingCostsForWeaponDesign
`public abstract int[] GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

### GetEnergyCostForRefining
`public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula,Hero hero)`

### GetEnergyCostForSmithing
`public abstract int GetEnergyCostForSmithing(ItemObject item,Hero hero)`

### GetEnergyCostForSmelting
`public abstract int GetEnergyCostForSmelting(ItemObject item,Hero hero)`

### ResearchPointsNeedForNewPart
`public abstract float ResearchPointsNeedForNewPart(int totalPartCount,int openedPartCount)`

### GetPartResearchGainForSmeltingItem
`public abstract int GetPartResearchGainForSmeltingItem(ItemObject item,Hero hero)`

### GetPartResearchGainForSmithingItem
`public abstract int GetPartResearchGainForSmithingItem(ItemObject item,Hero hero,bool isFreeBuildMode)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
