<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSmithingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs`

## Overview

`DefaultSmithingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel())` to change how it computes.

## Key Methods

### GetCraftingPartDifficulty
```csharp
public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)
```

### CalculateWeaponDesignDifficulty
```csharp
public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)
```

### GetCraftedWeaponModifier
```csharp
public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)
```

### GetRefiningFormulas
```csharp
public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)
```

### GetSkillXpForRefining
```csharp
public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)
```

### GetSkillXpForSmelting
```csharp
public override int GetSkillXpForSmelting(ItemObject item)
```

### GetSkillXpForSmithingInFreeBuildMode
```csharp
public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)
```

### GetSkillXpForSmithingInCraftingOrderMode
```csharp
public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)
```

### GetEnergyCostForRefining
```csharp
public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)
```

### GetEnergyCostForSmithing
```csharp
public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)
```

### GetEnergyCostForSmelting
```csharp
public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)
```

### GetCraftingMaterialItem
```csharp
public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)
```

### GetSmeltingOutputForItem
```csharp
public override int GetSmeltingOutputForItem(ItemObject item)
```

### GetSmithingCostsForWeaponDesign
```csharp
public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)
```

### ResearchPointsNeedForNewPart
```csharp
public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)
```

### GetPartResearchGainForSmeltingItem
```csharp
public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)
```

### GetPartResearchGainForSmithingItem
```csharp
public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)
```

## Usage Example

```csharp
// Typical usage of DefaultSmithingModel (Model)
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## See Also

- [Complete Class Catalog](../catalog)