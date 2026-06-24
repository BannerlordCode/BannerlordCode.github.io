<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DistanceHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DistanceHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DistanceHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## 概述

`DistanceHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DistanceHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from settlement to settlement` 相关逻辑。

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** 处理 `find closest distance from settlement to settlement` 相关逻辑。

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from settlement to settlement` 相关逻辑。

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to settlement` 相关逻辑。

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to settlement` 相关逻辑。

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to settlement` 相关逻辑。

### FindClosestDistanceFromMobilePartyToSettlement
`public static bool FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to settlement` 相关逻辑。

### FindClosestDistanceFromSettlementToSettlement
`public static bool FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from settlement to settlement` 相关逻辑。

### FindClosestDistanceFromMobilePartyToMobileParty
`public static bool FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to mobile party` 相关逻辑。

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to mobile party` 相关逻辑。

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to mobile party` 相关逻辑。

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out bool isFromPort)`

**用途 / Purpose:** 处理 `find closest distance from settlement to point` 相关逻辑。

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from map point to settlement` 相关逻辑。

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from settlement to point` 相关逻辑。

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to point` 相关逻辑。

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from mobile party to point` 相关逻辑。

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** 处理 `find closest distance from map point to settlement` 相关逻辑。

### GetDistanceBetweenMobilePartyToMobileParty
`public static float GetDistanceBetweenMobilePartyToMobileParty(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** 获取 `distance between mobile party to mobile party` 的当前值。

## 使用示例

```csharp
DistanceHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)