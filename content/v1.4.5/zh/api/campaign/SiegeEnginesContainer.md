---
title: "SiegeEnginesContainer"
description: "SiegeEnginesContainer 的自动生成类参考。"
---
# SiegeEnginesContainer

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEnginesContainer`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## 概述

`SiegeEnginesContainer` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |

## 主要方法

### AllSiegeEngines
`public IEnumerable<SiegeEngineConstructionProgress> AllSiegeEngines()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.AllSiegeEngines();
```

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 将 「prebuilt engine to reserve」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.AddPrebuiltEngineToReserve(siegeEngine);
```

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEngineConstructionProgress siegeEngine, int index)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.DeploySiegeEngineAtIndex(siegeEngine, 0);
```

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**用途 / Purpose:** 从当前容器或状态中移除 「deployed siege engine」。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.RemoveDeployedSiegeEngine(0, false, false);
```

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 从当前容器或状态中移除 「d siege engine from reserved siege engines」。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.RemovedSiegeEngineFromReservedSiegeEngines(siegeEngine);
```

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEngineConstructionProgress deployedEngine)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「deployment index of deployed engine」。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.FindDeploymentIndexOfDeployedEngine(deployedEngine);
```

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**用途 / Purpose:** 清空当前对象中的「removed engines if necessary」。

```csharp
// 先通过子系统 API 拿到 SiegeEnginesContainer 实例
SiegeEnginesContainer siegeEnginesContainer = ...;
var result = siegeEnginesContainer.ClearRemovedEnginesIfNecessary();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeEnginesContainer siegeEnginesContainer = ...;
siegeEnginesContainer.AllSiegeEngines();
```

## 参见

- [本区域目录](../)