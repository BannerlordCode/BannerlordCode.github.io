---
title: "SettlementNameplateWidget"
description: "SettlementNameplateWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate 的 public 类，继承 Widget、IComparable<SettlementNameplateWidget>；公开成员 20 个（方法 2、属性 16、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementNameplateWidget : Widget, IComparable<SettlementNameplateWidget>`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SettlementNameplateWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs。它是一个 public 类，实现/继承 Widget、IComparable<SettlementNameplateWidget>，继承链为 SettlementNameplateWidget → Widget → PropertyOwnerObject。public/protected 成员共 20 个：2 方法、16 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`，继承链 SettlementNameplateWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 16/20，方法 2/20），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplateWidget` | `public SettlementNameplateWidget(UIContext context) : base(context)` | 构造函数 |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | 方法 |
| `CompareTo` | `public int CompareTo(SettlementNameplateWidget other)` | 方法 |
| `Position` | `public Vec2 Position` | 属性 |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | 属性 |
| `IsInsideWindow` | `public bool IsInsideWindow` | 属性 |
| `IsInRange` | `public bool IsInRange` | 属性 |
| `CanParley` | `public bool CanParley` | 属性 |
| `HasPort` | `public bool HasPort` | 属性 |
| `RelationType` | `public int RelationType` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `WPos` | `public float WPos` | 属性 |
| `DistanceToCamera` | `public float DistanceToCamera` | 属性 |
| `NameplateItem` | `public SettlementNameplateItemWidget NameplateItem` | 属性 |
| `NotificationListPanel` | `public ListPanel NotificationListPanel` | 属性 |
| `EventsListPanel` | `public ListPanel EventsListPanel` | 属性 |
| `TutorialAnimState` | `public enum TutorialAnimState` | 属性 |
| `TutorialAnimState` | `public enum TutorialAnimState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 PartyNameplateWidget](../PartyNameplateWidget/)
- [同命名空间 PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget/)
- [同命名空间 SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget/)
- [同命名空间 SettlementNameplateItemWidget](../SettlementNameplateItemWidget/)
