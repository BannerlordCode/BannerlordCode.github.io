---
title: "DistanceHelper"
description: "DistanceHelper 的自动生成类参考。"
---
# DistanceHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DistanceHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## 概述

`DistanceHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DistanceHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, isFromPort, isTargetingPort, landRatio);
```

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities);
```

### FindClosestDistanceFromSettlementToSettlement
`public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, isTargetingPort, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToSettlement
`public static bool FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(fromMobileParty, toSettlement, navCapabilities, 0, distance, landRatio);
```

### FindClosestDistanceFromSettlementToSettlement
`public static bool FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToSettlement(fromSettlement, toSettlement, navCapabilities, 0, distance, landRatio);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static bool FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, float maxDistance, out float distance, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to mobile party。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType, 0, distance, landRatio);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to mobile party。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType);
```

### FindClosestDistanceFromMobilePartyToMobileParty
`public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to mobile party。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(from, to, navigationType, landRatio);
```

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out bool isFromPort)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to point。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToPoint(fromSettlement, point, navCapabilities, isFromPort);
```

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from map point to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMapPointToSettlement(mapPoint, toSettlement, navCapabilities, isTargetingPort, landRatio);
```

### FindClosestDistanceFromSettlementToPoint
`public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from settlement to point。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromSettlementToPoint(fromSettlement, point, navCapabilities, landRatio);
```

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to point。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToPoint(fromMobileParty, point, navCapabilities);
```

### FindClosestDistanceFromMobilePartyToPoint
`public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from mobile party to point。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMobilePartyToPoint(fromMobileParty, point, navCapabilities, landRatio);
```

### FindClosestDistanceFromMapPointToSettlement
`public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的closest distance from map point to settlement。

```csharp
// 静态调用，不需要实例
DistanceHelper.FindClosestDistanceFromMapPointToSettlement(mapPoint, toSettlement, navCapabilities, landRatio);
```

### GetDistanceBetweenMobilePartyToMobileParty
`public static float GetDistanceBetweenMobilePartyToMobileParty(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 distance between mobile party to mobile party 的结果。

```csharp
// 静态调用，不需要实例
DistanceHelper.GetDistanceBetweenMobilePartyToMobileParty(fromMobileParty, toMobileParty, customCapability, landRatio);
```

## 使用示例

```csharp
DistanceHelper.Initialize();
```

## 参见

- [本区域目录](../)