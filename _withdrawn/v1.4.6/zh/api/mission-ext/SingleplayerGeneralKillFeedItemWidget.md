---
title: "SingleplayerGeneralKillFeedItemWidget"
description: "SingleplayerGeneralKillFeedItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General 的 public 类，继承 Widget；公开成员 22 个（方法 2、属性 19、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SingleplayerGeneralKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SingleplayerGeneralKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SingleplayerGeneralKillFeedItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 SingleplayerGeneralKillFeedItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 22 个：2 方法、19 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SingleplayerGeneralKillFeedItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General`，继承链 SingleplayerGeneralKillFeedItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 19/22，方法 2/22），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush` | 属性 |
| `MurdererTypeWidget` | `public Widget MurdererTypeWidget` | 属性 |
| `VictimTypeWidget` | `public Widget VictimTypeWidget` | 属性 |
| `ActionIconWidget` | `public Widget ActionIconWidget` | 属性 |
| `VictimNameWidget` | `public TextWidget VictimNameWidget` | 属性 |
| `MurdererNameWidget` | `public TextWidget MurdererNameWidget` | 属性 |
| `FadeInTime` | `public float FadeInTime` | 属性 |
| `StayTime` | `public float StayTime` | 属性 |
| `FadeOutTime` | `public float FadeOutTime` | 属性 |
| `TimeSinceCreation` | `public float TimeSinceCreation` | 属性 |
| `SingleplayerGeneralKillFeedItemWidget` | `public SingleplayerGeneralKillFeedItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | 方法 |
| `MurdererName` | `public string MurdererName` | 属性 |
| `MurdererType` | `public string MurdererType` | 属性 |
| `VictimName` | `public string VictimName` | 属性 |
| `VictimType` | `public string VictimType` | 属性 |
| `IsUnconscious` | `public bool IsUnconscious` | 属性 |
| `IsHeadshot` | `public bool IsHeadshot` | 属性 |
| `IsSuicide` | `public bool IsSuicide` | 属性 |
| `IsDrowning` | `public bool IsDrowning` | 属性 |
| `IsPaused` | `public bool IsPaused` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 SingleplayerGeneralKillFeedWidget](../SingleplayerGeneralKillFeedWidget/)
