---
title: "MultiplayerLobbyScreenWidget"
description: "MultiplayerLobbyScreenWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 15 个（方法 2、属性 12、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs。"
---
# MultiplayerLobbyScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs`

## 概述

MultiplayerLobbyScreenWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerLobbyScreenWidget → Widget。public/protected 成员共 15 个：2 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLobbyScreenWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby），继承链 MultiplayerLobbyScreenWidget → Widget。成员构成以属性为主（属性 12/15，方法 2/15），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyScreenWidget` | `public MultiplayerLobbyScreenWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsLoggedIn` | `public bool IsLoggedIn` | 属性 |
| `IsSearchGameRequested` | `public bool IsSearchGameRequested` | 属性 |
| `IsSearchingGame` | `public bool IsSearchingGame` | 属性 |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled` | 属性 |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled` | 属性 |
| `IsPartyLeader` | `public bool IsPartyLeader` | 属性 |
| `IsInParty` | `public bool IsInParty` | 属性 |
| `MenuWidget` | `public MultiplayerLobbyMenuWidget MenuWidget` | 属性 |
| `HomeScreenWidget` | `public MultiplayerLobbyHomeScreenWidget HomeScreenWidget` | 属性 |
| `MatchmakingScreenWidget` | `public MultiplayerLobbyMatchmakingScreenWidget MatchmakingScreenWidget` | 属性 |
| `ProfileScreenWidget` | `public MultiplayerLobbyProfileScreenWidget ProfileScreenWidget` | 属性 |
| `FriendsPanelWidget` | `public MultiplayerLobbyFriendsPanelWidget FriendsPanelWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget)
- [同命名空间 MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [同命名空间 MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [同命名空间 MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
