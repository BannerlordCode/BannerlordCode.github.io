---
title: "NavigatableListPanel"
description: "NavigatableListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 18 个（方法 7、属性 10、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs。"
---
# NavigatableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigatableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs`

## 概述

NavigatableListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 NavigatableListPanel → ListPanel。public/protected 成员共 18 个：7 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigatableListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 NavigatableListPanel → ListPanel。成员构成以属性为主（属性 10/18，方法 7/18），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParentPanel` | `public ScrollablePanel ParentPanel` | 属性 |
| `NavigatableListPanel` | `public NavigatableListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `OnGamepadNavigationIndexUpdated` | `protected override void OnGamepadNavigationIndexUpdated(int newIndex)` | 方法 |
| `RefreshChildNavigationIndices` | `protected void RefreshChildNavigationIndices()` | 方法 |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset` | 属性 |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset` | 属性 |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset` | 属性 |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset` | 属性 |
| `MinIndex` | `public int MinIndex` | 属性 |
| `MaxIndex` | `public int MaxIndex` | 属性 |
| `StepSize` | `public int StepSize` | 属性 |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum` | 属性 |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
