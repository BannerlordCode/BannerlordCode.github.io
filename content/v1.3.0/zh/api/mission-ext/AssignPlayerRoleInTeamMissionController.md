---
title: "AssignPlayerRoleInTeamMissionController"
description: "AssignPlayerRoleInTeamMissionController 的自动生成类参考。"
---
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## 概述

`AssignPlayerRoleInTeamMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `AssignPlayerRoleInTeamMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; set; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; set; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 AssignPlayerRoleInTeamMissionController 实例
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 在 team deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AssignPlayerRoleInTeamMissionController 实例
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnTeamDeployed(team);
```

### OnPlayerTeamDeployed
`public virtual void OnPlayerTeamDeployed()`

**用途 / Purpose:** **用途 / Purpose:** 在 player team deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AssignPlayerRoleInTeamMissionController 实例
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerTeamDeployed();
```

### OnPlayerChoiceMade
`public virtual void OnPlayerChoiceMade(int chosenIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 player choice made 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AssignPlayerRoleInTeamMissionController 实例
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceMade(0);
```

### OnPlayerChoiceFinalized
`public void OnPlayerChoiceFinalized()`

**用途 / Purpose:** **用途 / Purpose:** 在 player choice finalized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AssignPlayerRoleInTeamMissionController 实例
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceFinalized();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## 参见

- [本区域目录](../)