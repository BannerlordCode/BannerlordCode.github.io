---
title: "MissionView"
description: "Auto-generated class reference for MissionView."
---
# MissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionView : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionView.cs`

## Overview

`MissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionScreen` | `public MissionScreen MissionScreen { get; set; }` |
| `IsFinalized` | `public bool IsFinalized { get; set; }` |

## Key Methods

### OnMissionScreenTick
`public virtual void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnMissionScreenTick(0);
```

### OnEscape
`public virtual bool OnEscape()`

**Purpose:** **Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
var result = missionView.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
var result = missionView.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### IsPhotoModeAllowed
`public virtual bool IsPhotoModeAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the photo mode allowed state or condition.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
var result = missionView.IsPhotoModeAllowed();
```

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** **Purpose:** Invoked when the focus change on game window event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnFocusChangeOnGameWindow(false);
```

### OnSceneRenderingStarted
`public virtual void OnSceneRenderingStarted()`

**Purpose:** **Purpose:** Invoked when the scene rendering started event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnSceneRenderingStarted();
```

### OnMissionScreenInitialize
`public virtual void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public virtual void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnMissionScreenFinalize();
```

### OnMissionScreenActivate
`public virtual void OnMissionScreenActivate()`

**Purpose:** **Purpose:** Invoked when the mission screen activate event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnMissionScreenActivate();
```

### OnMissionScreenDeactivate
`public virtual void OnMissionScreenDeactivate()`

**Purpose:** **Purpose:** Invoked when the mission screen deactivate event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnMissionScreenDeactivate();
```

### UpdateOverridenCamera
`public virtual bool UpdateOverridenCamera(float dt)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of overriden camera.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
var result = missionView.UpdateOverridenCamera(0);
```

### IsReady
`public virtual bool IsReady()`

**Purpose:** **Purpose:** Determines whether the this instance is in the ready state or condition.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
var result = missionView.IsReady();
```

### OnPhotoModeActivated
`public virtual void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public virtual void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnPhotoModeDeactivated();
```

### OnConversationBegin
`public virtual void OnConversationBegin()`

**Purpose:** **Purpose:** Invoked when the conversation begin event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnConversationBegin();
```

### OnConversationEnd
`public virtual void OnConversationEnd()`

**Purpose:** **Purpose:** Invoked when the conversation end event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnConversationEnd();
```

### OnDeploymentPlanMade
`public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** **Purpose:** Invoked when the deployment plan made event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnDeploymentPlanMade(team, false);
```

### SuspendView
`public void SuspendView()`

**Purpose:** **Purpose:** Executes the SuspendView logic.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.SuspendView();
```

### ResumeView
`public void ResumeView()`

**Purpose:** **Purpose:** Executes the ResumeView logic.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.ResumeView();
```

### OnEndMissionInternal
`public sealed override void OnEndMissionInternal()`

**Purpose:** **Purpose:** Invoked when the end mission internal event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnEndMissionInternal();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionView from the subsystem API first
MissionView missionView = ...;
missionView.OnRemoveBehavior();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionView instance = ...;
```

## See Also

- [Area Index](../)