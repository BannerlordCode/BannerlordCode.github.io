---
title: "DropdownWidget"
description: "DropdownWidget：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 19 个（方法 10、属性 8、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs。"
---
# DropdownWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class DropdownWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## 概述

DropdownWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 DropdownWidget → Widget → PropertyOwnerObject。public/protected 成员共 19 个：10 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DropdownWidget 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 DropdownWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 10/19，属性 8/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextWidget` | `public Widget TextWidget` | 属性 |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel` | 属性 |
| `DropdownWidget` | `public DropdownWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OpenPanel` | `protected virtual void OpenPanel()` | 方法 |
| `ClosePanel` | `protected virtual void ClosePanel()` | 方法 |
| `OnButtonClick` | `public void OnButtonClick(Widget widget)` | 方法 |
| `UpdateButtonText` | `public void UpdateButtonText(string text)` | 方法 |
| `OnListItemAdded` | `public void OnListItemAdded(Widget parentWidget, Widget newChild)` | 方法 |
| `OnListItemRemoved` | `public void OnListItemRemoved(Widget removedItem, Widget removedChild)` | 方法 |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)` | 方法 |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | 属性 |
| `Button` | `public ButtonWidget Button` | 属性 |
| `ListPanel` | `public ListPanel ListPanel` | 属性 |
| `IsOpen` | `public bool IsOpen` | 属性 |
| `ListPanelValue` | `public int ListPanelValue` | 属性 |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
