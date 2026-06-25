---
title: "MapSiegeVM"
description: "MapSiegeVM 的自动生成类参考。"
---
# MapSiegeVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`

## 概述

`MapSiegeVM` 位于 `SandBox.ViewModelCollection.MapSiege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.MapSiege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PreparationProgress` | `public float PreparationProgress { get; set; }` |
| `IsPreparationsCompleted` | `public bool IsPreparationsCompleted { get; set; }` |
| `PreparationTitleText` | `public string PreparationTitleText { get; set; }` |
| `ProductionController` | `public MapSiegeProductionVM ProductionController { get; set; }` |
| `PointsOfInterest` | `public MBBindingList<MapSiegePOIVM> PointsOfInterest { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegeVM 实例
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.RefreshValues();
```

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**用途 / Purpose:** 在 「selection from scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapSiegeVM 实例
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.OnSelectionFromScene(frameOfEngine);
```

### Update
`public void Update(float mapCameraDistanceValue)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MapSiegeVM 实例
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.Update(0);
```

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MapSiegeVM 实例
MapSiegeVM mapSiegeVM = ...;
var result = mapSiegeVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapSiegeVM mapSiegeVM = ...;
mapSiegeVM.RefreshValues();
```

## 参见

- [本区域目录](../)