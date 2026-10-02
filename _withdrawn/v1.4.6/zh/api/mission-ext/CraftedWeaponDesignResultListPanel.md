---
title: "CraftedWeaponDesignResultListPanel"
description: "CraftedWeaponDesignResultListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting 的 public 类，继承 ListPanel；公开成员 17 个（方法 1、属性 15、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftedWeaponDesignResultListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftedWeaponDesignResultListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CraftedWeaponDesignResultListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 CraftedWeaponDesignResultListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 17 个：1 方法、15 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftedWeaponDesignResultListPanel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`，继承链 CraftedWeaponDesignResultListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 15/17，方法 1/17），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChangeValueTextWidget` | `public CounterTextBrushWidget ChangeValueTextWidget` | 属性 |
| `ValueTextWidget` | `public CounterTextBrushWidget ValueTextWidget` | 属性 |
| `GoldEffectorTextWidget` | `public RichTextWidget GoldEffectorTextWidget` | 属性 |
| `PositiveChangeBrush` | `public Brush PositiveChangeBrush` | 属性 |
| `NegativeChangeBrush` | `public Brush NegativeChangeBrush` | 属性 |
| `NeutralBrush` | `public Brush NeutralBrush` | 属性 |
| `FadeInTimeIndexOffset` | `public float FadeInTimeIndexOffset` | 属性 |
| `FadeInTime` | `public float FadeInTime` | 属性 |
| `CounterStartTime` | `public float CounterStartTime` | 属性 |
| `CraftedWeaponDesignResultListPanel` | `public CraftedWeaponDesignResultListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `LabelTextWidget` | `public RichTextWidget LabelTextWidget` | 属性 |
| `InitValue` | `public float InitValue` | 属性 |
| `ChangeAmount` | `public float ChangeAmount` | 属性 |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial` | 属性 |
| `TargetValue` | `public float TargetValue` | 属性 |
| `IsOrderResult` | `public bool IsOrderResult` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget/)
- [同命名空间 CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget/)
- [同命名空间 CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget/)
- [同命名空间 CraftingItemStatSliderWidget](../CraftingItemStatSliderWidget/)
