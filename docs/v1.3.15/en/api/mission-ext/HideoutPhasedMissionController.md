<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutPhasedMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs`

## Overview

`HideoutPhasedMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of HideoutPhasedMissionController (Controller)
Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)