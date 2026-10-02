---
title: "MultiplayerDuelKillFeedItemWidget"
description: "MultiplayerDuelKillFeedItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 MultiplayerGeneralKillFeedItemWidget；公开成员 9 个（方法 0、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs。"
---
# MultiplayerDuelKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## 概述

MultiplayerDuelKillFeedItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs。它是一个 public 类，实现/继承 MultiplayerGeneralKillFeedItemWidget，继承链为 MultiplayerDuelKillFeedItemWidget → MultiplayerGeneralKillFeedItemWidget → Widget。public/protected 成员共 9 个：8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerDuelKillFeedItemWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed），继承链 MultiplayerDuelKillFeedItemWidget → MultiplayerGeneralKillFeedItemWidget → Widget。成员构成以属性为主（属性 8/9，方法 0/9），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerDuelKillFeedItemWidget` | `public MultiplayerDuelKillFeedItemWidget(UIContext context) : base(context)` | 构造函数 |
| `IsEndOfDuel` | `public bool IsEndOfDuel` | 属性 |
| `Background` | `public BrushWidget Background` | 属性 |
| `VictimCompassBackground` | `public BrushWidget VictimCompassBackground` | 属性 |
| `MurdererCompassBackground` | `public BrushWidget MurdererCompassBackground` | 属性 |
| `VictimNameText` | `public ScrollingRichTextWidget VictimNameText` | 属性 |
| `MurdererNameText` | `public ScrollingRichTextWidget MurdererNameText` | 属性 |
| `VictimScoreText` | `public TextWidget VictimScoreText` | 属性 |
| `MurdererScoreText` | `public TextWidget MurdererScoreText` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [同命名空间 MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [同命名空间 MultiplayerGeneralKillFeedWidget](../MultiplayerGeneralKillFeedWidget)
- [同命名空间 MultiplayerPersonalKillFeedItemWidget](../MultiplayerPersonalKillFeedItemWidget)
- [同命名空间 MultiplayerPersonalKillFeedWidget](../MultiplayerPersonalKillFeedWidget)
