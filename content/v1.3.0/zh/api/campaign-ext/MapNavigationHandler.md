---
title: "MapNavigationHandler"
description: "MapNavigationHandler 的自动生成类参考。"
---
# MapNavigationHandler

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public class MapNavigationHandler : INavigationHandler`
**Base:** `INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## 概述

`MapNavigationHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MapNavigationHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNavigationLocked` | `public bool IsNavigationLocked { get; set; }` |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive { get; }` |

## 主要方法

### GetElements
`public INavigationElement GetElements()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 elements 的结果。

```csharp
// 先通过子系统 API 拿到 MapNavigationHandler 实例
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.GetElements();
```

### IsAnyElementActive
`public bool IsAnyElementActive()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 any element active 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapNavigationHandler 实例
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.IsAnyElementActive();
```

### GetElement
`public INavigationElement GetElement(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 element 的结果。

```csharp
// 先通过子系统 API 拿到 MapNavigationHandler 实例
MapNavigationHandler mapNavigationHandler = ...;
var result = mapNavigationHandler.GetElement("example");
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MapNavigationHandler>();
```

## 参见

- [本区域目录](../)