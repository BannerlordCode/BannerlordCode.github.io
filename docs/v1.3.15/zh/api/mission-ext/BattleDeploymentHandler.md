<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleDeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## 概述

`BattleDeploymentHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### AfterStart
```csharp
public override void AfterStart()
```

### AutoDeployTeamUsingDeploymentPlan
```csharp
public override void AutoDeployTeamUsingDeploymentPlan(Team team)
```

### ForceUpdateAllUnits
```csharp
public override void ForceUpdateAllUnits()
```

### SetDefaultFormationOrders
```csharp
public void SetDefaultFormationOrders(OrderController orderController)
```

## 使用示例

```csharp
// BattleDeploymentHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new BattleDeploymentHandler());
```

## 参见

- [完整类目录](../catalog)