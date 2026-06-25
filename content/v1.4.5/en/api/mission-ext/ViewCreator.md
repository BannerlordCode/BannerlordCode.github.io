---
title: "ViewCreator"
description: "Auto-generated class reference for ViewCreator."
---
# ViewCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreator`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ViewCreator.cs`

## Overview

`ViewCreator` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateCreditsScreen
`public static ScreenBase CreateCreditsScreen()`

**Purpose:** Constructs a new `credits screen` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateCreditsScreen();
```

### CreateOptionsScreen
`public static ScreenBase CreateOptionsScreen(bool fromMainMenu)`

**Purpose:** Constructs a new `options screen` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateOptionsScreen(false);
```

### CreateMBFaceGeneratorScreen
`public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)`

**Purpose:** Constructs a new `m b face generator screen` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMBFaceGeneratorScreen(character, false, null);
```

### CreateMissionAgentStatusUIHandler
`public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)`

**Purpose:** Constructs a new `mission agent status u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionAgentStatusUIHandler(null);
```

### CreateMissionMainAgentEquipDropView
`public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)`

**Purpose:** Constructs a new `mission main agent equip drop view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionMainAgentEquipDropView(mission);
```

### CreateMissionSiegeEngineMarkerView
`public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)`

**Purpose:** Constructs a new `mission siege engine marker view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionSiegeEngineMarkerView(mission);
```

### CreateMissionMainAgentEquipmentController
`public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)`

**Purpose:** Constructs a new `mission main agent equipment controller` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionMainAgentEquipmentController(null);
```

### CreateMissionMainAgentCheerBarkControllerView
`public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)`

**Purpose:** Constructs a new `mission main agent cheer bark controller view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionMainAgentCheerBarkControllerView(null);
```

### CreateMissionAgentLockVisualizerView
`public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)`

**Purpose:** Constructs a new `mission agent lock visualizer view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionAgentLockVisualizerView(null);
```

### CreateOptionsUIHandler
`public static MissionView CreateOptionsUIHandler()`

**Purpose:** Constructs a new `options u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateOptionsUIHandler();
```

### CreateSingleplayerMissionKillNotificationUIHandler
`public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()`

**Purpose:** Constructs a new `singleplayer mission kill notification u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateSingleplayerMissionKillNotificationUIHandler();
```

### CreateMissionAgentLabelUIHandler
`public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)`

**Purpose:** Constructs a new `mission agent label u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionAgentLabelUIHandler(mission);
```

### CreateMissionOrderUIHandler
`public static MissionView CreateMissionOrderUIHandler(Mission mission = null)`

**Purpose:** Constructs a new `mission order u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionOrderUIHandler(null);
```

### CreateMissionOrderOfBattleUIHandler
`public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)`

**Purpose:** Constructs a new `mission order of battle u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionOrderOfBattleUIHandler(mission, dataSource);
```

### CreateMissionSpectatorControlView
`public static MissionView CreateMissionSpectatorControlView(Mission mission = null)`

**Purpose:** Constructs a new `mission spectator control view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionSpectatorControlView(null);
```

### CreateMissionBattleScoreUIHandler
`public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`

**Purpose:** Constructs a new `mission battle score u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionBattleScoreUIHandler(mission, dataSource);
```

### CreateMissionBoundaryCrossingView
`public static MissionView CreateMissionBoundaryCrossingView()`

**Purpose:** Constructs a new `mission boundary crossing view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionBoundaryCrossingView();
```

### CreateMissionLeaveView
`public static MissionView CreateMissionLeaveView()`

**Purpose:** Constructs a new `mission leave view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionLeaveView();
```

### CreatePhotoModeView
`public static MissionView CreatePhotoModeView()`

**Purpose:** Constructs a new `photo mode view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreatePhotoModeView();
```

### CreateMissionSingleplayerEscapeMenu
`public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)`

**Purpose:** Constructs a new `mission singleplayer escape menu` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionSingleplayerEscapeMenu(false);
```

### CreateOrderTroopPlacerView
`public static MissionView CreateOrderTroopPlacerView(OrderController orderController)`

**Purpose:** Constructs a new `order troop placer view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateOrderTroopPlacerView(orderController);
```

### CreateMissionFormationMarkerUIHandler
`public static MissionView CreateMissionFormationMarkerUIHandler(Mission mission = null)`

**Purpose:** Constructs a new `mission formation marker u i handler` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionFormationMarkerUIHandler(null);
```

### CreateMissionHintView
`public static MissionView CreateMissionHintView(Mission mission = null)`

**Purpose:** Constructs a new `mission hint view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionHintView(null);
```

### CreateMissionObjectiveView
`public static MissionView CreateMissionObjectiveView(Mission mission = null)`

**Purpose:** Constructs a new `mission objective view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ViewCreator.CreateMissionObjectiveView(null);
```

## Usage Example

```csharp
ViewCreator.CreateCreditsScreen();
```

## See Also

- [Area Index](../)