---
title: "StackLayout"
description: "StackLayout 的自动生成类参考。"
---
# StackLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StackLayout : ILayout`
**Base:** `ILayout`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.Layout/StackLayout.cs`

## 概述

`StackLayout` 位于 `TaleWorlds.GauntletUI.Layout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Layout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `LayoutMethod` | `public LayoutMethod LayoutMethod { get; set; }` |

## 主要方法

### GetItemDescription
`public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「item description」 的结果。

```csharp
// 先通过子系统 API 拿到 StackLayout 实例
StackLayout stackLayout = ...;
var result = stackLayout.GetItemDescription(owner, child, 0);
```

### MeasureChildren
`public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 处理与 「measure children」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 StackLayout 实例
StackLayout stackLayout = ...;
var result = stackLayout.MeasureChildren(widget, measureSpec, spriteData, 0);
```

### OnLayout
`public void OnLayout(Widget widget, float left, float bottom, float right, float top)`

**用途 / Purpose:** 在 「layout」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StackLayout 实例
StackLayout stackLayout = ...;
stackLayout.OnLayout(widget, 0, 0, 0, 0);
```

### GetIndexForDrop
`public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「index for drop」 的结果。

```csharp
// 先通过子系统 API 拿到 StackLayout 实例
StackLayout stackLayout = ...;
var result = stackLayout.GetIndexForDrop(widget, draggedWidgetPosition);
```

### GetDropGizmoPosition
`public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)`

**用途 / Purpose:** 读取并返回当前对象中 「drop gizmo position」 的结果。

```csharp
// 先通过子系统 API 拿到 StackLayout 实例
StackLayout stackLayout = ...;
var result = stackLayout.GetDropGizmoPosition(widget, draggedWidgetPosition);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StackLayout stackLayout = ...;
stackLayout.GetItemDescription(owner, child, 0);
```

## 参见

- [本区域目录](../)