<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmithingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**Base:** `MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## Overview

`SmithingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SmithingModel>(new MySmithingModel())` to change how it computes.

## Key Methods

### GetCraftingPartDifficulty
```csharp
public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)
```

### CalculateWeaponDesignDifficulty
```csharp
public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)
```

### GetCraftedWeaponModifier
```csharp
public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)
```

### GetRefiningFormulas
```csharp
public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)
```

### GetCraftingMaterialItem
```csharp
public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)
```

### GetSmeltingOutputForItem
```csharp
public abstract int GetSmeltingOutputForItem(ItemObject item)
```

### GetSkillXpForRefining
```csharp
public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)
```

### GetSkillXpForSmelting
```csharp
public abstract int GetSkillXpForSmelting(ItemObject item)
```

### GetSkillXpForSmithingInFreeBuildMode
```csharp
public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)
```

### GetSkillXpForSmithingInCraftingOrderMode
```csharp
public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)
```

### GetSmithingCostsForWeaponDesign
```csharp
public abstract int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)
```

### GetEnergyCostForRefining
```csharp
public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)
```

### GetEnergyCostForSmithing
```csharp
public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero)
```

### GetEnergyCostForSmelting
```csharp
public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero)
```

### ResearchPointsNeedForNewPart
```csharp
public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)
```

### GetPartResearchGainForSmeltingItem
```csharp
public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)
```

### GetPartResearchGainForSmithingItem
```csharp
public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)
```

## Usage Example

```csharp
// Typical usage of SmithingModel (Model)
Game.Current.ReplaceModel<SmithingModel>(new MySmithingModel());
```

## See Also

- [Complete Class Catalog](../catalog)