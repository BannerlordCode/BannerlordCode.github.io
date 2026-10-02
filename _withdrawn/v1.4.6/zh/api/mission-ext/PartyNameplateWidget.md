---
title: "PartyNameplateWidget"
description: "PartyNameplateWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate 的 public 类，继承 Widget；公开成员 35 个（方法 4、属性 27、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyNameplateWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PartyNameplateWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 PartyNameplateWidget → Widget → PropertyOwnerObject。public/protected 成员共 35 个：4 方法、27 属性、2 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyNameplateWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`，继承链 PartyNameplateWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 27/35，方法 4/35），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyNameplateWidget` | `public PartyNameplateWidget(UIContext context) : base(context)` | 构造函数 |
| `_animSpeedModifier` | `protected float _animSpeedModifier` | 属性 |
| `_armyFontSizeOffset` | `protected int _armyFontSizeOffset` | 属性 |
| `HeadGroupWidget` | `public Widget HeadGroupWidget` | 属性 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `UpdateNameplatesVisibility` | `protected virtual void UpdateNameplatesVisibility(float dt)` | 方法 |
| `UpdateNameplatesScreenPosition` | `protected virtual void UpdateNameplatesScreenPosition()` | 方法 |
| `IsPositionOutsideScreen` | `protected bool IsPositionOutsideScreen()` | 方法 |
| `NameplateLayoutListPanel` | `public ListPanel NameplateLayoutListPanel` | 属性 |
| `PartyBannerWidget` | `public MaskedTextureWidget PartyBannerWidget` | 属性 |
| `TrackerFrame` | `public Widget TrackerFrame` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `HeadPosition` | `public Vec2 HeadPosition` | 属性 |
| `ShouldShowFullName` | `public bool ShouldShowFullName` | 属性 |
| `CanParley` | `public bool CanParley` | 属性 |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | 属性 |
| `IsInArmy` | `public bool IsInArmy` | 属性 |
| `IsInSettlement` | `public bool IsInSettlement` | 属性 |
| `IsArmy` | `public bool IsArmy` | 属性 |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | 属性 |
| `IsInside` | `public bool IsInside` | 属性 |
| `IsHigh` | `public bool IsHigh` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `IsDisorganized` | `public bool IsDisorganized` | 属性 |
| `NameplateTextWidget` | `public TextWidget NameplateTextWidget` | 属性 |
| `NameplateExtraInfoTextWidget` | `public TextWidget NameplateExtraInfoTextWidget` | 属性 |
| `NameplateFullNameTextWidget` | `public TextWidget NameplateFullNameTextWidget` | 属性 |
| `SpeedTextWidget` | `public TextWidget SpeedTextWidget` | 属性 |
| `SpeedIconWidget` | `public Widget SpeedIconWidget` | 属性 |
| `ParleyIconWidget` | `public Widget ParleyIconWidget` | 属性 |
| `DisorganizedWidget` | `public Widget DisorganizedWidget` | 属性 |
| `_isFirstFrame` | `protected bool _isFirstFrame` | 字段 |
| `_initialDelayAmount` | `protected float _initialDelayAmount` | 字段 |
| `TutorialAnimState` | `public enum TutorialAnimState` | 属性 |
| `TutorialAnimState` | `public enum TutorialAnimState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget/)
- [同命名空间 SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget/)
- [同命名空间 SettlementNameplateItemWidget](../SettlementNameplateItemWidget/)
- [同命名空间 SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget/)
