---
title: "SmithingModel"
description: "SmithingModel 的自动生成类参考。"
---
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**Base:** `MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## 概述

`SmithingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SmithingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCraftingPartDifficulty
`public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting part difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftingPartDifficulty(craftingPiece);
```

### CalculateWeaponDesignDifficulty
`public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**用途 / Purpose:** **用途 / Purpose:** 计算weapon design difficulty的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.CalculateWeaponDesignDifficulty(weaponDesign);
```

### GetCraftedWeaponModifier
`public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafted weapon modifier 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftedWeaponModifier(weaponDesign, weaponsmith);
```

### GetRefiningFormulas
`public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 refining formulas 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetRefiningFormulas(weaponsmith);
```

### GetCraftingMaterialItem
`public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting material item 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetCraftingMaterialItem(craftingMaterial);
```

### GetSmeltingOutputForItem
`public abstract int GetSmeltingOutputForItem(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 smelting output for item 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSmeltingOutputForItem(item);
```

### GetSkillXpForRefining
`public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp for refining 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForRefining(refineFormula);
```

### GetSkillXpForSmelting
`public abstract int GetSkillXpForSmelting(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp for smelting 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmelting(item);
```

### GetSkillXpForSmithingInFreeBuildMode
`public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp for smithing in free build mode 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmithingInFreeBuildMode(item);
```

### GetSkillXpForSmithingInCraftingOrderMode
`public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp for smithing in crafting order mode 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSkillXpForSmithingInCraftingOrderMode(item);
```

### GetSmithingCostsForWeaponDesign
`public abstract int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 smithing costs for weapon design 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetSmithingCostsForWeaponDesign(weaponDesign);
```

### GetEnergyCostForRefining
`public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 energy cost for refining 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForRefining(refineFormula, hero);
```

### GetEnergyCostForSmithing
`public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 energy cost for smithing 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForSmithing(item, hero);
```

### GetEnergyCostForSmelting
`public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 energy cost for smelting 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetEnergyCostForSmelting(item, hero);
```

### ResearchPointsNeedForNewPart
`public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ResearchPointsNeedForNewPart 对应的操作。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.ResearchPointsNeedForNewPart(0, 0);
```

### GetPartResearchGainForSmeltingItem
`public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 part research gain for smelting item 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetPartResearchGainForSmeltingItem(item, hero);
```

### GetPartResearchGainForSmithingItem
`public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 part research gain for smithing item 的结果。

```csharp
// 先通过子系统 API 拿到 SmithingModel 实例
SmithingModel smithingModel = ...;
var result = smithingModel.GetPartResearchGainForSmithingItem(item, hero, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SmithingModel instance = ...;
```

## 参见

- [本区域目录](../)