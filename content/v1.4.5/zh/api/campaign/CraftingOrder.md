---
title: "CraftingOrder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingOrder`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingOrder

**Namespace:** TaleWorlds.CampaignSystem.CraftingSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrder : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CraftingSystem/CraftingOrder.cs`

## 概述

`CraftingOrder` 位于 `TaleWorlds.CampaignSystem.CraftingSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CraftingSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeCraftingOrderOnLoad
`public void InitializeCraftingOrderOnLoad()`

**用途 / Purpose:** 初始化 `crafting order on load` 的状态、资源或绑定。

### IsPreCraftedWeaponDesignValid
`public bool IsPreCraftedWeaponDesignValid()`

**用途 / Purpose:** 处理 `is pre crafted weapon design valid` 相关逻辑。

### GetStatWeapon
`public WeaponComponentData GetStatWeapon()`

**用途 / Purpose:** 获取 `stat weapon` 的当前值。

### IsOrderAvailableForHero
`public bool IsOrderAvailableForHero(Hero hero)`

**用途 / Purpose:** 处理 `is order available for hero` 相关逻辑。

### CanHeroCompleteOrder
`public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero complete order`。

### GetOrderExperience
`public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `order experience` 的当前值。

### CheckForBonusesAndPenalties
`public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)`

**用途 / Purpose:** 处理 `check for bonuses and penalties` 相关逻辑。

### GetStatDataForItem
`public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)`

**用途 / Purpose:** 获取 `stat data for item` 的当前值。

## 使用示例

```csharp
var value = new CraftingOrder();
value.InitializeCraftingOrderOnLoad();
```

## 参见

- [完整类目录](../catalog)