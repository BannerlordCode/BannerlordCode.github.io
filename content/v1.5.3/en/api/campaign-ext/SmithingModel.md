---
title: "SmithingModel"
description: "Auto-generated class reference for SmithingModel."
---
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel> `
**Base:** MBGameModel<SmithingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs

## Overview

Auto-generated stub for `SmithingModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
