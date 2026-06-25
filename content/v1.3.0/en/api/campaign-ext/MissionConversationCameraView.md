---
title: "MissionConversationCameraView"
description: "Auto-generated class reference for MissionConversationCameraView."
---
# MissionConversationCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionConversationCameraView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionConversationCameraView.cs`

## Overview

`MissionConversationCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionConversationCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCameraOverridden` | `public bool IsCameraOverridden { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionConversationCameraView from the subsystem API first
MissionConversationCameraView missionConversationCameraView = ...;
missionConversationCameraView.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionConversationCameraView from the subsystem API first
MissionConversationCameraView missionConversationCameraView = ...;
missionConversationCameraView.AfterStart();
```

### UpdateOverridenCamera
`public override bool UpdateOverridenCamera(float dt)`

**Purpose:** Recalculates and stores the latest representation of `overriden camera`.

```csharp
// Obtain an instance of MissionConversationCameraView from the subsystem API first
MissionConversationCameraView missionConversationCameraView = ...;
var result = missionConversationCameraView.UpdateOverridenCamera(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionConversationCameraView view = ...;
```

## See Also

- [Area Index](../)