---
title: "MultiplayerViewCreator"
description: "Auto-generated class reference for MultiplayerViewCreator."
---
# MultiplayerViewCreator

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerViewCreator`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerViewCreator.cs`

## Overview

`MultiplayerViewCreator` lives in `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMissionMultiplayerPreloadView
`public static MissionView CreateMissionMultiplayerPreloadView(Mission mission = null)`

**Purpose:** Constructs a new `mission multiplayer preload view` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

### CreateMissionScoreBoardUIHandler
`public static MissionView CreateMissionScoreBoardUIHandler(Mission mission, bool isSingleTeam)`

**Purpose:** Constructs a new `mission score board u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionScoreBoardUIHandler(mission, false);
```

### CreateMultiplayerEndOfRoundUIHandler
`public static MissionView CreateMultiplayerEndOfRoundUIHandler()`

**Purpose:** Constructs a new `multiplayer end of round u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerEndOfRoundUIHandler();
```

### CreateMultiplayerTeamSelectUIHandler
`public static MissionView CreateMultiplayerTeamSelectUIHandler()`

**Purpose:** Constructs a new `multiplayer team select u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerTeamSelectUIHandler();
```

### CreateMultiplayerCultureSelectUIHandler
`public static MissionView CreateMultiplayerCultureSelectUIHandler()`

**Purpose:** Constructs a new `multiplayer culture select u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerCultureSelectUIHandler();
```

### CreateLobbyEquipmentUIHandler
`public static MissionView CreateLobbyEquipmentUIHandler()`

**Purpose:** Constructs a new `lobby equipment u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateLobbyEquipmentUIHandler();
```

### CreatePollProgressUIHandler
`public static MissionView CreatePollProgressUIHandler()`

**Purpose:** Constructs a new `poll progress u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreatePollProgressUIHandler();
```

### CreateMissionMultiplayerEscapeMenu
`public static MissionView CreateMissionMultiplayerEscapeMenu(string gameType)`

**Purpose:** Constructs a new `mission multiplayer escape menu` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionMultiplayerEscapeMenu("example");
```

### CreateMissionMultiplayerPracticeEscapeMenu
`public static MissionView CreateMissionMultiplayerPracticeEscapeMenu()`

**Purpose:** Constructs a new `mission multiplayer practice escape menu` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionMultiplayerPracticeEscapeMenu();
```

### CreateMissionKillNotificationUIHandler
`public static MissionView CreateMissionKillNotificationUIHandler()`

**Purpose:** Constructs a new `mission kill notification u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionKillNotificationUIHandler();
```

### CreateMissionServerStatusUIHandler
`public static MissionView CreateMissionServerStatusUIHandler()`

**Purpose:** Constructs a new `mission server status u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionServerStatusUIHandler();
```

### CreateMultiplayerAdminPanelUIHandler
`public static MissionView CreateMultiplayerAdminPanelUIHandler()`

**Purpose:** Constructs a new `multiplayer admin panel u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerAdminPanelUIHandler();
```

### CreateMultiplayerFactionBanVoteUIHandler
`public static MissionView CreateMultiplayerFactionBanVoteUIHandler()`

**Purpose:** Constructs a new `multiplayer faction ban vote u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerFactionBanVoteUIHandler();
```

### CreateMultiplayerMissionHUDExtensionUIHandler
`public static MissionView CreateMultiplayerMissionHUDExtensionUIHandler()`

**Purpose:** Constructs a new `multiplayer mission h u d extension u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerMissionHUDExtensionUIHandler();
```

### CreateMultiplayerMissionVoiceChatUIHandler
`public static MissionView CreateMultiplayerMissionVoiceChatUIHandler()`

**Purpose:** Constructs a new `multiplayer mission voice chat u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerMissionVoiceChatUIHandler();
```

### CreateMultiplayerMissionOrderUIHandler
`public static MissionView CreateMultiplayerMissionOrderUIHandler(Mission mission = null)`

**Purpose:** Constructs a new `multiplayer mission order u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerMissionOrderUIHandler(null);
```

### CreateMultiplayerMissionDeathCardUIHandler
`public static MissionView CreateMultiplayerMissionDeathCardUIHandler(Mission mission = null)`

**Purpose:** Constructs a new `multiplayer mission death card u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerMissionDeathCardUIHandler(null);
```

### CreateMissionMultiplayerDuelUI
`public static MissionView CreateMissionMultiplayerDuelUI()`

**Purpose:** Constructs a new `mission multiplayer duel u i` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionMultiplayerDuelUI();
```

### CreateMultiplayerEndOfBattleUIHandler
`public static MissionView CreateMultiplayerEndOfBattleUIHandler()`

**Purpose:** Constructs a new `multiplayer end of battle u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMultiplayerEndOfBattleUIHandler();
```

### CreateMissionFlagMarkerUIHandler
`public static MissionView CreateMissionFlagMarkerUIHandler()`

**Purpose:** Constructs a new `mission flag marker u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerViewCreator.CreateMissionFlagMarkerUIHandler();
```

## Usage Example

```csharp
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

## See Also

- [Area Index](../)