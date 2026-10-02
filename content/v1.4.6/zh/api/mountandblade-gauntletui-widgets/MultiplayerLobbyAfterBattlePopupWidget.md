---
title: "MultiplayerLobbyAfterBattlePopupWidget"
description: "MultiplayerLobbyAfterBattlePopupWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 10 个（方法 2、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs。"
---
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`

## 概述

MultiplayerLobbyAfterBattlePopupWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerLobbyAfterBattlePopupWidget → Widget。public/protected 成员共 10 个：2 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLobbyAfterBattlePopupWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby），继承链 MultiplayerLobbyAfterBattlePopupWidget → Widget。成员构成以属性为主（属性 7/10，方法 2/10），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyAfterBattlePopupWidget` | `public MultiplayerLobbyAfterBattlePopupWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `StartAnimation` | `public void StartAnimation()` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `AnimationDelay` | `public float AnimationDelay` | 属性 |
| `AnimationDuration` | `public float AnimationDuration` | 属性 |
| `RewardRevealDuration` | `public float RewardRevealDuration` | 属性 |
| `ExperiencePanel` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget ExperiencePanel` | 属性 |
| `ClickToContinueTextWidget` | `public TextWidget ClickToContinueTextWidget` | 属性 |
| `RewardsListPanel` | `public ListPanel RewardsListPanel` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget)
- [同命名空间 MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [同命名空间 MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
- [同命名空间 MultiplayerLobbyBadgeProgressInformationWidget](../MultiplayerLobbyBadgeProgressInformationWidget)
