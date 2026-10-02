---
title: "SettlementMenuPartyCharacterListsButtonWidget"
description: "SettlementMenuPartyCharacterListsButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu 的 public 类，继承 ButtonWidget；公开成员 10 个（方法 2、属性 7、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SettlementMenuPartyCharacterListsButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 10 个：2 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementMenuPartyCharacterListsButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`，继承链 SettlementMenuPartyCharacterListsButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 7/10，方法 2/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyListButtonBrush` | `public Brush PartyListButtonBrush` | 属性 |
| `CharacterListButtonBrush` | `public Brush CharacterListButtonBrush` | 属性 |
| `CharactersList` | `public ContainerPageControlWidget CharactersList` | 属性 |
| `PartiesList` | `public ContainerPageControlWidget PartiesList` | 属性 |
| `MaxNumOfVisuals` | `public int MaxNumOfVisuals` | 属性 |
| `SettlementMenuPartyCharacterListsButtonWidget` | `public SettlementMenuPartyCharacterListsButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `ChildCharactersList` | `public ListPanel ChildCharactersList` | 属性 |
| `ChildPartiesList` | `public ListPanel ChildPartiesList` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget/)
- [同命名空间 GameMenuWidget](../GameMenuWidget/)
