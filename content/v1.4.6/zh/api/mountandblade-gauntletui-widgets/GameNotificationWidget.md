---
title: "GameNotificationWidget"
description: "GameNotificationWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 11 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs。"
---
# GameNotificationWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameNotificationWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs`

## 概述

GameNotificationWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 GameNotificationWidget → BrushWidget。public/protected 成员共 11 个：1 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameNotificationWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information），继承链 GameNotificationWidget → BrushWidget。成员构成以属性为主（属性 9/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RampUpInSeconds` | `public float RampUpInSeconds` | 属性 |
| `RampDownInSeconds` | `public float RampDownInSeconds` | 属性 |
| `GameNotificationWidget` | `public GameNotificationWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `AnnouncerImageIdentifier` | `public ImageIdentifierWidget AnnouncerImageIdentifier` | 属性 |
| `NotificationId` | `public int NotificationId` | 属性 |
| `NotificationDurationInSeconds` | `public float NotificationDurationInSeconds` | 属性 |
| `TextWidget` | `public RichTextWidget TextWidget` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification` | 属性 |
| `NotificationFadeOutDelayInSeconds` | `public float NotificationFadeOutDelayInSeconds` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiSelectionElementsWidget](../MultiSelectionElementsWidget)
- [同命名空间 PropertyBasedTooltipWidget](../PropertyBasedTooltipWidget)
- [同命名空间 TooltipPropertyWidget](../TooltipPropertyWidget)
