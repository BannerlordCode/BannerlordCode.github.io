<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBAgentRendererSceneController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBAgentRendererSceneController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBAgentRendererSceneController`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBAgentRendererSceneController.cs`

## Overview

`MBAgentRendererSceneController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### SetEnforcedVisibilityForAllAgents
```csharp
public void SetEnforcedVisibilityForAllAgents(Scene scene)
```

### CreateNewAgentRendererSceneController
```csharp
public static MBAgentRendererSceneController CreateNewAgentRendererSceneController(Scene scene)
```

### SetDoTimerBasedForcedSkeletonUpdates
```csharp
public void SetDoTimerBasedForcedSkeletonUpdates(bool value)
```

### DestructAgentRendererSceneController
```csharp
public static void DestructAgentRendererSceneController(Scene scene, MBAgentRendererSceneController rendererSceneController, bool deleteThisFrame)
```

### ValidateAgentVisualsReseted
```csharp
public static void ValidateAgentVisualsReseted(Scene scene, MBAgentRendererSceneController rendererSceneController)
```

## Usage Example

```csharp
// Typical usage of MBAgentRendererSceneController (Controller)
Mission.Current.GetMissionBehavior<MBAgentRendererSceneController>();
```

## See Also

- [Complete Class Catalog](../catalog)