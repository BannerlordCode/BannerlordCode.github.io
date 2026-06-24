<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeWeaponViewController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RangedSiegeWeaponViewController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponViewController : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponViewController.cs`

## Overview

`RangedSiegeWeaponViewController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `RangedSiegeWeaponViewController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<RangedSiegeWeaponViewController>();
```

## See Also

- [Complete Class Catalog](../catalog)