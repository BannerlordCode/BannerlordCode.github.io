---
title: "ArcheryTournamentAgentController"
description: "ArcheryTournamentAgentController 的自动生成类参考。"
---
# ArcheryTournamentAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**Base:** `AgentController`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.AgentControllers/ArcheryTournamentAgentController.cs`

## 概述

`ArcheryTournamentAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ArcheryTournamentAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArcheryTournamentAgentController 实例
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnInitialize();
```

### OnTick
`public void OnTick()`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArcheryTournamentAgentController 实例
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnTick();
```

### SetTargets
`public void SetTargets(List<DestructableComponent> targetList)`

**用途 / Purpose:** 为 「targets」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArcheryTournamentAgentController 实例
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.SetTargets(targetList);
```

### OnTargetHit
`public void OnTargetHit(Agent agent, DestructableComponent target)`

**用途 / Purpose:** 在 「target hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArcheryTournamentAgentController 实例
ArcheryTournamentAgentController archeryTournamentAgentController = ...;
archeryTournamentAgentController.OnTargetHit(agent, target);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ArcheryTournamentAgentController>();
```

## 参见

- [本区域目录](../)