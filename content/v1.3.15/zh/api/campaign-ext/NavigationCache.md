---
title: "NavigationCache"
description: "NavigationCache 的自动生成类参考。"
---
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NavigationCache<T>`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCache.cs`

## 概述

`NavigationCache` 位于 `TaleWorlds.CampaignSystem.Map.DistanceCache`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements { get; }` |

## 主要方法

### GetNeighbors
`public MBReadOnlyList<T> GetNeighbors(T settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「neighbors」 的结果。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
var result = navigationCache.GetNeighbors(settlement);
```

### GetClosestSettlementToFaceIndex
`public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)`

**用途 / Purpose:** 读取并返回当前对象中 「closest settlement to face index」 的结果。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
var result = navigationCache.GetClosestSettlementToFaceIndex(0, isAtSea);
```

### GenerateCacheData
`public void GenerateCacheData()`

**用途 / Purpose:** 生成「cache data」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
navigationCache.GenerateCacheData();
```

### GetSceneXmlCrcValues
`public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**用途 / Purpose:** 读取并返回当前对象中 「scene xml crc values」 的结果。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
navigationCache.GetSceneXmlCrcValues(sceneXmlCrc, sceneNavigationMeshCrc);
```

### GetSettlementsDistanceCacheFileForCapability
`public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)`

**用途 / Purpose:** 读取并返回当前对象中 「settlements distance cache file for capability」 的结果。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
var result = navigationCache.GetSettlementsDistanceCacheFileForCapability("example", filePath);
```

### Serialize
`public void Serialize(string path)`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
navigationCache.Serialize("example");
```

### Deserialize
`public void Deserialize(string path)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 NavigationCache 实例
NavigationCache navigationCache = ...;
navigationCache.Deserialize("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
NavigationCache instance = ...;
```

## 参见

- [本区域目录](../)