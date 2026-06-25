---
title: "GeneralsAndCaptainsAssignmentLogic"
description: "GeneralsAndCaptainsAssignmentLogic 的自动生成类参考。"
---
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## 概述

`GeneralsAndCaptainsAssignmentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `GeneralsAndCaptainsAssignmentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 GeneralsAndCaptainsAssignmentLogic 实例
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 在 team deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GeneralsAndCaptainsAssignmentLogic 实例
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnTeamDeployed(team);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GeneralsAndCaptainsAssignmentLogic 实例
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnDeploymentFinished();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<GeneralsAndCaptainsAssignmentLogic>();
```

## 参见

- [本区域目录](../)