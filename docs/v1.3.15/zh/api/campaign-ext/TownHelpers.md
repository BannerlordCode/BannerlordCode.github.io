<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownHelpers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownHelpers

**命名空间:** Helpers
**模块:** Helpers
**类型:** `public static class TownHelpers`
**领域:** campaign-ext

## 概述

`TownHelpers` 位于 `Helpers`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Helpers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTownFoodAndMarketStocks
`public static ValueTuple<int, int> GetTownFoodAndMarketStocks(Town town)`

**用途 / Purpose:** 获取 `town food and market stocks` 的当前值。

### IsThereAnyoneToMeetInTown
`public static bool IsThereAnyoneToMeetInTown(Settlement settlement)`

**用途 / Purpose:** 处理 `is there anyone to meet in town` 相关逻辑。

### GetHeroesToMeetInTown
`public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)`

**用途 / Purpose:** 获取 `heroes to meet in town` 的当前值。

### GetHeroesInSettlement
`public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)`

**用途 / Purpose:** 获取 `heroes in settlement` 的当前值。

### RequestAMeetingPartyCondition
`public static bool RequestAMeetingPartyCondition(MobileParty party)`

**用途 / Purpose:** 处理 `request a meeting party condition` 相关逻辑。

### RequestAMeetingHeroWithoutPartyCondition
`public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)`

**用途 / Purpose:** 处理 `request a meeting hero without party condition` 相关逻辑。

### CalculatePriceDeviationRatio
`public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)`

**用途 / Purpose:** 处理 `calculate price deviation ratio` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TownHelpers.GetTownFoodAndMarketStocks(town);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
