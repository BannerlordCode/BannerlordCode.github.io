---
title: "NavigationHelper"
description: "NavigationHelper 的自动生成类参考。"
---
# NavigationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class NavigationHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 概述

`NavigationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `NavigationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position valid for navigation type 状态或条件。

```csharp
// 静态调用，不需要实例
NavigationHelper.IsPositionValidForNavigationType(vec2, navigationType);
```

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 position valid for navigation type 状态或条件。

```csharp
// 静态调用，不需要实例
NavigationHelper.IsPositionValidForNavigationType(face, navigationType);
```

### CanPlayerNavigateToPosition
`public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player navigate to position 的前置条件。

```csharp
// 静态调用，不需要实例
NavigationHelper.CanPlayerNavigateToPosition(vec2, navigationType);
```

### GetClosestNavMeshFaceCenterPositionForPosition
`public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 closest nav mesh face center position for position 的结果。

```csharp
// 静态调用，不需要实例
NavigationHelper.GetClosestNavMeshFaceCenterPositionForPosition(vec2, 0);
```

### GetEmbarkDisembarkDataForTick
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 embark disembark data for tick 的结果。

```csharp
// 静态调用，不需要实例
NavigationHelper.GetEmbarkDisembarkDataForTick(position, direction);
```

### GetEmbarkAndDisembarkDataForPlayer
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 embark and disembark data for player 的结果。

```csharp
// 静态调用，不需要实例
NavigationHelper.GetEmbarkAndDisembarkDataForPlayer(position, direction, moveTargetPointOfTheParty, false);
```

### FindPointAroundPosition
`public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的point around position。

```csharp
// 静态调用，不需要实例
NavigationHelper.FindPointAroundPosition(centerPosition, navigationCapability, 0, 0, false, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的reachable point around position。

```csharp
// 静态调用，不需要实例
NavigationHelper.FindReachablePointAroundPosition(center, 0, 0, 0, false);
```

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的reachable point around position。

```csharp
// 静态调用，不需要实例
NavigationHelper.FindReachablePointAroundPosition(center, navigationCapability, 0, 0, false);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的point inside area。

```csharp
// 静态调用，不需要实例
NavigationHelper.FindPointInsideArea(minBorder, maxBorder, navigationCapability);
```

### IsPointInsideBorders
`public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 point inside borders 状态或条件。

```csharp
// 静态调用，不需要实例
NavigationHelper.IsPointInsideBorders(point, minBorders, maxBorders);
```

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的point inside area。

```csharp
// 静态调用，不需要实例
NavigationHelper.FindPointInsideArea(minBorders, maxBorders, center, navigationCapability, 0, 0, false);
```

## 使用示例

```csharp
NavigationHelper.Initialize();
```

## 参见

- [本区域目录](../)