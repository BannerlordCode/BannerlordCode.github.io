<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## 概述

`DeploymentHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerTeam` | `public Team PlayerTeam { get { return base.Mission.PlayerTeam; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnBattleSideDeployed
```csharp
public override void OnBattleSideDeployed(BattleSideEnum side)
```

### AutoDeployTeamUsingDeploymentPlan
```csharp
public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)
```

### ForceUpdateAllUnits
```csharp
public abstract void ForceUpdateAllUnits()
```

### FinishDeployment
```csharp
public virtual void FinishDeployment()
```

### InitializeDeploymentPoints
```csharp
public void InitializeDeploymentPoints()
```

## 使用示例

```csharp
// DeploymentHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new DeploymentHandler());
```

## 参见

- [完整类目录](../catalog)