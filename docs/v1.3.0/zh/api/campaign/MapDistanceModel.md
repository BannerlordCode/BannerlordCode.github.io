<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapDistanceModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapDistanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**Base:** `MBGameModel<MapDistanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`

## 概述

`MapDistanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapDistanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var implementation = new CustomMapDistanceModel();
```

## 参见

- [完整类目录](../catalog)