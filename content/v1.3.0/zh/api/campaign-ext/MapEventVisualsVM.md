---
title: "MapEventVisualsVM"
description: "MapEventVisualsVM 的自动生成类参考。"
---
# MapEventVisualsVM

**Namespace:** SandBox.ViewModelCollection.Map
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapEventVisualsVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs`

## 概述

`MapEventVisualsVM` 位于 `SandBox.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvents` | `public MBBindingList<MapEventVisualItemVM> MapEvents { get; set; }` |

## 主要方法

### Update
`public void Update(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MapEventVisualsVM 实例
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.Update(0);
```

### OnMapEventVisibilityChanged
`public void OnMapEventVisibilityChanged(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event visibility changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventVisualsVM 实例
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventVisibilityChanged(mapEvent);
```

### OnMapEventStarted
`public void OnMapEventStarted(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventVisualsVM 实例
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventStarted(mapEvent);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapEventVisualsVM 实例
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.OnMapEventEnded(mapEvent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapEventVisualsVM mapEventVisualsVM = ...;
mapEventVisualsVM.Update(0);
```

## 参见

- [本区域目录](../)