<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxViewCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCreator

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public static class SandBoxViewCreator`
**Base:** none
**File:** `SandBox.View/SandBoxViewCreator.cs`

## Overview

`SandBoxViewCreator` lives in `SandBox.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSaveLoadScreen
`public static ScreenBase CreateSaveLoadScreen(bool isSaving)`

**Purpose:** Creates a new `save load screen` instance or object.

### CreateMissionCraftingView
`public static MissionView CreateMissionCraftingView()`

**Purpose:** Creates a new `mission crafting view` instance or object.

### CreateMissionNameMarkerUIHandler
`public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)`

**Purpose:** Creates a new `mission name marker u i handler` instance or object.

### CreateMissionConversationView
`public static MissionView CreateMissionConversationView(Mission mission)`

**Purpose:** Creates a new `mission conversation view` instance or object.

### CreateMissionBarterView
`public static MissionView CreateMissionBarterView()`

**Purpose:** Creates a new `mission barter view` instance or object.

### CreateMissionAgentAlarmStateView
`public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)`

**Purpose:** Creates a new `mission agent alarm state view` instance or object.

### CreateMissionMainAgentDetectionView
`public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)`

**Purpose:** Creates a new `mission main agent detection view` instance or object.

### CreateMissionTournamentView
`public static MissionView CreateMissionTournamentView()`

**Purpose:** Creates a new `mission tournament view` instance or object.

### CreateMissionQuestBarView
`public static MissionView CreateMissionQuestBarView()`

**Purpose:** Creates a new `mission quest bar view` instance or object.

### CreateBoardGameView
`public static MissionView CreateBoardGameView()`

**Purpose:** Creates a new `board game view` instance or object.

### CreateMissionArenaPracticeFightView
`public static MissionView CreateMissionArenaPracticeFightView()`

**Purpose:** Creates a new `mission arena practice fight view` instance or object.

## Usage Example

```csharp
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## See Also

- [Complete Class Catalog](../catalog)