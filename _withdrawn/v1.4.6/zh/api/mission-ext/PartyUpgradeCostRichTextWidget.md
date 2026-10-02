---
title: "PartyUpgradeCostRichTextWidget"
description: "PartyUpgradeCostRichTextWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party 的 public 类，继承 RichTextWidget；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyUpgradeCostRichTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyUpgradeCostRichTextWidget : RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PartyUpgradeCostRichTextWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs。它是一个 public 类，实现/继承 RichTextWidget，继承链为 PartyUpgradeCostRichTextWidget → RichTextWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyUpgradeCostRichTextWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`，继承链 PartyUpgradeCostRichTextWidget → RichTextWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyUpgradeCostRichTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyUpgradeCostRichTextWidget` | `public PartyUpgradeCostRichTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsSufficient` | `public bool IsSufficient` | 属性 |
| `NormalColor` | `public Color NormalColor` | 属性 |
| `InsufficientColor` | `public Color InsufficientColor` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 RichTextWidget](../../gui/RichTextWidget/)
- [同命名空间 PartyFormationDropdownWidget](../PartyFormationDropdownWidget/)
- [同命名空间 PartyHeaderToggleWidget](../PartyHeaderToggleWidget/)
- [同命名空间 PartyHealthFillBarWidget](../PartyHealthFillBarWidget/)
- [同命名空间 PartyListPanel](../PartyListPanel/)
