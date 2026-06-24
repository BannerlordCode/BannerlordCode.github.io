<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmbarkDisembarkData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmbarkDisembarkData

**命名空间:** Helpers
**模块:** Helpers
**类型:** `public class EmbarkDisembarkData`
**领域:** campaign-ext

## 概述

`EmbarkDisembarkData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `EmbarkDisembarkData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkDisembarkDataForTick(CampaignVec2 position, Vec2 direction)`

**用途 / Purpose:** 获取 `embark disembark data for tick` 的当前值。

### GetEmbarkAndDisembarkDataForPlayer
`public static NavigationHelper.EmbarkDisembarkData GetEmbarkAndDisembarkDataForPlayer(CampaignVec2 position, Vec2 direction, CampaignVec2 moveTargetPointOfTheParty, bool isMoveTargetOnLand)`

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

## 使用示例

```csharp
var value = new EmbarkDisembarkData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
