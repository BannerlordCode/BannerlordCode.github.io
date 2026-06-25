---
title: "CharacterAttributeComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterAttributeComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterAttributeComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class CharacterAttributeComparer : IComparer<CharacterAttribute>`
**Base:** `IComparer<CharacterAttribute>`
**领域:** campaign-ext

## 概述

`CharacterAttributeComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTooltipForAccumulatingProperty
`public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip for accumulating property` 的当前值。

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip for accumulating property with result` 的当前值。

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip forg property` 的当前值。

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

**用途 / Purpose:** 获取 `town walls tooltip` 的当前值。

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

**用途 / Purpose:** 获取 `village militia tooltip` 的当前值。

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

**用途 / Purpose:** 获取 `town militia tooltip` 的当前值。

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

**用途 / Purpose:** 获取 `town food tooltip` 的当前值。

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

**用途 / Purpose:** 获取 `town loyalty tooltip` 的当前值。

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

**用途 / Purpose:** 获取 `town prosperity tooltip` 的当前值。

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

**用途 / Purpose:** 获取 `town daily production tooltip` 的当前值。

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

**用途 / Purpose:** 获取 `town security tooltip` 的当前值。

### GetTownPatrolTooltip
`public static string GetTownPatrolTooltip(Town town)`

**用途 / Purpose:** 获取 `town patrol tooltip` 的当前值。

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

**用途 / Purpose:** 获取 `village prosperity tooltip` 的当前值。

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

**用途 / Purpose:** 获取 `town garrison tooltip` 的当前值。

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** 获取 `party troop size limit tooltip` 的当前值。

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** 获取 `party prisoner size limit tooltip` 的当前值。

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)`

**用途 / Purpose:** 获取 `used horses tooltip` 的当前值。

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

**用途 / Purpose:** 获取 `army cohesion tooltip` 的当前值。

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

**用途 / Purpose:** 获取 `army man count tooltip` 的当前值。

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood, float foodChange)`

**用途 / Purpose:** 获取 `days until no food` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
CharacterAttributeComparer.GetTooltipForAccumulatingProperty("example", 0, explainedNumber);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
