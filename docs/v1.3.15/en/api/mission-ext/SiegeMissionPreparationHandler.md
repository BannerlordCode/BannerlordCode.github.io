<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeMissionPreparationHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeMissionPreparationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## Overview

`SiegeMissionPreparationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SiegeMissionPreparationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SiegeMissionPreparationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)