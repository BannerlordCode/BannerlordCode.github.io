---
title: "MultiplayerPersonalKillFeedItemWidget"
description: "MultiplayerPersonalKillFeedItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 16 个（方法 3、属性 12、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs。"
---
# MultiplayerPersonalKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPersonalKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs`

## 概述

MultiplayerPersonalKillFeedItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerPersonalKillFeedItemWidget → Widget。public/protected 成员共 16 个：3 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerPersonalKillFeedItemWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed），继承链 MultiplayerPersonalKillFeedItemWidget → Widget。成员构成以属性为主（属性 12/16，方法 3/16），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs 的方法体或该类型的深写页确认。

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
| `MultiplayerPersonalKillFeedItemWidget` | `public MultiplayerPersonalKillFeedItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | 方法 |
| `SetMaxAlphaValue` | `public void SetMaxAlphaValue(float newMaxAlpha)` | 方法 |
| `IsDamage` | `public bool IsDamage` | 属性 |
| `Message` | `public string Message` | 属性 |
| `ItemType` | `public int ItemType` | 属性 |
| `Amount` | `public int Amount` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiplayerDuelKillFeedItemWidget](../MultiplayerDuelKillFeedItemWidget)
- [同命名空间 MultiplayerGeneralKillFeedItemWidget](../MultiplayerGeneralKillFeedItemWidget)
- [同命名空间 MultiplayerGeneralKillFeedWidget](../MultiplayerGeneralKillFeedWidget)
- [同命名空间 MultiplayerPersonalKillFeedWidget](../MultiplayerPersonalKillFeedWidget)
