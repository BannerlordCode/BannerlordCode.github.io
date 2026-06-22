<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReinforcementFormationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReinforcementFormationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ReinforcementFormationData` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)