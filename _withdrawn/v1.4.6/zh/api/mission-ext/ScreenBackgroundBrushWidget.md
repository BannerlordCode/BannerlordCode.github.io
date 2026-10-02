---
title: "ScreenBackgroundBrushWidget"
description: "ScreenBackgroundBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 12 个（方法 1、属性 10、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScreenBackgroundBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScreenBackgroundBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ScreenBackgroundBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 ScreenBackgroundBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 12 个：1 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScreenBackgroundBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 ScreenBackgroundBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 10/12，方法 1/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsParticleVisible` | `public bool IsParticleVisible` | 属性 |
| `IsSmokeVisible` | `public bool IsSmokeVisible` | 属性 |
| `IsFullscreenImageEnabled` | `public bool IsFullscreenImageEnabled` | 属性 |
| `AnimEnabled` | `public bool AnimEnabled` | 属性 |
| `ParticleWidget1` | `public Widget ParticleWidget1` | 属性 |
| `ParticleWidget2` | `public Widget ParticleWidget2` | 属性 |
| `SmokeWidget1` | `public Widget SmokeWidget1` | 属性 |
| `SmokeWidget2` | `public Widget SmokeWidget2` | 属性 |
| `SmokeSpeedModifier` | `public float SmokeSpeedModifier` | 属性 |
| `ParticleSpeedModifier` | `public float ParticleSpeedModifier` | 属性 |
| `ScreenBackgroundBrushWidget` | `public ScreenBackgroundBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
