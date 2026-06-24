<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReplayMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReplayMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## Overview

`ReplayMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ReplayMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FileName` | `public string FileName { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ReplayMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)