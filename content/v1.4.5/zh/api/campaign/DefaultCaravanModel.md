---
title: "DefaultCaravanModel"
description: "DefaultCaravanModel 的自动生成类参考。"
---
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCaravanModel.cs`

## 概述

`DefaultCaravanModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCaravanModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEliteCaravanSpawnChance
`public override float GetEliteCaravanSpawnChance(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「elite caravan spawn chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetEliteCaravanSpawnChance(hero);
```

### GetPowerChangeAfterCaravanCreation
`public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**用途 / Purpose:** 读取并返回当前对象中 「power change after caravan creation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetPowerChangeAfterCaravanCreation(hero, caravanParty);
```

### CanHeroCreateCaravan
`public override bool CanHeroCreateCaravan(Hero hero)`

**用途 / Purpose:** 检查当前对象是否满足 「hero create caravan」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.CanHeroCreateCaravan(hero);
```

### GetCaravanFormingCost
`public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)`

**用途 / Purpose:** 读取并返回当前对象中 「caravan forming cost」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetCaravanFormingCost(false, false);
```

### GetInitialTradeGold
`public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)`

**用途 / Purpose:** 读取并返回当前对象中 「initial trade gold」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetInitialTradeGold(owner, false, false);
```

### GetMaxGoldToSpendOnOneItemCategory
`public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**用途 / Purpose:** 读取并返回当前对象中 「max gold to spend on one item category」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCaravanModel 实例
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel());
```

## 参见

- [本区域目录](../)