---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
description: "MultiplayerLobbyAfterBattleExperiencePanelWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs。"
---
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## 概述

MultiplayerLobbyAfterBattleExperiencePanelWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerLobbyAfterBattleExperiencePanelWidget → Widget。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLobbyAfterBattleExperiencePanelWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby），继承链 MultiplayerLobbyAfterBattleExperiencePanelWidget → Widget。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyAfterBattleExperiencePanelWidget` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget(UIContext context) : base(context)` | 构造函数 |
| `StartAnimation` | `public void StartAnimation(float animationDelay)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `GainedExperience` | `public int GainedExperience` | 属性 |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar` | 属性 |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget` | 属性 |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget` | 属性 |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [同命名空间 MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [同命名空间 MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
- [同命名空间 MultiplayerLobbyBadgeProgressInformationWidget](../MultiplayerLobbyBadgeProgressInformationWidget)
