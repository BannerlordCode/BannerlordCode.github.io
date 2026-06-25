---
title: "MissionGauntletBarterView"
description: "Auto-generated class reference for MissionGauntletBarterView."
---
# MissionGauntletBarterView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletBarterView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBarterView.cs`

## Overview

`MissionGauntletBarterView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletBarterView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
missionGauntletBarterView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
missionGauntletBarterView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
missionGauntletBarterView.OnMissionScreenFinalize();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
missionGauntletBarterView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
missionGauntletBarterView.OnPhotoModeDeactivated();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletBarterView from the subsystem API first
MissionGauntletBarterView missionGauntletBarterView = ...;
var result = missionGauntletBarterView.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletBarterView view = ...;
```

## See Also

- [Area Index](../)