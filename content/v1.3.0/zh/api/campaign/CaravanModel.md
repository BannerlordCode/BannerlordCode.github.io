---
title: "CaravanModel"
description: "CaravanModel 的自动生成类参考。"
---
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## 概述

`CaravanModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CaravanModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## 主要方法

### GetMaxGoldToSpendOnOneItemCategory
`public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**用途 / Purpose:** 读取并返回当前对象中 「max gold to spend on one item category」 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
```

### GetInitialTradeGold
`public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)`

**用途 / Purpose:** 读取并返回当前对象中 「initial trade gold」 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.GetInitialTradeGold(owner, false, false);
```

### GetCaravanFormingCost
`public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)`

**用途 / Purpose:** 读取并返回当前对象中 「caravan forming cost」 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.GetCaravanFormingCost(false, false);
```

### GetPowerChangeAfterCaravanCreation
`public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**用途 / Purpose:** 读取并返回当前对象中 「power change after caravan creation」 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.GetPowerChangeAfterCaravanCreation(hero, caravanParty);
```

### CanHeroCreateCaravan
`public abstract bool CanHeroCreateCaravan(Hero hero)`

**用途 / Purpose:** 检查当前对象是否满足 「hero create caravan」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.CanHeroCreateCaravan(hero);
```

### GetEliteCaravanSpawnChance
`public abstract float GetEliteCaravanSpawnChance(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「elite caravan spawn chance」 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanModel 实例
CaravanModel caravanModel = ...;
var result = caravanModel.GetEliteCaravanSpawnChance(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CaravanModel instance = ...;
```

## 参见

- [本区域目录](../)