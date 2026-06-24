<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `INavigationCache`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# INavigationCache

**命名空间:** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块:** TaleWorlds.CampaignSystem
**类型:** `public interface INavigationCache`
**领域:** campaign-ext

## 概述

`INavigationCache` 位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |

## 主要方法

### GetMaximumDistanceBetweenTwoConnectedSettlements
`public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 获取 `maximum distance between two connected settlements` 的当前值。

### GetLandRatioOfPathBetweenSettlements
`public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)`

**用途 / Purpose:** 获取 `land ratio of path between settlements` 的当前值。

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetDistance
`public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 获取 `distance` 的当前值。

### GetPortToGateDistanceForSettlement
`public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `port to gate distance for settlement` 的当前值。

### PathExistBetweenPoints
`public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `path exist between points` 相关逻辑。

### RegisterDistanceCache
`public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)`

**用途 / Purpose:** 处理 `register distance cache` 相关逻辑。

### GetClosestEntranceToFace
`public abstract ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 获取 `closest entrance to face` 的当前值。

### GetNeighborsOfFortification
`public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)`

**用途 / Purpose:** 获取 `neighbors of fortification` 的当前值。

### GetTransitionCostAdjustment
`public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)`

**用途 / Purpose:** 获取 `transition cost adjustment` 的当前值。

## 使用示例

```csharp
INavigationCache implementation = GetNavigationCacheImplementation();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
