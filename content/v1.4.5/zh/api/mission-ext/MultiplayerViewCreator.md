---
title: "MultiplayerViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerViewCreator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerViewCreator

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MultiplayerViewCreator`
**领域:** mission-ext

## 概述

`MultiplayerViewCreator` 位于 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMissionMultiplayerPreloadView
`public static MissionView CreateMissionMultiplayerPreloadView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission multiplayer preload view` 实例或对象。

### CreateMissionScoreBoardUIHandler
`public static MissionView CreateMissionScoreBoardUIHandler(Mission mission, bool isSingleTeam)`

**用途 / Purpose:** 创建一个 `mission score board u i handler` 实例或对象。

### CreateMultiplayerEndOfRoundUIHandler
`public static MissionView CreateMultiplayerEndOfRoundUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer end of round u i handler` 实例或对象。

### CreateMultiplayerTeamSelectUIHandler
`public static MissionView CreateMultiplayerTeamSelectUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer team select u i handler` 实例或对象。

### CreateMultiplayerCultureSelectUIHandler
`public static MissionView CreateMultiplayerCultureSelectUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer culture select u i handler` 实例或对象。

### CreateLobbyEquipmentUIHandler
`public static MissionView CreateLobbyEquipmentUIHandler()`

**用途 / Purpose:** 创建一个 `lobby equipment u i handler` 实例或对象。

### CreatePollProgressUIHandler
`public static MissionView CreatePollProgressUIHandler()`

**用途 / Purpose:** 创建一个 `poll progress u i handler` 实例或对象。

### CreateMissionMultiplayerEscapeMenu
`public static MissionView CreateMissionMultiplayerEscapeMenu(string gameType)`

**用途 / Purpose:** 创建一个 `mission multiplayer escape menu` 实例或对象。

### CreateMissionMultiplayerPracticeEscapeMenu
`public static MissionView CreateMissionMultiplayerPracticeEscapeMenu()`

**用途 / Purpose:** 创建一个 `mission multiplayer practice escape menu` 实例或对象。

### CreateMissionKillNotificationUIHandler
`public static MissionView CreateMissionKillNotificationUIHandler()`

**用途 / Purpose:** 创建一个 `mission kill notification u i handler` 实例或对象。

### CreateMissionServerStatusUIHandler
`public static MissionView CreateMissionServerStatusUIHandler()`

**用途 / Purpose:** 创建一个 `mission server status u i handler` 实例或对象。

### CreateMultiplayerAdminPanelUIHandler
`public static MissionView CreateMultiplayerAdminPanelUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer admin panel u i handler` 实例或对象。

### CreateMultiplayerFactionBanVoteUIHandler
`public static MissionView CreateMultiplayerFactionBanVoteUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer faction ban vote u i handler` 实例或对象。

### CreateMultiplayerMissionHUDExtensionUIHandler
`public static MissionView CreateMultiplayerMissionHUDExtensionUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer mission h u d extension u i handler` 实例或对象。

### CreateMultiplayerMissionVoiceChatUIHandler
`public static MissionView CreateMultiplayerMissionVoiceChatUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer mission voice chat u i handler` 实例或对象。

### CreateMultiplayerMissionOrderUIHandler
`public static MissionView CreateMultiplayerMissionOrderUIHandler(Mission mission = null)`

**用途 / Purpose:** 创建一个 `multiplayer mission order u i handler` 实例或对象。

### CreateMultiplayerMissionDeathCardUIHandler
`public static MissionView CreateMultiplayerMissionDeathCardUIHandler(Mission mission = null)`

**用途 / Purpose:** 创建一个 `multiplayer mission death card u i handler` 实例或对象。

### CreateMissionMultiplayerDuelUI
`public static MissionView CreateMissionMultiplayerDuelUI()`

**用途 / Purpose:** 创建一个 `mission multiplayer duel u i` 实例或对象。

### CreateMultiplayerEndOfBattleUIHandler
`public static MissionView CreateMultiplayerEndOfBattleUIHandler()`

**用途 / Purpose:** 创建一个 `multiplayer end of battle u i handler` 实例或对象。

### CreateMissionFlagMarkerUIHandler
`public static MissionView CreateMissionFlagMarkerUIHandler()`

**用途 / Purpose:** 创建一个 `mission flag marker u i handler` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
