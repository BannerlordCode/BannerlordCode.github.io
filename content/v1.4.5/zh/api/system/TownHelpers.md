---
title: "TownHelpers"
description: "TownHelpers 的自动生成类参考。"
---
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TownHelpers`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## 概述

`TownHelpers` 位于 `Helpers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Helpers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsThereAnyoneToMeetInTown
`public static bool IsThereAnyoneToMeetInTown(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否处于 「there anyone to meet in town」 状态或条件。

```csharp
// 静态调用，不需要实例
TownHelpers.IsThereAnyoneToMeetInTown(settlement);
```

### GetHeroesToMeetInTown
`public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「heroes to meet in town」 的结果。

```csharp
// 静态调用，不需要实例
TownHelpers.GetHeroesToMeetInTown(settlement);
```

### GetHeroesInSettlement
`public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)`

**用途 / Purpose:** 读取并返回当前对象中 「heroes in settlement」 的结果。

```csharp
// 静态调用，不需要实例
TownHelpers.GetHeroesInSettlement(settlement, null);
```

### RequestAMeetingPartyCondition
`public static bool RequestAMeetingPartyCondition(MobileParty party)`

**用途 / Purpose:** 获取或更新 「request a meeting party condition」 的状态。

```csharp
// 静态调用，不需要实例
TownHelpers.RequestAMeetingPartyCondition(party);
```

### RequestAMeetingHeroWithoutPartyCondition
`public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)`

**用途 / Purpose:** 获取或更新 「request a meeting hero without party condition」 的状态。

```csharp
// 静态调用，不需要实例
TownHelpers.RequestAMeetingHeroWithoutPartyCondition(hero);
```

### CalculatePriceDeviationRatio
`public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)`

**用途 / Purpose:** 计算「price deviation ratio」的当前值或结果。

```csharp
// 静态调用，不需要实例
TownHelpers.CalculatePriceDeviationRatio(town, equipmentElement);
```

## 使用示例

```csharp
TownHelpers.IsThereAnyoneToMeetInTown(settlement);
```

## 参见

- [本区域目录](../)