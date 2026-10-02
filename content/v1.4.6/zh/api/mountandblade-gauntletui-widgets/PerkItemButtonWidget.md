---
title: "PerkItemButtonWidget"
description: "PerkItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 15 个（方法 2、属性 11、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs。"
---
# PerkItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PerkItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs`

## 概述

PerkItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 PerkItemButtonWidget → ButtonWidget。public/protected 成员共 15 个：2 方法、11 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PerkItemButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper），继承链 PerkItemButtonWidget → ButtonWidget。成员构成以属性为主（属性 11/15，方法 2/15），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotEarnedPerkBrush` | `public Brush NotEarnedPerkBrush` | 属性 |
| `EarnedNotSelectedPerkBrush` | `public Brush EarnedNotSelectedPerkBrush` | 属性 |
| `EarnedActivePerkBrush` | `public Brush EarnedActivePerkBrush` | 属性 |
| `EarnedNotActivePerkBrush` | `public Brush EarnedNotActivePerkBrush` | 属性 |
| `EarnedPreviousPerkNotSelectedPerkBrush` | `public Brush EarnedPreviousPerkNotSelectedPerkBrush` | 属性 |
| `PerkVisualWidgetParent` | `public BrushWidget PerkVisualWidgetParent` | 属性 |
| `PerkItemButtonWidget` | `public PerkItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `Level` | `public int Level` | 属性 |
| `PerkVisualWidget` | `public Widget PerkVisualWidget` | 属性 |
| `PerkState` | `public int PerkState` | 属性 |
| `AlternativeType` | `public int AlternativeType` | 属性 |
| `AnimState` | `public enum AnimState` | 属性 |
| `AnimState` | `public enum AnimState` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget)
- [同命名空间 CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget)
- [同命名空间 CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget)
- [同命名空间 CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget)
