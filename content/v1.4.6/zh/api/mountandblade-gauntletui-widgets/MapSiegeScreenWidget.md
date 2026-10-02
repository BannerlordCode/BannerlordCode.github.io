---
title: "MapSiegeScreenWidget"
description: "MapSiegeScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 15 个（方法 13、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs。"
---
# MapSiegeScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapSiegeScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs`

## 概述

MapSiegeScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MapSiegeScreenWidget → Widget。public/protected 成员共 15 个：13 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegeScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege），继承链 MapSiegeScreenWidget → Widget。成员构成以方法为主（方法 13/15，属性 1/15），对外主要以操作入口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapSiegeScreenWidget` | `public MapSiegeScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `SetCurrentButton` | `public void SetCurrentButton(MapSiegeMachineButtonWidget button)` | 方法 |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | 方法 |
| `OnPreviewDragEnd` | `protected override bool OnPreviewDragEnd()` | 方法 |
| `OnPreviewDragBegin` | `protected override bool OnPreviewDragBegin()` | 方法 |
| `OnPreviewDrop` | `protected override bool OnPreviewDrop()` | 方法 |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | 方法 |
| `OnPreviewMouseMove` | `protected override bool OnPreviewMouseMove()` | 方法 |
| `OnPreviewMouseReleased` | `protected override bool OnPreviewMouseReleased()` | 方法 |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | 方法 |
| `OnPreviewMouseAlternatePressed` | `protected override bool OnPreviewMouseAlternatePressed()` | 方法 |
| `OnPreviewMouseAlternateReleased` | `protected override bool OnPreviewMouseAlternateReleased()` | 方法 |
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget)
- [同命名空间 MapSiegeMachineButtonWidget](../MapSiegeMachineButtonWidget)
- [同命名空间 MapSiegePOIBrushWidget](../MapSiegePOIBrushWidget)
- [同命名空间 MapSiegeQueueIndexTextWidget](../MapSiegeQueueIndexTextWidget)
