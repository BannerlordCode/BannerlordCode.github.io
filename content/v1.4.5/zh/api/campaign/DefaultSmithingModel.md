---
title: "DefaultSmithingModel"
description: "DefaultSmithingModel 的自动生成类参考。"
---
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSmithingModel.cs`

## 概述

`DefaultSmithingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSmithingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**用途 / Purpose:** 读取并返回当前对象中 「crafting part difficulty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftingPartDifficulty(craftingPiece);
```

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**用途 / Purpose:** 计算「weapon design difficulty」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.CalculateWeaponDesignDifficulty(weaponDesign);
```

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「crafted weapon modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftedWeaponModifier(weaponDesign, hero);
```

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**用途 / Purpose:** 读取并返回当前对象中 「refining formulas」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetRefiningFormulas(weaponsmith);
```

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp for refining」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForRefining(refineFormula);
```

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp for smelting」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmelting(item);
```

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp for smithing in free build mode」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmithingInFreeBuildMode(item);
```

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「skill xp for smithing in crafting order mode」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSkillXpForSmithingInCraftingOrderMode(item);
```

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「energy cost for refining」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForRefining(refineFormula, hero);
```

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「energy cost for smithing」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForSmithing(item, hero);
```

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「energy cost for smelting」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetEnergyCostForSmelting(item, hero);
```

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**用途 / Purpose:** 读取并返回当前对象中 「crafting material item」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetCraftingMaterialItem(craftingMaterial);
```

### GetSmeltingOutputForItem
`public override int GetSmeltingOutputForItem(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「smelting output for item」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSmeltingOutputForItem(item);
```

### GetSmithingCostsForWeaponDesign
`public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**用途 / Purpose:** 读取并返回当前对象中 「smithing costs for weapon design」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetSmithingCostsForWeaponDesign(weaponDesign);
```

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.ResearchPointsNeedForNewPart(0, 0);
```

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「part research gain for smelting item」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetPartResearchGainForSmeltingItem(item, hero);
```

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)`

**用途 / Purpose:** 读取并返回当前对象中 「part research gain for smithing item」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSmithingModel 实例
DefaultSmithingModel defaultSmithingModel = ...;
var result = defaultSmithingModel.GetPartResearchGainForSmithingItem(item, hero, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## 参见

- [本区域目录](../)