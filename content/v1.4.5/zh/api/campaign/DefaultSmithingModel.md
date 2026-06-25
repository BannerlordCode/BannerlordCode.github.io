---
title: "DefaultSmithingModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSmithingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSmithingModel.cs`

## 概述

`DefaultSmithingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSmithingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCraftingPartDifficulty
`public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)`

**用途 / Purpose:** 获取 `crafting part difficulty` 的当前值。

### CalculateWeaponDesignDifficulty
`public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)`

**用途 / Purpose:** 处理 `calculate weapon design difficulty` 相关逻辑。

### GetCraftedWeaponModifier
`public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)`

**用途 / Purpose:** 获取 `crafted weapon modifier` 的当前值。

### GetRefiningFormulas
`public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)`

**用途 / Purpose:** 获取 `refining formulas` 的当前值。

### GetSkillXpForRefining
`public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 获取 `skill xp for refining` 的当前值。

### GetSkillXpForSmelting
`public override int GetSkillXpForSmelting(ItemObject item)`

**用途 / Purpose:** 获取 `skill xp for smelting` 的当前值。

### GetSkillXpForSmithingInFreeBuildMode
`public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)`

**用途 / Purpose:** 获取 `skill xp for smithing in free build mode` 的当前值。

### GetSkillXpForSmithingInCraftingOrderMode
`public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)`

**用途 / Purpose:** 获取 `skill xp for smithing in crafting order mode` 的当前值。

### GetEnergyCostForRefining
`public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)`

**用途 / Purpose:** 获取 `energy cost for refining` 的当前值。

### GetEnergyCostForSmithing
`public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)`

**用途 / Purpose:** 获取 `energy cost for smithing` 的当前值。

### GetEnergyCostForSmelting
`public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)`

**用途 / Purpose:** 获取 `energy cost for smelting` 的当前值。

### GetCraftingMaterialItem
`public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)`

**用途 / Purpose:** 获取 `crafting material item` 的当前值。

### GetSmeltingOutputForItem
`public override int GetSmeltingOutputForItem(ItemObject item)`

**用途 / Purpose:** 获取 `smelting output for item` 的当前值。

### GetSmithingCostsForWeaponDesign
`public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)`

**用途 / Purpose:** 获取 `smithing costs for weapon design` 的当前值。

### ResearchPointsNeedForNewPart
`public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)`

**用途 / Purpose:** 处理 `research points need for new part` 相关逻辑。

### GetPartResearchGainForSmeltingItem
`public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)`

**用途 / Purpose:** 获取 `part research gain for smelting item` 的当前值。

### GetPartResearchGainForSmithingItem
`public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)`

**用途 / Purpose:** 获取 `part research gain for smithing item` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## 参见

- [完整类目录](../catalog)