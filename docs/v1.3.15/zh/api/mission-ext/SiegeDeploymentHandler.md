<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeDeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**Base:** `BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## 概述

`SiegeDeploymentHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerDeploymentPoints` | `public IEnumerable<DeploymentPoint> PlayerDeploymentPoints { get; }` |
| `AllDeploymentPoints` | `public IEnumerable<DeploymentPoint> AllDeploymentPoints { get; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### AfterStart
```csharp
public override void AfterStart()
```

### FinishDeployment
```csharp
public override void FinishDeployment()
```

### DeployAllSiegeWeaponsOfPlayer
```csharp
public void DeployAllSiegeWeaponsOfPlayer()
```

### GetMaxDeployableWeaponCountOfPlayer
```csharp
public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)
```

### DeployAllSiegeWeaponsOfAi
```csharp
public void DeployAllSiegeWeaponsOfAi()
```

### RemoveDeploymentPoints
```csharp
public void RemoveDeploymentPoints(BattleSideEnum side)
```

### RemoveUnavailableDeploymentPoints
```csharp
public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)
```

### UnHideDeploymentPoints
```csharp
public void UnHideDeploymentPoints(BattleSideEnum side)
```

### GetDeployableWeaponCountOfPlayer
```csharp
public int GetDeployableWeaponCountOfPlayer(Type weapon)
```

### AutoDeployTeamUsingTeamAI
```csharp
public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)
```

### AutoAssignDetachmentsForDeployment
```csharp
public void AutoAssignDetachmentsForDeployment(Team team)
```

### GetEstimatedAverageDefenderPosition
```csharp
public Vec2 GetEstimatedAverageDefenderPosition()
```

## 使用示例

```csharp
// SiegeDeploymentHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new SiegeDeploymentHandler());
```

## 参见

- [完整类目录](../catalog)