---
title: "MissionFightHandler"
description: "MissionFightHandler 的自动生成类参考。"
---
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionFightHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionFightHandler.cs`

## 概述

`MissionFightHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionFightHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinMissionEndTime` | `public float MinMissionEndTime { get; }` |
| `PlayerSideAgents` | `public ReadOnlyCollection<Agent> PlayerSideAgents { get; }` |
| `OpponentSideAgents` | `public ReadOnlyCollection<Agent> OpponentSideAgents { get; }` |
| `IsPlayerSideWon` | `public bool IsPlayerSideWon { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents, List<Agent> opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**用途 / Purpose:** **用途 / Purpose:** 启动custom fight流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.StartCustomFight(playerSideAgents, opponentSideAgents, false, false, onFightEndDelegate, 0);
```

### StartFistFight
`public void StartFistFight(Agent opponent, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**用途 / Purpose:** **用途 / Purpose:** 启动fist fight流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.StartFistFight(opponent, onFightEndDelegate, 0);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** **用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.OnEndMissionRequest(canPlayerLeave);
```

### GetAgentToSpectate
`public static Agent GetAgentToSpectate()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 agent to spectate 的结果。

```csharp
// 静态调用，不需要实例
MissionFightHandler.GetAgentToSpectate();
```

### BeginEndFight
`public void BeginEndFight()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginEndFight 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.BeginEndFight();
```

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndFight 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.EndFight(false);
```

### IsThereActiveFight
`public bool IsThereActiveFight()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there active fight 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.IsThereActiveFight();
```

### AddAgentToSide
`public void AddAgentToSide(Agent agent, bool isPlayerSide)`

**用途 / Purpose:** **用途 / Purpose:** 将 agent to side 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.AddAgentToSide(agent, false);
```

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 danger sources 的结果。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.GetDangerSources(ownerAgent);
```

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent aggressive 状态或条件。

```csharp
// 静态调用，不需要实例
MissionFightHandler.IsAgentAggressive(agent);
```

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent justice warrior 状态或条件。

```csharp
// 静态调用，不需要实例
MissionFightHandler.IsAgentJusticeWarrior(character);
```

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent villian 状态或条件。

```csharp
// 静态调用，不需要实例
MissionFightHandler.IsAgentVillian(character);
```

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

**用途 / Purpose:** **用途 / Purpose:** 在 fight end delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionFightHandler 实例
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnFightEndDelegate(false);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFightHandler>();
```

## 参见

- [本区域目录](../)