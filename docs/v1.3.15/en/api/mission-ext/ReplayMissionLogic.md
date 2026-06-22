<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReplayMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReplayMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## Overview

`ReplayMissionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new ReplayMissionLogic())`; subclass it to customize.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## Usage Example

```csharp
// Typical usage of ReplayMissionLogic (Logic)
Mission.Current.AddMissionBehavior(new ReplayMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)