---
title: "MobilePartyTrackerItemWidget"
description: "MobilePartyTrackerItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map 的 public 类，继承 Widget；公开成员 9 个（方法 1、属性 7、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MobilePartyTrackerItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MobilePartyTrackerItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MobilePartyTrackerItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MobilePartyTrackerItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map`，继承链 MobilePartyTrackerItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FrameVisualWidget` | `public Widget FrameVisualWidget` | 属性 |
| `MobilePartyTrackerItemWidget` | `public MobilePartyTrackerItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `TrackerType` | `public string TrackerType` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `TrackerImageBrush` | `public Brush TrackerImageBrush` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MapAnchorTrackerWidget](../MapAnchorTrackerWidget/)
- [同命名空间 MapEventVisualBrushWidget](../MapEventVisualBrushWidget/)
