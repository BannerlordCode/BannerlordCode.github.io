<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHintLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## Overview

`MissionHintLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new MissionHintLogic())`; subclass it to customize.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## Key Methods

### SetActiveHint
```csharp
public void SetActiveHint(MissionHint hint)
```

### Clear
```csharp
public void Clear()
```

### MissionHintChangedDelegate
```csharp
public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)
```

## Usage Example

```csharp
// Typical usage of MissionHintLogic (Logic)
Mission.Current.AddMissionBehavior(new MissionHintLogic());
```

## See Also

- [Complete Class Catalog](../catalog)