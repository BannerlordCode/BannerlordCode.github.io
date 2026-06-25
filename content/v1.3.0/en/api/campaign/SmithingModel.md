---
title: "SmithingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmithingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**Base:** `MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## Overview

`SmithingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SmithingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCraftingPartDifficulty
`public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**Purpose:** Gets the current value of `crafting part difficulty`.

### CalculateWeaponDesignDifficulty
`public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Handles logic related to `calculate weapon design difficulty`.

### GetCraftedWeaponModifier
`public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)`

**Purpose:** Gets the current value of `crafted weapon modifier`.

### GetRefiningFormulas
`public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**Purpose:** Gets the current value of `refining formulas`.

### GetCraftingMaterialItem
`public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**Purpose:** Gets the current value of `crafting material item`.

### GetSmeltingOutputForItem
`public abstract int GetSmeltingOutputForItem(ItemObject item)`

**Purpose:** Gets the current value of `smelting output for item`.

### GetSkillXpForRefining
`public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**Purpose:** Gets the current value of `skill xp for refining`.

### GetSkillXpForSmelting
`public abstract int GetSkillXpForSmelting(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smelting`.

### GetSkillXpForSmithingInFreeBuildMode
`public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smithing in free build mode`.

### GetSkillXpForSmithingInCraftingOrderMode
`public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smithing in crafting order mode`.

### GetSmithingCostsForWeaponDesign
`public abstract int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**Purpose:** Gets the current value of `smithing costs for weapon design`.

### GetEnergyCostForRefining
`public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**Purpose:** Gets the current value of `energy cost for refining`.

### GetEnergyCostForSmithing
`public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `energy cost for smithing`.

### GetEnergyCostForSmelting
`public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `energy cost for smelting`.

### ResearchPointsNeedForNewPart
`public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**Purpose:** Handles logic related to `research points need for new part`.

### GetPartResearchGainForSmeltingItem
`public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `part research gain for smelting item`.

### GetPartResearchGainForSmithingItem
`public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)`

**Purpose:** Gets the current value of `part research gain for smithing item`.

## Usage Example

```csharp
var implementation = new CustomSmithingModel();
```

## See Also

- [Complete Class Catalog](../catalog)