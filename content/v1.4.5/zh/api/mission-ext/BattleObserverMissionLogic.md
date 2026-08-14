---
title: "BattleObserverMissionLogic"
description: "BattleObserverMissionLogic 的自动生成类参考。"
---
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## 概述

`BattleObserverMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleObserverMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |

## 主要方法

### SetObserver
`public void SetObserver(IBattleObserver observer)`

**用途 / Purpose:** 为 observer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.SetObserver(observer);
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.EarlyStart();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 agent team changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 在 mission result ready 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnMissionResultReady(missionResult);
```

### GetDeathToBuiltAgentRatioForSide
`public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 death to built agent ratio for side 的结果。

```csharp
// 先通过子系统 API 拿到 BattleObserverMissionLogic 实例
BattleObserverMissionLogic battleObserverMissionLogic = ...;
var result = battleObserverMissionLogic.GetDeathToBuiltAgentRatioForSide(side);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleObserverMissionLogic>();
```

## 参见

- [本区域目录](../)