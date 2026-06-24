<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReinforcementFormationPreferenceComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReinforcementFormationPreferenceComparer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>`
**Base:** `IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>`
**Area:** mission-ext

## Overview

`ReinforcementFormationPreferenceComparer` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// Prepare the required context, then call the static entry point directly
ReinforcementFormationPreferenceComparer.OnMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
