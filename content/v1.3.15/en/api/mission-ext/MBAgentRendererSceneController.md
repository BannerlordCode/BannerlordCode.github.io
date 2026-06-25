---
title: "MBAgentRendererSceneController"
description: "Auto-generated class reference for MBAgentRendererSceneController."
---
# MBAgentRendererSceneController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBAgentRendererSceneController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBAgentRendererSceneController.cs`

## Overview

`MBAgentRendererSceneController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MBAgentRendererSceneController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetEnforcedVisibilityForAllAgents
`public void SetEnforcedVisibilityForAllAgents(Scene scene)`

**Purpose:** **Purpose:** Assigns a new value to enforced visibility for all agents and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentRendererSceneController from the subsystem API first
MBAgentRendererSceneController mBAgentRendererSceneController = ...;
mBAgentRendererSceneController.SetEnforcedVisibilityForAllAgents(scene);
```

### CreateNewAgentRendererSceneController
`public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)`

**Purpose:** **Purpose:** Constructs a new new agent renderer scene controller entity and returns it to the caller.

```csharp
// Static call; no instance required
MBAgentRendererSceneController.CreateNewAgentRendererSceneController(scene);
```

### SetDoTimerBasedForcedSkeletonUpdates
`public void SetDoTimerBasedForcedSkeletonUpdates(bool value)`

**Purpose:** **Purpose:** Assigns a new value to do timer based forced skeleton updates and updates the object's internal state.

```csharp
// Obtain an instance of MBAgentRendererSceneController from the subsystem API first
MBAgentRendererSceneController mBAgentRendererSceneController = ...;
mBAgentRendererSceneController.SetDoTimerBasedForcedSkeletonUpdates(false);
```

### DestructAgentRendererSceneController
`public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)`

**Purpose:** **Purpose:** Executes the DestructAgentRendererSceneController logic.

```csharp
// Static call; no instance required
MBAgentRendererSceneController.DestructAgentRendererSceneController(scene, rendererSceneController, false);
```

### ValidateAgentVisualsReseted
`public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)`

**Purpose:** **Purpose:** Checks whether agent visuals reseted satisfies the required constraints, usually returning a boolean.

```csharp
// Static call; no instance required
MBAgentRendererSceneController.ValidateAgentVisualsReseted(scene, rendererSceneController);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## See Also

- [Area Index](../)