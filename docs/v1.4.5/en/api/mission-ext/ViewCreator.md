<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewCreator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ViewCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreator`
**Area:** mission-ext

## Overview

`ViewCreator` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateCreditsScreen
`public static ScreenBase CreateCreditsScreen()`

**Purpose:** Creates a new `credits screen` instance or object.

### CreateOptionsScreen
`public static ScreenBase CreateOptionsScreen(bool fromMainMenu)`

**Purpose:** Creates a new `options screen` instance or object.

### CreateMBFaceGeneratorScreen
`public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)`

**Purpose:** Creates a new `m b face generator screen` instance or object.

### CreateMissionAgentStatusUIHandler
`public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)`

**Purpose:** Creates a new `mission agent status u i handler` instance or object.

### CreateMissionMainAgentEquipDropView
`public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)`

**Purpose:** Creates a new `mission main agent equip drop view` instance or object.

### CreateMissionSiegeEngineMarkerView
`public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)`

**Purpose:** Creates a new `mission siege engine marker view` instance or object.

### CreateMissionMainAgentEquipmentController
`public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)`

**Purpose:** Creates a new `mission main agent equipment controller` instance or object.

### CreateMissionMainAgentCheerBarkControllerView
`public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)`

**Purpose:** Creates a new `mission main agent cheer bark controller view` instance or object.

### CreateMissionAgentLockVisualizerView
`public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)`

**Purpose:** Creates a new `mission agent lock visualizer view` instance or object.

### CreateOptionsUIHandler
`public static MissionView CreateOptionsUIHandler()`

**Purpose:** Creates a new `options u i handler` instance or object.

### CreateSingleplayerMissionKillNotificationUIHandler
`public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()`

**Purpose:** Creates a new `singleplayer mission kill notification u i handler` instance or object.

### CreateMissionAgentLabelUIHandler
`public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)`

**Purpose:** Creates a new `mission agent label u i handler` instance or object.

### CreateMissionOrderUIHandler
`public static MissionView CreateMissionOrderUIHandler(Mission mission = null)`

**Purpose:** Creates a new `mission order u i handler` instance or object.

### CreateMissionOrderOfBattleUIHandler
`public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)`

**Purpose:** Creates a new `mission order of battle u i handler` instance or object.

### CreateMissionSpectatorControlView
`public static MissionView CreateMissionSpectatorControlView(Mission mission = null)`

**Purpose:** Creates a new `mission spectator control view` instance or object.

### CreateMissionBattleScoreUIHandler
`public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`

**Purpose:** Creates a new `mission battle score u i handler` instance or object.

### CreateMissionBoundaryCrossingView
`public static MissionView CreateMissionBoundaryCrossingView()`

**Purpose:** Creates a new `mission boundary crossing view` instance or object.

### CreateMissionLeaveView
`public static MissionView CreateMissionLeaveView()`

**Purpose:** Creates a new `mission leave view` instance or object.

### CreatePhotoModeView
`public static MissionView CreatePhotoModeView()`

**Purpose:** Creates a new `photo mode view` instance or object.

### CreateMissionSingleplayerEscapeMenu
`public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)`

**Purpose:** Creates a new `mission singleplayer escape menu` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ViewCreator.CreateCreditsScreen();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
