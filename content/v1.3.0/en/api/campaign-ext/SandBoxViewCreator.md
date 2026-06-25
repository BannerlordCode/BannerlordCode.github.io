---
title: "SandBoxViewCreator"
description: "Auto-generated class reference for SandBoxViewCreator."
---
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

**Purpose:** **Purpose:** Constructs a new save load screen entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

### CreateMissionCraftingView
`public static MissionView CreateMissionCraftingView()`

**Purpose:** **Purpose:** Constructs a new mission crafting view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionCraftingView();
```

### CreateMissionNameMarkerUIHandler
`public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)`

**Purpose:** **Purpose:** Constructs a new mission name marker u i handler entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionNameMarkerUIHandler(null);
```

### CreateMissionConversationView
`public static MissionView CreateMissionConversationView(Mission mission)`

**Purpose:** **Purpose:** Constructs a new mission conversation view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionConversationView(mission);
```

### CreateMissionBarterView
`public static MissionView CreateMissionBarterView()`

**Purpose:** **Purpose:** Constructs a new mission barter view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionBarterView();
```

### CreateMissionAgentAlarmStateView
`public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)`

**Purpose:** **Purpose:** Constructs a new mission agent alarm state view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionAgentAlarmStateView(null);
```

### CreateMissionMainAgentDetectionView
`public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)`

**Purpose:** **Purpose:** Constructs a new mission main agent detection view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionMainAgentDetectionView(null);
```

### CreateMissionTournamentView
`public static MissionView CreateMissionTournamentView()`

**Purpose:** **Purpose:** Constructs a new mission tournament view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionTournamentView();
```

### CreateMissionQuestBarView
`public static MissionView CreateMissionQuestBarView()`

**Purpose:** **Purpose:** Constructs a new mission quest bar view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionQuestBarView();
```

### CreateBoardGameView
`public static MissionView CreateBoardGameView()`

**Purpose:** **Purpose:** Constructs a new board game view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateBoardGameView();
```

### CreateMissionArenaPracticeFightView
`public static MissionView CreateMissionArenaPracticeFightView()`

**Purpose:** **Purpose:** Constructs a new mission arena practice fight view entity and returns it to the caller.

```csharp
// Static call; no instance required
SandBoxViewCreator.CreateMissionArenaPracticeFightView();
```

## Usage Example

```csharp
SandBoxViewCreator.CreateSaveLoadScreen(false);
```

## See Also

- [Area Index](../)