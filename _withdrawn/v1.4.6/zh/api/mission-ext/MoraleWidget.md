---
title: "MoraleWidget"
description: "MoraleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD 的 public 类，继承 Widget；公开成员 16 个（方法 3、属性 12、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MoraleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MoraleWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MoraleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MoraleWidget → Widget → PropertyOwnerObject。public/protected 成员共 16 个：3 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MoraleWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`，继承链 MoraleWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 12/16，方法 3/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MoraleWidget` | `public MoraleWidget(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IncreaseLevel` | `public int IncreaseLevel` | 属性 |
| `MoralePercentage` | `public int MoralePercentage` | 属性 |
| `Container` | `public Widget Container` | 属性 |
| `ItemContainer` | `public Widget ItemContainer` | 属性 |
| `ItemBrush` | `public Brush ItemBrush` | 属性 |
| `ItemGlowBrush` | `public Brush ItemGlowBrush` | 属性 |
| `ItemBackgroundBrush` | `public Brush ItemBackgroundBrush` | 属性 |
| `TeamColorAsStr` | `public string TeamColorAsStr` | 属性 |
| `TeamColorAsStrSecondary` | `public string TeamColorAsStrSecondary` | 属性 |
| `FlowArrowWidget` | `public MoraleArrowBrushWidget FlowArrowWidget` | 属性 |
| `ExtendToLeft` | `public bool ExtendToLeft` | 属性 |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget/)
- [同命名空间 HUDExtensionBrushWidget](../HUDExtensionBrushWidget/)
- [同命名空间 MoraleArrowBrushWidget](../MoraleArrowBrushWidget/)
- [同命名空间 MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget/)
