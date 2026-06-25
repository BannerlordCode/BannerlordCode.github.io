---
title: "SmithingModel"
description: "Auto-generated class reference for SmithingModel."
---
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**Base:** `MBGameModel<SmithingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SmithingModel.cs`

## Overview

`SmithingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SmithingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCraftingPartDifficulty
`public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**Purpose:** Reads and returns the crafting part difficulty value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftingPartDifficulty(craftingPiece);
```

### CalculateWeaponDesignDifficulty
`public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**Purpose:** Calculates the current value or result of weapon design difficulty.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.CalculateWeaponDesignDifficulty(weaponDesign);
```

### GetCraftedWeaponModifier
`public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)`

**Purpose:** Reads and returns the crafted weapon modifier value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftedWeaponModifier(weaponDesign, weaponsmith);
```

### GetRefiningFormulas
`public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**Purpose:** Reads and returns the refining formulas value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetRefiningFormulas(weaponsmith);
```

### GetCraftingMaterialItem
`public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**Purpose:** Reads and returns the crafting material item value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftingMaterialItem(craftingMaterial);
```

### GetSmeltingOutputForItem
`public abstract int GetSmeltingOutputForItem(ItemObject item)`

**Purpose:** Reads and returns the smelting output for item value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSmeltingOutputForItem(item);
```

### GetSkillXpForRefining
`public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**Purpose:** Reads and returns the skill xp for refining value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForRefining(refineFormula);
```

### GetSkillXpForSmelting
`public abstract int GetSkillXpForSmelting(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smelting value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmelting(item);
```

### GetSkillXpForSmithingInFreeBuildMode
`public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smithing in free build mode value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmithingInFreeBuildMode(item);
```

### GetSkillXpForSmithingInCraftingOrderMode
`public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**Purpose:** Reads and returns the skill xp for smithing in crafting order mode value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmithingInCraftingOrderMode(item);
```

### GetSmithingCostsForWeaponDesign
`public abstract int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**Purpose:** Reads and returns the smithing costs for weapon design value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetSmithingCostsForWeaponDesign(weaponDesign);
```

### GetEnergyCostForRefining
`public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**Purpose:** Reads and returns the energy cost for refining value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForRefining(refineFormula, hero);
```

### GetEnergyCostForSmithing
`public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the energy cost for smithing value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForSmithing(item, hero);
```

### GetEnergyCostForSmelting
`public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the energy cost for smelting value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForSmelting(item, hero);
```

### ResearchPointsNeedForNewPart
`public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**Purpose:** Executes the ResearchPointsNeedForNewPart logic.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.ResearchPointsNeedForNewPart(0, 0);
```

### GetPartResearchGainForSmeltingItem
`public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**Purpose:** Reads and returns the part research gain for smelting item value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetPartResearchGainForSmeltingItem(item, hero);
```

### GetPartResearchGainForSmithingItem
`public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)`

**Purpose:** Reads and returns the part research gain for smithing item value held by the this instance.

```csharp
// Obtain an instance of SmithingModel from the subsystem API first
SmithingModel smithingModel = ...;
var result = smithingModel.GetPartResearchGainForSmithingItem(item, hero, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SmithingModel instance = ...;
```

## See Also

- [Area Index](../)