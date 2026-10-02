---
title: "ContainerPageControlWidget"
description: "ContainerPageControlWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 14 个（方法 4、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs。"
---
# ContainerPageControlWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ContainerPageControlWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs`

## 概述

ContainerPageControlWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ContainerPageControlWidget → Widget。public/protected 成员共 14 个：4 方法、8 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ContainerPageControlWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 ContainerPageControlWidget → Widget。成员构成以属性为主（属性 8/14，方法 4/14），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PageCount` | `public int PageCount` | 属性 |
| `OnPageCountChanged;` | `public event Action OnPageCountChanged;` | 事件 |
| `ContainerPageControlWidget` | `public ContainerPageControlWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnInitialized` | `protected virtual void OnInitialized()` | 方法 |
| `OnContainerItemsUpdated` | `protected virtual void OnContainerItemsUpdated()` | 方法 |
| `GoToPage` | `protected void GoToPage(int index)` | 方法 |
| `PageButtonsContext` | `public NavigationScopeTargeter PageButtonsContext` | 属性 |
| `ItemPerPage` | `public int ItemPerPage` | 属性 |
| `LoopNavigation` | `public bool LoopNavigation` | 属性 |
| `Container` | `public Container Container` | 属性 |
| `NextPageButton` | `public ButtonWidget NextPageButton` | 属性 |
| `PreviousPageButton` | `public ButtonWidget PreviousPageButton` | 属性 |
| `PageText` | `public TextWidget PageText` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
