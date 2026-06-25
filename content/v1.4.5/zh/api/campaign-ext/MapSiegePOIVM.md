---
title: "MapSiegePOIVM"
description: "MapSiegePOIVM 的自动生成类参考。"
---
# MapSiegePOIVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegePOIVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegePOIVM.cs`

## 概述

`MapSiegePOIVM` 位于 `SandBox.ViewModelCollection.MapSiege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.MapSiege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public POIType Type { get; }` |
| `MachineIndex` | `public int MachineIndex { get; }` |
| `Machine` | `public SiegeEngineConstructionProgress Machine { get; }` |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `SidePrimaryColor` | `public Color SidePrimaryColor { get; set; }` |
| `SideSecondaryColor` | `public Color SideSecondaryColor { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `CurrentHitpoints` | `public float CurrentHitpoints { get; set; }` |
| `MaxHitpoints` | `public float MaxHitpoints { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsFireVersion` | `public bool IsFireVersion { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |

## 主要方法

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 「selection」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 重新计算并更新 「properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.UpdateProperties();
```

### RefreshDistanceValue
`public void RefreshDistanceValue(float newDistance)`

**用途 / Purpose:** 使 「distance value」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshDistanceValue(0);
```

### RefreshPosition
`public void RefreshPosition()`

**用途 / Purpose:** 使 「position」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshPosition();
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 「binding」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshBinding();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 「show tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 「hide tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegePOIVM 实例
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteHideTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

## 参见

- [本区域目录](../)