<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecordMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecordMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RecordMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/RecordMissionLogic.cs`

## Overview

`RecordMissionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new RecordMissionLogic())`; subclass it to customize.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnEndMissionInternal
```csharp
public override void OnEndMissionInternal()
```

## Usage Example

```csharp
// Typical usage of RecordMissionLogic (Logic)
Mission.Current.AddMissionBehavior(new RecordMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)