---
title: "FormationMarkerListPanel"
description: "FormationMarkerListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 21 个（方法 1、属性 19、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs。"
---
# FormationMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class FormationMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs`

## 概述

FormationMarkerListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 FormationMarkerListPanel → ListPanel。public/protected 成员共 21 个：1 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationMarkerListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission），继承链 FormationMarkerListPanel → ListPanel。成员构成以属性为主（属性 19/21，方法 1/21），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationMarkerListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | 属性 |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | 属性 |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | 属性 |
| `ClosestFadeoutRange` | `public float ClosestFadeoutRange` | 属性 |
| `FarScaleTarget` | `public float FarScaleTarget` | 属性 |
| `CloseScaleTarget` | `public float CloseScaleTarget` | 属性 |
| `FormationMarkerListPanel` | `public FormationMarkerListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | 属性 |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts` | 属性 |
| `TeamType` | `public int TeamType` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `Distance` | `public float Distance` | 属性 |
| `MarkerType` | `public string MarkerType` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `IconBrush` | `public Brush IconBrush` | 属性 |
| `FormationTypeMarker` | `public Widget FormationTypeMarker` | 属性 |
| `TeamTypeMarker` | `public Widget TeamTypeMarker` | 属性 |
| `NameTextWidget` | `public TextWidget NameTextWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [同命名空间 AgentHealthWidget](../AgentHealthWidget)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
