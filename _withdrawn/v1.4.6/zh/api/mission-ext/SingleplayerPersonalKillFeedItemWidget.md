---
title: "SingleplayerPersonalKillFeedItemWidget"
description: "SingleplayerPersonalKillFeedItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal 的 public 类，继承 Widget；公开成员 19 个（方法 2、属性 16、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SingleplayerPersonalKillFeedItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 SingleplayerPersonalKillFeedItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 19 个：2 方法、16 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SingleplayerPersonalKillFeedItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal`，继承链 SingleplayerPersonalKillFeedItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 16/19，方法 2/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget` | 属性 |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget` | 属性 |
| `AmountTextWidget` | `public TextWidget AmountTextWidget` | 属性 |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget` | 属性 |
| `FadeInTime` | `public float FadeInTime` | 属性 |
| `StayTime` | `public float StayTime` | 属性 |
| `FadeOutTime` | `public float FadeOutTime` | 属性 |
| `TimeSinceCreation` | `public float TimeSinceCreation` | 属性 |
| `SingleplayerPersonalKillFeedItemWidget` | `public SingleplayerPersonalKillFeedItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | 方法 |
| `IsDamage` | `public bool IsDamage` | 属性 |
| `Amount` | `public int Amount` | 属性 |
| `ItemType` | `public int ItemType` | 属性 |
| `Message` | `public string Message` | 属性 |
| `TypeID` | `public string TypeID` | 属性 |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush` | 属性 |
| `TroopTypeWidget` | `public Widget TroopTypeWidget` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 SingleplayerPersonalKillFeedWidget](../SingleplayerPersonalKillFeedWidget/)
