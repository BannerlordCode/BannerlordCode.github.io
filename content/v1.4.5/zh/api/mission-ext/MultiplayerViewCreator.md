---
title: "MultiplayerViewCreator"
description: "MultiplayerViewCreator 的自动生成类参考。"
---
# MultiplayerViewCreator

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerViewCreator`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerViewCreator.cs`

## 概述

`MultiplayerViewCreator` 位于 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMissionMultiplayerPreloadView
`public static MissionView CreateMissionMultiplayerPreloadView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 「mission multiplayer preload view」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

### CreateMissionScoreBoardUIHandler
`public static MissionView CreateMissionScoreBoardUIHandler(Mission mission, bool isSingleTeam)`

**用途 / Purpose:** 构建一个新的 「mission score board u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionScoreBoardUIHandler(mission, false);
```

### CreateMultiplayerEndOfRoundUIHandler
`public static MissionView CreateMultiplayerEndOfRoundUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer end of round u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerEndOfRoundUIHandler();
```

### CreateMultiplayerTeamSelectUIHandler
`public static MissionView CreateMultiplayerTeamSelectUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer team select u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerTeamSelectUIHandler();
```

### CreateMultiplayerCultureSelectUIHandler
`public static MissionView CreateMultiplayerCultureSelectUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer culture select u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerCultureSelectUIHandler();
```

### CreateLobbyEquipmentUIHandler
`public static MissionView CreateLobbyEquipmentUIHandler()`

**用途 / Purpose:** 构建一个新的 「lobby equipment u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateLobbyEquipmentUIHandler();
```

### CreatePollProgressUIHandler
`public static MissionView CreatePollProgressUIHandler()`

**用途 / Purpose:** 构建一个新的 「poll progress u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreatePollProgressUIHandler();
```

### CreateMissionMultiplayerEscapeMenu
`public static MissionView CreateMissionMultiplayerEscapeMenu(string gameType)`

**用途 / Purpose:** 构建一个新的 「mission multiplayer escape menu」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionMultiplayerEscapeMenu("example");
```

### CreateMissionMultiplayerPracticeEscapeMenu
`public static MissionView CreateMissionMultiplayerPracticeEscapeMenu()`

**用途 / Purpose:** 构建一个新的 「mission multiplayer practice escape menu」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionMultiplayerPracticeEscapeMenu();
```

### CreateMissionKillNotificationUIHandler
`public static MissionView CreateMissionKillNotificationUIHandler()`

**用途 / Purpose:** 构建一个新的 「mission kill notification u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionKillNotificationUIHandler();
```

### CreateMissionServerStatusUIHandler
`public static MissionView CreateMissionServerStatusUIHandler()`

**用途 / Purpose:** 构建一个新的 「mission server status u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionServerStatusUIHandler();
```

### CreateMultiplayerAdminPanelUIHandler
`public static MissionView CreateMultiplayerAdminPanelUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer admin panel u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerAdminPanelUIHandler();
```

### CreateMultiplayerFactionBanVoteUIHandler
`public static MissionView CreateMultiplayerFactionBanVoteUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer faction ban vote u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerFactionBanVoteUIHandler();
```

### CreateMultiplayerMissionHUDExtensionUIHandler
`public static MissionView CreateMultiplayerMissionHUDExtensionUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer mission h u d extension u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerMissionHUDExtensionUIHandler();
```

### CreateMultiplayerMissionVoiceChatUIHandler
`public static MissionView CreateMultiplayerMissionVoiceChatUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer mission voice chat u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerMissionVoiceChatUIHandler();
```

### CreateMultiplayerMissionOrderUIHandler
`public static MissionView CreateMultiplayerMissionOrderUIHandler(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 「multiplayer mission order u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerMissionOrderUIHandler(null);
```

### CreateMultiplayerMissionDeathCardUIHandler
`public static MissionView CreateMultiplayerMissionDeathCardUIHandler(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 「multiplayer mission death card u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerMissionDeathCardUIHandler(null);
```

### CreateMissionMultiplayerDuelUI
`public static MissionView CreateMissionMultiplayerDuelUI()`

**用途 / Purpose:** 构建一个新的 「mission multiplayer duel u i」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionMultiplayerDuelUI();
```

### CreateMultiplayerEndOfBattleUIHandler
`public static MissionView CreateMultiplayerEndOfBattleUIHandler()`

**用途 / Purpose:** 构建一个新的 「multiplayer end of battle u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMultiplayerEndOfBattleUIHandler();
```

### CreateMissionFlagMarkerUIHandler
`public static MissionView CreateMissionFlagMarkerUIHandler()`

**用途 / Purpose:** 构建一个新的 「mission flag marker u i handler」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerViewCreator.CreateMissionFlagMarkerUIHandler();
```

## 使用示例

```csharp
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

## 参见

- [本区域目录](../)