---
title: "CraftingOrder"
description: "CraftingOrder 的自动生成类参考。"
---
# CraftingOrder

**Namespace:** TaleWorlds.CampaignSystem.CraftingSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrder : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/CraftingSystem/CraftingOrder.cs`

## 概述

`CraftingOrder` 位于 `TaleWorlds.CampaignSystem.CraftingSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CraftingSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLordOrder` | `public bool IsLordOrder { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## 主要方法

### InitializeCraftingOrderOnLoad
`public void InitializeCraftingOrderOnLoad()`

**用途 / Purpose:** 为 「crafting order on load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
craftingOrder.InitializeCraftingOrderOnLoad();
```

### IsPreCraftedWeaponDesignValid
`public bool IsPreCraftedWeaponDesignValid()`

**用途 / Purpose:** 判断当前对象是否处于 「pre crafted weapon design valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.IsPreCraftedWeaponDesignValid();
```

### GetStatWeapon
`public WeaponComponentData GetStatWeapon()`

**用途 / Purpose:** 读取并返回当前对象中 「stat weapon」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetStatWeapon();
```

### IsOrderAvailableForHero
`public bool IsOrderAvailableForHero(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「order available for hero」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.IsOrderAvailableForHero(hero);
```

### CanHeroCompleteOrder
`public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)`

**用途 / Purpose:** 检查当前对象是否满足 「hero complete order」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.CanHeroCompleteOrder(hero, craftDesignItem);
```

### GetOrderExperience
`public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「order experience」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetOrderExperience(craftedItem, itemModifier);
```

### CheckForBonusesAndPenalties
`public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)`

**用途 / Purpose:** 检查「for bonuses and penalties」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
craftingOrder.CheckForBonusesAndPenalties(craftedItem, itemModifier, craftedStatsSum, requiredStatsSum, thrustDamageCheck, swingDamageCheck);
```

### GetStatDataForItem
`public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「stat data for item」 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingOrder 实例
CraftingOrder craftingOrder = ...;
var result = craftingOrder.GetStatDataForItem(itemObject, weapon);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingOrder craftingOrder = ...;
craftingOrder.InitializeCraftingOrderOnLoad();
```

## 参见

- [本区域目录](../)