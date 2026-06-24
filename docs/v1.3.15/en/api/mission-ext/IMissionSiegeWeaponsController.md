<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMissionSiegeWeaponsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IMissionSiegeWeaponsController

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## Overview

`IMissionSiegeWeaponsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `IMissionSiegeWeaponsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMissionSiegeWeaponsController implementation = GetMissionSiegeWeaponsControllerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)