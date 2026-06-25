---
title: "MissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionView : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionView.cs`

## Overview

`MissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionScreen` | `public MissionScreen MissionScreen { get; set; }` |
| `Input` | `public IInputContext Input { get; }` |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; set; }` |
| `IsFinalized` | `public bool IsFinalized { get; set; }` |

## Key Methods

### OnMissionScreenTick
`public virtual void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnEscape
`public virtual bool OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Handles logic related to `is opening escape menu on focus change allowed`.

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Called when the `focus change on game window` event is raised.

### OnSceneRenderingStarted
`public virtual void OnSceneRenderingStarted()`

**Purpose:** Called when the `scene rendering started` event is raised.

### OnMissionScreenInitialize
`public virtual void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public virtual void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenActivate
`public virtual void OnMissionScreenActivate()`

**Purpose:** Called when the `mission screen activate` event is raised.

### OnMissionScreenDeactivate
`public virtual void OnMissionScreenDeactivate()`

**Purpose:** Called when the `mission screen deactivate` event is raised.

### UpdateOverridenCamera
`public virtual bool UpdateOverridenCamera(float dt)`

**Purpose:** Updates the state or data of `overriden camera`.

### IsReady
`public virtual bool IsReady()`

**Purpose:** Handles logic related to `is ready`.

### OnPhotoModeActivated
`public virtual void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public virtual void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

### OnConversationBegin
`public virtual void OnConversationBegin()`

**Purpose:** Called when the `conversation begin` event is raised.

### OnConversationEnd
`public virtual void OnConversationEnd()`

**Purpose:** Called when the `conversation end` event is raised.

### OnDeploymentPlanMade
`public virtual void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Called when the `deployment plan made` event is raised.

### SuspendView
`public void SuspendView()`

**Purpose:** Handles logic related to `suspend view`.

### ResumeView
`public void ResumeView()`

**Purpose:** Handles logic related to `resume view`.

### OnEndMissionInternal
`public sealed override void OnEndMissionInternal()`

**Purpose:** Called when the `end mission internal` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var implementation = new CustomMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)