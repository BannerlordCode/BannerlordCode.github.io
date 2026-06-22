<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AmmoSupplyLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## Overview

`AmmoSupplyLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new AmmoSupplyLogic())`; subclass it to customize.

## Key Methods

### IsAgentEligibleForAmmoSupply
```csharp
public bool IsAgentEligibleForAmmoSupply(Agent agent)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of AmmoSupplyLogic (Logic)
Mission.Current.AddMissionBehavior(new AmmoSupplyLogic());
```

## See Also

- [Complete Class Catalog](../catalog)