---
title: "SandBoxViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxViewCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewCreator

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public static class SandBoxViewCreator`
**Area:** campaign-ext

## Overview

`SandBoxViewCreator` lives in `SandBox.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### CreateMissionStealthFailCounter
`public static MissionView CreateMissionStealthFailCounter(Mission mission = null)`

**Purpose:** Creates a new `mission stealth fail counter` instance or object.

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
// Prepare the required context, then call the static entry point directly
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
