---
title: "OrderOfBattleScreenWidget"
description: "OrderOfBattleScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 11 个（方法 2、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs。"
---
# OrderOfBattleScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs`

## 概述

OrderOfBattleScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 OrderOfBattleScreenWidget → Widget。public/protected 成员共 11 个：2 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle），继承链 OrderOfBattleScreenWidget → Widget。成员构成以属性为主（属性 8/11，方法 2/11），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AlphaChangeDuration` | `public float AlphaChangeDuration` | 属性 |
| `OrderOfBattleScreenWidget` | `public OrderOfBattleScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnCameraControlsEnabledChanged` | `protected void OnCameraControlsEnabledChanged()` | 方法 |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled` | 属性 |
| `CameraEnabledAlpha` | `public float CameraEnabledAlpha` | 属性 |
| `LeftSideFormations` | `public ListPanel LeftSideFormations` | 属性 |
| `RightSideFormations` | `public ListPanel RightSideFormations` | 属性 |
| `CaptainPool` | `public ListPanel CaptainPool` | 属性 |
| `Markers` | `public Widget Markers` | 属性 |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [同命名空间 OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [同命名空间 OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [同命名空间 OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
