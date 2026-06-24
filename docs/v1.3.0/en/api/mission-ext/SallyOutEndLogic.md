<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutEndLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## Overview

`SallyOutEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `SallyOutEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSallyOutOver` | `public bool IsSallyOutOver { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SallyOutEndLogic());
```

## See Also

- [Complete Class Catalog](../catalog)