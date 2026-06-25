---
title: "MapTrackerCollectionVM"
description: "MapTrackerCollectionVM 的自动生成类参考。"
---
# MapTrackerCollectionVM

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs`

## 概述

`MapTrackerCollectionVM` 位于 `SandBox.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Trackers` | `public MBBindingList<MapTrackerItemVM> Trackers { get; set; }` |

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapTrackerCollectionVM 实例
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapTrackerCollectionVM 实例
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.OnFinalize();
```

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapTrackerCollectionVM 实例
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.UpdateProperties();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapTrackerCollectionVM mapTrackerCollectionVM = ...;
mapTrackerCollectionVM.Tick(0);
```

## 参见

- [本区域目录](../)