---
title: "CharacterCreationStageSelectionBarListPanel"
description: "CharacterCreationStageSelectionBarListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation 的 public 类，继承 ListPanel；公开成员 12 个（方法 2、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationStageSelectionBarListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterCreationStageSelectionBarListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CharacterCreationStageSelectionBarListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 CharacterCreationStageSelectionBarListPanel → ListPanel → Container → Widget → PropertyOwnerObject。public/protected 成员共 12 个：2 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationStageSelectionBarListPanel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation`，继承链 CharacterCreationStageSelectionBarListPanel → ListPanel → Container → Widget → PropertyOwnerObject。成员构成以属性为主（属性 9/12，方法 2/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationStageSelectionBarListPanel` | `public CharacterCreationStageSelectionBarListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `StageButtonTemplate` | `public ButtonWidget StageButtonTemplate` | 属性 |
| `BarFillWidget` | `public Widget BarFillWidget` | 属性 |
| `BarCanvasWidget` | `public Widget BarCanvasWidget` | 属性 |
| `CurrentStageIndex` | `public int CurrentStageIndex` | 属性 |
| `TotalStagesCount` | `public int TotalStagesCount` | 属性 |
| `OpenedStageIndex` | `public int OpenedStageIndex` | 属性 |
| `FullButtonBrush` | `public string FullButtonBrush` | 属性 |
| `EmptyButtonBrush` | `public string EmptyButtonBrush` | 属性 |
| `FullBrightButtonBrush` | `public string FullBrightButtonBrush` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ListPanel](../../gui/ListPanel/)
- [同命名空间 CharacterCreationNarrativeStageScreenWidget](../CharacterCreationNarrativeStageScreenWidget/)
