<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownHelpers`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TownHelpers`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## 概述

`TownHelpers` 位于 `Helpers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Helpers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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
TownHelpers.IsThereAnyoneToMeetInTown(settlement);
```

## 参见

- [完整类目录](../catalog)