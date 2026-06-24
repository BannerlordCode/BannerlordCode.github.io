<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionReinforcementsHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`MissionReinforcementsHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionReinforcementsHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public static void OnMissionStart()`

**Purpose:** Called when the `mission start` event is raised.

### GetReinforcementAssignments
`public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Gets the current value of `reinforcement assignments`.

### OnMissionEnd
`public static void OnMissionEnd()`

**Purpose:** Called when the `mission end` event is raised.

### Compare
`public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)`

**Purpose:** Handles logic related to `compare`.

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**Purpose:** Adds `prospective troop` to the current collection or state.

### IsInitialized
`public bool IsInitialized(uint initTime)`

**Purpose:** Handles logic related to `is initialized`.

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**Purpose:** Gets the current value of `priority`.

## Usage Example

```csharp
MissionReinforcementsHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)