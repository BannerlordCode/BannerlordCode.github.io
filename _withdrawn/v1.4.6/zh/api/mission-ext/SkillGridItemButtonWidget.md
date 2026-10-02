---
title: "SkillGridItemButtonWidget"
description: "SkillGridItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper 的 public 类，继承 ButtonWidget；公开成员 7 个（方法 1、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkillGridItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SkillGridItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SkillGridItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 SkillGridItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkillGridItemButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`，继承链 SkillGridItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CannotLearnBrush` | `public Brush CannotLearnBrush` | 属性 |
| `CanLearnBrush` | `public Brush CanLearnBrush` | 属性 |
| `SkillGridItemButtonWidget` | `public SkillGridItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `FocusLevelWidget` | `public Widget FocusLevelWidget` | 属性 |
| `CanLearnSkill` | `public bool CanLearnSkill` | 属性 |
| `CurrentFocusLevel` | `public int CurrentFocusLevel` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 CharacterDeveloperAttributeInspectionPopupWidget](../CharacterDeveloperAttributeInspectionPopupWidget/)
- [同命名空间 CharacterDeveloperPerksContainerWidget](../CharacterDeveloperPerksContainerWidget/)
- [同命名空间 CharacterDeveloperPerkSelectionItemButtonWidget](../CharacterDeveloperPerkSelectionItemButtonWidget/)
- [同命名空间 CharacterDeveloperPerkSelectionWidget](../CharacterDeveloperPerkSelectionWidget/)
