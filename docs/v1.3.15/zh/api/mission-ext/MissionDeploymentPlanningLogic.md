<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionDeploymentPlanningLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## 概述

`MissionDeploymentPlanningLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionDeploymentPlanningLogic())` 添加；继承它可定制。

## 主要方法

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

## 使用示例

```csharp
// MissionDeploymentPlanningLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionDeploymentPlanningLogic());
```

## 参见

- [完整类目录](../catalog)