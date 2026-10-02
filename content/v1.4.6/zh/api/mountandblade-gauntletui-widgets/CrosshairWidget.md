---
title: "CrosshairWidget"
description: "CrosshairWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 19 个（方法 2、属性 16、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs。"
---
# CrosshairWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CrosshairWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`

## 概述

CrosshairWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CrosshairWidget → Widget。public/protected 成员共 19 个：2 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrosshairWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission），继承链 CrosshairWidget → Widget。成员构成以属性为主（属性 16/19，方法 2/19），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CrosshairWidget` | `public CrosshairWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `TopArrowOpacity` | `public double TopArrowOpacity` | 属性 |
| `BottomArrowOpacity` | `public double BottomArrowOpacity` | 属性 |
| `RightArrowOpacity` | `public double RightArrowOpacity` | 属性 |
| `LeftArrowOpacity` | `public double LeftArrowOpacity` | 属性 |
| `IsTargetInvalid` | `public bool IsTargetInvalid` | 属性 |
| `CrosshairAccuracy` | `public double CrosshairAccuracy` | 属性 |
| `CrosshairScale` | `public double CrosshairScale` | 属性 |
| `IsVictimDead` | `public bool IsVictimDead` | 属性 |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot` | 属性 |
| `ShowHitMarker` | `public bool ShowHitMarker` | 属性 |
| `LeftArrow` | `public BrushWidget LeftArrow` | 属性 |
| `RightArrow` | `public BrushWidget RightArrow` | 属性 |
| `TopArrow` | `public BrushWidget TopArrow` | 属性 |
| `BottomArrow` | `public BrushWidget BottomArrow` | 属性 |
| `HitMarker` | `public BrushWidget HitMarker` | 属性 |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [同命名空间 AgentHealthWidget](../AgentHealthWidget)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
