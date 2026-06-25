---
title: "MissionGauntletConversationView"
description: "Auto-generated class reference for MissionGauntletConversationView."
---
# MissionGauntletConversationView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletConversationView.cs`

## Overview

`MissionGauntletConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler { get; }` |

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletConversationView from the subsystem API first
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletConversationView from the subsystem API first
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenFinalize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionGauntletConversationView from the subsystem API first
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.EarlyStart();
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Invoked when the mission screen activate event is raised.

```csharp
// Obtain an instance of MissionGauntletConversationView from the subsystem API first
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenActivate();
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionGauntletConversationView from the subsystem API first
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionModeChange(oldMissionMode, false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletConversationView view = ...;
```

## See Also

- [Area Index](../)