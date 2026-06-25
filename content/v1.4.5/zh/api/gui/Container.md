---
title: "Container"
description: "Container 的自动生成类参考。"
---
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class Container : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/Container.cs`

## 概述

`Container` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `AcceptDropPredicate` | `public abstract Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `IsDragHovering` | `public abstract bool IsDragHovering { get; set; }` |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex { get; set; }` |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval { get; set; }` |

## 主要方法

### GetDropGizmoPosition
`public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 drop gizmo position 的结果。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
var result = container.GetDropGizmoPosition(draggedWidgetPosition);
```

### GetIndexForDrop
`public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index for drop 的结果。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
var result = container.GetIndexForDrop(draggedWidgetPosition);
```

### OnChildSelected
`public abstract void OnChildSelected(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 child selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
container.OnChildSelected(widget);
```

### GetItemDescription
`public ContainerItemDescription GetItemDescription(string id, int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item description 的结果。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
var result = container.GetItemDescription("example", 0);
```

### AddItemDescription
`public void AddItemDescription(ContainerItemDescription itemDescription)`

**用途 / Purpose:** **用途 / Purpose:** 将 item description 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
container.AddItemDescription(itemDescription);
```

### FindParentPanel
`public ScrollablePanel FindParentPanel()`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的parent panel。

```csharp
// 先通过子系统 API 拿到 Container 实例
Container container = ...;
var result = container.FindParentPanel();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
Container instance = ...;
```

## 参见

- [本区域目录](../)