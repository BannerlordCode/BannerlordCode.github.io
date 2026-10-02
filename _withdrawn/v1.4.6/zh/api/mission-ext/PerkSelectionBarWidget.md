---
title: "PerkSelectionBarWidget"
description: "PerkSelectionBarWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper 的 public 类，继承 Widget；公开成员 13 个（方法 1、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkSelectionBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PerkSelectionBarWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PerkSelectionBarWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 PerkSelectionBarWidget → Widget → PropertyOwnerObject。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PerkSelectionBarWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`，继承链 PerkSelectionBarWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PerkSelectionBarWidget` | `public PerkSelectionBarWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ProgressClip` | `public Widget ProgressClip` | 属性 |
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget` | 属性 |
| `FullLearningRateClip` | `public Widget FullLearningRateClip` | 属性 |
| `SeperatorContainer` | `public Widget SeperatorContainer` | 属性 |
| `LearningLimitIndicatorWidget` | `public Widget LearningLimitIndicatorWidget` | 属性 |
| `FullLearningRateClipInnerContent` | `public Widget FullLearningRateClipInnerContent` | 属性 |
| `PerksList` | `public Widget PerksList` | 属性 |
| `PercentageIndicatorTextWidget` | `public TextWidget PercentageIndicatorTextWidget` | 属性 |
| `MaxLevel` | `public int MaxLevel` | 属性 |
| `FullLearningRateLevel` | `public int FullLearningRateLevel` | 属性 |
| `Level` | `public int Level` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget/)
- [同命名空间 CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget/)
- [同命名空间 CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget/)
- [同命名空间 CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget/)
