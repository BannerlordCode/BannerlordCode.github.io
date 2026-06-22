<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeLane`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLane

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SiegeLane` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState { get; }` |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `IsBreach` | `public bool IsBreach { get; }` |
| `HasGate` | `public bool HasGate { get; }` |
| `DefensePoints` | `public List<ICastleKeyPosition> DefensePoints { get; }` |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin { get; }` |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin { get; }` |


## Key Methods

### CalculateIsLaneUnusable

```csharp
public bool CalculateIsLaneUnusable()
```

### GetLastAssignedFormation

```csharp
public Formation GetLastAssignedFormation(int teamIndex)
```

### SetLaneState

```csharp
public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)
```

### SetLastAssignedFormation

```csharp
public void SetLastAssignedFormation(int teamIndex, Formation formation)
```

### SetSiegeQuerySystem

```csharp
public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)
```

### CalculateLaneCapacity

```csharp
public float CalculateLaneCapacity()
```

### GetDefenseState

```csharp
public SiegeLane.LaneDefenseStates GetDefenseState()
```

### IsUnderAttack

```csharp
public bool IsUnderAttack()
```

### IsDefended

```csharp
public bool IsDefended()
```

### DetermineLaneState

```csharp
public void DetermineLaneState()
```

### GetCurrentAttackerPosition

```csharp
public WorldPosition GetCurrentAttackerPosition()
```

### DetermineOrigins

```csharp
public void DetermineOrigins()
```

### RefreshLane

```csharp
public void RefreshLane()
```

### SetPrimarySiegeWeapons

```csharp
public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)
```

### SetDefensePoints

```csharp
public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)