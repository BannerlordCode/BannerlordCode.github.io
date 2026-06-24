<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSmithingModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSmithingModel.cs`

## Overview

`DefaultSmithingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSmithingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**Purpose:** Gets the current value of `crafting part difficulty`.

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Handles logic related to `calculate weapon design difficulty`.

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)`

**Purpose:** Gets the current value of `crafted weapon modifier`.

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**Purpose:** Gets the current value of `refining formulas`.

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**Purpose:** Gets the current value of `skill xp for refining`.

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smelting`.

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smithing in free build mode`.

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**Purpose:** Gets the current value of `skill xp for smithing in crafting order mode`.

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**Purpose:** Gets the current value of `energy cost for refining`.

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `energy cost for smithing`.

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `energy cost for smelting`.

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**Purpose:** Gets the current value of `crafting material item`.

### GetSmeltingOutputForItem
`public override int GetSmeltingOutputForItem(ItemObject item)`

**Purpose:** Gets the current value of `smelting output for item`.

### GetSmithingCostsForWeaponDesign
`public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**Purpose:** Gets the current value of `smithing costs for weapon design`.

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**Purpose:** Handles logic related to `research points need for new part`.

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**Purpose:** Gets the current value of `part research gain for smelting item`.

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)`

**Purpose:** Gets the current value of `part research gain for smithing item`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## See Also

- [Complete Class Catalog](../catalog)