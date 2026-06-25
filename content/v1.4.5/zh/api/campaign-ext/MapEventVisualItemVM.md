---
title: "MapEventVisualItemVM"
description: "MapEventVisualItemVM 的自动生成类参考。"
---
# MapEventVisualItemVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map/MapEventVisualItemVM.cs`

## 概述

`MapEventVisualItemVM` 位于 `SandBox.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `EventType` | `public int EventType { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## 主要方法

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 重新计算并更新 properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapEventVisualItemVM 实例
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateProperties();
```

### ParallelUpdatePosition
`public void ParallelUpdatePosition()`

**用途 / Purpose:** 调用 ParallelUpdatePosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventVisualItemVM 实例
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.ParallelUpdatePosition();
```

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**用途 / Purpose:** 根据当前状态判定is visible on map的结果。

```csharp
// 先通过子系统 API 拿到 MapEventVisualItemVM 实例
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.DetermineIsVisibleOnMap();
```

### UpdateBindingProperties
`public void UpdateBindingProperties()`

**用途 / Purpose:** 重新计算并更新 binding properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 MapEventVisualItemVM 实例
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateBindingProperties();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEventVisualItemVM mapEventVisualItemVM = ...;
mapEventVisualItemVM.UpdateProperties();
```

## 参见

- [本区域目录](../)