<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeMissionPreparationHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeMissionPreparationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## Overview

`SiegeMissionPreparationHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

## Usage Example

```csharp
// Typical usage of SiegeMissionPreparationHandler (Handler)
Mission.Current.AddMissionBehavior(new SiegeMissionPreparationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)