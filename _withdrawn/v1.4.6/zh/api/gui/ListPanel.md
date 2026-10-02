---
title: "ListPanel"
description: "ListPanel：TaleWorlds.GauntletUI.BaseTypes 的 public 类，继承 Container；公开成员 12 个（方法 7、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ListPanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ListPanel : Container`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

ListPanel 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs。它是一个 public 类，实现/继承 Container，继承链为 ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 12 个：7 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ListPanel 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.BaseTypes`，继承链 ListPanel → Container → Widget → PropertyOwnerObject。成员构成以方法为主（方法 7/12，属性 4/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StackLayout` | `public StackLayout StackLayout` | 属性 |
| `ListPanel` | `public ListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `Predicate` | `public override Predicate<Widget>AcceptDropPredicate` | 属性 |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 mousePosition)` | 方法 |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 mousePosition)` | 方法 |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)` | 方法 |
| `OnDragHoverBegin` | `protected internal override void OnDragHoverBegin()` | 方法 |
| `OnDragHoverEnd` | `protected internal override void OnDragHoverEnd()` | 方法 |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | 方法 |
| `IsDragHovering` | `public override bool IsDragHovering` | 属性 |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Container](../Container/)
- [同命名空间 BasicContainer](../BasicContainer/)
- [同命名空间 BrushWidget](../BrushWidget/)
- [同命名空间 ButtonType](../ButtonType/)
- [同命名空间 ButtonWidget](../ButtonWidget/)
