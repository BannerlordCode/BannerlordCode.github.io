---
title: "DevelopmentItemButtonWidget"
description: "DevelopmentItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 17 个（方法 1、属性 15、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs。"
---
# DevelopmentItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs`

## 概述

DevelopmentItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 DevelopmentItemButtonWidget → ButtonWidget。public/protected 成员共 17 个：1 方法、15 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DevelopmentItemButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement），继承链 DevelopmentItemButtonWidget → ButtonWidget。成员构成以属性为主（属性 15/17，方法 1/17），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DevelopmentItemButtonWidget` | `public DevelopmentItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsSelectedItem` | `public bool IsSelectedItem` | 属性 |
| `SelectedBlackOverlayWidget` | `public Widget SelectedBlackOverlayWidget` | 属性 |
| `NameTextWidget` | `public DevelopmentNameTextWidget NameTextWidget` | 属性 |
| `AddToQueueButtonWidget` | `public ButtonWidget AddToQueueButtonWidget` | 属性 |
| `SetAsActiveButtonWidget` | `public ButtonWidget SetAsActiveButtonWidget` | 属性 |
| `DevelopmentLevelVisualWidget` | `public Widget DevelopmentLevelVisualWidget` | 属性 |
| `ProgressClipWidget` | `public Widget ProgressClipWidget` | 属性 |
| `IsProgressShown` | `public bool IsProgressShown` | 属性 |
| `CanBuild` | `public bool CanBuild` | 属性 |
| `DevelopmentBackVisualWidget` | `public Widget DevelopmentBackVisualWidget` | 属性 |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget` | 属性 |
| `IsProgressIndicatorsEnabled` | `public bool IsProgressIndicatorsEnabled` | 属性 |
| `IsDaily` | `public bool IsDaily` | 属性 |
| `Level` | `public int Level` | 属性 |
| `Progress` | `public int Progress` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [同命名空间 AutoClosePopupWidget](../AutoClosePopupWidget)
- [同命名空间 DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [同命名空间 DevelopmentItemVisualButtonWidget](../DevelopmentItemVisualButtonWidget)
