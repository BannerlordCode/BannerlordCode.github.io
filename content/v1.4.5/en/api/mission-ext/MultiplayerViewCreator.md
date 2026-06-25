---
title: "MultiplayerViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerViewCreator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerViewCreator

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerViewCreator`
**Area:** mission-ext

## Overview

`MultiplayerViewCreator` lives in `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMissionMultiplayerPreloadView
`public static MissionView CreateMissionMultiplayerPreloadView(Mission mission = null)`

**Purpose:** Creates a new `mission multiplayer preload view` instance or object.

### CreateMissionScoreBoardUIHandler
`public static MissionView CreateMissionScoreBoardUIHandler(Mission mission, bool isSingleTeam)`

**Purpose:** Creates a new `mission score board u i handler` instance or object.

### CreateMultiplayerEndOfRoundUIHandler
`public static MissionView CreateMultiplayerEndOfRoundUIHandler()`

**Purpose:** Creates a new `multiplayer end of round u i handler` instance or object.

### CreateMultiplayerTeamSelectUIHandler
`public static MissionView CreateMultiplayerTeamSelectUIHandler()`

**Purpose:** Creates a new `multiplayer team select u i handler` instance or object.

### CreateMultiplayerCultureSelectUIHandler
`public static MissionView CreateMultiplayerCultureSelectUIHandler()`

**Purpose:** Creates a new `multiplayer culture select u i handler` instance or object.

### CreateLobbyEquipmentUIHandler
`public static MissionView CreateLobbyEquipmentUIHandler()`

**Purpose:** Creates a new `lobby equipment u i handler` instance or object.

### CreatePollProgressUIHandler
`public static MissionView CreatePollProgressUIHandler()`

**Purpose:** Creates a new `poll progress u i handler` instance or object.

### CreateMissionMultiplayerEscapeMenu
`public static MissionView CreateMissionMultiplayerEscapeMenu(string gameType)`

**Purpose:** Creates a new `mission multiplayer escape menu` instance or object.

### CreateMissionMultiplayerPracticeEscapeMenu
`public static MissionView CreateMissionMultiplayerPracticeEscapeMenu()`

**Purpose:** Creates a new `mission multiplayer practice escape menu` instance or object.

### CreateMissionKillNotificationUIHandler
`public static MissionView CreateMissionKillNotificationUIHandler()`

**Purpose:** Creates a new `mission kill notification u i handler` instance or object.

### CreateMissionServerStatusUIHandler
`public static MissionView CreateMissionServerStatusUIHandler()`

**Purpose:** Creates a new `mission server status u i handler` instance or object.

### CreateMultiplayerAdminPanelUIHandler
`public static MissionView CreateMultiplayerAdminPanelUIHandler()`

**Purpose:** Creates a new `multiplayer admin panel u i handler` instance or object.

### CreateMultiplayerFactionBanVoteUIHandler
`public static MissionView CreateMultiplayerFactionBanVoteUIHandler()`

**Purpose:** Creates a new `multiplayer faction ban vote u i handler` instance or object.

### CreateMultiplayerMissionHUDExtensionUIHandler
`public static MissionView CreateMultiplayerMissionHUDExtensionUIHandler()`

**Purpose:** Creates a new `multiplayer mission h u d extension u i handler` instance or object.

### CreateMultiplayerMissionVoiceChatUIHandler
`public static MissionView CreateMultiplayerMissionVoiceChatUIHandler()`

**Purpose:** Creates a new `multiplayer mission voice chat u i handler` instance or object.

### CreateMultiplayerMissionOrderUIHandler
`public static MissionView CreateMultiplayerMissionOrderUIHandler(Mission mission = null)`

**Purpose:** Creates a new `multiplayer mission order u i handler` instance or object.

### CreateMultiplayerMissionDeathCardUIHandler
`public static MissionView CreateMultiplayerMissionDeathCardUIHandler(Mission mission = null)`

**Purpose:** Creates a new `multiplayer mission death card u i handler` instance or object.

### CreateMissionMultiplayerDuelUI
`public static MissionView CreateMissionMultiplayerDuelUI()`

**Purpose:** Creates a new `mission multiplayer duel u i` instance or object.

### CreateMultiplayerEndOfBattleUIHandler
`public static MissionView CreateMultiplayerEndOfBattleUIHandler()`

**Purpose:** Creates a new `multiplayer end of battle u i handler` instance or object.

### CreateMissionFlagMarkerUIHandler
`public static MissionView CreateMissionFlagMarkerUIHandler()`

**Purpose:** Creates a new `mission flag marker u i handler` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerViewCreator.CreateMissionMultiplayerPreloadView(null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
