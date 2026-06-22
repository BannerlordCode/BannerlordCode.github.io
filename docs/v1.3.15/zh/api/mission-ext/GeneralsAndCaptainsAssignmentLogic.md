<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GeneralsAndCaptainsAssignmentLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## 概述

`GeneralsAndCaptainsAssignmentLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic())` 添加；继承它可定制。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### OnTeamDeployed
```csharp
public override void OnTeamDeployed(Team team)
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

## 使用示例

```csharp
// GeneralsAndCaptainsAssignmentLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic());
```

## 参见

- [完整类目录](../catalog)