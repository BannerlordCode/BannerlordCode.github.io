---
title: "ListPanel"
description: "ListPanel 的自动生成类参考。"
---
# ListPanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ListPanel : Container`
**Base:** `Container`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ListPanel.cs`

## 概述

`ListPanel` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |

## 主要方法

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 mousePosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 index for drop 的结果。

```csharp
// 先通过子系统 API 拿到 ListPanel 实例
ListPanel listPanel = ...;
var result = listPanel.GetIndexForDrop(mousePosition);
```

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 mousePosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 drop gizmo position 的结果。

```csharp
// 先通过子系统 API 拿到 ListPanel 实例
ListPanel listPanel = ...;
var result = listPanel.GetDropGizmoPosition(mousePosition);
```

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 child selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ListPanel 实例
ListPanel listPanel = ...;
listPanel.OnChildSelected(widget);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ListPanel listPanel = ...;
listPanel.GetIndexForDrop(mousePosition);
```

## 参见

- [本区域目录](../)