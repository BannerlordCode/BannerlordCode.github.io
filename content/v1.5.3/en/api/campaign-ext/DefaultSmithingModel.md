---
title: "DefaultSmithingModel"
description: "Auto-generated class reference for DefaultSmithingModel."
---
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel `
**Base:** SmithingModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs

## Overview

Auto-generated stub for `DefaultSmithingModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign,Hero hero)`

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item)`

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula,Hero hero)`

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item,Hero hero)`

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item,Hero hero)`

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

### GetSmeltingOutputForItem
`public override int[] GetSmeltingOutputForItem(ItemObject item)`

### GetSmithingCostsForWeaponDesign
`public override int[] GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount,int openedPartCount)`

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item,Hero hero)`

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item,Hero hero,bool isFreeBuild)`

## See Also

- [Section index](../)
