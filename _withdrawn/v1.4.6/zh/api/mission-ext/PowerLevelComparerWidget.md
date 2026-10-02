---
title: "PowerLevelComparerWidget"
description: "PowerLevelComparerWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay 的 public 类，继承 Widget；公开成员 14 个（方法 1、属性 12、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PowerLevelComparerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PowerLevelComparerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PowerLevelComparerWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 PowerLevelComparerWidget → Widget → PropertyOwnerObject。public/protected 成员共 14 个：1 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PowerLevelComparerWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`，继承链 PowerLevelComparerWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 12/14，方法 1/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PowerLevelComparerWidget` | `public PowerLevelComparerWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsCenterSeperatorEnabled` | `public bool IsCenterSeperatorEnabled` | 属性 |
| `CenterSpace` | `public float CenterSpace` | 属性 |
| `DefenderPower` | `public double DefenderPower` | 属性 |
| `AttackerPower` | `public double AttackerPower` | 属性 |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower` | 属性 |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower` | 属性 |
| `AttackerPowerWidget` | `public Widget AttackerPowerWidget` | 属性 |
| `DefenderPowerWidget` | `public Widget DefenderPowerWidget` | 属性 |
| `PowerListPanel` | `public ListPanel PowerListPanel` | 属性 |
| `AttackerPowerListPanel` | `public ListPanel AttackerPowerListPanel` | 属性 |
| `DefenderPowerListPanel` | `public ListPanel DefenderPowerListPanel` | 属性 |
| `CenterSeperatorWidget` | `public Widget CenterSeperatorWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ArmyOverlayWidget](../ArmyOverlayWidget/)
- [同命名空间 GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget/)
- [同命名空间 OverlayBaseWidget](../OverlayBaseWidget/)
- [同命名空间 OverlayPopupWidget](../OverlayPopupWidget/)
