---
title: "HUDExtensionBrushWidget"
description: "HUDExtensionBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD 的 public 类，继承 BrushWidget；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HUDExtensionBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class HUDExtensionBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

HUDExtensionBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 HUDExtensionBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HUDExtensionBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`，继承链 HUDExtensionBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AlphaChangeDuration` | `public float AlphaChangeDuration` | 属性 |
| `OrderEnabledAlpha` | `public float OrderEnabledAlpha` | 属性 |
| `HUDExtensionBrushWidget` | `public HUDExtensionBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsOrderActive` | `public bool IsOrderActive` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget/)
- [同命名空间 MoraleArrowBrushWidget](../MoraleArrowBrushWidget/)
- [同命名空间 MoraleWidget](../MoraleWidget/)
- [同命名空间 MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget/)
