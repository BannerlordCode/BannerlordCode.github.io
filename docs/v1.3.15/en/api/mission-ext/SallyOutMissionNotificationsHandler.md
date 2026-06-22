<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutMissionNotificationsHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionNotificationsHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutMissionNotificationsHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionNotificationsHandler.cs`

## Overview

`SallyOutMissionNotificationsHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnBesiegedSideFallsbackToKeep
```csharp
public void OnBesiegedSideFallsbackToKeep()
```

### OnAfterStart
```csharp
public void OnAfterStart()
```

### OnMissionEnd
```csharp
public void OnMissionEnd()
```

### OnDeploymentFinished
```csharp
public void OnDeploymentFinished()
```

### OnMissionTick
```csharp
public void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of SallyOutMissionNotificationsHandler (Handler)
Mission.Current.AddMissionBehavior(new SallyOutMissionNotificationsHandler());
```

## See Also

- [Complete Class Catalog](../catalog)