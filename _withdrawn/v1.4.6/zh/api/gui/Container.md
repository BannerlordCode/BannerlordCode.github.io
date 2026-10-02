---
title: "Container"
description: "Container：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 Widget；公开成员 21 个（方法 10、属性 6、字段 4）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Container

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public abstract class Container : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

Container 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs。它是一个 public 类（abstract），实现/继承 Widget，继承链为 Container → Widget → PropertyOwnerObject。public/protected 成员共 21 个：10 方法、6 属性、4 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Container 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 10/21，属性 6/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription` | 属性 |
| `Predicate` | `public abstract Predicate<Widget>AcceptDropPredicate` | 属性 |
| `GetDropGizmoPosition` | `public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition);` | 方法 |
| `GetIndexForDrop` | `public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition);` | 方法 |
| `IntValue` | `public int IntValue` | 属性 |
| `IsDragHovering` | `public abstract bool IsDragHovering` | 属性 |
| `DragHoverInsertionIndex` | `public int DragHoverInsertionIndex` | 属性 |
| `Container` | `protected Container(UIContext context) : base(context)` | 构造函数 |
| `OnDrop` | `protected internal override bool OnDrop()` | 方法 |
| `OnChildSelected` | `public abstract void OnChildSelected(Widget widget);` | 方法 |
| `GetItemDescription` | `public ContainerItemDescription GetItemDescription(string id, int index)` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | 方法 |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | 方法 |
| `AddItemDescription` | `public void AddItemDescription(ContainerItemDescription itemDescription)` | 方法 |
| `FindParentPanel` | `public ScrollablePanel FindParentPanel()` | 方法 |
| `ClearSelectedOnRemoval` | `public bool ClearSelectedOnRemoval` | 属性 |
| `List` | `public List<Action<Widget>>SelectEventHandlers` | 字段 |
| `Widget>>ItemAddEventHandlers` | `public List<Action<Widget, Widget>>ItemAddEventHandlers` | 字段 |
| `Widget>>ItemRemoveEventHandlers` | `public List<Action<Widget, Widget>>ItemRemoveEventHandlers` | 字段 |
| `List` | `public List<Action<Widget>>ItemAfterRemoveEventHandlers` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
