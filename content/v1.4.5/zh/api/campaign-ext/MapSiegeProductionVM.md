---
title: "MapSiegeProductionVM"
description: "MapSiegeProductionVM 的自动生成类参考。"
---
# MapSiegeProductionVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeProductionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegeProductionVM.cs`

## 概述

`MapSiegeProductionVM` 位于 `SandBox.ViewModelCollection.MapSiege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.MapSiege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LatestSelectedPOI` | `public MapSiegePOIVM LatestSelectedPOI { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PossibleProductionMachines` | `public MBBindingList<MapSiegeProductionMachineVM> PossibleProductionMachines { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapSiegeProductionVM 实例
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.RefreshValues();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MapSiegeProductionVM 实例
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.Update();
```

### OnMachineSelection
`public void OnMachineSelection(MapSiegePOIVM poi)`

**用途 / Purpose:** 在 「machine selection」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapSiegeProductionVM 实例
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.OnMachineSelection(poi);
```

### ExecuteDisable
`public void ExecuteDisable()`

**用途 / Purpose:** 执行 「disable」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapSiegeProductionVM 实例
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.ExecuteDisable();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapSiegeProductionVM mapSiegeProductionVM = ...;
mapSiegeProductionVM.RefreshValues();
```

## 参见

- [本区域目录](../)