---
title: "DefaultSmithingModel"
description: "Auto-generated class reference for DefaultSmithingModel."
---
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSmithingModel.cs`

## Overview

`DefaultSmithingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSmithingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**Purpose:** Reads and returns the crafting part difficulty value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftingPartDifficulty(craftingPiece);
```

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Calculates the current value or result of weapon design difficulty.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.CalculateWeaponDesignDifficulty(weaponDesign);
```

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)`

**Purpose:** Reads and returns the crafted weapon modifier value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftedWeaponModifier(weaponDesign, hero);
```

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**Purpose:** Reads and returns the refining formulas value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetRefiningFormulas(weaponsmith);
```

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**Purpose:** Reads and returns the skill xp for refining value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForRefining(refineFormula);
```

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smelting value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmelting(item);
```

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smithing in free build mode value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmithingInFreeBuildMode(item);
```

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smithing in crafting order mode value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmithingInCraftingOrderMode(item);
```

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**Purpose:** Reads and returns the energy cost for refining value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForRefining(refineFormula, hero);
```

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the energy cost for smithing value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForSmithing(item, hero);
```

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the energy cost for smelting value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForSmelting(item, hero);
```

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**Purpose:** Reads and returns the crafting material item value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftingMaterialItem(craftingMaterial);
```

### GetSmeltingOutputForItem
`public override int GetSmeltingOutputForItem(ItemObject item)`

**Purpose:** Reads and returns the smelting output for item value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSmeltingOutputForItem(item);
```

### GetSmithingCostsForWeaponDesign
`public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**Purpose:** Reads and returns the smithing costs for weapon design value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSmithingCostsForWeaponDesign(weaponDesign);
```

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**Purpose:** Executes the ResearchPointsNeedForNewPart logic.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.ResearchPointsNeedForNewPart(0, 0);
```

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the part research gain for smelting item value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetPartResearchGainForSmeltingItem(item, hero);
```

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)`

**Purpose:** Reads and returns the part research gain for smithing item value held by the this instance.

```csharp
// Obtain an instance of DefaultSmithingModel from the subsystem API first
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetPartResearchGainForSmithingItem(item, hero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## See Also

- [Area Index](../)