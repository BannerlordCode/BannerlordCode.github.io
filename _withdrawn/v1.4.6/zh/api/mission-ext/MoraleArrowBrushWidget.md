---
title: "MoraleArrowBrushWidget"
description: "MoraleArrowBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD 的 public 类，继承 BrushWidget；公开成员 6 个（方法 2、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MoraleArrowBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MoraleArrowBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 MoraleArrowBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MoraleArrowBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`，继承链 MoraleArrowBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeftSideArrow` | `public bool LeftSideArrow` | 属性 |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange` | 属性 |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | 属性 |
| `MoraleArrowBrushWidget` | `public MoraleArrowBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetFlowLevel` | `public void SetFlowLevel(int flow)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget/)
- [同命名空间 HUDExtensionBrushWidget](../HUDExtensionBrushWidget/)
- [同命名空间 MoraleWidget](../MoraleWidget/)
- [同命名空间 MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget/)
