<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSpawnLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`

## Overview

`BattleSpawnLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattleSpawnLogic())`; subclass it to customize.

## Key Methods

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of BattleSpawnLogic (Logic)
Mission.Current.AddMissionBehavior(new BattleSpawnLogic());
```

## See Also

- [Complete Class Catalog](../catalog)