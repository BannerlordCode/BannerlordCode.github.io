<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionReinforcementsHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`MissionReinforcementsHelper` is a static utility class providing helper methods.

## Key Methods

### OnMissionStart
```csharp
public static void OnMissionStart()
```

### GetReinforcementAssignments
```csharp
public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### OnMissionEnd
```csharp
public static void OnMissionEnd()
```

### Compare
```csharp
public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)
```

### Initialize
```csharp
public void Initialize(Formation formation, uint initTime)
```

### AddProspectiveTroop
```csharp
public void AddProspectiveTroop(FormationClass troopClass)
```

### IsInitialized
```csharp
public bool IsInitialized(uint initTime)
```

### GetPriority
```csharp
public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)
```

## Usage Example

```csharp
// Typical usage of MissionReinforcementsHelper (Helper)
MissionReinforcementsHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)