<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDeploymentPlanningLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## Overview

`MissionDeploymentPlanningLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new MissionDeploymentPlanningLogic())`; subclass it to customize.

## Key Methods

### Initialize
```csharp
public virtual void Initialize()
```

### ClearAll
```csharp
public virtual void ClearAll()
```

### MakeDefaultDeploymentPlans
```csharp
public virtual void MakeDefaultDeploymentPlans()
```

### MakeDeploymentPlan
```csharp
public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)
```

### RemakeDeploymentPlan
```csharp
public virtual bool RemakeDeploymentPlan(Team team)
```

### ClearDeploymentPlan
```csharp
public virtual void ClearDeploymentPlan(Team team)
```

### IsPlanMade
```csharp
public virtual bool IsPlanMade(Team team)
```

### IsPlanMade
```csharp
public virtual bool IsPlanMade(Team team, out bool isFirstPlan)
```

### IsPositionInsideDeploymentBoundaries
```csharp
public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)
```

### HasDeploymentBoundaries
```csharp
public virtual bool HasDeploymentBoundaries(Team team)
```

### GetDeploymentBoundaries
```csharp
public virtual MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> GetDeploymentBoundaries(Team team)
```

### SupportsReinforcements
```csharp
public virtual bool SupportsReinforcements()
```

### SupportsNavmesh
```csharp
public virtual bool SupportsNavmesh()
```

### HasPlayerSpawnFrame
```csharp
public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)
```

### GetPlayerSpawnFrame
```csharp
public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)
```

### GetClosestDeploymentBoundaryPosition
```csharp
public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)
```

### ProjectPositionToDeploymentBoundaries
```csharp
public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)
```

### GetPathDeploymentBoundaryIntersection
```csharp
public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)
```

### GetDeploymentFrame
```csharp
public virtual MatrixFrame GetDeploymentFrame(Team team)
```

### GetFormationPlan
```csharp
public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)
```

### GetSpawnPathOffset
```csharp
public virtual float GetSpawnPathOffset(Team team)
```

### GetZoomFocusFrame
```csharp
public virtual MatrixFrame GetZoomFocusFrame(Team team)
```

### GetZoomOffset
```csharp
public virtual float GetZoomOffset(Team team, float fovAngle)
```

## Usage Example

```csharp
// Typical usage of MissionDeploymentPlanningLogic (Logic)
Mission.Current.AddMissionBehavior(new MissionDeploymentPlanningLogic());
```

## See Also

- [Complete Class Catalog](../catalog)