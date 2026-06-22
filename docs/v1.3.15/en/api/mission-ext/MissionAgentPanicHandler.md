<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentPanicHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## Overview

`MissionAgentPanicHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnAgentPanicked
```csharp
public override void OnAgentPanicked(Agent agent)
```

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## Usage Example

```csharp
// Typical usage of MissionAgentPanicHandler (Handler)
Mission.Current.AddMissionBehavior(new MissionAgentPanicHandler());
```

## See Also

- [Complete Class Catalog](../catalog)