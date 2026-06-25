---
title: "MapViewsContainer"
description: "MapViewsContainer 的自动生成类参考。"
---
# MapViewsContainer

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapViewsContainer`
**Base:** 无
**File:** `SandBox.View/Map/MapViewsContainer.cs`

## 概述

`MapViewsContainer` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Add
`public void Add(MapView mapView)`

**用途 / Purpose:** **用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Add(mapView);
```

### Remove
`public void Remove(MapView mapView)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Remove(mapView);
```

### Contains
`public bool Contains(MapView mapView)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.Contains(mapView);
```

### Foreach
`public void Foreach(Action<MapView> action)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Foreach 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Foreach(action);
```

### ForeachReverse
`public void ForeachReverse(Action<MapView> action)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForeachReverse 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.ForeachReverse(action);
```

### ReturnFirstElementWithCondition
`public MapView ReturnFirstElementWithCondition(Func<MapView, bool> condition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReturnFirstElementWithCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.ReturnFirstElementWithCondition(func<MapView, false);
```

### GetContextToChangeTo
`public TutorialContexts GetContextToChangeTo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 context to change to 的结果。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.GetContextToChangeTo();
```

### IsThereAnyViewIsEscaped
`public bool IsThereAnyViewIsEscaped()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there any view is escaped 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.IsThereAnyViewIsEscaped();
```

### IsOpeningEscapeMenuOnFocusChangeAllowedForAll
`public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 opening escape menu on focus change allowed for all 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapViewsContainer 实例
MapViewsContainer mapViewsContainer = ...;
var result = mapViewsContainer.IsOpeningEscapeMenuOnFocusChangeAllowedForAll();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapViewsContainer mapViewsContainer = ...;
mapViewsContainer.Add(mapView);
```

## 参见

- [本区域目录](../)