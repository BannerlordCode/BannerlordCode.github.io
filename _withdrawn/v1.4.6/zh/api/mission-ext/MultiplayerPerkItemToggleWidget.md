---
title: "MultiplayerPerkItemToggleWidget"
description: "MultiplayerPerkItemToggleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks 的 public 类，继承 ToggleButtonWidget；公开成员 6 个（方法 1、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPerkItemToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerPerkItemToggleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs。它是一个 public 类，实现/继承 ToggleButtonWidget，继承链为 MultiplayerPerkItemToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerPerkItemToggleWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`，继承链 MultiplayerPerkItemToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerPerkItemToggleWidget` | `public MultiplayerPerkItemToggleWidget(UIContext context) : base(context)` | 构造函数 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `IconType` | `public string IconType` | 属性 |
| `IconWidget` | `public BrushWidget IconWidget` | 属性 |
| `IsSelectable` | `public bool IsSelectable` | 属性 |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ToggleButtonWidget](../ToggleButtonWidget/)
- [同命名空间 MultiplayerPerkContainerPanelWidget](../MultiplayerPerkContainerPanelWidget/)
- [同命名空间 MultiplayerPerkPopupWidget](../MultiplayerPerkPopupWidget/)
