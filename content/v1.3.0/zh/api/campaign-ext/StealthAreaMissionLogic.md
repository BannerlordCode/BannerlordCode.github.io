---
title: "StealthAreaMissionLogic"
description: "StealthAreaMissionLogic 的自动生成类参考。"
---
# StealthAreaMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`

## 概述

`StealthAreaMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `StealthAreaMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllyTroops` | `public MBReadOnlyList<Agent> AllyTroops { get; }` |
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled { get; }` |

## 主要方法

### IsSentry
`public bool IsSentry(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「sentry」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.IsSentry(agent);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnBehaviorInitialize();
```

### AddAgentSpawnType
`public void AddAgentSpawnType(string spawnGroupId, Dictionary<string, int> spawnDictionary)`

**用途 / Purpose:** 将 「agent spawn type」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.AddAgentSpawnType("example", dictionary<string, 0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 「agent team changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
stealthAreaMissionLogic.OnObjectUsed(userAgent, usedObject);
```

### CheckIfAllStealthAreasAreTriggered
`public bool CheckIfAllStealthAreasAreTriggered()`

**用途 / Purpose:** 检查「if all stealth areas are triggered」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.CheckIfAllStealthAreasAreTriggered();
```

### CheckIfAllStealthAreasReinforcementsAreCalled
`public bool CheckIfAllStealthAreasReinforcementsAreCalled()`

**用途 / Purpose:** 检查「if all stealth areas reinforcements are called」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.CheckIfAllStealthAreasReinforcementsAreCalled();
```

### GetReinforcementAllyTroopsDelegate
`public delegate List<IAgentOriginBase> GetReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)`

**用途 / Purpose:** 读取并返回当前对象中 「reinforcement ally troops delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 StealthAreaMissionLogic 实例
StealthAreaMissionLogic stealthAreaMissionLogic = ...;
var result = stealthAreaMissionLogic.GetReinforcementAllyTroopsDelegate(triggeredStealthAreaData, stealthAreaMarker);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<StealthAreaMissionLogic>();
```

## 参见

- [本区域目录](../)