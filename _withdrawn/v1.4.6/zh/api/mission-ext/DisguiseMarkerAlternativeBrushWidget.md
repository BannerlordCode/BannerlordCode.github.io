---
title: "DisguiseMarkerAlternativeBrushWidget"
description: "DisguiseMarkerAlternativeBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission 的 public 类，继承 BrushWidget；公开成员 11 个（方法 1、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisguiseMarkerAlternativeBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DisguiseMarkerAlternativeBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DisguiseMarkerAlternativeBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 DisguiseMarkerAlternativeBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 11 个：1 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DisguiseMarkerAlternativeBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`，继承链 DisguiseMarkerAlternativeBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 9/11，方法 1/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BackgroundGlowWidget` | `public Widget BackgroundGlowWidget` | 属性 |
| `FrameWidget` | `public Widget FrameWidget` | 属性 |
| `FillBarWidget` | `public Widget FillBarWidget` | 属性 |
| `AlarmedHeight` | `public float AlarmedHeight` | 属性 |
| `DefaultHeight` | `public float DefaultHeight` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `DisguiseMarkerAlternativeBrushWidget` | `public DisguiseMarkerAlternativeBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `AlarmProgress` | `public int AlarmProgress` | 属性 |
| `AlarmState` | `public string AlarmState` | 属性 |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [同命名空间 AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [同命名空间 AgentHealthWidget](../AgentHealthWidget/)
- [同命名空间 AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
