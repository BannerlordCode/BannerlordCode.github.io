<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AssignPlayerRoleInTeamMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## 概述

`AssignPlayerRoleInTeamMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; protected set; }` |

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### OnTeamDeployed
```csharp
public override void OnTeamDeployed(Team team)
```

### OnPlayerTeamDeployed
```csharp
public virtual void OnPlayerTeamDeployed()
```

### OnPlayerChoiceMade
```csharp
public virtual void OnPlayerChoiceMade(int chosenIndex)
```

### OnPlayerChoiceFinalized
```csharp
public void OnPlayerChoiceFinalized()
```

## 使用示例

```csharp
// AssignPlayerRoleInTeamMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## 参见

- [完整类目录](../catalog)