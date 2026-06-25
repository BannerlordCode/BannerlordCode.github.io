---
title: "MapTrackerProvider"
description: "MapTrackerProvider 的自动生成类参考。"
---
# MapTrackerProvider

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerProvider`
**Base:** 无
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Tracker/MapTrackerProvider.cs`

## 概述

`MapTrackerProvider` 位于 `SandBox.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnTrackerAddedOrRemoved` | `public event OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved { get; }` |

## 主要方法

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trackers 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackers();
```

### HasTrackerFor
`public bool HasTrackerFor(ITrackableCampaignObject trackable)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 tracker for。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.HasTrackerFor(trackable);
```

### GetTrackerFor
`public MapTrackerItemVM GetTrackerFor(ITrackableCampaignObject trackable)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tracker for 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackerFor(trackable);
```

### AddTracker
`public void AddTracker(MapTrackerItemVM tracker)`

**用途 / Purpose:** **用途 / Purpose:** 将 tracker 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.AddTracker(tracker);
```

### RemoveTracker
`public void RemoveTracker(MapTrackerItemVM tracker)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 tracker。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.RemoveTracker(tracker);
```

### ClearTrackers
`public void ClearTrackers()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的trackers。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.ClearTrackers();
```

### OnTrackerAddedOrRemovedDelegate
`public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)`

**用途 / Purpose:** **用途 / Purpose:** 在 tracker added or removed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.OnTrackerAddedOrRemovedDelegate(tracker, false);
```

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trackers 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackerProvider 实例
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackers();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.GetTrackers();
```

## 参见

- [本区域目录](../)