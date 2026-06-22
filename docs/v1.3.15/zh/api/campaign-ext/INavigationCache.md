<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `INavigationCache`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# INavigationCache

**命名空间:** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块:** TaleWorlds.CampaignSystem
**类型:** 接口 interface interface
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`INavigationCache` 是 `TaleWorlds.CampaignSystem.ComponentInterfaces` 命名空间下的一个接口 interface。
> 如需了解其属性、方法和开发者用例，请参考
## 主要属性

| Name | Signature |
|------|-----------|
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea { get; }` |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand { get; }` |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband { get; }` |


## 主要方法

### GetMaximumDistanceBetweenTwoConnectedSettlements

```csharp
public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType)
```

### GetLandRatioOfPathBetweenSettlements

```csharp
public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)
```

### GetDistance

```csharp
public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)
```

### GetDistance

```csharp
public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)
```

### GetDistance

```csharp
public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)
```

### GetDistance

```csharp
public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability)
```

### GetDistance

```csharp
public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)
```

### GetDistance

```csharp
public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio)
```

### GetDistance

```csharp
public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType)
```

### GetPortToGateDistanceForSettlement

```csharp
public abstract float GetPortToGateDistanceForSettlement(Settlement settlement)
```

### PathExistBetweenPoints

```csharp
public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)
```

### RegisterDistanceCache

```csharp
public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)
```

### GetClosestEntranceToFace

```csharp
public abstract ValueTuple<Settlement, bool> GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)
```

### GetNeighborsOfFortification

```csharp
public abstract MBReadOnlyList<Settlement> GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)
```

### GetTransitionCostAdjustment

```csharp
public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)
```

源码或贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)