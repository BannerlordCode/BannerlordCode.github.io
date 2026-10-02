---
title: "PaginatedScrollablePanel"
description: "PaginatedScrollablePanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ScrollablePanel；公开成员 12 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs。"
---
# PaginatedScrollablePanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PaginatedScrollablePanel : ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs`

## 概述

PaginatedScrollablePanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs。它是一个 public 类，实现/继承 ScrollablePanel，继承链为 PaginatedScrollablePanel → ScrollablePanel。public/protected 成员共 12 个：1 方法、9 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PaginatedScrollablePanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 PaginatedScrollablePanel → ScrollablePanel。成员构成以属性为主（属性 9/12，方法 1/12），对外主要以状态读取接口暴露。继承链上的 ScrollablePanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/PaginatedScrollablePanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PaginatedScrollablePanel` | `public PaginatedScrollablePanel(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged` | 属性 |
| `ItemsPerPage` | `public int ItemsPerPage` | 属性 |
| `ScrollTime` | `public float ScrollTime` | 属性 |
| `ContainerDirection` | `public PaginatedScrollablePanel.ContainerDirections ContainerDirection` | 属性 |
| `ListWidget` | `public ListPanel ListWidget` | 属性 |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget` | 属性 |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget` | 属性 |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope` | 属性 |
| `ContainerDirections` | `public enum ContainerDirections` | 属性 |
| `ContainerDirections` | `public enum ContainerDirections` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
