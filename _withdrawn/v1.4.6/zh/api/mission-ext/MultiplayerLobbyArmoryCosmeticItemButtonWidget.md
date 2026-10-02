---
title: "MultiplayerLobbyArmoryCosmeticItemButtonWidget"
description: "MultiplayerLobbyArmoryCosmeticItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory 的 public 类，继承 ButtonWidget；公开成员 10 个（方法 3、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerLobbyArmoryCosmeticItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 10 个：3 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLobbyArmoryCosmeticItemButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`，继承链 MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 6/10，方法 3/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyArmoryCosmeticItemButtonWidget` | `public MultiplayerLobbyArmoryCosmeticItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `HandleClick` | `protected override void HandleClick()` | 方法 |
| `HandleAlternateClick` | `protected override void HandleAlternateClick()` | 方法 |
| `ItemType` | `public int ItemType` | 属性 |
| `IsUnlocked` | `public bool IsUnlocked` | 属性 |
| `SelectableStateAnimationDuration` | `public float SelectableStateAnimationDuration` | 属性 |
| `SelectableStateAlpha` | `public float SelectableStateAlpha` | 属性 |
| `NonSelectableStateAlpha` | `public float NonSelectableStateAlpha` | 属性 |
| `IsSelectable` | `public bool IsSelectable` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 MultiplayerArmoryCosmeticCategoryButtonWidget](../MultiplayerArmoryCosmeticCategoryButtonWidget/)
- [同命名空间 MultiplayerArmoryCosmeticsSectionWidget](../MultiplayerArmoryCosmeticsSectionWidget/)
- [同命名空间 MultiplayerArmoryPageWidget](../MultiplayerArmoryPageWidget/)
- [同命名空间 MultiplayerLobbyArmoryCosmeticItemBrushWidget](../MultiplayerLobbyArmoryCosmeticItemBrushWidget/)
