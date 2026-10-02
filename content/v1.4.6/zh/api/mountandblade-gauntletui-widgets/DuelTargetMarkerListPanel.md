---
title: "DuelTargetMarkerListPanel"
description: "DuelTargetMarkerListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 14 个（方法 1、属性 12、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs。"
---
# DuelTargetMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DuelTargetMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs`

## 概述

DuelTargetMarkerListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 DuelTargetMarkerListPanel → ListPanel。public/protected 成员共 14 个：1 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DuelTargetMarkerListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker），继承链 DuelTargetMarkerListPanel → ListPanel。成员构成以属性为主（属性 12/14，方法 1/14），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DuelTargetMarkerListPanel` | `public DuelTargetMarkerListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `Position` | `public Vec2 Position` | 属性 |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries` | 属性 |
| `IsAvailable` | `public bool IsAvailable` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `IsAgentFocused` | `public bool IsAgentFocused` | 属性 |
| `HasTargetSentDuelRequest` | `public bool HasTargetSentDuelRequest` | 属性 |
| `HasPlayerSentDuelRequest` | `public bool HasPlayerSentDuelRequest` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `ActionText` | `public RichTextWidget ActionText` | 属性 |
| `Background` | `public BrushWidget Background` | 属性 |
| `Border` | `public BrushWidget Border` | 属性 |
| `TroopClassBorder` | `public BrushWidget TroopClassBorder` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlwaysVisibleNameMarkerListPanel](../AlwaysVisibleNameMarkerListPanel)
- [同命名空间 MarkerRect](../MarkerRect)
- [同命名空间 NameMarkerListPanel](../NameMarkerListPanel)
- [同命名空间 NameMarkerScreenWidget](../NameMarkerScreenWidget)
