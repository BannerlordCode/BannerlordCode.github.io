---
title: "FormationFocusedMarkerWidget"
description: "FormationFocusedMarkerWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 7 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs。"
---
# FormationFocusedMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class FormationFocusedMarkerWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs`

## 概述

FormationFocusedMarkerWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 FormationFocusedMarkerWidget → BrushWidget。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationFocusedMarkerWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission），继承链 FormationFocusedMarkerWidget → BrushWidget。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NormalSize` | `public int NormalSize` | 属性 |
| `FocusedSize` | `public int FocusedSize` | 属性 |
| `FormationFocusedMarkerWidget` | `public FormationFocusedMarkerWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus` | 属性 |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant` | 属性 |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [同命名空间 AgentHealthWidget](../AgentHealthWidget)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
