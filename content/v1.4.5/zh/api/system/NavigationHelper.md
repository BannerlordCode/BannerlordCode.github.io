---
title: "NavigationHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigationHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class NavigationHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/NavigationHelper.cs`

## 概述

`NavigationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `NavigationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(CampaignVec2 vec2, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `is position valid for navigation type` 相关逻辑。

### IsPositionValidForNavigationType
`public static bool IsPositionValidForNavigationType(PathFaceRecord face, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `is position valid for navigation type` 相关逻辑。

### CanPlayerNavigateToPosition
`public static bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player navigate to position`。

### GetClosestNavMeshFaceCenterPositionForPosition
`public static CampaignVec2 GetClosestNavMeshFaceCenterPositionForPosition(CampaignVec2 vec2, int excludedFaceIds)`

**用途 / Purpose:** 获取 `closest nav mesh face center position for position` 的当前值。

### GetEmbarkDisembarkDataForTick
`public static EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**用途 / Purpose:** 获取 `embark disembark data for tick` 的当前值。

### GetEmbarkAndDisembarkDataForPlayer
`public static EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

**用途 / Purpose:** 获取 `embark and disembark data for player` 的当前值。

### FindPointAroundPosition
`public static CampaignVec2 FindPointAroundPosition(CampaignVec2 centerPosition, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePath = true, bool useUniformDistribution = false)`

**用途 / Purpose:** 处理 `find point around position` 相关逻辑。

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, int excludedFaceIds, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**用途 / Purpose:** 处理 `find reachable point around position` 相关逻辑。

### FindReachablePointAroundPosition
`public static CampaignVec2 FindReachablePointAroundPosition(CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool useUniformDistribution = false)`

**用途 / Purpose:** 处理 `find reachable point around position` 相关逻辑。

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorder, Vec2 maxBorder, MobileParty.NavigationType navigationCapability)`

**用途 / Purpose:** 处理 `find point inside area` 相关逻辑。

### IsPointInsideBorders
`public static bool IsPointInsideBorders(Vec2 point, Vec2 minBorders, Vec2 maxBorders)`

**用途 / Purpose:** 处理 `is point inside borders` 相关逻辑。

### FindPointInsideArea
`public static CampaignVec2 FindPointInsideArea(Vec2 minBorders, Vec2 maxBorders, CampaignVec2 center, MobileParty.NavigationType navigationCapability, float maxDistance, float minDistance = 0f, bool requirePathFromCenter = false)`

**用途 / Purpose:** 处理 `find point inside area` 相关逻辑。

### GetInteractionDataForMainParty
`public static void GetInteractionDataForMainParty(Settlement settlement, out bool canNavigate, out MobileParty.NavigationType bestNavigationType, out bool isTargetingPort)`

**用途 / Purpose:** 获取 `interaction data for main party` 的当前值。

## 使用示例

```csharp
NavigationHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)