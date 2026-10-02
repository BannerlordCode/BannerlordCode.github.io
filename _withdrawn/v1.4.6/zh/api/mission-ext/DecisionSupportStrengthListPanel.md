---
title: "DecisionSupportStrengthListPanel"
description: "DecisionSupportStrengthListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom 的 public 类，继承 ListPanel；公开成员 13 个（方法 1、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DecisionSupportStrengthListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DecisionSupportStrengthListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DecisionSupportStrengthListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 DecisionSupportStrengthListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DecisionSupportStrengthListPanel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`，继承链 DecisionSupportStrengthListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/DecisionSupportStrengthListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsAbstain` | `public bool IsAbstain` | 属性 |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | 属性 |
| `IsOptionSelected` | `public bool IsOptionSelected` | 属性 |
| `IsKingsOutcome` | `public bool IsKingsOutcome` | 属性 |
| `DecisionSupportStrengthListPanel` | `public DecisionSupportStrengthListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `CurrentIndex` | `public int CurrentIndex` | 属性 |
| `StrengthButton0` | `public ButtonWidget StrengthButton0` | 属性 |
| `StrengthButton1` | `public ButtonWidget StrengthButton1` | 属性 |
| `StrengthButton2` | `public ButtonWidget StrengthButton2` | 属性 |
| `StrengthButton0Text` | `public RichTextWidget StrengthButton0Text` | 属性 |
| `StrengthButton1Text` | `public RichTextWidget StrengthButton1Text` | 属性 |
| `StrengthButton2Text` | `public RichTextWidget StrengthButton2Text` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 DecisionSupporterGridWidget](../DecisionSupporterGridWidget/)
- [同命名空间 KingdomCardItemContainerWidget](../KingdomCardItemContainerWidget/)
- [同命名空间 KingdomClanTypeVisualBrushWidget](../KingdomClanTypeVisualBrushWidget/)
- [同命名空间 KingdomDecisionFactionTypeVisualBrushWidget](../KingdomDecisionFactionTypeVisualBrushWidget/)
