<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAgentRendererSceneController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `enforced visibility for all agents`.

### CreateNewAgentRendererSceneController
`public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)`

**Purpose:** Creates a new `new agent renderer scene controller` instance or object.

### SetDoTimerBasedForcedSkeletonUpdates
`public void SetDoTimerBasedForcedSkeletonUpdates(bool value)`

**Purpose:** Sets the value or state of `do timer based forced skeleton updates`.

### DestructAgentRendererSceneController
`public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)`

**Purpose:** Handles logic related to `destruct agent renderer scene controller`.

### ValidateAgentVisualsReseted
`public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)`

**Purpose:** Handles logic related to `validate agent visuals reseted`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## See Also

- [Complete Class Catalog](../catalog)